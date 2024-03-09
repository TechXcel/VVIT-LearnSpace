import { Router } from "express";
import {
  createProject,
  deleteProject,
  getAllProjects,
  getProjectById,
  getUserProjects,
  projectApproval,
  updateProjectById,
} from "../controllers/project.controllers.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/").get(getAllProjects);

router.use(isAuthenticated);

router.route("/student").get(getUserProjects);

router.route("/add").post(createProject);

router
  .route("/:projectId")
  .get(getProjectById)
  .patch(projectApproval)
  .delete(deleteProject);

export default router;
