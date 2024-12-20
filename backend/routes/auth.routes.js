import express from "express";
import { loginCont, logoutCont, signupCont } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signupCont);
router.post("/login", loginCont);
router.post("/logout", logoutCont);

export default router;
