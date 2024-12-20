import express from "express";
import { sendMessageCont, getMessagesCont } from "../controllers/message.controller.js";
import protectRoute from "../middlewares/protectRoute.js";
const router = express.Router();


router.get("/:id", protectRoute, getMessagesCont);
router.post("/send/:id", protectRoute,sendMessageCont);

export default router;