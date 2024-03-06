import { Router } from "express";

import { upload } from "../middlewares/upload.middleware.js";
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

router
  .route("/")
  .get(getAllSubmissions)
  .post(upload.single("submission"), createSubmission);
router
  .route("/:submissionId")
  .get(getSubmissionById)
  .patch(updateSubmissionById)
  .delete(deleteSubmissionById);

export default router;
