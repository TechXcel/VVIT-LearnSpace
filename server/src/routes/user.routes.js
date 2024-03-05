import { Router } from "express";
import {
  deleteFaculty,
  deleteStudent,
  getAllFaculty,
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

//faculty routes
router.route("/faculty").get(verifyAdminJWT, getAllFaculty);
router.route("/:facultyId").delete(verifyAdminJWT, deleteFaculty);


export default router;
