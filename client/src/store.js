import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/authSlice";
import userReducer from "@/redux/userSlice";
import projectReducer from "@/redux/projectSlice";
import resourceReducer from "@/redux/resourceSlice";
import assignmentReducer from "@/redux/assignmentSlice";
import problemReducer from "@/redux/problemSlice";
import submissionReducer from "@/redux/submissionSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    project: projectReducer,
    resource: resourceReducer,
    assignment: assignmentReducer,
    problem: problemReducer,
    submission: submissionReducer,
  },
});

export default store;
