import { Router } from "express";
import {
  createProject,
  deleteProject,
  getAllProjects,
  getProjectById,
  projectApproval,
  updateProjectById,
} from "../controllers/project.controllers.js";
import {
  verifyAdminJWT,
  verifyUserJWT,
} from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").post(verifyUserJWT, createProject).get(getAllProjects);

router
  .route("/:projectId")
  .get(getProjectById)
  .patch(projectApproval)
  .delete(deleteProject);

export default router;
