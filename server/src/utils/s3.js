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
  const contentType = file.mimetype;

  const perfectName = name.split(/\s+/).join("-");

  file.originalname = perfectName;

  const command = new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${folderName}/${file.originalname}`,
    Body: file.buffer,
    ContentType: contentType,
  });

  await s3Client.send(command);
};
