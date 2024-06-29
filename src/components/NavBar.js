import { IoMdSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCancelPresentation } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logout } from "../store/user/userSlice";
const NavBar = () => {
  const isLogged = useSelector((state) => state.user.isLogged);
  const [isSearch, setisSeearch] = useState(true);

  const handleSearch = () => {
    setisSeearch(!isSearch);
  };

 

  const [nav, setnav] = useState(true);
  const dispatch = useDispatch();
  const handleNav = () => {
    setnav(!nav);
  };
  const handleLogOut = () => {
    dispatch(logout());
    localStorage.removeItem("user");
  };

  return (
    <div className=" ">
      <div className="md:hidden flex justify-between ">
        <div className="mt-2 m-1 ">Logo</div>

        {!nav ? (
          <div className="w-36  bg-black flex justify-center opacity-[0.6]">
            {" "}
            <div className="text-white  ">
              <div className="flex justify-center">
                <MdCancelPresentation
                  className=" text-2xl mt-2 cursor-pointer"
                  onClick={handleNav}
                />
              </div>
              <ul className="text-center cursor-pointer">
                <li className="m-4">Home</li>
                <li className="m-4">Blog</li>
                <li className="m-4">category</li>
                <li className="m-4">About Us</li>
                <li className="mt-14 bg-red-800 p-1 mb-2 text-center">Login</li>
              </ul>
            </div>
          </div>
        ) : (
          <div>
            <RxHamburgerMenu
              className="text-2xl cursor-pointer mt-2 m-1"
              onClick={handleNav}
            />
          </div>
        )}
      </div>
      <div className="  justify-between mt-2 mx-5">
        <div className=" hidden md:flex md:justify-between">
          {" "}
          <div>Logo</div>
          <ul className=" cursor-pointer hidden md:flex gap-7">
            <Link to="/">
              {" "}
              <li className="mt-1">Home</li>
            </Link>
            <Link to="/blog">
              {" "}
              <li className="mt-1">Blog</li>{" "}
            </Link>
            <Link to="/category">
              {" "}
              <li className="mt-1">category</li>
            </Link>
            <Link to="/sigin">
              {" "}
              <li>
                {isLogged ? (
                  <button class=" relative hover:text-white py-1 px-4 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-gray-800 after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-800">
                    Login{" "}
                  </button>
                ) : (
                  <button
                    onClick={handleLogOut}
                    class=" relative hover:text-white py-1 px-4 after:absolute after:h-1 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden z-20 after:z-[-20] after:bg-red-600 after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-red-600"
                  >
                    Log Out{" "}
                  </button>
                )}
              </li>{" "}
            </Link>

            <li className="mt-2 ">
              {isSearch ? (
                <IoMdSearch onClick={handleSearch} />
              ) : (
                <div className="flex border-2 border-solid border-black">
                  <input></input>
                  <IoMdSearch className="text-xl" onClick={handleSearch} />
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
