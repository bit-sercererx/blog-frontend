import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./user/userSlice";
import BLogReducer from "./blog/blogSlice";
import CategoryReducer from "./category/categorySlice";
import CommentReducer from "./comment/commentSlice";

export const store = configureStore({
  reducer: {
    user: UserReducer,
    blog: BLogReducer,
    category: CategoryReducer,
    comment: CommentReducer,
  },
});
