import jwt from "jsonwebtoken";
import { StatusCodes } from "http-status-codes";
import ErrorHandler from "./ErrorHandler.js";
import asyncHandler from "express-async-handler";

export const isAuthenticated = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ Error: "Please provide bearer token" });
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .json({ Error: "Invalid Token!" });
  }
  try {
    const payload = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userId = payload.userId;
    req.role = payload.role;
    next();
  } catch (error) {
    console.log(error);
    return res
      .status(StatusCodes.FORBIDDEN)
      .json({ message: "Access Denied!", status: 403 });
  }
});

export const authorizeRoles = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.role)) {
      return next(
        new ErrorHandler(
          ` ${req.role} is not allowed to access this resource`,
          StatusCodes.FORBIDDEN
        )
      );
    }
    next();
  };
};
