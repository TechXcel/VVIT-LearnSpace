import { Router } from "express";
import {
  createProject,
  deleteProject,
  getAllProjects,
  getApprovedProjects,
  getProjectById,
  getUserProjects,
  projectApproval,
  updateProjectById,
} from "../controllers/project.controllers.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/upload.middleware.js";

const router = Router();

router.route("/approved").get(getApprovedProjects);

router.use(isAuthenticated);

router.route("/").get(getAllProjects);

router.route("/student").get(getUserProjects);

router.route("/add").post(upload.single("coverImage"), createProject);

router
  .route("/:projectId")
  .get(getProjectById)
  .patch(projectApproval)
  .delete(deleteProject);

export default router;
