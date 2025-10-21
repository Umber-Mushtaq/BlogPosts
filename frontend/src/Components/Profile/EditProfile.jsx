import { useRef, useState } from "react";
import {
  FaBriefcase,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaPencilAlt,
  FaUser,
  FaTimes,
} from "react-icons/fa";
import { EditProfileApiCall } from "./ProfileApiCalls";

const Styles = {
  iconStyle: "text-1xl text-border",
  divStyle:
    "flex items-center border-1 border-border py-1 px-2 rounded-md w-full",
  inputTextStyle: "text-text border-none outline-none py-2 px-3 w-full",
};

const EditProfile = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [bio, setbio] = useState("");
  const [occupation, setoccupation] = useState("");
  const [linkedin, setlinkedin] = useState("");
  const [github, setgithub] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const fileInputRef = useRef();

  const handleImageSelection = (e) => {
    const selectedImage = e.target.files[0];
    const url = "/assets/" + selectedImage.name;
    console.log(url);
    setPhotoUrl(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName &&
      lastName &&
      email &&
      bio &&
      occupation &&
      linkedin &&
      github &&
      photoUrl
    ) {
      EditProfileApiCall(
        firstName,
        lastName,
        email,
        bio,
        occupation,
        photoUrl,
        linkedin,
        github
      );
    }
  };

  return (
    <div className='py-10 px-10 w-full flex justify-center items-center'>
      <div className='w-full'>
        <h1 className='text-3xl text-buttonL font-medium tracking-wide mb-2'>
          Edit Your Profile
        </h1>
        <div className='border-1 border-border rounded-md mt-3 text-textB py-2 px-2'>
          <img
            src={photoUrl}
            alt='img'
            className='w-auto h-auto object-cover'
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className='flex flex-col justify-center items-center gap-3'
        >
          <div className='py-3 px-3 mt-2 border-1 border-border w-full rounded-md'>
            <div className='flex-col gap-3 md:flex md:flex-row md:gap-0  justify-between items-center'>
              <label className='mb-2 md:mb-0 block text-gray-600'>
                Upload Image
              </label>
              <div className='bg-border text-black text-center py-3 px-4 rounded-md cursor-pointer'>
                <input
                  type='file'
                  accept='image/*'
                  ref={fileInputRef}
                  onChange={handleImageSelection}
                  className='hidden hover:cursor-pointer'
                />
                <button
                  type='button'
                  className='hover:cursor-pointer'
                  onClick={() => fileInputRef.current.click()}
                >
                  Upload image
                </button>
              </div>
            </div>
          </div>

          <div className={Styles.divStyle}>
            <h1 className={Styles.iconStyle}>
              <FaUser />
            </h1>
            <input
              className={Styles.inputTextStyle}
              type='text'
              required
              name='firstName'
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
              placeholder='Enter Your First Name'
            />
          </div>

          <div className={Styles.divStyle}>
            <h1 className={Styles.iconStyle}>
              <FaUser />
            </h1>
            <input
              className={Styles.inputTextStyle}
              type='text'
              required
              name='lastName'
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
              placeholder='Enter Your Last Name'
            />
          </div>

          <div className={Styles.divStyle}>
            <h1 className={Styles.iconStyle}>
              <FaEnvelope />
            </h1>
            <input
              className={Styles.inputTextStyle}
              type='email'
              required
              name='email'
              value={email}
              onChange={(e) => setemail(e.target.value)}
              placeholder='Enter Your Email'
            />
          </div>
          <div className={Styles.divStyle}>
            <h1 className={Styles.iconStyle}>
              <FaBriefcase />
            </h1>
            <input
              className={Styles.inputTextStyle}
              type='text'
              name='occupation'
              value={occupation}
              onChange={(e) => setoccupation(e.target.value)}
              placeholder='Enter Your Occupation'
            />
          </div>

          <div className={Styles.divStyle}>
            <h1 className={Styles.iconStyle}>
              <FaLinkedin />
            </h1>
            <input
              className={Styles.inputTextStyle}
              type='text'
              name='lindedin'
              value={linkedin}
              onChange={(e) => setlinkedin(e.target.value)}
              placeholder='Enter Your LindedIn URL'
            />
          </div>
          <div className={Styles.divStyle}>
            <h1 className={Styles.iconStyle}>
              <FaGithub />
            </h1>
            <input
              className={Styles.inputTextStyle}
              type='text'
              name='github'
              value={github}
              onChange={(e) => setgithub(e.target.value)}
              placeholder='Enter Your GitHub URL'
            />
          </div>

          <div className={Styles.divStyle}>
            <textarea
              className={`resize-y w-full ${Styles.inputTextStyle}`}
              rows={3}
              value={bio}
              onChange={(e) => setbio(e.target.value)}
              type='text'
              name='bio'
              placeholder='Enter Your Biography....'
            />
          </div>
          <button
            type='submit'
            className='text-buttonT bg-buttonB w-full rounded-sm py-2 px-3 hover:cursor-pointer'
          >
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
