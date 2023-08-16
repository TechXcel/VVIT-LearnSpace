import mongoose from "mongoose";

const discussionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    status: {
      type: String,
      enum: ["pending", "resolved"],
      required: [true, "Status is required"],
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
    replies: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        content: {
          type: String,
          required: [true, "Reply content is required"],
        },
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// discussionSchema.virtual("replies.userInfo", {
//   ref: "User",
//   localField: "replies.userId",
//   foreignField: "_id",
// });

export default mongoose.model("Discussion", discussionSchema);
