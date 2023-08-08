import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: String,
      required: [true, "Notification content is required"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["unread", "read"],
      required: [true, "Notification status is required"],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

notificationSchema.virtual("userInfo", {
  ref: "User",
  localField: "userId",
  foreignField: "_id",
});

export default mongoose.model("Notification", notificationSchema);
