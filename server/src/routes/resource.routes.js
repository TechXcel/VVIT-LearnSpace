import { Router } from "express";
import {
  createResource,
  deleteResourceById,
  getAllResources,
  getResourceById,
  updateResourceById,
} from "../controllers/resource.controllers.js";
import { upload } from "../middlewares/upload.middleware.js";
import { verifyUserJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router
  .route("/")
  .get(getAllResources)
  .post(verifyUserJWT, upload.single("resource"), createResource);
router
  .route("/:resourceId")
  .get(getResourceById)
  .patch(updateResourceById)
  .delete(deleteResourceById);

export default router;
