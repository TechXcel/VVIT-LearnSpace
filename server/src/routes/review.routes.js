import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.middleware.js";
import {
  createProjectReview,
  deleteReviewByProjectId,
  getReviewByProjectId,
  updateReviewByProjectId,
  createResourceReview,
  deleteReviewByResourceId,
  getReviewByResourceId,
  updateReviewByResourceId,
} from "../controllers/review.controllers.js";

const router = Router();

router.use(isAuthenticated);

router.route("/project").post(createProjectReview);

router.route("/resource").post(createResourceReview);

router
  .route("/project/:reviewId")
  .get(getReviewByProjectId)
  .patch(updateReviewByProjectId)
  .delete(deleteReviewByProjectId);

router
  .route("/resource/:reviewId")
  .get(getReviewByResourceId)
  .patch(updateReviewByResourceId)
  .delete(deleteReviewByResourceId);

export default router;
