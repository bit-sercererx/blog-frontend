import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getComment } from "../store/comment/commentSlice";
import { createComment } from "../store/comment/commentSlice";
import person from "../assets/images/person.png";
const OneBlog = () => {
  const oneblog = useSelector((state) => state.blog.oneBlog);
  const comment = useSelector((state) => state.comment.comment);
  const filterComment = comment?.filter((come) => come?.Blog === oneblog?._id);
  console.log("🚀 ~ OneBlog ~ filterComment:", filterComment);
  const [newComment, setNewComment] = useState("");

  const token = localStorage.getItem("token");

  const newInfoComment = { comment: newComment, Blog: oneblog?._id };

  const handleNewComment = () => {
    dispatch(createComment({ newInfoComment, token }));
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getComment());
  }, []);

  return (
    <div>
      {oneblog ? (
        <div>
          <img
            src={`http://localhost:8000/${oneblog.image}`}
            className="w-[65%] m-auto mt-5"
          />
          <div className="flex w-[65%] m-auto  ">
            {" "}
            <h1 className=" text-3xl font-bold my-5">{oneblog.title}</h1>{" "}
            <span className=" mt-7 ml-5">{oneblog.data}</span>
          </div>
          <p className=" w-[65%] m-auto text-2xl mt-4 ">
            {oneblog.Introduction}
          </p>
          <p className="w-[65%] m-auto my-10 text-justify leading-7 text-[18px]	">
            {oneblog.content}
          </p>
          <div className=" text-3xl w-[65%] m-auto mb-2"> Comment:</div>
          <div className="bg-gray-800 w-[65%] m-auto mb-10 ">
            <div className="p-5">
              <h1 className=" text-white">
                {filterComment?.map((comme) => (
                  <div className="flex m-2 p-2 ">
                    <img className="w-11" src={person} />
                    <div className="ml-2">
                      <h1>{comme.User.fullName}</h1>
                      <h1 className="text-[14px] text-gray-400">
                        {comme.comment}
                      </h1>
                    </div>
                  </div>
                ))}
              </h1>
            </div>
            <div className="flex">
              <textarea
                placeholder="your comment"
                className=" w-[95%] m-5 p-2"
                onChange={(e) => setNewComment(e.target.value)}
              ></textarea>
              <button
                className="bg-white h-16 mt-5 mr-3 p-2
              "
                onClick={handleNewComment}
              >
                Send
              </button>
            </div>
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
export default OneBlog;
