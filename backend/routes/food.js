import express from "express";
import { food_list } from "../data/foodData.js";

const router = express.Router();

// GET all food items
router.get("/", (req, res) => {
  res.json(food_list);
});

// GET food by category
router.get("/category/:category", (req, res) => {
  const { category } = req.params;
  const filtered = food_list.filter(
    (f) => f.category.toLowerCase() === category.toLowerCase()
  );
  res.json(filtered);
});

export const foodRouter = router;
