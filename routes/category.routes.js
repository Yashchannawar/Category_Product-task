import express from "express";
import {
  createCategory,
  getCategories,
  deleteCategory,
  showEditCategory,
  updateCategory
} from "../controllers/category.controller.js";

const router = express.Router();

// Show all categories
router.get("/", getCategories);

// Add new category
router.post("/", createCategory);

// Delete category
router.get("/delete/:id", deleteCategory);

// Show edit category form
router.get("/edit/:id", showEditCategory);

// Update category
router.post("/update/:id", updateCategory);

export default router;
