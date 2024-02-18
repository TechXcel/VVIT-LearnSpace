import Resource from "../models/resource.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { uploadFile } from "../utils/s3.js";

const createResource = asyncHandler(async (req, res) => {
  const { title, description, subject, semester, type, tags } = req.body;

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

  const existedResource = await Resource.findOne({ title });

  if (existedResource) {
    throw new ApiError(400, "Resource already exists");
  }

  await uploadFile(req.file, "resource", req.body.title);

  const perfectName = req.body.title.split(/\s+/).join("-");

  req.file.originalname = perfectName;

  req.body.fileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/resource/${req.type}/${req.file.originalname}`;

  req.body.uploader = req.user._id;
  const newResource = await Resource.create(req.body);

  if (!newResource) {
    throw new ApiError(500, "Something went wrong while creating the resource");
  }

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

const getAllResources = asyncHandler(async (req, res) => {
  const resources = await Resource.find({});

  return res
    .status(200)
    .json(new ApiResponse(200, { resources }, "All resources"));
});

const getResourceById = asyncHandler(async (req, res) => {
  const { resourceId } = req.params;

  const resource = await Resource.findById(resourceId);

  if (!resource) {
    throw new ApiError(404, "Resource not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, { resource }, "Resource details"));
});

const updateResourceById = asyncHandler(async (req, res) => {
  const { resourceId } = req.params;
  const updatedResource = req.body;

  const resource = await Resource.findByIdAndUpdate(
    resourceId,
    updatedResource,
    { new: true }
  );

  if (!resource) {
    throw new ApiError(404, "Resource not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, { resource }, "Resource updated successfully"));
});

const deleteResourceById = asyncHandler(async (req, res) => {
  const { resourceId } = req.params;

  const resource = await Resource.findByIdAndDelete(resourceId);

  if (!resource) {
    throw new ApiError(404, "Resource not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Resource deleted successfully"));
});

export {
  createResource,
  getAllResources,
  getResourceById,
  updateResourceById,
  deleteResourceById,
};
