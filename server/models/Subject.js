import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Subject name is required"],
  },
});

export default mongoose.model("Subject", subjectSchema);
