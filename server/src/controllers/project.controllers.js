import Project from "../models/project.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadFile } from "../utils/s3.js";

const createProject = asyncHandler(async (req, res) => {
  const { title, description, repositoryUrl, liveDemoUrl } = req.body;
  //console.log(title,description,repositoryUrl,liveDemoUrl);

  if (!title || !description || !repositoryUrl || !liveDemoUrl) {
    throw new ApiError(400, "Please enter all the required fields");
  }

  const existedProject = await Project.findOne({ title });

  if (existedProject) {
    throw new ApiError(400, "Project already exists");
  }

  req.body.owner = req.user._id;
  console.log(req.body.owner);
  console.log("req file", req.file);
  if (req.file) {
    // Upload the file to AWS S3

    await uploadFile(
      req.file,
      "coverImage",
      req.body.title,
      req.user.identityNumber
    );

    // Modify the file name to replace spaces with hyphens
    const perfectName = req.body.title.split(/\s+/).join("-");
    req.file.originalname = perfectName;
    //console.log("file name in controller",req.file.originalname)

    // Create the file URL based on the AWS S3 bucket structure

    req.body.coverImage = `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${req.user.identityNumber}/coverImage/${req.file.originalname}`;
    console.log("url image", req.body.coverImage);
  }

  // // Handle additional files
  if (req.files && req.files.length > 0) {
    req.body.additionalFiles = [];
    for (const file of req.files) {
      // Upload each additional file to AWS S3
      const additionalFileName = file.originalname.split(/\s+/).join("-");
      await uploadFile(file, "coverImage", additionalFileName, req.body.owner);

      // Create the file URL for each additional file
      const additionalFileUrl = `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${req.body.owner}/project/${additionalFileName}`;
      req.body.additionalFiles.push(additionalFileUrl);
    }
  }

  console.log(req.body.tags);

  const newProject = await Project.create(req.body);

  const projects = await Project.find({ owner: req.user._id }).sort({
    createdAt: -1,
  });

  if (!newProject) {
    throw new ApiError(500, "Something went wrong while creating the project");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, { projects }, "Project added successfully"));
});

const getAllProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({})
    .sort({ createdAt: -1 })
    .populate({ path: "owner" });

  // Respond with a success message and all resources
  return res
    .status(200)
    .json(new ApiResponse(200, { projects }, "All projects"));
});

const getApprovedProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({ status: "approved" })
    .sort({ createdAt: -1 })
    .populate({ path: "owner" });

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

  // Increment the view count of the project by 1
  project.viewCount += 1;
  await project.save();

  // Respond with a success message and the resource details
  return res
    .status(200)
    .json(new ApiResponse(200, { project }, "Project details"));
});

//projects added by login user

export const getUserProjects = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  console.log("in getuserproject", userId);
  // Find the resource by ID
  const projects = await Project.find({ owner: userId }).sort({
    createdAt: -1,
  });

  if (!projects) {
    throw new ApiError(404, "Projects not found");
  }

  // Respond with a success message and the resource details
  return res
    .status(200)
    .json(new ApiResponse(200, { projects }, "Projects details"));
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

const deleteProject = asyncHandler(async (req, res) => {
  const { projectId } = req.params;
  console.log(projectId);

  if (!projectId) {
    throw new ApiError(400, "Project ID is required");
  }

  const project = await Project.findById(projectId);

  if (!project) {
    throw new ApiError(404, "project does not exist");
  }

  // Find the faculty by ID and delete it
  const response = await Project.findByIdAndDelete(projectId);

  if (!response) {
    throw new ApiError(500, "Something went wrong while deleting the student");
  }

  const projects = await Project.find({})
    .populate({ path: "owner" })
    .sort({ createdAt: -1 });

  // Respond with a success message
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { projects },
        ` ${project.title} deleted successfully`
      )
    );
});

const projectApproval = asyncHandler(async (req, res) => {
  const { projectId } = req.params;

  const project = await Project.findById(projectId);

  if (!project) {
    throw new ApiError(404, "Project not found");
  }

  if (project.status === "approved") {
    project.status = "pending";
  } else {
    project.status = "approved";
  }

  await project.save();

  console.log(project);
  const projects = await Project.find({})
    .populate({ path: "owner" })
    .sort({ createdAt: -1 });

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { projects },
        `Project ${project.status === "approved" ? "approved" : "pending"}`
      )
    );
});

export {
  createProject,
  getAllProjects,
  getProjectById,
  updateProjectById,
  deleteProject,
  projectApproval,
  getApprovedProjects,
};
