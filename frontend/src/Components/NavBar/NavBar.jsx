import { Link, NavLink, useNavigate } from "react-router-dom";
import { LogoutUserApiCall } from "../Authentication/AuthApiCalls.js";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Styles = {
  activeNavs: "text-darkB bg-content py-2 px-2 rounded-md",
};

const NavBar = () => {
  const [rightOpen, setRightOpen] = useState(true);
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("UserData"));

  const handleLogout = () => {
    LogoutUserApiCall();
    localStorage.setItem("login", "false");
    navigate("/");
  };
  return (
    <>
      <button
        onClick={() => setRightOpen(!rightOpen)}
        className='md:hidden fixed top-5 left-5 z-50 bg-buttonB/50 opacity-bg-10 text-white p-2 font-extrabold rounded-md shadow-md '
      >
        {rightOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div
        className={`flex flex-col justify-between fixed max-h-screen md:static ${
          rightOpen ? "w-64" : "hidden"
        } gap-3 bg-[#DAD2FF] rounded-r-2xl h-screen`}
      >
        <div className='flex flex-col py-2 px-5 gap-5 mt-15 md:mt-0'>
          <h1 className='text-buttonL text-2xl font-semibold tracking-wide rounded-md'>
            Sections
          </h1>
          <NavLink
            to='/main/recent'
            className={({ isActive }) => `${isActive ? Styles.activeNavs : ""}`}
          >
            Latest
          </NavLink>
          <NavLink
            to='/main'
            className={({ isActive }) => `${isActive ? Styles.activeNavs : ""}`}
            end
          >
            Older
          </NavLink>
          <NavLink
            to='/main/trending'
            className={({ isActive }) => `${isActive ? Styles.activeNavs : ""}`}
          >
            Popular
          </NavLink>
          <h1 className='text-buttonL text-2xl font-semibold tracking-wide rounded-md'>
            Catagories
          </h1>
          <NavLink
            to='/main/technology'
            className={({ isActive }) => `${isActive ? Styles.activeNavs : ""}`}
          >
            Technology
          </NavLink>
          <NavLink
            to='/main/education'
            className={({ isActive }) => `${isActive ? Styles.activeNavs : ""}`}
          >
            Education
          </NavLink>
          <NavLink
            to='/main/entertainment'
            className={({ isActive }) => `${isActive ? Styles.activeNavs : ""}`}
          >
            Entertainment
          </NavLink>
          <NavLink
            to='/main/lifestyle'
            className={({ isActive }) => `${isActive ? Styles.activeNavs : ""}`}
          >
            Life Style
          </NavLink>
          <h1 className='text-buttonL text-2xl font-semibold tracking-wide rounded-md'>
            User Actions
          </h1>
          <NavLink
            to='/main/createPost'
            className={({ isActive }) => `${isActive ? Styles.activeNavs : ""}`}
            end
          >
            Create Post
          </NavLink>
        </div>

        <div className='rounded-sm py-2 px-2 bg-[#B2A5FF] flex flex-col justify-around items-center font-medium'>
          <Link to='/main/myProfile'>
            <img
              src={data.photoUrl}
              alt='image'
              className='w-20 h-20 object-cover rounded-full'
            />
          </Link>
          <button
            onClick={handleLogout}
            className='hover:cursor-pointer text-buttonT'
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
