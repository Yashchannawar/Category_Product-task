import express from "express";
import {
  getProducts,
  createProduct,
  deleteProduct,
  showEditProduct,
  updateProduct
} from "../controllers/product.controller.js";

const router = express.Router();

// Show all products with pagination
router.get("/", getProducts);

// Add new product
router.post("/", createProduct);

// Delete product
router.get("/delete/:id", deleteProduct);

// Show edit product form
router.get("/edit/:id", showEditProduct);

// Update product
router.post("/update/:id", updateProduct);

export default router;
