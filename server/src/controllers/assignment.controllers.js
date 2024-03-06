import Assignment from "../models/assignment.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const createAssignment = asyncHandler(async (req, res) => {
  // Destructuring values from the request body
  const { title, description } = req.body;

  // Checking if all required fields are present
  if (!title || !description) {
    throw new ApiError(400, "Please enter all the required fields");
  }

  // Check if a resource with the same title already exists
  const existedAssignment = await Assignment.findOne({ title });

  if (existedAssignment) {
    throw new ApiError(400, "Assignment already exists");
  }

  // Set the uploader ID based on the authenticated user
  req.body.createdBy = req.user._id;

  // Create a new resource in the database
  const newAssignment = await Assignment.create(req.body);

  if (!newAssignment) {
    throw new ApiError(
      500,
      "Something went wrong while creating the assignment"
    );
  }

  const assignments = await getAssignmentsByRole(req);

  // Respond with a success message and the created resource
  return res
    .status(201)
    .json(
      new ApiResponse(200, { assignments }, "Assignment created successfully")
    );
});

const getAssignmentsByRole = async (req) => {
  let assignments = [];

  if (req.user.role === "faculty") {
    assignments = await Assignment.find({ createdBy: req.user._id }).sort({
      createdAt: -1,
    });
  } else if (req.user.role === "admin") {
    assignments = await Assignment.find({}).sort({ createdAt: -1 });
  }

  console.log(assignments);
  return assignments;
};

// Get all resources
export const getAllAssignments = asyncHandler(async (req, res) => {
  const assignments = await getAssignmentsByRole(req);

  // Respond with a success message and all resources
  console.log(assignments);
  return res
    .status(200)
    .json(new ApiResponse(200, { assignments }, "All assignments"));
});

export const getAssignmentById = asyncHandler(async (req, res) => {
  const { assignmentId } = req.params;

  // Find the resource by ID
  const assignment = await Assignment.findById(assignmentId).populate([
    "problems",
    "submissions",
  ]);

  console.log(assignment.problems);

  if (!assignment) {
    throw new ApiError(404, "Assignment not found");
  }

  // Increment the view count of the resource by 1
  assignment.viewCount += 1;
  await assignment.save();

  // Respond with a success message and the resource details
  return res
    .status(200)
    .json(new ApiResponse(200, { assignment }, "Assignment details"));
});

export const updateAssignmentById = asyncHandler(async (req, res) => {
  const { assignmentId } = req.params;
  const updatedAssignment = req.body;

  const assignment = await Assignment.findByIdAndUpdate(
    assignmentId,
    updatedAssignment,
    { new: true }
  );

  if (!assignment) {
    throw new ApiError(404, "Assignment not found");
  }

  // Respond with a success message and the updated resource
  return res
    .status(200)
    .json(
      new ApiResponse(200, { assignment }, "Assignment updated successfully")
    );
});

// Delete a resource by ID
export const deleteAssignmentById = asyncHandler(async (req, res) => {
  const { assignmentId } = req.params;

  // Find the resource by ID and delete it
  const assignment = await Assignment.findByIdAndDelete(assignmentId);

  if (!assignment) {
    throw new ApiError(404, "Assignment not found");
  }

  // Respond with a success message
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Assignment deleted successfully"));
});
