import axios from "@/utils/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const getAllProjects = createAsyncThunk(
  "/api/v1/projects",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/v1/projects", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      if (!error.response) {
        return error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const deleteProject = createAsyncThunk(
  "/api/v1/projects/:projectId",
  async (payload, { rejectWithValue }) => {
    console.log(payload);
    try {
      const response = await axios.delete(`/api/v1/projects/${payload}`, {
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

export const approveProject = createAsyncThunk(
  "/api/v1/projects/:projectId(approval)",
  async (payload, { rejectWithValue }) => {
    console.log(payload);
    try {
      const response = await axios.patch(`/api/v1/projects/${payload}`, {
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

export const projectSlice = createSlice({
  name: "project",
  initialState: {
    projects: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProjects.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllProjects.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.projects = payload.data.projects;
      console.log(state.projects);
      toast.success(payload.message);
    });
    builder.addCase(getAllProjects.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(payload.message);
    });
    builder.addCase(deleteProject.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deleteProject.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.projects = payload.data.projects;
      toast.success(payload.message);
    });
    builder.addCase(deleteProject.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(payload.message);
    });

    builder.addCase(approveProject.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(approveProject.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.projects = payload.data.projects;
      toast.success(payload.message);
    });
    builder.addCase(approveProject.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(payload.message);
    });
  },
});

export default projectSlice.reducer;
