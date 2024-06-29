import axios from "axios";
import "./App.css";
import NavBar from "./components/NavBar";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import { useEffect } from "react";
import CreateBlog from "./components/CreateBlog";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Category from "./pages/Category";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import FilterBlog from "./pages/filterBlog";
import OneBlog from "./pages/OneBlog";
function App() {
  const user = useSelector((state) => state.user.UserData);

  return (
    <div>
      {" "}
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/category" element={<Category />} />
          <Route path="/sigin" element={<Signin />} />
          <Route path="/sigup" element={<Signup />} />
          <Route path="/oneblog" element={<FilterBlog />} />
          <Route path="/creat-blog" element={<CreateBlog />} />
          <Route path="/one-blog" element={<OneBlog />} />
          <Route path="/blog-category" element={<OneBlog />} />

          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
