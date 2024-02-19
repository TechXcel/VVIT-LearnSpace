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
  
    
    req.body.owner=req.user._id
    console.log(req.user)

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

  
  const project= await Project.findByIdAndUpdate(
    projectId,
    updatedProject,
    { new: true } 
  );

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
