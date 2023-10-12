import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
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
  foreignField: "user",
});

userSchema.virtual("discussions", {
  ref: "Discussion",
  localField: "_id",
  foreignField: "userId",
});

userSchema.virtual("notifications", {
  ref: "Notification",
  localField: "_id",
  foreignField: "userId",
});

userSchema.virtual("reviews", {
  ref: "Review",
  localField: "_id",
  foreignField: "userId",
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

UserSchema.methods.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

UserSchema.methods.createAccessToken = async function () {
  return jwt.sign(
    { userId: this._id, role: this.role },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
};

export default mongoose.model("User", userSchema);
