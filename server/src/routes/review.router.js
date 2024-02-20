import { Router } from 'express';

import { verifyUserJWT } from '../middlewares/auth.middleware.js';

import {
      createProjectReview,
      deleteReviewByProjectId,
      getReviewByProjectId,
      updateReviewByProjectId,
      createResourceReview,
      deleteReviewByResourceId,
      getReviewByResourceId,
      updateReviewByResourceId


   }  from '../controllers/review.controllers.js';

const router = Router();

router 
 .route("/project")
 .post(verifyUserJWT,createProjectReview)

 router 
 .route("/resource")
 .post(verifyUserJWT,createResourceReview)
 
router
   .route("/project/:revId")
   .get(getReviewByProjectId)
   .patch(updateReviewByProjectId)
   .delete(deleteReviewByProjectId)

router
   .route("/resource/:revId")
   .get(getReviewByResourceId)
   .patch(updateReviewByResourceId)
   .delete(deleteReviewByResourceId)

export default router;

