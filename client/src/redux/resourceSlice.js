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
      const response = await axios.delete(
        `/api/v1/resources/notes/${payload}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
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
      const response = await axios.delete(
        `/api/v1/resources/papers/${payload}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
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
      const response = await axios.delete(
        `/api/v1/resources/research/${payload}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
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
      const response = await axios.patch(
        `/api/v1/resources/notes/${payload}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      if (!error.response) {
        console.log(error);
        return error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getUserNotes = createAsyncThunk(
  "/api/v1/resources/student/notes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/v1/resources/student/notes", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      //console.log("data from fun",response.data);
      return response.data;
    } catch (error) {
      if (!error.response) {
        return error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getUserPaper = createAsyncThunk(
  "/api/v1/resources/student/papers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/v1/resources/student/papers", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      //console.log("data from fun",response.data);
      return response.data;
    } catch (error) {
      if (!error.response) {
        return error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const getUserResearchPapers = createAsyncThunk(
  "/api/v1/resources/student/research",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/v1/resources/student/research", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      //console.log("data from fun",response.data);
      return response.data;
    } catch (error) {
      if (!error.response) {
        return error;
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const addNotes = createAsyncThunk(
  "/api/v1/resources/add",
  async (payload, { rejectWithValue }) => {
    console.log(payload);
    try {
      const response = await axios.post("/api/v1/resources/add", payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("payload is", payload);
      console.log("res data", response.data);
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

export const resourceSlice = createSlice({
  name: "resource",
  initialState: {
    notes: [],
    papers: [],
    research: [],
    resources: [],
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
      state.resources = payload.data.resources;
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
    builder.addCase(getUserNotes.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getUserNotes.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.resources = payload.data.resources;
      //console.log("inside builder",state.projects);
      toast.success(payload.message);
    });
    builder.addCase(getUserNotes.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(payload.message);
    });
    builder.addCase(getUserPaper.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getUserPaper.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.papers = payload.data.papers;
      //console.log("inside builder",state.projects);
      toast.success(payload.message);
    });
    builder.addCase(getUserPaper.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(payload.message);
    });
    builder.addCase(getUserResearchPapers.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getUserResearchPapers.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.research = payload.data.research;
      console.log("inside builder", state.research);
      toast.success(payload.message);
    });
    builder.addCase(getUserResearchPapers.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      toast.error(payload.message);
    });
    builder.addCase(addNotes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addNotes.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.resources = payload.data.resources;
      toast.success(payload.message);
    });
    builder.addCase(addNotes.rejected, (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload?.message || "Something went wrong");
    });
  },
});

export default resourceSlice.reducer;
