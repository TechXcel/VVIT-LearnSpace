import axios from "@/utils/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const getAllStudents = createAsyncThunk(
  "/api/v1/users/students",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/v1/users/students", {
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

export const deleteStudent = createAsyncThunk(
  "/api/v1/users/:studentId",
  async (payload, { rejectWithValue }) => {
    console.log(payload);
    try {
      const response = await axios.delete(`/api/v1/users/${payload}`, {
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

const userSlice = createSlice({
  name: "user",
  initialState: {
    students: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllStudents.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllStudents.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.students = payload.data.students;
      toast.success(payload.message);
    });
    builder.addCase(getAllStudents.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(payload.message);
    });

    builder.addCase(deleteStudent.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deleteStudent.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.students = payload.data.students;
      toast.success(payload.message);
    });
    builder.addCase(deleteStudent.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(payload.message);
    });
  },
});

export default userSlice.reducer;
