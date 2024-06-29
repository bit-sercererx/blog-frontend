import { Link } from "react-router-dom";
import homeImage from "../assets/images/home.jpg";

const Home = () => {
  return (
    <div className="">
      <div className=" ">
        <h1 className=" absolute bottom-[30%] left-[10%] text-4xl font-bold">
          Unleash Your Creativity
        </h1>
        <Link to="/creat-blog">
          <button class="absolute bottom-[20%] left-[10%] border hover:border-gray-100 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-gray-400 p-2 flex justify-center items-center font-extrabold">
            <div class="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-gray-500 group-hover:delay-75"></div>
            <div class="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-gray-600 delay-150 group-hover:delay-100"></div>
            <div class="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-gray-700 delay-150 group-hover:delay-150"></div>
            <div class="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-gray-800 delay-150 group-hover:delay-200"></div>
            <div class="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-gray-900 delay-150 group-hover:delay-300"></div>
            <p class="z-10 text-2xl">Create Blog</p>
          </button>
        </Link>

        <img src={homeImage} className="" />
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};
export default Home;
