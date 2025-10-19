import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className='flex flex-col justify-center h-screen gap-8 px-5 bg-buttonB text-buttonT'>
      <NavLink
        to='/main'
        className={({ isActive }) =>
          `${isActive ? "border-b-2 border-border" : ""}`
        }
        end
      >
        All Posts
      </NavLink>
      <NavLink
        to='/main/trending'
        className={({ isActive }) =>
          `${isActive ? "border-b-2 border-border" : ""}`
        }
      >
        Trending Posts
      </NavLink>
      <NavLink
        to='/main/recent'
        className={({ isActive }) =>
          `${isActive ? "border-b-2 border-border" : ""}`
        }
      >
        Recent Posts
      </NavLink>
      <NavLink
        to='/main/technology'
        className={({ isActive }) =>
          `${isActive ? "border-b-2 border-border" : ""}`
        }
      >
        Technology
      </NavLink>
      <NavLink
        to='/main/education'
        className={({ isActive }) =>
          `${isActive ? "border-b-2 border-border" : ""}`
        }
      >
        Education
      </NavLink>
      <NavLink
        to='/main/entertainment'
        className={({ isActive }) =>
          `${isActive ? "border-b-2 border-border" : ""}`
        }
      >
        Entertainment
      </NavLink>
      <NavLink
        to='/main/lifestyle'
        className={({ isActive }) =>
          `${isActive ? "border-b-2 border-border" : ""}`
        }
      >
        Life Style
      </NavLink>
    </div>
  );
};

export default NavBar;
