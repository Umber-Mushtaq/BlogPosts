import { FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetAuthorProfile } from "./ProfileApiCalls";

const AuthorProfile = () => {
  const [userData, setUserData] = useState(null);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        GetAuthorProfile(id).then((res) => {
          setUserData(res?.data);
        });
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className='my-5 w-full flex justify-center'>
      <div className='w-2xl flex flex-col gap-4'>
        <div className='flex justify-between items-center'>
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
          </div>
        </div>

        <div className='flex justify-between items-center'>
          <h1 className='text-buttonL'>
            {`${userData?.email}` || "User Email"}
          </h1>
          <h1 className='text-buttonL'>
            {`${userData?.occupation}` || "User Occupation"}
          </h1>
        </div>

        <p className='text-textB text-left text-sm tracking-wide leading-6'>
          {`${userData?.bio}` || "User Bio"}
        </p>
      </div>
    </div>
  );
};

export default AuthorProfile;
