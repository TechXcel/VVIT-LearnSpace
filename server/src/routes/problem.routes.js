import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/upload.middleware.js";
import {
  createProblem,
  deleteProblemById,
  getAllProblems,
  getProblemById,
  updateProblemById,
} from "../controllers/problem.controllers.js";
const router = Router();

router.use(isAuthenticated);

router
  .route("/")
  .get(getAllProblems)
  .post(upload.single("problem"), createProblem);

router
  .route("/:problemId")
  .get(getProblemById)
  .patch(updateProblemById)
  .delete(deleteProblemById);

export default router;
