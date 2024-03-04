import { Router } from "express";
import {
  deleteStudent,
  getAllStudents,
  getUserDetails,
  loginUser,
  registerUser,
  userPasswordUpdate,
} from "../controllers/user.controllers.js";
import { upload } from "../middlewares/upload.middleware.js";
import { verifyAdminJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// students routes
router.route("/students").get(verifyAdminJWT, getAllStudents);
router.route("/:studentId").delete(verifyAdminJWT, deleteStudent);

router.route("/login").post(loginUser);
router.route("/register").post(upload.single("avatar"), registerUser);
router.route("/updatePassword").post(userPasswordUpdate);
router.route("/:userId").delete(getUserDetails);

export default router;
