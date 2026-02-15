import express from "express";
import {
  createArtisan,
  listArtisans,
} from "../../controllers/artisan/index.controller.js";

const router = express.Router();

router.route("/").post(createArtisan).get(listArtisans);

export default router;
