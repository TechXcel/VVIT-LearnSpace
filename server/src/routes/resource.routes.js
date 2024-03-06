import { Router } from "express";
import {
  createResource,
  deleteNotes,
  deletePapers,
  deleteResearch,
  deleteResourceById,
  getAllNotes,
  getAllPapers,
  getAllResearchPapers,
  getAllResources,
  getResourceById,
  updateResourceById,
} from "../controllers/resource.controllers.js";
import { upload } from "../middlewares/upload.middleware.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

const router = Router();

router.use(isAuthenticated);

router
  .route("/")
  .get(getAllResources)
  .post(upload.single("resource"), createResource);

router.route("/notes").get(getAllNotes);

router.route("/notes/:notesId").delete(deleteNotes);

router.route("/papers").get(getAllPapers);

router.route("/papers/:paperId").delete(deletePapers);

router.route("/research").get(getAllResearchPapers);

router.route("/research/:researchId").delete(deleteResearch);

router
  .route("/:resourceId")
  .get(getResourceById)
  .patch(updateResourceById)
  .delete(deleteResourceById);

export default router;
