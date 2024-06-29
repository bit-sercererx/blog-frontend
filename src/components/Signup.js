import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { signupUser } from "../store/user/userSlice";
import { useDispatch } from "react-redux";
const Signup = () => {
  const dispatch = useDispatch();
  const [fullName, setfullName] = useState("");
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  let newUserData = {
    fullName,
    userName,
    email,
    password,
  };
  const handleCreateUser = (e) => {
    e.preventDefault();

    dispatch(signupUser(newUserData));
  };

  return (
    <div class="h-96 flex items-center justify-center mt-[25%] md:mt-[10%] mb-[20%] ">
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
            Login
          </h2>
          <form class="space-y-5">
            <input
              class="w-full h-12 border border-gray-800 px-3 "
              placeholder="Full Name"
              type="text"
              onChange={(e) => {
                setfullName(e.target.value);
              }}
            />
            <input
              class="w-full h-12 border border-gray-800 px-3 "
              placeholder="User Name"
              type="text"
              onChange={(e) => {
                setuserName(e.target.value);
              }}
            />
            <input
              class="w-full h-12 border border-gray-800 px-3 "
              placeholder="Email"
              type="email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />

            <input
              class="w-full h-12 border border-gray-800 px-3 "
              placeholder="Password"
              type="password"
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
            <button
              class="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={handleCreateUser}
            >
              Sign in
            </button>
            <a class="text-blue-500 hover:text-blue-800 text-sm" href="#">
              Signin?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
