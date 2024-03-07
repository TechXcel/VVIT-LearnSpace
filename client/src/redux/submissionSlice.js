import axios from "@/utils/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const getSubmissionsByProblem = createAsyncThunk(
  "/api/v1/submissions/:projectId",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/v1/submissions/${payload}`, {
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

// export const deletesubmission = createAsyncThunk(
//   "/api/v1/submissions/:submissionId",
//   async (payload, { rejectWithValue }) => {
//     console.log(payload);
//     try {
//       const response = await axios.delete(`/api/v1/submissions/${payload}`, {
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

// export const addsubmission = createAsyncThunk(
//   "/api/v1/submissions",
//   async (payload, { rejectWithValue }) => {
//     // for (const [key, value] of payload.entries()) {
//     //   console.log(key, value);
//     // }
//     try {
//       const response = await axios.post("/api/v1/submissions", payload, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       if (!error.response) {
//         return error;
//       }
//       return rejectWithValue(error?.response?.data);
//     }
//   }
// );

export const submissionSlice = createSlice({
  name: "submission",
  initialState: {
    submissions: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSubmissionsByProblem.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getSubmissionsByProblem.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.submissions = payload.data.submissions;
      console.log(state.submissions);
      toast.success(payload.message);
    });
    builder.addCase(getSubmissionsByProblem.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(payload.message);
    });
    // builder.addCase(deletesubmission.pending, (state) => {
    //   state.isLoading = true;
    //   state.error = null;
    // });
    // builder.addCase(deletesubmission.fulfilled, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.submissions = payload.data.submissions;
    //   toast.success(payload.message);
    // });
    // builder.addCase(deletesubmission.rejected, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    //   toast.error(payload.message);
    // });
    // builder.addCase(addsubmission.pending, (state) => {
    //   state.isLoading = true;
    //   state.error = null;
    // });
    // builder.addCase(addsubmission.fulfilled, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.submissions = payload.data.submissions;
    //   toast.success(payload.message);
    // });
    // builder.addCase(addsubmission.rejected, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    //   toast.error(payload.message);
    // });
  },
});

export default submissionSlice.reducer;
