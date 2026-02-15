import express from "express";
import {
  createCategory,
  listCategories,
} from "../../controllers/category/index.controller.js";

const router = express.Router();

router.route("/").post(createCategory).get(listCategories);

export default router;
