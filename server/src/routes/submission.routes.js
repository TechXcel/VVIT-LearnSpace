import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import {
  createSubmission,
  deleteSubmissionById,
  getAllSubmissions,
  getEverySubmission,
  getStudentSubmissionByProblemId,
  getStudentSubmissions,
  getSubmissionById,
  updateSubmissionById,
} from "../controllers/submission.controllers.js";
import { logUserActivity } from "../utils/cloudwatch.js";

const router = Router();

router.use(isAuthenticated);

router.use(async (req, res, next) => {
  await logUserActivity(req);
  next();
});

router.route("/all").get(getEverySubmission);

router.route("/").post(createSubmission).get(getStudentSubmissions);
router.route("/submission/:problemId").get(getStudentSubmissionByProblemId);
router.route("/problem/:problemId").get(getAllSubmissions);

router
  .route("/:submissionId")
  .get(getSubmissionById)
  .patch(updateSubmissionById)
  .delete(deleteSubmissionById);

export default router;
