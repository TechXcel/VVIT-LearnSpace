import mongoose, { Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const adminSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
      min: [3, "Your name should be atleast 3 characters long"],
      max: [30, "Your name cannot exceed 30 characters"],
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Please enter your email"],
      validate: {
        validator: function (value) {
          return /^[\w.-]+@vvit\.net$/.test(value);
        },
        message:
          "Please enter a valid college email address (e.g., user@vvit.net)",
      },
      max: [50, "Your email cannot exceed 50 characters"],
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      min: [6, "Your password should be atleast 6 characters long"],
      select: false,
    },
    contact: {
      type: String,
      unique: true,
      required: [true, "Please enter your contact number"],
      validate: {
        validator: function (value) {
          return /^[6-9]\d{9}$/.test(value);
        },
        message: "Please enter a valid 10 digit contact number",
      },
    },
    avatar: {
      type: String,
      required: true,
      default: "https://learn-space.s3.ap-south-1.amazonaws.com/male.png",
      validate: {
        validator: validator.isURL,
        message: "Invalid URL",
      },
    },
  },
  {
    timestamps: true,
  }
);

adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);

  next();
});

adminSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

adminSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      role: "admin",
    },
    process.env.ADMIN_ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ADMIN_ACCESS_TOKEN_EXPIRY,
    }
  );
};

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
