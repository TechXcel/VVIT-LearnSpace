import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "../src/routes/user.routes.js";
import adminRouter from "../src/routes/admin.routes.js";
import projectRouter from "../src/routes/project.routes.js";
import reviewRouter from "./routes/review.routes.js";
import resourceRouter from "../src/routes/resource.routes.js";
import notificationRouter from "../src/routes/notification.routes.js"


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
app.use("/api/v1/projects", projectRouter);
app.use("/api/v1/review", reviewRouter);
app.use("/api/v1/resources", resourceRouter);
app.use("/api/v1/notification",notificationRouter)


export default app;
