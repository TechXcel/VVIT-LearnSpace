import { Router } from "express";
import {
  createAssignment,
  deleteAssignmentById,
  getAllAssignments,
  getAssignmentById,
  updateAssignmentById,
} from "../controllers/assignment.controllers.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/upload.middleware.js";
const router = Router();

router.use(isAuthenticated);

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
