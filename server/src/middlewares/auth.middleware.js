import User from "../models/user.model.js";
import Admin from "../models/admin.model.js";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

export const verifyUserJWT = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new ApiError(401, "Unauthorized request");
  }

  try {
    const decodedUserToken = jwt.verify(
      token,
      process.env.USER_ACCESS_TOKEN_SECRET
    );
    const user = await User.findById(decodedUserToken?._id).select("-password");
    if (!user) {
      throw new ApiError(401, "Invalid access token");
    }
    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token");
  }
});

export const verifyAdminJWT = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new ApiError(401, "Unauthorized request");
  }

  try {
    const decodedAdminToken = jwt.verify(
      token,
      process.env.ADMIN_ACCESS_TOKEN_SECRET
    );
    const admin = await Admin.findById(decodedAdminToken?._id).select(
      "-password"
    );
    if (!admin) {
      throw new ApiError(401, "Invalid access token");
    }
    req.user = admin;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token");
  }
});

export const getLoggedInUserOrIgnore = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  try {
    const decodedToken = jwt.verify(
      token,
      process.env.USER_ACCESS_TOKEN_SECRET
    );
    const user = await User.findById(decodedToken?._id).select("-password");
    req.user = user;
    next();
  } catch (error) {
    next();
  }
});

export const verifyPermission = (roles = []) =>
  asyncHandler(async (req, res, next) => {
    if (!req.user?._id) {
      throw new ApiError(401, "Unauthorized request");
    }
    if (roles.includes(req.user?.role)) {
      next();
    } else {
      throw new ApiError(403, "You are not allowed to perform this action");
    }
  });
