import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../store/category/categorySlice";
import { useState } from "react";
import { postBlog } from "../store/blog/blogSlice";
import { useNavigate } from "react-router";
const CreateBlog = () => {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [introduction, steintroduction] = useState("");
  const [type, settype] = useState("");
  console.log("🚀 ~ CreateBlog ~ type:", type);
  const [time, setTime] = useState("");
  const [image, setimage] = useState("");

  const handleImag = (e) => {
    setimage(e.target.files[0]);
  };
  const token = localStorage.getItem("token");
  console.log("🚀 ~ CreateBlog ~ token:", token);

  const category = useSelector((state) => state.category.category);

  const usedispatch = useDispatch();

  useEffect(() => {
    usedispatch(getCategory());
  }, []);

  const navigate = useNavigate();
  const handleCreate = (e) => {
    e.preventDefault();
    const post = { title, content, time, introduction, image };
    usedispatch(postBlog({ post, token }));
    navigate("/blog");
  };
  return (
    <div class=" flex items-center justify-center mt-[25%] md:mt-[5%] mb-[10%] ">
      <div class="relative">
        <div class="absolute -top-2 -left-2 -right-2 -bottom-2  bg-gradient-to-r from-slate-500 to-black shadow-lg animate-pulse "></div>
        <div
          id="form-container"
          class="bg-white p-16 rounded-lg shadow-2xl w-80 md:w-auto relative z-10 transform transition duration-500 ease-in-out"
        >
          <h2
            id="form-title"
            class="text-center text-3xl font-bold mb-10 text-gray-800"
          >
            Create New Blog
          </h2>
          <form class="space-y-5">
            <input
              class="w-full h-12 border border-gray-800 px-3 "
              placeholder="Title"
              type="text"
              onChange={(e) => settitle(e.target.value)}
            />
            <input
              class="w-full h-12 border border-gray-800 px-3 "
              placeholder="introduction"
              type="text"
              onChange={(e) => steintroduction(e.target.value)}
            />
            <input
              class="w-full h-12 border border-gray-800 px-3 "
              placeholder="Time"
              type="text"
              onChange={(e) => setTime(e.target.value)}
            />

            <select className="w-full border-[1px] border-solid border-black">
              {category?.map((categ) => (
                <option
                  value={categ._id}
                  onChange={(e) => settype(e.target.value)}
                >
                  {categ.name}
                </option>
              ))}
            </select>

            <textarea
              placeholder="content"
              class="w-full h-24 border border-gray-800 px-3 "
              onChange={(e) => setcontent(e.target.value)}
            ></textarea>

            <div class="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                  onChange={handleImag}
                />
              </label>
            </div>

            <button
              onClick={handleCreate}
              class="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
