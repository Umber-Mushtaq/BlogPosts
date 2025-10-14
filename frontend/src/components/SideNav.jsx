import { IoIosArrowBack } from "react-icons/io";
import { FaBookOpen, FaFireAlt, FaClock } from "react-icons/fa";
import Profile from "../assets/img1.jpg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Authentication from "./Authentication";
import { usePopUp } from "../Context/PopUpContext.jsx";

const SideNav = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { isPopupOpen, handlePop } = usePopUp();

  const NavLinkStyles = ({ isActive }) =>
    `${isActive ? "bg-buttonB text-buttonT rounded-md" : ""}`;

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='fixed top-1/2 left-2 z-50 text-2xl text-buttonT bg-headingS rounded-3xl py-2 px-2'
      >
        <IoIosArrowBack className={` ${isOpen ? "" : "rotate-180"}`} />
      </button>

      <div
        className={`fixed left-0 top-0 md:static md:top-auto md:left-auto flex flex-col justify-between items-center bg-darkbg h-screen text-buttonB transition-all duration-100 ${
          isOpen ? "w-max opacity-100" : "w-0 opacity-0"
        }`}
      >
        <div className='flex flex-col gap-6 py-5 px-2'>
          <NavLink to='blogs' className={NavLinkStyles}>
            <button className='flex items-center gap-2 py-2 px-2 '>
              <FaBookOpen />
              All Posts
            </button>
          </NavLink>
          <NavLink to='trending' className={NavLinkStyles}>
            <button className='flex items-center gap-2 py-2 px-2 '>
              <FaFireAlt />
              Trending Posts
            </button>
          </NavLink>
          <NavLink to='recent' className={NavLinkStyles}>
            <button className='flex items-center gap-2 py-2 px-2 '>
              <FaClock />
              Recent Posts
            </button>
          </NavLink>
        </div>

        <div className='flex flex-col items-center gap-2 bg-lightbg w-full py-2'>
          <img
            src={Profile}
            alt='profile img'
            className='w-22 h-22 rounded-full'
          />
          <h1>Welcome Guest</h1>
          <button
            onClick={handlePop}
            className='bg-buttonB text-buttonT px-3 py-2 rounded-md cursor-pointer'
          >
            SignUp/Login
          </button>
        </div>
        {isPopupOpen && <Authentication />}
      </div>
    </div>
  );
};

export default SideNav;
