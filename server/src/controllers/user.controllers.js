import User from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadFile } from "../utils/s3.js";

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, identityNumber, password, gender, branch, role } =
    req.body;

  if (
    !name ||
    !email ||
    !identityNumber ||
    !password ||
    !gender ||
    !branch ||
    !role
  ) {
    throw new ApiError(400, "Please enter all the required fields");
  }

  const existedUser = await User.findOne({
    $or: [{ identityNumber }, { email }],
  });

  if (existedUser) {
    throw new ApiError(400, "User already exists");
  }

  await uploadFile(req.file, "avatar", req.body.name);

  const perfectName = req.body.name.split(/\s+/).join("-");

  req.file.originalname = perfectName;

  req.body.avatar = `https://${process.env.AWS_BUCKET_NAME}.s3.amazonaws.com/avatar/${req.file.originalname}`;

  const user = await User.create(req.body);

  const createdUser = await User.findById(user._id).select("-password");

  if (!createdUser) {
    throw new ApiError(500, "Something went wrong while registering the user");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdUser, "User registered Successfully"));
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    throw new ApiError(400, "Email is required");
  }

  const user = await User.findOne({
    email: req.body.email,
  });

  console.log(user);

  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  // Compare the incoming password with hashed password
  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid user credentials");
  }

  const accessToken = user.generateAccessToken();

  // get the user document ignoring the password
  const loggedInUser = await User.findById(user._id);

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .cookie("accessToken", accessToken, options) // set the access token in the cookie
    .json(
      new ApiResponse(
        200,
        { user: loggedInUser, accessToken }, // send access in response if client decides to save them by themselves
        "User logged in successfully"
      )
    );
});

const userPasswordUpdate = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword) {
    throw new ApiError(404, "Old password and new password are required");
  }

  const userId = req.user._id;

  if (!userId) {
    throw new ApiError(404, "User ID is required");
  }

  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(404, "User does not exist");
  }

  const passwordValid = await user.isPasswordCorrect(oldPassword);
  if (!passwordValid) {
    throw new ApiError(401, "Old password is incorrect");
  }

  user.password = newPassword;
  await user.save({ validateBeforeSave: false });

  return res.status(200).json(new ApiResponse(200, null, "Password updated"));
};

const getUserDetails = asyncHandler(async (req, res) => {
  const { userId } = req.params;

  if (!userId) {
    throw new ApiError(400, "User ID is required");
  }

  const user = await User.findById(userId).populate([
    "resources",
    "projects",
    "notifications",
    "reviews",
  ]);

  if (!user) {
    throw new ApiError(404, "User details does not exist");
  }

  return res.status(200).json(new ApiResponse(200, { user }, "User details"));
});

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password");

  if (!users) {
    throw new ApiError(404, "Users does not exist");
  }

  return res.status(200).json(new ApiResponse(200, { users }, "Users details"));
});

export {
  registerUser,
  loginUser,
  getUserDetails,
  getAllUsers,
  userPasswordUpdate,
};
