import express from "express";
import {
  createNewUser,
  getAllUsers,
  loginUser,
  logoutUser,
} from "../../controllers/user/index.controller.js";
import { checkAuth } from "../../middlewares/auth.middleware.js";
const router = express.Router();

router.route("/").get(checkAuth, getAllUsers);
router.route("/signup").post(createNewUser);

router.route("/login").post(loginUser);

router.route("/logout").post(checkAuth, logoutUser);

export default router;
