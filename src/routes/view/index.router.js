import express from "express";

import {
  getViewsByProduct,
  addViewsByProduct,
  getOverallViews,
} from "../../controllers/view/index.controller.js";

const router = express.Router();

router.route("/").get(getOverallViews);
router.route("/:productId").get(getViewsByProduct).post(addViewsByProduct);

export default router;
