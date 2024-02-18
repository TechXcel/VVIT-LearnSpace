// resourceRoutes.js
import express from 'express';
import { protect } from "../middlewares/authMiddleware.js";
import {
    uploadResource,
    getAllResources,
    getResource,
    getResourceById,
    updateResource,
    deleteResource,
    addReview,
    updateReview,
    deleteReview,
    getReviews,
    getUserResource
} from '../controllers/resourceController.js';

const router = express.Router();

// Public routes
router.get("/", getResource);
router.get("/:id", getResourceById);
router.get('/all', getAllResources);


// Protected routes
router.post("/", protect, uploadResource);
router.patch("/:id", protect, updateResource);
router.delete("/:id", protect, deleteResource);
router.get("/resource/:resourceId/reviews", getReviews);
router.post("/:id/reviews", protect, addReview);
router.patch("/:id/reviews/:reviewId", protect, updateReview);
router.delete("/:id/reviews/:reviewId", protect, deleteReview);
router.get("/myResource", protect, getUserResource);



export default router;
