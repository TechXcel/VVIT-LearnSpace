import axios from "@/utils/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const adminLogin = createAsyncThunk(
  "/api/v1/admin/login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/v1/admin/login", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      if (!error.response) {
        return error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const userLogin = createAsyncThunk(
  "/api/v1/users/login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/v1/users/login", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return response.data;
    } catch (error) {
      if (!error.response) {
        return error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const userRegister = createAsyncThunk(
  "/api/v1/users/register",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/v1/users/register", payload);
      return response.data;
    } catch (error) {
      if (!error.response) {
        return error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);


const user = localStorage.getItem("user");
const token = localStorage.getItem("token");
const role = localStorage.getItem("role");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: user ? JSON.parse(user) : {},
    token: token,
    isLoading: false,
    role: role,
  },
  reducers: {
    logout: (state) => {
      state.user = {};
      state.token = null;
      state.role = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("role");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(adminLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(adminLogin.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.data.admin;
      state.token = payload.data.accessToken;
      state.role = payload.data.admin.role;
      localStorage.setItem("user", JSON.stringify(payload.data.admin));
      localStorage.setItem("token", payload.data.accessToken);
      localStorage.setItem("role", payload.data.admin.role);
      toast.success(payload.message);
    });
    builder.addCase(adminLogin.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload?.message || "Something went wrong");
    });

    builder.addCase(userLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.data.user;
      state.token = payload.data.accessToken;
      state.role = payload.data.user.role;
      localStorage.setItem("user", JSON.stringify(payload.data.user));
      localStorage.setItem("token", payload.data.accessToken);
      localStorage.setItem("role", payload.data.user.role);
      toast.success(payload.message);
    });
    builder.addCase(userLogin.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload?.message || "Something went wrong");
    });

    builder.addCase(userRegister.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(userRegister.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      toast.success(payload.message);
    });
    builder.addCase(userRegister.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload?.message || "Something went wrong");
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
