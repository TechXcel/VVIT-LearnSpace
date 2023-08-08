import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Please enter your email"],
    validate: {
      validator: validator.isEmail,
      message: "Please enter a valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
  },
  role: {
    type: String,
    enum: ["admin", "student", "faculty"],
    required: true,
  },
  profilePicture: {
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
});

export default mongoose.model("User", userSchema);
