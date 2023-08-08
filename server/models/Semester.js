import mongoose from "mongoose";

const semesterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Semester is required"],
  },
});

export default mongoose.model("Semester", semesterSchema);
