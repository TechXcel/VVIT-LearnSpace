import mongoose from "mongoose";
import validator from "validator";

const projectSchema = new mongoose.Schema(
  {
    userId: {
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
    tags: [{ type: String }],
    files: [{ type: String }],
    githubUrl: {
      type: String,
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
      validate: {
        validator: validator.isURL,
        message: "Invalid URL",
      },
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

projectSchema.virtual("userInfo", {
  ref: "User",
  localField: "userId",
  foreignField: "_id",
});

export default mongoose.model("Project", projectSchema);
