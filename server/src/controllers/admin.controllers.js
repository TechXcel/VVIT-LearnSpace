import Admin from "../models/admin.model.js";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Please enter all the required fields");
  }

  const existedAdmin = await Admin.findOne({
    email,
  });

  if (existedAdmin) {
    throw new ApiError(400, "Admin already exists");
  }

  const admin = await Admin.create({
    email,
    password,
  });

  const createdAdmin = await Admin.findById(admin._id).select("-password");

  if (!createdAdmin) {
    throw new ApiError(500, "Something went wrong while registering the admin");
  }

  return res
    .status(201)
    .json(new ApiResponse(200, createdAdmin, "Admin registered Successfully"));
});
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email) {
    throw new ApiError(400, "Email is required");
  }

  const admin = await Admin.findOne({
    email: req.body.email,
  });

  console.log(admin);

  if (!admin) {
    throw new ApiError(404, "Admin does not exist");
  }

  // Compare the incoming password with hashed password
  const isPasswordValid = await admin.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(401, "Invalid admin credentials");
  }

  const accessToken = admin.generateAccessToken();

  // get the admin document ignoring the password
  const loggedInAdmin = await Admin.findById(admin._id);

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
        { admin: loggedInAdmin, accessToken }, // send access in response if client decides to save them by themselves
        "Admin logged in successfully"
      )
    );
});

export { registerAdmin, loginAdmin };
