import express from "express";
import {
  listProducts,
  createNewProduct,
  listProductOptions,
  getProductById,
  getProductsByCategory,
} from "../../controllers/product/index.controller.js";

const router = express.Router();

router.route("/").get(listProducts).post(createNewProduct);
router.route("/:id").get(getProductById);
router.route("/category/:id").get(getProductsByCategory);
router.route("/options").get(listProductOptions);

export default router;
