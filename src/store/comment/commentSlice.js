import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getComment = createAsyncThunk("comment/getComment", async () => {
  return await axios
    .get("http://localhost:8000/comment")
    .then((res) => res.data);
});
export const createComment = createAsyncThunk(
  "comment/createComment",
  async ({ newInfoComment, token }) => {
    return await axios
      .post("http://localhost:8000/comment", newInfoComment, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => res.data);
  }
);

const initialState = {
  isloading: true,
  comment: null,
  error: null,
  newComment: null,
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getComment.pending, (state) => {
      state.isloading = true;
      state.comment = null;
      state.error = null;
    });
    builder.addCase(getComment.fulfilled, (state, action) => {
      state.isloading = false;
      state.comment = action.payload;
      state.error = null;
    });
    builder.addCase(getComment.rejected, (state, action) => {
      state.isloading = false;
      state.comment = null;
      state.error = action.error.message;
    });
    builder.addCase(createComment.pending, (state) => {
      state.isloading = true;
      state.newComment = null;
      state.error = null;
    });
    builder.addCase(createComment.fulfilled, (state, action) => {
      state.isloading = false;
      state.newComment = action.payload;
      state.error = null;
    });
    builder.addCase(createComment.rejected, (state, action) => {
      state.isloading = false;
      state.newComment = null;
      state.error = action.error.message;
    });
  },
});
export default commentSlice.reducer;
