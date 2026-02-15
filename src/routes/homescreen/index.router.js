import express from "express";
import { getHomescreenData } from "../../controllers/homescreen/index.controller.js";

const router = express.Router();

router.route("/").get(getHomescreenData);

export default router;
