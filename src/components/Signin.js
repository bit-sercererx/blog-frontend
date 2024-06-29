import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/user/userSlice";
import { logout } from "../store/user/userSlice";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Signin = () => {
  const user = useSelector((state) => state.user.UserData);

  const [userName, setuserName] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLog = (e) => {
    e.preventDefault();
    let userData = {
      userName,
      password,
    };

    dispatch(loginUser(userData));

    navigate("/");
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logout());
    localStorage.removeItem("user");
  };

  return (
    <div class="h-96 flex items-center justify-center mt-[25%] md:mt-[10%] mb-10 ">
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
              placeholder="User Name"
              type="text"
              onChange={(e) => {
                setuserName(e.target.value);
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
              onClick={handleLog}
              class="w-full h-12 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign in
            </button>
            <Link to="/sigup">
              <a class="text-blue-500 hover:text-blue-800 text-sm" href="#">
                Signup?
              </a>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signin;
