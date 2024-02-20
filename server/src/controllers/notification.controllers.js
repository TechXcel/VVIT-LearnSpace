import Notification from "../models/notification.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const createNotification = asyncHandler(async (req, res) => {
  const { content } = req.body;
  req.body.recipientId = req.user._id;
  console.log(req.user);

  if (!content) {
    throw new ApiError(400, "Please enter all the required fields");
  }

  const newNotification = await Notification.create(req.body);

  if (!newNotification) {
    throw new ApiError(500, "Something went wrong");
  }

  return res
    .status(201)
    .json(
      new ApiResponse(
        200,
        { notification: newNotification },
        "Notification added successfully"
      )
    );
});

const getNotification = asyncHandler(async (req, res) => {
  const notification = await Notification.find({});

  // Respond with a success message and all resources
  return res
    .status(200)
    .json(new ApiResponse(200, { notification }, "All notifications"));
});

const updateNotification = asyncHandler(async (req, res) => {
  const { notificationId } = req.params;
  const updatedNotification = req.body;

  const notification = await Notification.findByIdAndUpdate(
    notificationId,
    updatedNotification,
    { new: true }
  );

  if (!notification) {
    throw new ApiError(404, "Notification not found");
  }

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { notification },
        "Notification updated successfully"
      )
    );
});

// Delete a project by ID
const deleteNotification = asyncHandler(async (req, res) => {
  const { notificationId } = req.params;

  const notification = await Notification.findByIdAndDelete(notificationId);

  if (!notification) {
    throw new ApiError(404, "Notification not found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, null, "Notification deleted successfully"));
});

export {
  createNotification,
  getNotification,
  updateNotification,
  deleteNotification,
};
