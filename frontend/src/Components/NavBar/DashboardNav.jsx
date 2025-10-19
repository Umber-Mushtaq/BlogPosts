import { NavLink, useNavigate } from "react-router-dom";
import { LogoutUserApiCall } from "../Authentication/AuthApiCalls";

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    LogoutUserApiCall();
    localStorage.setItem("login", "false");
    navigate("/");
  };
  return (
    <div className='flex flex-col justify-center h-screen gap-8 px-5 bg-buttonB text-buttonT'>
      <NavLink
        to='/main/createPost'
        className={({ isActive }) =>
          `${isActive ? "border-b-2 border-border" : ""}`
        }
        end
      >
        Create Post
      </NavLink>
      <NavLink
        to='/main/myPosts'
        className={({ isActive }) =>
          `${isActive ? "border-b-2 border-border" : ""}`
        }
      >
        My Posts
      </NavLink>
      <NavLink
        to='/main/myFollowers'
        className={({ isActive }) =>
          `${isActive ? "border-b-2 border-border" : ""}`
        }
      >
        My Followers
      </NavLink>
      <NavLink
        to='/main/myFollowings'
        className={({ isActive }) =>
          `${isActive ? "border-b-2 border-border" : ""}`
        }
      >
        My Followings
      </NavLink>
      <NavLink
        to='/main/myProfile'
        className={({ isActive }) =>
          `${isActive ? "border-b-2 border-border" : ""}`
        }
      >
        My Profile
      </NavLink>
      <NavLink
        to='/main/editprofile'
        className={({ isActive }) =>
          `${isActive ? "border-b-2 border-border" : ""}`
        }
      >
        Edit Profile
      </NavLink>
      <button
        onClick={handleLogout}
        className=' border-2 border-border text-buttonT rounded-sm py-1 px-2 hover:bg-buttonB hover:text-buttonT hover:cursor-pointer'
      >
        Logout
      </button>
    </div>
  );
};

export default DashboardLayout;
