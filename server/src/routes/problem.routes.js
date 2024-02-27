import { Router } from "express";
import { verifyUserJWT } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/upload.middleware.js";
import { createProblem, deleteProblemById, getAllProblems, getProblemById, updateProblemById } from "../controllers/problem.controllers.js";
const router = Router();

router
  .route("/")
  .get(getAllProblems)
  .post(verifyUserJWT, upload.single("problem"),createProblem);


  router
  .route("/:problemId")
  .get(getProblemById)
  .patch(updateProblemById)
  .delete(deleteProblemById);


  export default router;