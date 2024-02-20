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

// Export all the resource-related controllers
export {
  createResource,
  getAllResources,
  getResourceById,
  updateResourceById,
  deleteResourceById,
};
