import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    viewCount: {
      type: Number,
      default: 0,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    completionCount: {
      type: Number,
      default: 0,
    },
    tags: {
      type: [String],
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

assignmentSchema.virtual("problems", {
  ref: "Problem",
  localField: "_id",
  foreignField: "assignmentId",
});

assignmentSchema.virtual("submissions", {
  ref: "Submission",
  localField: "_id",
  foreignField: "assignmentId",
});

const Assignment = mongoose.model("Assignment", assignmentSchema);

export default Assignment;
