import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategory = createAsyncThunk(
  "Category/getCategory",
  async () => {
    return await axios
      .get("http://localhost:8000/categorie")
      .then((res) => res.data);
  }
);
export const getOneCategory = createAsyncThunk(
  "category/getOneCategory",
  async (id) => {
    try {
      return await axios
        .get(`http://localhost:8000/categorie/${id}`)
        .then((res) => res.data);
    } catch (error) {
      console.log(error);
      return null;
    }
  }
);
const initialState = {
  isloading: true,
  category: [],
  error: null,
  oneCategory: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCategory.pending, (state) => {
      state.isloading = true;
      state.category = null;
      state.error = null;
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.isloading = false;
      state.category = action.payload;
      state.error = null;
    });
    builder.addCase(getCategory.rejected, (state, action) => {
      state.isloading = false;
      state.category = null;
      state.error = action.error.message;
    });
    builder.addCase(getOneCategory.pending, (state) => {
      state.oneCategory = null;
    });
    builder.addCase(getOneCategory.fulfilled, (state, action) => {
      state.oneCategory = action.payload;
    });
    builder.addCase(getOneCategory.rejected, (state, action) => {
      state.oneCategory = null;
      state.error = action.error.message;
    });
  },
});
export default categorySlice.reducer;
