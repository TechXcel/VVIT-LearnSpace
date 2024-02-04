import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "150mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "150mb",
  })
);

app.use(cookieParser());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to LearnSpace API" });
});

export default app;
