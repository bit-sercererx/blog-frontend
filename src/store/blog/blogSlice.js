import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllBlogs = createAsyncThunk("Blog/getAllBlogs", async () => {
  return await axios.get("http://localhost:8000/blog").then((res) => res.data);
});

export const getoneBlog = createAsyncThunk(
  "BLog/getoneBlog",
  async (blogId) => {
    const response = await axios.get(`http://localhost:8000/blog/${blogId}`);
    return response.data;
  }
);

export const postBlog = createAsyncThunk(
  "Blog/postBlog",
  async ({ post, token }) => {
    try {
      const formData = new FormData();

      const { title, content, time, introduction, image } = post;
      formData.append("title", title);
      formData.append("content", content);
      formData.append("time", time);
      formData.append("introduction", introduction);
      formData.append("image", image);
      const res = await axios.post("http://localhost:8000/blog", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      console.error(error.message);
    }
  }
);

const initialState = {
  isloding: true,
  blogData: [],
  error: null,
  oneBlog: null,
};

const blogSlice = createSlice({
  name: "Blog",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllBlogs.pending, (state) => {
      state.isloding = true;
    });
    builder.addCase(getAllBlogs.fulfilled, (state, action) => {
      state.isloding = false;
      state.blogData = action.payload;
      state.error = null;
    });
    builder.addCase(getAllBlogs.rejected, (state, action) => {
      state.isloding = true;
      state.blogData = action.error.message;
    });
    builder.addCase(getoneBlog.pending, (state) => {
      state.oneBlog = null;
      state.error = null;
    });
    builder.addCase(getoneBlog.fulfilled, (state, action) => {
      state.isloding = false;
      state.oneBlog = action.payload;
      state.error = null;
    });
    builder.addCase(getoneBlog.rejected, (state, action) => {
      state.isloding = false;
      state.oneBlog = null;
      state.error = action.error.message;
    });
  },
});
export default blogSlice.reducer;
