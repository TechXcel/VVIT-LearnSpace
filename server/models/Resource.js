import mongoose from "mongoose";
import validator from "validator";

const resourceSchema = new mongoose.Schema(
  {
    uploader: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: [true, "Please provide a title for this resource."],
    },
    description: {
      type: String,
      required: [true, "Please provide a description for this resource."],
    },
    subject: {
      type: String,
      required: [true, "Please specify the subject of this resource."],
    },
    semester: {
      type: Number,
      required: [true, "Semester is required"],
    },
    type: {
      type: String,
      enum: ["lecture notes", "assignment", "previous paper", "project"],
      required: [true, "Please select a type for this resource."],
    },
    fileUrl: {
      type: String,
      required: [true, "Please provide a valid file URL for this resource."],
      validate: {
        validator: validator.isURL,
        message: "Invalid URL",
      },
    },
    ratings: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        rating: Number,
      },
    ],
    reviews: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        text: String,
      },
    ],
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      required: [true, "Please provide a status for this resource."],
    },
    categories: [String],
    tags: [String],
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

resourceSchema.virtual("resourceReviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "resourceId",
});

export default mongoose.model("Resource", resourceSchema);
