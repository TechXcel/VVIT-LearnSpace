import { Router } from "express";
import {
  createProject,
  deleteProject,
  getAllProjects,
  getProjectById,
  projectApproval,
  updateProjectById,
} from "../controllers/project.controllers.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(isAuthenticated);

router.route("/").post(createProject).get(getAllProjects);

router
  .route("/:projectId")
  .get(getProjectById)
  .patch(projectApproval)
  .delete(deleteProject);

export default router;
