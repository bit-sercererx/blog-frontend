import { useSelector } from "react-redux";
import { getoneBlog } from "../store/blog/blogSlice";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
const FilterBlog = () => {
  const oneCategory = useSelector((state) => state.category.oneCategory);
  const comment = useSelector((state) => state.comment.comment);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBlog = (blogId) => {
    dispatch(getoneBlog(blogId));
    navigate("/one-blog");
  };

  return (
    <div>
      {oneCategory ? (
        <div className="w-96 m-2 bg-gray-600 p-4">
          <img
            src={`http://localhost:8000/${oneCategory.blog.image}`}
            className="rounded-sm"
          />
          <h1 className="text-2xl font-bold text-white m-2">
            {oneCategory.blog.title}
          </h1>
          <div className="  ">
            {" "}
            <p className="line-clamp-4 text-white my-2	">
              {oneCategory.blog.Introduction}
            </p>
            <button class="relative group cursor-pointer text-sky-50  overflow-hidden h-16 w-[350px] rounded-md bg-gray-500 p-2 flex justify-center items-center font-extrabold ">
              <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-40 h-40 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-600"></div>
              <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-32 h-32 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-700"></div>
              <div class="absolute top-3 right-20 group-hover:top-12 group-hover:-right-12 z-10 w-24 h-24 rounded-full group-hover:scale-150 group-hover:opacity-50 duration-500 bg-gray-800"></div>
              <p
                class="z-10 absolute"
                onClick={() => handleBlog(oneCategory.blog._id)}
              >
                Read More
              </p>
            </button>
          </div>
        </div>
      ) : (
        <div className="w-svw h-svh flex justify-center items-center">
          <div class="animate-pulse flex flex-col items-center gap-4 w-60">
            <div>
              <div class="w-48 h-6 bg-slate-400 rounded-md"></div>
              <div class="w-28 h-4 bg-slate-400 mx-auto mt-3 rounded-md"></div>
            </div>
            <div class="h-7 bg-slate-400 w-full rounded-md"></div>
            <div class="h-7 bg-slate-400 w-full rounded-md"></div>
            <div class="h-7 bg-slate-400 w-full rounded-md"></div>
            <div class="h-7 bg-slate-400 w-1/2 rounded-md"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterBlog;
