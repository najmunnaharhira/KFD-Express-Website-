import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  items: [{ id: String, name: String, price: Number, quantity: Number }],
  totalAmount: Number,
  customerName: String,
  phone: String,
  address: String,
  branch: { type: String, default: "Banani" },
  deliveryMethod: { type: String, default: "delivery" },
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

export const Order = mongoose.models?.Order || mongoose.model("Order", orderSchema);
