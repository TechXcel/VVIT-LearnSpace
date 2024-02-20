import Project from "../models/project.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createProject = asyncHandler(async (req, res) => {
  const { title, description, repositoryUrl, liveDemoUrl, tags } = req.body;

  if (
    !title ||
    !description ||
    !repositoryUrl ||
    !liveDemoUrl ||
    !tags ||
    tags.length === 0
  ) {
    throw new ApiError(400, "Please enter all the required fields");
  }

  const existedProject = await Project.findOne({ title });

  if (existedProject) {
    throw new ApiError(400, "Project already exists");
  }

  req.body.owner = req.user._id;
  console.log(req.user);

  if (req.file) {
    // Upload the file to AWS S3
    await uploadFile(
      req.file,
      "project",
      req.body.title,
      req.user.identityNumber
    );

    // Modify the file name to replace spaces with hyphens
    const perfectName = req.body.title.split(/\s+/).join("-");
    req.file.originalname = perfectName;

    // Create the file URL based on the AWS S3 bucket structure
    req.body.coverImage = `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${req.body.identityNumber}/project/${req.file.originalname}`;
  }

  // Handle additional files
  if (req.files && req.files.length > 0) {
    req.body.additionalFiles = [];
    for (const file of req.files) {
      // Upload each additional file to AWS S3
      const additionalFileName = file.originalname.split(/\s+/).join("-");
      await uploadFile(
        file,
        "project",
        additionalFileName,
        req.user.identityNumber
      );

      // Create the file URL for each additional file
      const additionalFileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${req.body.identityNumber}/project/${additionalFileName}`;
      req.body.additionalFiles.push(additionalFileUrl);
    }
  }

  const newProject = await Project.create(req.body);

  if (!newProject) {
    throw new ApiError(500, "Something went wrong while creating the project");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        { project: newProject },
        "Project added successfully"
      )
    );
});

const getAllProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({});

  // Respond with a success message and all resources
  return res
    .status(200)
    .json(new ApiResponse(200, { projects }, "All projects"));
});

const getProjectById = asyncHandler(async (req, res) => {
  const { projectId } = req.params;

  // Find the resource by ID
  const project = await Project.findById(projectId);

  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  // Respond with a success message and the resource details
  return res
    .status(200)
    .json(new ApiResponse(200, { project }, "Project details"));
});

// Update a project by id
const updateProjectById = asyncHandler(async (req, res) => {
  const { projectId } = req.params;
  const updatedProject = req.body;

  const project = await Project.findByIdAndUpdate(projectId, updatedProject, {
    new: true,
  });

  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, { project }, "Project updated successfully"));
});

// Delete a project by ID
const deleteProjectById = asyncHandler(async (req, res) => {
  const { projectId } = req.params;

  const project = await Project.findByIdAndDelete(projectId);

  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Project deleted successfully"));
});

export {
  createProject,
  getAllProjects,
  getProjectById,
  updateProjectById,
  deleteProjectById,
};
