import { Router } from "express";
import {
  getAllUsers,
  getUserDetails,
  loginUser,
  registerUser,
  userPasswordUpdate,
} from "../controllers/user.controllers.js";
import { upload } from "../middlewares/upload.middleware.js";
import { verifyUserJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/login").post(loginUser);
router.route("/register").post(upload.single("avatar"), registerUser);
router.route("/updatePassword").post(verifyUserJWT, userPasswordUpdate);
router.route("/all").get(getAllUsers);
router.route("/:userId").get(getUserDetails);

export default router;
