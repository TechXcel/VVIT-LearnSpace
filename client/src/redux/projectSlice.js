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

export const getUserProjects = createAsyncThunk(
  "/api/v1/projects/student",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/v1/projects/student", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("data from fun", response.data);
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
      const response = await axios.patch(`/api/v1/projects/${payload}`, null, {
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

export const addProject = createAsyncThunk(
  "/api/v1/projects/add",
  async (payload, { rejectWithValue }) => {
    console.log(payload);
    try {
      const response = await axios.post("/api/v1/projects/add", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(payload);
      console.log(response.data);
      return response.data;
    } catch (error) {
      if (!error.response) {
        console.log("slice error", error);
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
    builder.addCase(addProject.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addProject.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      toast.success(payload.message);
    });
    builder.addCase(addProject.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload?.message || "Something went wrong");
    });
    builder.addCase(getUserProjects.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getUserProjects.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.projects = payload.data.projects;
      console.log("inside builder", state.projects);
      toast.success(payload.message);
    });
    builder.addCase(getUserProjects.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(payload.message);
    });
  },
});

export default projectSlice.reducer;
