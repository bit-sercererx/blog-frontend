import { useEffect } from "react";
import { getAllBlogs } from "../store/blog/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import BlogItem from "../components/BlogItem";
const Blog = () => {
  const blog = useSelector((state) => state.blog.blogData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-5 mt-3 ">
      {blog?.map((blogitem) => (
        <BlogItem key={blogitem.id} blogitem={blogitem} />
      ))}
    </div>
  );
};
export default Blog;
