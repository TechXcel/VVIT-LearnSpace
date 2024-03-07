import User from "../models/user.model.js";
import Admin from "../models/admin.model.js";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

// Middleware to verify user's JSON Web Token (JWT)
export const isAuthenticated = asyncHandler(async (req, res, next) => {
  // Get the token from cookies or authorization header
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new ApiError(401, "Unauthorized request");
  }

  try {
    // Verify the user token and extract user information
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // // Find the user by ID and exclude the password field
    // const user = await User.findById(decodedToken?._id).select("-password");
    // if (!user) {
    //   throw new ApiError(401, "Invalid access token");
    // }
    // Attach the user to the request for further processing
    console.log(decodedToken);
    req.user = decodedToken;

    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token");
  }
});

// // Middleware to verify admin's JSON Web Token (JWT)
// export const verifyAdminJWT = asyncHandler(async (req, res, next) => {
//   // Get the token from cookies or authorization header
//   const token =
//     req.cookies?.accessToken ||
//     req.header("Authorization")?.replace("Bearer ", "");

//   if (!token) {
//     throw new ApiError(401, "Unauthorized request");
//   }

//   try {
//     // Verify the admin token and extract admin information
//     const decodedAdminToken = jwt.verify(
//       token,
//       process.env.ADMIN_ACCESS_TOKEN_SECRET
//     );
//     // Find the admin by ID and exclude the password field
//     const admin = await Admin.findById(decodedAdminToken?._id).select(
//       "-password"
//     );
//     if (!admin) {
//       throw new ApiError(401, "Invalid access token");
//     }
//     // Attach the admin to the request for further processing
//     req.user = admin;
//     next();
//   } catch (error) {
//     throw new ApiError(401, error?.message || "Invalid access token");
//   }
// });

// Middleware to get logged-in user or ignore if no valid token
export const getLoggedInUserOrIgnore = asyncHandler(async (req, res, next) => {
  // Get the token from cookies or authorization header
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  try {
    // Verify the token and extract user information
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    // Find the user by ID and exclude the password field
    const user = await User.findById(decodedToken?._id).select("-password");
    // Attach the user to the request for further processing
    req.user = user;
    next();
  } catch (error) {
    // Continue to the next middleware even if token is invalid or not present
    next();
  }
});

// Middleware to verify user has specific roles/permissions
export const verifyPermission = (roles = []) =>
  asyncHandler(async (req, res, next) => {
    // Check if user ID is present in the request
    if (!req.user?._id) {
      throw new ApiError(401, "Unauthorized request");
    }
    // Check if user's role is included in the required roles
    if (roles.includes(req.user?.role)) {
      next();
    } else {
      throw new ApiError(403, "You are not allowed to perform this action");
    }
  });