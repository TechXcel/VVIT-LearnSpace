import mongoose from "mongoose";

const approvalRequestSchema = new mongoose.Schema(
  {
    resourceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resource",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    type: {
      type: String,
      enum: ["resourceUpload", "discussionPost"],
      required: [true, "Approval request type is required"],
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      required: [true, "Approval request status is required"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

approvalRequestSchema.virtual("resourceInfo", {
  ref: "Resource",
  localField: "resourceId",
  foreignField: "_id",
});

approvalRequestSchema.virtual("userInfo", {
  ref: "User",
  localField: "userId",
  foreignField: "_id",
});

export default mongoose.model("ApprovalRequest", approvalRequestSchema);
