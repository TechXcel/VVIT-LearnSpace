import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import {
  createProblem,
  deleteProblemById,
  getAllProblems,
  getProblemById,
  updateProblemById,
} from "../controllers/problem.controllers.js";
const router = Router();

router.use(isAuthenticated);

router.route("/").post(createProblem);
router.route("/:assignmentId").get(getAllProblems);

router
  .route("/:problemId")
  .get(getProblemById)
  .patch(updateProblemById)
  .delete(deleteProblemById);

export default router;
