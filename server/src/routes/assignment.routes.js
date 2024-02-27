import { Router } from "express";
import { createAssignment, deleteAssignmentById, getAllAssignments, getAssignmentById, updateAssignmentById } from "../controllers/assignment.controllers.js";
import { verifyUserJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/upload.middleware.js";
const router = Router();

router
  .route("/")
  .get(getAllAssignments)
  .post(verifyUserJWT, upload.single("assignment"),createAssignment);


  router
  .route("/:assignmentId")
  .get(getAssignmentById)
  .patch(updateAssignmentById)
  .delete(deleteAssignmentById);


  export default router;