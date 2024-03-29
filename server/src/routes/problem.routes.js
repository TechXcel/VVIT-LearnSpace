import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import {
  createProblem,
  deleteProblemById,
  getAllProblems,
  getEachProblem,
  getProblemById,
  updateProblemById,
} from "../controllers/problem.controllers.js";
import { logUserActivity } from "../utils/cloudwatch.js";
const router = Router();

router.route("/:assignmentId/all").get(getEachProblem);

router.use(isAuthenticated);

router.use(async (req, res, next) => {
  await logUserActivity(req);
  next();
});

router.route("/").post(createProblem);
router.route("/:assignmentId").get(getAllProblems);

router
  .route("/problem/:problemId")
  .get(getProblemById)
  .patch(updateProblemById)
  .delete(deleteProblemById);

export default router;
