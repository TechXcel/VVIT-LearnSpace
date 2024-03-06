import mongoose, { Schema } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const adminSchema = new Schema(
  {
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
    },
    role: {
      type: String,
      enum: ["admin"],
      required: true,
      default: "admin",
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
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
