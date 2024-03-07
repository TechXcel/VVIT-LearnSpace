import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import {
  createSubmission,
  deleteSubmissionById,
  getAllSubmissions,
  getSubmissionById,
  updateSubmissionById,
} from "../controllers/submission.controllers.js";

const router = Router();

router.use(isAuthenticated);

router.route("/").post(createSubmission);

router.route("/:problemId").get(getAllSubmissions);

router
  .route("/:submissionId")
  .get(getSubmissionById)
  .patch(updateSubmissionById)
  .delete(deleteSubmissionById);

export default router;
