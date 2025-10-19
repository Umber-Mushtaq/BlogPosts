import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { SignUpUserApiCall } from "./AuthApiCalls";

const Styles = {
  iconStyle: "text-1xl text-border",
  divStyle:
    "flex justify-center items-center border-1 border-border py-1 px-2 rounded-md",
  inputTextStyle: "text-text border-none outline-none py-2 px-3",
};

const SignUp = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && email && password) {
      SignUpUserApiCall(firstName, lastName, email, password);
    }
  };
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
      <div className={Styles.divStyle}>
        <h1 className={Styles.iconStyle}>
          <FaUser />
        </h1>
        <input
          type='text'
          name='firstName'
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
          required
          placeholder='Enter Your First Name'
          className={Styles.inputTextStyle}
        />
      </div>
      <div className={Styles.divStyle}>
        <h1 className={Styles.iconStyle}>
          <FaUser />
        </h1>
        <input
          type='text'
          name='lastName'
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
          required
          placeholder='Enter Your Last Name'
          className={Styles.inputTextStyle}
        />
      </div>
      <div className={Styles.divStyle}>
        <h1 className={Styles.iconStyle}>
          <FaEnvelope />
        </h1>
        <input
          type='email'
          name='email'
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
          placeholder='Enter Your Email'
          className={Styles.inputTextStyle}
        />
      </div>
      <div className={Styles.divStyle}>
        <h1 className={Styles.iconStyle}>
          <FaLock />
        </h1>
        <input
          type='password'
          name='password'
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          required
          placeholder='Enter Your password'
          className={Styles.inputTextStyle}
        />
      </div>
      <button
        type='submit'
        className='bg-buttonB text-buttonT py-2 px-3 rounded-lg cursor-pointer'
      >
        Submit
      </button>
    </form>
  );
};

export default SignUp;
