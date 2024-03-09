import Problem from "../models/problem.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const createProblem = asyncHandler(async (req, res) => {
  // Destructuring values from the request body
  const { title, description, difficulty, assignmentId } = req.body;
  console.log(req.body, "req.body");

  // Checking if all required fields are present
  if (!title || !description || !difficulty || !assignmentId) {
    throw new ApiError(400, "Please enter all the required fields");
  }

  // Check if a resource with the same title already exists
  const existedProblem = await Problem.findOne({ title });

  if (existedProblem) {
    throw new ApiError(400, "Problem already exists");
  }

  // Create a new resource in the database
  const newProblem = await Problem.create(req.body);

  if (!newProblem) {
    throw new ApiError(500, "Something went wrong while creating problem");
  }

  const problems = await Problem.find({ assignmentId });

  // Respond with a success message and the created resource
  return res
    .status(201)
    .json(new ApiResponse(200, { problems }, "Problem created successfully"));
});

// Get all resources
export const getAllProblems = asyncHandler(async (req, res) => {
  const { assignmentId } = req.params;
  const problems = await Problem.find({ assignmentId }).populate(
    "assignmentId"
  );

  // Respond with a success message and all resources
  return res
    .status(200)
    .json(new ApiResponse(200, { problems }, "All Problems"));
});

export const getEachProblem = asyncHandler(async (req, res) => {
  const { assignmentId } = req.params;
  const problems = await Problem.find({ assignmentId }).populate(
    "assignmentId"
  );

  // Respond with a success message and all resources
  return res
    .status(200)
    .json(new ApiResponse(200, { problems }, "All Problems"));
});

export const getProblemById = asyncHandler(async (req, res) => {
  const { problemId } = req.params;

  // Find the resource by ID
  const problem = await Problem.findById(problemId).populate([
    "assignments",
    "submissions",
  ]);

  if (!problem) {
    throw new ApiError(404, "Problem not found");
  }

  // Increment the view count of the resource by 1
  problem.viewCount += 1;
  await problem.save();

  // Respond with a success message and the resource details
  return res
    .status(200)
    .json(new ApiResponse(200, { problem }, "Problem details"));
});

export const updateProblemById = asyncHandler(async (req, res) => {
  const { problemId } = req.params;
  const updatedProblem = req.body;

  const problem = await Problem.findByIdAndUpdate(problemId, updatedProblem, {
    new: true,
  });

  if (!problem) {
    throw new ApiError(404, "Problem not found");
  }

  // Respond with a success message and the updated resource
  return res
    .status(200)
    .json(new ApiResponse(200, { problem }, "Problem updated successfully"));
});

// Delete a resource by ID
export const deleteProblemById = asyncHandler(async (req, res) => {
  const { problemId } = req.params;

  // Find the resource by ID and delete it
  const problem = await Problem.findByIdAndDelete(problemId);

  if (!problem) {
    throw new ApiError(404, "Problem not found");
  }

  // Respond with a success message
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Problem deleted successfully"));
});
