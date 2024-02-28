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

const token = localStorage.getItem("token");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    token: token,
    isLoading: false,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(adminLogin.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(adminLogin.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.user = payload.data.admin;
      localStorage.setItem("token", payload.data.accessToken);
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
      localStorage.setItem("token", payload.data.accessToken);
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
