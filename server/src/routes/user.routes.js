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
import { logUserActivity } from "../utils/cloudwatch.js";

const router = Router();

router.route("/login").post(loginUser);
router.route("/register").post(upload.single("avatar"), registerUser);

router.use(isAuthenticated);

router.use(async (req, res, next) => {
  await logUserActivity(req);
  next();
});

// students routes
router.route("/students").get(getAllStudents);
router.route("/:studentId").delete(deleteStudent);

router.route("/updatePassword").post(userPasswordUpdate);
router.route("/user/:userId").get(getUserDetails);

//faculty routes
router.route("/faculty").get(getAllFaculty);
router.route("/:facultyId").delete(deleteFaculty);

export default router;
