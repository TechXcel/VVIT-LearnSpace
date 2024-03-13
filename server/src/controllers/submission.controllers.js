import Submission from "../models/submission.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Problem from "../models/problem.model.js";

export const createSubmission = asyncHandler(async (req, res) => {
  // Destructuring values from the request body
  const { assignmentId, problemId, providedSolution } = req.body;

  // Checking if all required fields are present
  if (!assignmentId || !problemId || !providedSolution) {
    throw new ApiError(400, "Please enter all the required fields");
  }

  // Set the uploader ID based on the authenticated user
  req.body.submittedBy = req.user._id;

  // Create a new resource in the database
  const newSubmission = await Submission.create(req.body);

  const updatedProblem = await Problem.findByIdAndUpdate(
    problemId,
    {
      status: "Completed",
    },
    {
      new: true,
    }
  );

  console.log(updatedProblem);

  if (!newSubmission) {
    throw new ApiError(500, "Something went wrong while adding submission");
  }

  // Respond with a success message and the created resource
  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        { submission: newSubmission },
        "Submission done successfully"
      )
    );
});

export const getAllSubmissions = asyncHandler(async (req, res) => {
  const { problemId } = req.params;

  const submissions = await Submission.find({ problemId }).populate({
    path: "submittedBy",
    select: "name email",
  });

  // Respond with a success message and all resources
  return res
    .status(200)
    .json(new ApiResponse(200, { submissions }, "All submits"));
});

export const getEverySubmission = asyncHandler(async (req, res) => {
  const submissions = await Submission.find({}).populate([
    {
      path: "submittedBy",
      select: "name email",
    },
    {
      path: "problemId",
      select: "title difficulty viewCount",
    },
    {
      path: "assignmentId",
      select: "title createdBy",
      populate: {
        path: "createdBy",
        select: "name",
      },
    },
  ]);

  // Respond with a success message and all resources
  return res
    .status(200)
    .json(new ApiResponse(200, { submissions }, "All submits"));
});

export const getStudentSubmissions = asyncHandler(async (req, res) => {
  const submissions = await Submission.find({
    submittedBy: req.user._id,
  }).populate([
    { path: "problemId", select: "title difficulty" },
    { path: "assignmentId", select: "title" },
  ]);

  // Respond with a success message and all resources
  return res
    .status(200)
    .json(new ApiResponse(200, { submissions }, "All submits"));
});

export const getSubmissionById = asyncHandler(async (req, res) => {
  const { submissionId } = req.params;

  // Find the resource by ID
  const submission = await Submission.findById(submissionId).populate({
    path: "problemId",
    select: "title description",
  });

  if (!submission) {
    throw new ApiError(404, "submission not found");
  }

  // Respond with a success message and the resource details
  return res
    .status(200)
    .json(new ApiResponse(200, { submission }, "submission details"));
});

export const getStudentSubmissionByProblemId = asyncHandler(
  async (req, res) => {
    const { problemId } = req.params;

    const submission = await Submission.findOne({
      problemId: problemId,
      submittedBy: req.user._id,
    }).populate({ path: "problemId", select: "title description difficulty" });

    // Respond with a success message and all resources
    return res
      .status(200)
      .json(new ApiResponse(200, { submission }, "Submission details"));
  }
);

export const updateSubmissionById = asyncHandler(async (req, res) => {
  const { submissionId } = req.params;
  const updatedSubmission = req.body;

  const submission = await Submission.findByIdAndUpdate(
    submissionId,
    updatedSubmission,
    { new: true }
  );

  if (!submission) {
    throw new ApiError(404, "submission not found");
  }

  // Respond with a success message and the updated resource
  return res
    .status(200)
    .json(
      new ApiResponse(200, { submission }, "Solution updated successfully")
    );
});

export const deleteSubmissionById = asyncHandler(async (req, res) => {
  const { submissionId } = req.params;

  // Find the resource by ID and delete it
  const submission = await Submission.findByIdAndDelete(submissionId);

  if (!submission) {
    throw new ApiError(404, "submission not found");
  }

  // Respond with a success message
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Solution deleted successfully"));
});
