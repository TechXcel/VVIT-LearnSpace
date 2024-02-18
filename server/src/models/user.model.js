import mongoose, { Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
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
          "Please enter a valid college email address (e.g., student@vvit.net)",
      },
      max: [50, "Your email cannot exceed 50 characters"],
    },
    identityNumber: {
      type: String,
      required: [true, "Please enter your identity number"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      min: [6, "Your password should be atleast 6 characters long"],
    },
    gender: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    avatar: {
      type: String,
      required: false,
      default: function () {
        return this.gender === "male"
          ? "https://learnspace.s3.ap-south-1.amazonaws.com/male.png"
          : "https://learnspace.s3.ap-south-1.amazonaws.com/female.png";
      },
      validate: {
        validator: validator.isURL,
        message: "Invalid URL",
      },
    },
    branch: {
      type: String,
      enum: [
        "CSE",
        "CSM",
        "AID",
        "CSO",
        "CIC",
        "IT",
        "ECE",
        "EEE",
        "MECH",
        "CIVIL",
      ],
      required: [true, "Please select your branch"],
    },

    role: {
      type: String,
      enum: ["student", "faculty"],
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

userSchema.virtual("resources", {
  ref: "Resource",
  localField: "_id",
  foreignField: "uploader",
});

userSchema.virtual("projects", {
  ref: "Project",
  localField: "_id",
  foreignField: "owner",
});

userSchema.virtual("notifications", {
  ref: "Notification",
  localField: "_id",
  foreignField: "recipientId",
});

userSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "reviewerId",
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);

  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
      role: this.role,
      branch: this.branch,
    },
    process.env.USER_ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.USER_ACCESS_TOKEN_EXPIRY,
    }
  );
};

const User = mongoose.model("User", userSchema);

export default User;
