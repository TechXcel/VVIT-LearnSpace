import axios from "@/utils/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const getAllNotes = createAsyncThunk(
  "/api/v1/resources/notes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/v1/resources/notes", {
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

// export const deleteProject = createAsyncThunk(
//   "/api/v1/projects/:projectId",
//   async (payload, { rejectWithValue }) => {
//     console.log(payload);
//     try {
//       const response = await axios.delete(`/api/v1/projects/${payload}`, {
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

export const resourceSlice = createSlice({
  name: "resource",
  initialState: {
    notes: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllNotes.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllNotes.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.notes = payload.data.notes;
      console.log(state.notes);
      toast.success(payload.message);
    });
    builder.addCase(getAllNotes.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(payload.message);
    });
    // builder.addCase(deleteProject.pending, (state) => {
    //   state.isLoading = true;
    //   state.error = null;
    // });
    // builder.addCase(deleteProject.fulfilled, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.projects = payload.data.projects;
    //   toast.success(payload.message);
    // });
    // builder.addCase(deleteProject.rejected, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    //   toast.error(payload.message);
    // });
  },
});

export default resourceSlice.reducer;
