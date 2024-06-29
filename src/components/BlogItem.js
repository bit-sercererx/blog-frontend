import { useNavigate } from "react-router";
import { getoneBlog } from "../store/blog/blogSlice";
import { useDispatch, useSelector } from "react-redux";
const BlogItem = ({ blogitem }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBlog = (blogId) => {
    dispatch(getoneBlog(blogId));
    navigate("/one-blog");
  };

  return (
    <div className="w-96 m-2 bg-gray-600 p-4">
      <img
        src={`http://localhost:8000/${blogitem.image}`}
        className="rounded-sm"
      />
      <h1 className="text-2xl font-bold text-white m-2">{blogitem.title}</h1>
      <div className="  ">
        {" "}
        <p className="line-clamp-4 text-white my-2	">{blogitem.Introduction}</p>
        <button
          class="relative group cursor-pointer text-sky-50  overflow-hidden h-16 w-[350px] rounded-md bg-gray-500 p-2 flex justify-center items-center font-extrabold "
          onClick={() => handleBlog(blogitem._id)}
        >
          <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-600"></div>
          <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
          <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-800"></div>
          <p class="z-10 absolute">See More</p>
        </button>
      </div>
    </div>
  );
};
export default BlogItem;
