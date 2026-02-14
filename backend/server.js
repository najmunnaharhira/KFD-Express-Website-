import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { foodRouter } from "./routes/food.js";
import { orderRouter } from "./routes/order.js";

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection (optional - works without DB)
const MONGO_URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    if (MONGO_URI) {
      await mongoose.connect(MONGO_URI);
      console.log("MongoDB connected");
    } else {
      console.log("Running without MongoDB - orders will use in-memory storage");
    }
  } catch (err) {
    console.log("MongoDB connection skipped - using fallback storage");
  }
};
connectDB();

// Routes
app.use("/api/food", foodRouter);
app.use("/api/order", orderRouter);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "KFD Express API is running" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
