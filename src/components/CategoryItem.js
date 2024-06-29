import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getOneCategory } from "../store/category/categorySlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const CategoryItem = ({ categorie }) => {
  const oneCategory = useSelector((state) => state.category.oneCategory);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlegetcategory = (cateId) => {
    dispatch(getOneCategory(cateId));
    navigate("/oneblog");
  };

  return (
    <div
      class="div h-[8em] w-[15em] bg-white m-auto  relative group p-2 z-0 overflow-hidden border-2 border-gray-800 border-solid cursor-pointer mb-10"
      onClick={() => {
        handlegetcategory(categorie._id);
      }}
    >
      <div class="h-full w-[20%] bg-gray-200 absolute left-0 bottom-full z-[-1] group-hover:translate-y-full duration-[400ms]"></div>
      <div class="h-full w-[20%] bg-gray-400 absolute left-[20%] top-full z-[-1] group-hover:-translate-y-full duration-[400ms] delay-[50ms]"></div>
      <div class="h-full w-[20%] bg-gray-600 absolute left-[40%] bottom-full z-[-1] group-hover:translate-y-full duration-[400ms] delay-[100ms]"></div>
      <div class="h-full w-[20%] bg-slate-700 absolute left-[60%] top-full z-[-1] group-hover:-translate-y-full duration-[400ms] delay-[150ms]"></div>
      <div class="h-full w-[20%] bg-slate-800 absolute left-[80%] bottom-full z-[-1] group-hover:translate-y-full duration-[400ms] delay-[200ms]"></div>

      <h1 class="z-20 font-bold font-mono text-[2em] group-hover duration-100  ">
        {categorie.name}
      </h1>
    </div>
  );
};
export default CategoryItem;
