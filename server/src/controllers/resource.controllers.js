import Resource from "../models/resource.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadFile } from "../utils/s3.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

// Create a new resource
const createResource = asyncHandler(async (req, res) => {
  // Destructuring values from the request body
  const { title, description, subject, semester, type, tags } = req.body;

  // Checking if all required fields are present
  if (
    !title ||
    !description ||
    !subject ||
    !semester ||
    !type ||
    !tags ||
    tags.length === 0
  ) {
    throw new ApiError(400, "Please enter all the required fields");
  }

  // Check if a resource with the same title already exists
  const existedResource = await Resource.findOne({ title });

  if (existedResource) {
    throw new ApiError(400, "Resource already exists");
  }

  if (req.file) {
    // Upload the file to AWS S3
    await uploadFile(
      req.file,
      "resource",
      req.body.title,
      req.user.identityNumber
    );

    // Modify the file name to replace spaces with hyphens
    const perfectName = req.body.title.split(/\s+/).join("-");
    req.file.originalname = perfectName;

    // Create the file URL based on the AWS S3 bucket structure
    req.body.fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${req.user.identityNumber}/resource/${req.file.originalname}`;
  }
  // Set the uploader ID based on the authenticated user
  req.body.uploader = req.user._id;

  // Create a new resource in the database
  const newResource = await Resource.create(req.body);

  if (!newResource) {
    throw new ApiError(500, "Something went wrong while creating the resource");
  }

  // Respond with a success message and the created resource
  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        { resource: newResource },
        "Resource created successfully"
      )
    );
});

// Get all resources
const getAllResources = asyncHandler(async (req, res) => {
  const resources = await Resource.find({});

  // Respond with a success message and all resources
  return res
    .status(200)
    .json(new ApiResponse(200, { resources }, "All resources"));
});

// Get a single resource by ID
const getResourceById = asyncHandler(async (req, res) => {
  const { resourceId } = req.params;

  // Find the resource by ID
  const resource = await Resource.findById(resourceId);

  if (!resource) {
    throw new ApiError(404, "Resource not found");
  }

  // Increment the view count of the resource by 1
  resource.viewCount += 1;
  await resource.save();

  // Respond with a success message and the resource details
  return res
    .status(200)
    .json(new ApiResponse(200, { resource }, "Resource details"));
});

// Update a resource by ID
const updateResourceById = asyncHandler(async (req, res) => {
  const { resourceId } = req.params;
  const updatedResource = req.body;

  // Find the resource by ID and update it with the new data
  const resource = await Resource.findByIdAndUpdate(
    resourceId,
    updatedResource,
    { new: true } // Return the updated resource
  );

  if (!resource) {
    throw new ApiError(404, "Resource not found");
  }

  // Respond with a success message and the updated resource
  return res
    .status(200)
    .json(new ApiResponse(200, { resource }, "Resource updated successfully"));
});

// Delete a resource by ID
const deleteResourceById = asyncHandler(async (req, res) => {
  const { resourceId } = req.params;

  // Find the resource by ID and delete it
  const resource = await Resource.findByIdAndDelete(resourceId);

  if (!resource) {
    throw new ApiError(404, "Resource not found");
  }

  // Respond with a success message
  return res
    .status(200)
    .json(new ApiResponse(200, null, "Resource deleted successfully"));
});

const noteApproval = asyncHandler(async (req, res) => {
  const { resourceId } = req.params;
  const { status } = req.body;

  if (!resourceId || !status) {
    throw new ApiError(400, "Resource ID and status are required");
  }

  const resource = await Resource.findById(resourceId);

  if (!resource) {
    throw new ApiError(404, "Resource does not exist");
  }

  resource.status = status;

  const updatedResource = await resource.save();

  if (!updatedResource) {
    throw new ApiError(500, "Something went wrong while updating the resource");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { resource: updatedResource },
        "Resource status updated successfully"
      )
    );
});

const getAllNotes = asyncHandler(async (req, res) => {
  var notes = [];

  notes = await Resource.find({ type: "lectureNote" })
    .sort({ createdAt: -1 })
    .populate({ path: "uploader" });

  if (!notes || notes.length === 0) {
    throw new ApiError(404, "Notes do not exist");
  }

  // Respond with a success message and all user details
  return res.status(200).json(new ApiResponse(200, { notes }, "Notes details"));
});

const getAllPapers = asyncHandler(async (req, res) => {
  var papers = [];

  papers = await Resource.find({ type: "previousPaper" })
    .sort({ createdAt: -1 })
    .populate({ path: "uploader" });

  if (!papers || papers.length === 0) {
    throw new ApiError(404, "Papers not exist");
  }

  // Respond with a success message and all user details
  return res
    .status(200)
    .json(new ApiResponse(200, { papers }, "Papers details"));
});

const getAllResearchPapers = asyncHandler(async (req, res) => {
  var research = [];

  research = await Resource.find({ type: "researchPaper" })
    .sort({ createdAt: -1 })
    .populate({ path: "uploader" });

  if (!research || research.length === 0) {
    throw new ApiError(404, "Notes do not exist");
  }

  // Respond with a success message and all user details
  return res
    .status(200)
    .json(new ApiResponse(200, { research }, "Research Papers details"));
});

export const deleteNotes = asyncHandler(async (req, res) => {
  const { notesId } = req.params;
  console.log(notesId);

  if (!notesId) {
    throw new ApiError(400, "Notes ID is required");
  }

  const note = await Resource.findById(notesId);

  if (!note) {
    throw new ApiError(404, "notes does not exist");
  }

  // Find the student by ID and delete it
  const response = await Resource.findByIdAndDelete(notesId);

  if (!response) {
    throw new ApiError(500, "Something went wrong while deleting the student");
  }

  const notes = await Resource.find({ type: "lectureNote" }).sort({
    createdAt: -1,
  });

  // Respond with a success message
  return res
    .status(200)
    .json(
      new ApiResponse(200, { notes }, `${note.title} deleted successfully`)
    );
});

export const deletePapers = asyncHandler(async (req, res) => {
  const { paperId } = req.params;
  console.log(paperId);

  if (!paperId) {
    throw new ApiError(400, "Paper ID is required");
  }

  const paper = await Resource.findById(paperId);

  if (!paper) {
    throw new ApiError(404, "paper does not exist");
  }

  // Find the student by ID and delete it
  const response = await Resource.findByIdAndDelete(paperId);

  if (!response) {
    throw new ApiError(500, "Something went wrong while deleting the student");
  }

  const papers = await Resource.find({ type: "previousPaper" }).sort({
    createdAt: -1,
  });

  // Respond with a success message
  return res
    .status(200)
    .json(
      new ApiResponse(200, { papers }, `${paper.title} deleted successfully`)
    );
});

export const deleteResearch = asyncHandler(async (req, res) => {
  const { researchId } = req.params;
  console.log(researchId);

  if (!researchId) {
    throw new ApiError(400, "research ID is required");
  }

  const researchPaper = await Resource.findById(researchId);

  if (!researchPaper) {
    throw new ApiError(404, "paper does not exist");
  }

  // Find the student by ID and delete it
  const response = await Resource.findByIdAndDelete(researchId);

  if (!response) {
    throw new ApiError(500, "Something went wrong while deleting the student");
  }

  const research = await Resource.find({ type: "researchPaper" }).sort({
    createdAt: -1,
  });

  // Respond with a success message
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { research },
        `${researchPaper.title} deleted successfully`
      )
    );
});

// Export all the resource-related controllers
export {
  createResource,
  getAllResources,
  getAllNotes,
  getAllPapers,
  getAllResearchPapers,
  getResourceById,
  updateResourceById,
  deleteResourceById,
};
