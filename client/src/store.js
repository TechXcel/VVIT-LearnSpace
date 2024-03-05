import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/authSlice";
import userReducer from "@/redux/userSlice";
import projectReducer from "@/redux/projectSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    projects:projectReducer
   
  },
});

export default store;
