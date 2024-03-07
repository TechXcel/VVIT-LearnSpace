import axios from "@/utils/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const getProblemsByAssignment = createAsyncThunk(
  "/api/v1/problems/:assignmentId",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/v1/problems/${payload}`, {
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

// export const deleteProblem = createAsyncThunk(
//   "/api/v1/problems/:problemId",
//   async (payload, { rejectWithValue }) => {
//     console.log(payload);
//     try {
//       const response = await axios.delete(`/api/v1/problems/${payload}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       return response.data;
//     } catch (error) {
//       if (!error.response) {
//         return error;
//       }
//       return rejectWithValue(error?.response?.data);
//     }
//   }
// );

export const addProblem = createAsyncThunk(
  "/api/v1/problems",
  async (payload, { rejectWithValue }) => {
    // for (const [key, value] of payload.entries()) {
    //   console.log(key, value);
    // }
    try {
      const response = await axios.post("/api/v1/problems", payload, {
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

export const problemSlice = createSlice({
  name: "problem",
  initialState: {
    problems: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProblemsByAssignment.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getProblemsByAssignment.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.problems = payload.data.problems;
      console.log(state.problems);
      toast.success(payload.message);
    });
    builder.addCase(getProblemsByAssignment.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(payload.message);
    });
    // builder.addCase(deleteProblem.pending, (state) => {
    //   state.isLoading = true;
    //   state.error = null;
    // });
    // builder.addCase(deleteproblem.fulfilled, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.problems = payload.data.problems;
    //   toast.success(payload.message);
    // });
    // builder.addCase(deleteproblem.rejected, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    //   toast.error(payload.message);
    // });
    builder.addCase(addProblem.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(addProblem.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.problems = payload.data.problems;
      toast.success(payload.message);
    });
    builder.addCase(addProblem.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(payload.message);
    });
  },
});

export default problemSlice.reducer;
