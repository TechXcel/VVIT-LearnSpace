import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/authSlice";
import userReducer from "@/redux/userSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export default store;
