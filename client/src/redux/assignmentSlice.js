import axios from "@/utils/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const getAllAssignments = createAsyncThunk(
  "/api/v1/assignments",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/v1/assignments", {
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

export const getEveryAssignment = createAsyncThunk(
  "/api/v1/assignments/all",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/v1/assignments/all");
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

export const deleteAssignment = createAsyncThunk(
  "/api/v1/assignments/:assignmentId",
  async (payload, { rejectWithValue }) => {
    console.log(payload);
    try {
      const response = await axios.delete(`/api/v1/assignments/${payload}`, {
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

export const addAssignment = createAsyncThunk(
  "/api/v1/assignments (post)",
  async (payload, { rejectWithValue }) => {
    console.log(payload);
    try {
      const response = await axios.post("/api/v1/assignments", payload, {
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

export const assignmentSlice = createSlice({
  name: "assignment",
  initialState: {
    assignments: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllAssignments.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllAssignments.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.assignments = payload.data.assignments;
      console.log(state.assignments);
      toast.success(payload.message);
    });
    builder.addCase(getAllAssignments.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(payload.message);
    });
    builder.addCase(getEveryAssignment.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getEveryAssignment.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.assignments = payload.data.assignments;
      toast.success(payload.message);
    });
    builder.addCase(getEveryAssignment.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(payload.message);
    });
    builder.addCase(deleteAssignment.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deleteAssignment.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.assignments = payload.data.assignments;
      toast.success(payload.message);
    });
    builder.addCase(deleteAssignment.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(payload.message);
    });
    builder.addCase(addAssignment.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addAssignment.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.assignments = payload.data.assignments;
      toast.success(payload.message);
    });
    builder.addCase(addAssignment.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(payload.message);
    });
  },
});

export default assignmentSlice.reducer;
