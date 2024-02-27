import mongoose from "mongoose";

const problemSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter the problem title"],
    },
    description: {
      type: String,
      required: [true, "Please enter the problem description"],
    },
    viewCount: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["Not Started", "In Progress", "Completed"],
      default: "Not Started",
    },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: [true, "Please enter the problem difficulty"],
    },
    assignmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Assignment",
      required: [true, "Please select the assignment"],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

problemSchema.virtual("assignments", {
  ref: "Assignment",
  localField: "assignmentId",
  foreignField: "_id",
});

problemSchema.virtual("submissions", {
  ref: "Submission",
  localField: "_id",
  foreignField: "problemId",
});

const Problem = mongoose.model("Problem", problemSchema);

export default Problem;
