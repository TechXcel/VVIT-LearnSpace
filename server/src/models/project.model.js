import mongoose from "mongoose";
import validator from "validator";

const projectSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    repositoryUrl: {
      type: String,
      required: true,
      validate: {
        validator: (value) => {
          return /^(https:\/\/github.com\/)[A-Za-z0-9_-]+\/[A-Za-z0-9_-]+$/.test(
            value
          );
        },
        message: "Invalid GitHub URL",
      },
    },
    liveDemoUrl: {
      type: String,
      validate: {
        validator: (value) => {
          return /^(https?:\/\/)([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(
            value
          );
        },
        message: "Invalid URL",
      },
    },
    coverImage: {
      type: String,
      default:
        "https://learnspace.s3.ap-south-1.amazonaws.com/project/project-cover.png",
      validate: {
        validator: validator.isURL,
        message: "Invalid URL",
      },
    },
    viewCount: {
      type: Number,
      default: 0,
    },
    tags: [{ type: String, required: true }],
    additionalFiles: [{ type: String }],
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

projectSchema.virtual("projectReviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "projectId",
});

const Project = mongoose.model("Project", projectSchema);

export default Project;
