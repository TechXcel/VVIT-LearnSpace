import { Router } from "express";
import { verifyUserJWT } from "../middlewares/auth.middleware.js";
import {
  createNotification,
  getNotification,
  updateNotification,
  deleteNotification,
} from "../controllers/notification.controllers.js";

const router = Router();

router
  .route("/")
  .post(verifyUserJWT, createNotification)
  .get(getNotification)
  .patch(updateNotification)
  .delete(deleteNotification);

export default router;
