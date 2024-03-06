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
import { isAuthenticated } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/login").post(loginUser);
router.route("/register").post(upload.single("avatar"), registerUser);

router.use(isAuthenticated);

// students routes
router.route("/students").get(getAllStudents);
router.route("/:studentId").delete(deleteStudent);

router.route("/updatePassword").post(userPasswordUpdate);
router.route("/:userId").delete(getUserDetails);

//faculty routes
router.route("/faculty").get(getAllFaculty);
router.route("/:facultyId").delete(deleteFaculty);

export default router;
