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



export const getAllPapers = createAsyncThunk(
  "/api/v1/resources/papers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/v1/resources/papers", {
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

export const getAllResearchPapers = createAsyncThunk(
  "/api/v1/resources/research",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/v1/resources/research", {
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

export const deleteNotes = createAsyncThunk(
  "/api/v1/resources/notes/:notesId",
  async (payload, { rejectWithValue }) => {
    console.log(payload);
    try {
      const response = await axios.delete(`/api/v1/resources/notes/${payload}`, {
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

export const deletePapers = createAsyncThunk(
  "/api/v1/resources/papers/:paperId",
  async (payload, { rejectWithValue }) => {
    console.log(payload);
    try {
      const response = await axios.delete(`/api/v1/resources/papers/${payload}`, {
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

export const deleteResearch = createAsyncThunk(
  "/api/v1/resources/research/:researchId",
  async (payload, { rejectWithValue }) => {
    console.log(payload);
    try {
      const response = await axios.delete(`/api/v1/resources/research/${payload}`, {
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

export const approveNotes = createAsyncThunk(
  "/api/v1/resources/notes/:notesId(approval)",
  async (payload, { rejectWithValue }) => {
    console.log("payload is", payload);
    try {
      const response = await axios.patch(`/api/v1/resources/notes/${payload}`,null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(response.data)
      return response.data;
    } catch (error) {
      if (!error.response) {
        console.log(error)
        return error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);


export const resourceSlice = createSlice({
  name: "resource",
  initialState: {
    notes: [],
    papers:[],
    research:[],
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
      //console.log(state.notes);
      toast.success(payload.message);
    });
    builder.addCase(getAllNotes.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(payload.message);
    });
    builder.addCase(getAllPapers.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllPapers.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.papers = payload.data.papers;
      console.log(state.papers);
      toast.success(payload.message);
    });
    builder.addCase(getAllPapers.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(payload.message);
    });
    builder.addCase(getAllResearchPapers.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllResearchPapers.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.research = payload.data.research;
      console.log(state.research);
      toast.success(payload.message);
    });
    builder.addCase(getAllResearchPapers.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(payload.message);
    });
    builder.addCase(deleteNotes.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deleteNotes.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.notes = payload.data.notes;
      toast.success(payload.message);
    });
    builder.addCase(deleteNotes.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(payload.message);
    });
    builder.addCase(deletePapers.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deletePapers.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.papers = payload.data.papers;
      toast.success(payload.message);
    });
    builder.addCase(deletePapers.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(payload.message);
    });
    builder.addCase(deleteResearch.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(deleteResearch.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.research = payload.data.research;
      toast.success(payload.message);
    });
    builder.addCase(deleteResearch.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(payload.message);
    });
    builder.addCase(approveNotes.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(approveNotes.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.notes = payload.data.notes;
      toast.success(payload.message);
    });
    builder.addCase(approveNotes.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(payload.message);
    });
  },
});

export default resourceSlice.reducer;
