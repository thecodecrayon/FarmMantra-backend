import express from "express";
import {
  createNewInquiry,
  listInquiries,
} from "../../controllers/Inquiry/index.controller.js";

const router = express.Router();

router.route("/").get(listInquiries).post(createNewInquiry);
// router.route("/:id").get(getInquiryById);

export default router;
