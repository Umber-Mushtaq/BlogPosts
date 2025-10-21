import { FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Image from "../../../public/assets/Gaming.jpg";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("UserData");
    if (user) {
      const userdata = JSON.parse(user);
      setUserData(userdata);
    }
  }, []);

  return (
    <div className='w-full justify-center items-center flex px-10 py-5'>
      <div className=' border-2 border-border rounded-md px-5 py-5 bg-[#e8e8ff]'>
        <div className='md:flex md:flex-row flex-col gap-4 justify-center items-center'>
          <img
            src={userData?.photoUrl || Image}
            alt='image'
            className='w-64 h-64 object-cover rounded-full'
          />
          <div className='text-textB text-left text-sm tracking-wide leading-6'>
            <div className='text-buttonL text-2xl font-medium tracking-wide'>
              {`${userData?.occupation}` || "User Occupation"}
            </div>
            {`${userData?.bio}` || "User Bio"}
            <div className='text-buttonL mb-2'>
              {`${userData?.email}` || "User Email"}
            </div>
          </div>
        </div>
        <div className='flex-col md:flex md:flex-row justify-between items-center'>
          <h1 className='text-3xl text-buttonB font-medium'>
            {`${userData?.firstName} ${userData?.lastName}` || "User Name"}
          </h1>
          <div className='flex justify-center items-center gap-4'>
            <button
              className='text-2xl text-buttonB hover:cursor-pointer'
              onClick={() =>
                window.open(
                  userData?.linkedin || "https://www.linked.com/",
                  "_blank"
                )
              }
            >
              <FaLinkedin />
            </button>
            <button
              className='text-2xl text-buttonB hover:cursor-pointer'
              onClick={() =>
                window.open(
                  userData?.github || "https://www.github.com/",
                  "_blank"
                )
              }
            >
              <FaGithub />
            </button>
            <Link
              to='/main/editprofile'
              className=' px-3 py-2 bg-buttonB text-white rounded-md hover:cursor-pointer hover:bg-buttonL'
            >
              Edit Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
