import { Router } from "express";
import { loginUser, registerUser } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/upload.middleware.js";

const router = Router();

router.route("/login").post(loginUser);
router.route("/register").post(upload.single("avatar"), registerUser);

export default router;
