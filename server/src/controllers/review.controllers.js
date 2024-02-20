import Review from "../models/review.model.js";

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createProjectReview = asyncHandler(async (req, res) => {
    const { rating, comment, projectId } = req.body;
  
    if (
      !rating ||
      !comment ||
      !projectId
     
    ) {
      throw new ApiError(400, "Please enter all the required fields");
    }
     
   
  
    
    req.body.reviewerId=req.user._id
    console.log(req.user._id)

    const newReview = await Review.create(req.body);
  
    if (!newReview) {
      throw new ApiError(500, "Something went wrong while creating the review");
    }
  
    return res
      .status(201)
      .json(
        new ApiResponse(
          200,
          { review: newReview },
          "Review added successfully"
        )
      );
  });

const getReviewByProjectId = asyncHandler(async (req, res) => {
    const { revId } = req.params;
    console.log({revId})
    // Find the resource by ID
    const review = await Review.findOne({projectId: revId});
    console.log(review)
    if (!review) {
      throw new ApiError(404, "review not found");
    }
  
    // Respond with a success message and the resource details
    return res
      .status(200)
      .json(new ApiResponse(200, review.comment, "Review details"));
  });

  // Update a project by id
const updateReviewByProjectId = asyncHandler(async (req, res) => {
    const { revId } = req.params;
    const updatedReview = req.body;
  
    
    const review= await Review.findOneAndUpdate(
      {projectId:revId},
      updatedReview,
      { new: true } 
    );
  
    if (!review) {
      throw new ApiError(404, "Review not found");
    }
  
    return res
      .status(200)
      .json(new ApiResponse(200, { review }, "Review updated successfully"));
  });

  const deleteReviewByProjectId = asyncHandler(async (req, res) => {
    const { revId } = req.params;
  
   
    const review = await Review.findOneAndDelete({projectId:revId});
  
    if (!review) {
      throw new ApiError(404, "Review not found");
    }
  
    
    return res
      .status(200)
      .json(new ApiResponse(200, null, "Review deleted successfully"));
  });



  //for resoruce


const createResourceReview = asyncHandler(async (req, res) => {
    const { rating, comment, resourceId } = req.body;
  
    if (
      !rating ||
      !comment ||
      !resourceId
     
    ) {
      throw new ApiError(400, "Please enter all the required fields");
    }
     
   
  
    
    req.body.reviewerId=req.user._id
    console.log(req.user._id)

    const newReview = await Review.create(req.body);
  
    if (!newReview) {
      throw new ApiError(500, "Something went wrong while creating the review");
    }
  
    return res
      .status(201)
      .json(
        new ApiResponse(
          200,
          { review: newReview },
          "Review added successfully"
        )
      );
  });

const getReviewByResourceId = asyncHandler(async (req, res) => {
    const { revId } = req.params;
    console.log({revId})
    // Find the resource by ID
    const review = await Review.findOne({reviewId: revId});
    console.log(review)
    if (!review) {
      throw new ApiError(404, "review not found");
    }
  
    // Respond with a success message and the resource details
    return res
      .status(200)
      .json(new ApiResponse(200, review.comment, "Review details"));
  });

  // Update a project by id
const updateReviewByResourceId = asyncHandler(async (req, res) => {
    const { revId } = req.params;
    const updatedReview = req.body;
  
    
    const review= await Review.findOneAndUpdate(
      {reviewId:revId},
      updatedReview,
      { new: true } 
    );
  
    if (!review) {
      throw new ApiError(404, "Review not found");
    }
  
    return res
      .status(200)
      .json(new ApiResponse(200, { review }, "Review updated successfully"));
  });

  const deleteReviewByResourceId = asyncHandler(async (req, res) => {
    const { revId } = req.params;
  
   
    const review = await Review.findOneAndDelete({resourceId:revId});
  
    if (!review) {
      throw new ApiError(404, "Review not found");
    }
  
    
    return res
      .status(200)
      .json(new ApiResponse(200, null, "Review deleted successfully"));
  });
  



  export{
    createProjectReview,
    getReviewByProjectId,
    updateReviewByProjectId,
    deleteReviewByProjectId,
    createResourceReview,
    getReviewByResourceId,
    updateReviewByResourceId,
    deleteReviewByResourceId,

  }