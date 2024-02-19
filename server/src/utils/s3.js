import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import * as dotenv from "dotenv";
dotenv.config();

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export const uploadFile = async (file, folderName, name) => {
  try {
    const contentType = file.mimetype;

    // Use regex to replace spaces with hyphens in the name
    const perfectName = name.replace(/\s+/g, "-");

    // Update the file.originalname directly
    file.originalname = perfectName;

    const command = new PutObjectCommand({
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `${folderName}/${file.originalname}`,
      Body: file.buffer,
      ContentType: contentType,
    });

    // Use try-catch to handle potential errors during the upload
    await s3Client.send(command);
  } catch (error) {
    console.error("Error uploading file to S3:", error);
    throw error; // rethrow the error for further handling
  }
};
