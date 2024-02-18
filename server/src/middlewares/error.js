import ErrorHandler from "./ErrorHandler.js";

export const ErrorMiddleWare = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  console.log(err);
  //Wrong Mongodb id  error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid : ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  //mongoose duplicate key error
  if (err.code === 11000) {
    const message = `${Object.keys(err.keyValue)} already exists`;
    err = new ErrorHandler(message, 409);
  }

  //Wrong JWT error
  if (err.name === "JsonWebTokenError") {
    const message = "Json Web Token is Invalid, try again";
    err = new ErrorHandler(message, 400);
  }

  //JWT Expired error
  if (err.name === "TokenExpiredError") {
    const message = "Json WEb Token is Expired, try again";
    err = new ErrorHandler(message, 403);
  }

  res.status(err.statusCode).json({ success: false, message: err.message });
};
