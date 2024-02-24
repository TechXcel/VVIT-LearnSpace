import mongoose from "mongoose";

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
    fileUrl: {
      type: String,
      required: [true, "Please provide a valid file URL for this resource."],
      validate: {
        validator: validator.isURL,
        message: "Invalid URL",
      },
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
      enum: ["lectureNote", "assignment", "previousPaper"],
      required: [true, "Please select a type for this resource."],
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "approved", "rejected"],
      required: [true, "Please provide a status for this resource."],
    },
    tags: [
      {
        type: String,
        required: [true, "Please provide at least one tag for this resource."],
      },
    ],
    viewCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

resourceSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "resourceId",
});

const Resource = mongoose.model("Resource", resourceSchema);

export default Resource;
