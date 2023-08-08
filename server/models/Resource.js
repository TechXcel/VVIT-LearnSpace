import mongoose from "mongoose";
import validator from "validator";

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
    subject: {
      type: String,
      required: [true, "Please specify the subject of this resource."],
    },
    type: {
      type: String,
      enum: ["lecture notes", "assignment", "previous paper", "project"],
      required: [true, "Please select a type for this resource."],
    },
    fileUrl: {
      type: String,
      required: [true, "Please provide a valid file URL for this resource."],
      validate: {
        validator: validator.isURL,
        message: "Invalid URL",
      },
    },
    ratings: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        rating: Number,
      },
    ],
    reviews: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        text: String,
      },
    ],
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      required: [true, "Please provide a status for this resource."],
    },
    categories: [String],
    tags: [String],
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

resourceSchema.virtual("uploaderInfo", {
  ref: "User",
  localField: "uploader",
  foreignField: "_id",
});

// With this virtual, when you fetch a Resource document, you can use the uploaderInfo property to populate details about the uploader from the User model.

// const resource = await Resource.findById(resourceId).populate('uploaderInfo');
// console.log(resource.uploaderInfo);

// To populate resources uploaded by a user, you can use the populate method like this:
// const resources = await Resource.find({ uploader: userId }).populate('uploaderInfo');

resourceSchema.virtual("ratingsInfo", {
  ref: "User",
  localField: "ratings.userId",
  foreignField: "_id",
});

resourceSchema.virtual("reviewsInfo", {
  ref: "User",
  localField: "reviews.userId",
  foreignField: "_id",
});

export default mongoose.model("Resource", resourceSchema);
