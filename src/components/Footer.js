const Footer = () => {
  return (
    <div className="h-[200px] w-screen bg-gray-800 flex flex-col justify-between overflow-x-hidden ">
      <div className="flex justify-between mx-20 pt-6 text-white">
        <h1>Blog name</h1>
        <ul className="flex gap-5">
          <li>Blog</li>
          <li>CreateBlog</li>
          <li>About us</li>
        </ul>
      </div>
      <hr className=" mx-16" />
      <div className=" mx-20 mb-4 text-white ">@2024 </div>
    </div>
  );
};
export default Footer;
