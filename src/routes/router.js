import express from "express";
import userRouter from "./user/index.router.js";
import categoryRouter from "./category/index.router.js";
import artisanRouter from "./artisan/index.router.js";
import productRouter from "./product/index.router.js";
import viewRouter from "./view/index.router.js";
import homescreenRouter from "./homescreen/index.router.js";
import inquiryRouter from "./inquiry/index.router.js";

const router = express.Router();

router.use("/user", userRouter);
router.use("/category", categoryRouter);
router.use("/artisan", artisanRouter);
router.use("/product", productRouter);
router.use("/view", viewRouter);
router.use("/homescreen", homescreenRouter);
router.use("/inquiry", inquiryRouter);

export default router;
