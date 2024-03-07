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

router.route("/").get(getAllProjects);
router.route("/add").post(createProject)


router
  .route("/:projectId")
  .get(getProjectById)
  .patch(projectApproval)
  .delete(deleteProject);

export default router;
