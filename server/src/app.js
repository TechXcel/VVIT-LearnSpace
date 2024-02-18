import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "../src/routes/user.routes.js";
import adminRouter from "../src/routes/admin.routes.js";

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

app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/users", userRouter);

export default app;
