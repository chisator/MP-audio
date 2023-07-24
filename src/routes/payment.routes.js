import { Router } from "express";
import { create, failure, pending, success, webhook } from "../controllers/payment.controllers.js";
const router = Router();

router.post("/create-order", create);

router.get("/success", success);
router.get("/failure", failure);
router.get("/pending", pending);

router.post("/webhook", webhook);
export default router;
