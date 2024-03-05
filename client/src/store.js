import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/authSlice";
import userReducer from "@/redux/userSlice";
import projectReducer from "@/redux/projectSlice";
import resourceReducer from "@/redux/resourceSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    project: projectReducer,
    resource: resourceReducer,
  },
});

export default store;
