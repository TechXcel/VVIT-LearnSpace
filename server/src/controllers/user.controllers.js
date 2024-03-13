import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadFile } from "../utils/s3.js";

// Register a new user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, identityNumber, password, branch } = req.body;

  // Check if all required fields are present
  if (!name || !email || !identityNumber || !password || !branch) {
    throw new ApiError(400, "Please enter all the required fields");
  }

  // Check if a user with the same identityNumber or email already exists
  const existedUser = await User.findOne({
    $or: [{ identityNumber }, { email }],
  });

  if (existedUser) {
    throw new ApiError(400, "User already exists");
  }
console.log("req file",req.file)
  if (req.file) {
    // Upload the user's avatar to AWS S3
    await uploadFile(
      req.file,
      "avatar",
      req.body.name,
      req.body.identityNumber
    );

    // Modify the avatar file name to replace spaces with hyphens
    const perfectName = req.body.name.split(/\s+/).join("-");
    req.file.originalname = perfectName;

    // Set the avatar URL based on the AWS S3 bucket structure
    req.body.avatar = `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/${req.body.identityNumber}/avatar/${req.file.originalname}`;
    console.log(req.body.avatar)
  }

  // Create a new user in the database
  const user = await User.create(req.body);

  // Find the created user document excluding the password field
  const createdUser = await User.findById(user._id).select("-password");

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  // Respond with a success message and the created user
  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        { user: createdUser },
        "User registered Successfully"
      )
    );
});

// Login a user
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    throw new ApiError(400, "Email is required");
  }

  // Find the user by email
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  // Compare the incoming password with the hashed password
  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }

  // Generate an access token for the user
  const accessToken = await user.generateAccessToken();
  console.log(accessToken);

  // Find the user document excluding the password field
  const loggedInUser = await User.findById(user._id);

  const options = {
    httpOnly: true,
    secure: true,
  };

  // Respond with a success message, the logged-in user, and the access token
  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .json(
      new ApiResponse(
        200,
        { user: loggedInUser, accessToken },
        "User logged in successfully"
      )
    );
});

// Update a user's password
const userPasswordUpdate = async (req, res) => {
  const { oldPassword, newPassword } = req.body;

  if (!oldPassword || !newPassword) {
    throw new ApiError(404, "Old password and new password are required");
  }

  // Get the user ID from the authenticated request
  const userId = req.user._id;

  if (!userId) {
    throw new ApiError(404, "User ID is required");
  }

  // Find the user by ID
  const user = await User.findById(userId);

  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  // Check if the old password provided is correct
  const passwordValid = await user.isPasswordCorrect(oldPassword);

  if (!passwordValid) {
    throw new ApiError(401, "Old password is incorrect");
  }

  // Update the user's password with the new password
  user.password = newPassword;
  await user.save({ validateBeforeSave: false });

  // Respond with a success message
  return res.status(200).json(new ApiResponse(200, null, "Password updated"));
};

// Get details of a specific user by ID
const getUserDetails = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    throw new ApiError(400, "User ID is required");
  }

  // Find the user by ID and populate related fields
  const user = await User.findById(userId).populate([
    "resources",
    "projects",
    "notifications",
    "reviews",
    "assignments",
  ]);

  if (!user) {
    throw new ApiError(404, "User details do not exist");
  }

  // Respond with a success message and the user details
  return res.status(200).json(new ApiResponse(200, { user }, "User details"));
});

// Get details of all users
const getAllStudents = asyncHandler(async (req, res) => {
  var students = [];
  // Find all users excluding the password field
  students = await User.find({ role: "student" })
    .select("-password")
    .sort({ createdAt: -1 })
    .populate([
      "resources",
      "projects",
      "assignments",
      "submissions",
      "reviews",
    ]);

  if (!students || students.length === 0) {
    throw new ApiError(404, "Students do not exist");
  }

  // Respond with a success message and all user details
  return res
    .status(200)
    .json(new ApiResponse(200, { students }, "Student details"));
});

// Delete a student by ID
const deleteStudent = asyncHandler(async (req, res) => {
  const { studentId } = req.params;
  console.log(studentId);

  if (!studentId) {
    throw new ApiError(400, "Student ID is required");
  }

  const student = await User.findById(studentId);

  if (!student) {
    throw new ApiError(404, "Student does not exist");
  }

  // Find the student by ID and delete it
  const response = await User.findByIdAndDelete(studentId);

  if (!response) {
    throw new ApiError(500, "Something went wrong while deleting the student");
  }

  const students = await User.find({ role: "student" })
    .select("-password")
    .sort({ createdAt: -1 });

  // Respond with a success message
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { students },
        `Student with ${student.identityNumber} deleted successfully`
      )
    );
});

//get all faculty
export const getAllFaculty = asyncHandler(async (req, res) => {
  var faculty = [];
  // Find all users excluding the password field
  faculty = await User.find({ role: "faculty" })
    .select("-password")
    .sort({ createdAt: -1 })
    .populate([
      "resources",
      "projects",
      "assignments",
      "submissions",
      "reviews",
    ]);

  if (!faculty || faculty.length === 0) {
    throw new ApiError(404, "faculty do not exist");
  }

  // Respond with a success message and all user details
  return res
    .status(200)
    .json(new ApiResponse(200, { faculty }, "faculty details"));
});

//delete faculty
export const deleteFaculty = asyncHandler(async (req, res) => {
  const { facultyId } = req.params;
  console.log(facultyId);

  if (!facultyId) {
    throw new ApiError(400, "Faculty ID is required");
  }

  const faculty = await User.findById(facultyId);

  if (!faculty) {
    throw new ApiError(404, "faculty does not exist");
  }

  // Find the faculty by ID and delete it
  const response = await User.findByIdAndDelete(facultyId);

  if (!response) {
    throw new ApiError(500, "Something went wrong while deleting the student");
  }

  const faculties = await User.find({ role: "faculty" })
    .select("-password")
    .sort({ createdAt: -1 });

  // Respond with a success message
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { faculties },
        `Faculty with ${faculty.identityNumber} deleted successfully`
      )
    );
});

// Export all user-related controllers
export {
  registerUser,
  loginUser,
  getUserDetails,
  getAllStudents,
  deleteStudent,
  userPasswordUpdate,
};
