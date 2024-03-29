import { Router } from "express";
import {
  createAssignment,
  deleteAssignmentById,
  getAllAssignments,
  getAssignmentById,
  getEveryAssignment,
  updateAssignmentById,
} from "../controllers/assignment.controllers.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/upload.middleware.js";
import { logUserActivity } from "../utils/cloudwatch.js";
const router = Router();

router.route("/all").get(getEveryAssignment);

router.use(isAuthenticated);

router.use(async (req, res, next) => {
  await logUserActivity(req);
  next();
});

router
  .route("/")
  .get(getAllAssignments)
  .post(upload.single("assignment"), createAssignment);

router
  .route("/:assignmentId")
  .get(getAssignmentById)
  .patch(updateAssignmentById)
  .delete(deleteAssignmentById);

export default router;
