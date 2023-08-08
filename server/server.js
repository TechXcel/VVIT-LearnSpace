import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
