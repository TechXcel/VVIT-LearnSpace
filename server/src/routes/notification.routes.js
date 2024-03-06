import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import {
  createNotification,
  getNotification,
  updateNotification,
  deleteNotification,
} from "../controllers/notification.controllers.js";

const router = Router();

router.use(isAuthenticated);

router
  .route("/")
  .post(createNotification)
  .get(getNotification)
  .patch(updateNotification)
  .delete(deleteNotification);

export default router;
