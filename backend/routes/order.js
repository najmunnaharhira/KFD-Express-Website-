import express from "express";
import mongoose from "mongoose";
import { Order } from "../models/Order.js";

const router = express.Router();

// In-memory fallback when MongoDB is not connected
let ordersFallback = [];

// POST - Place new order
router.post("/", async (req, res) => {
  try {
    const { items, totalAmount, customerName, phone, address, branch, deliveryMethod } = req.body;

    if (!items || items.length === 0 || !customerName || !phone) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const orderData = {
      items,
      totalAmount: totalAmount || items.reduce((sum, i) => sum + i.price * i.quantity, 0),
      customerName,
      phone,
      address: address || "",
      branch: branch || "Banani",
      deliveryMethod: deliveryMethod || "delivery",
      status: "pending",
      createdAt: new Date(),
    };

    if (mongoose.connection.readyState === 1) {
      const order = await Order.create(orderData);
      return res.json({ success: true, orderId: order._id, message: "Order placed successfully!" });
    } else {
      const id = "order_" + Date.now();
      ordersFallback.push({ _id: id, ...orderData });
      return res.json({ success: true, orderId: id, message: "Order placed successfully!" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to place order" });
  }
});

// GET - List orders (admin - optional)
router.get("/", async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const orders = await Order.find().sort({ createdAt: -1 }).limit(50);
      return res.json(orders);
    }
    res.json(ordersFallback.slice(-50).reverse());
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch orders" });
  }
});

export const orderRouter = router;
