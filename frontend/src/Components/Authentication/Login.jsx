import { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { LoginUserApiCall } from "./AuthApiCalls";
import { useNavigate } from "react-router-dom";

const Styles = {
  iconStyle: "text-1xl text-border",
  inputStyle:
    "flex justify-center items-center border-1 border-border py-1 px-2 rounded-md",
  inputTextStyle: "text-text border-none outline-none py-2 px-3",
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      LoginUserApiCall(email, password).then((res) => {
        if (res?.success) {
          navigate("/main");
        }
      });
    }
  };
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2'>
      <div className={Styles.inputStyle}>
        <h1 className={Styles.iconStyle}>
          <FaEnvelope />
        </h1>
        <input
          type='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder='Enter Your Email'
          className={Styles.inputTextStyle}
        />
      </div>
      <div className={Styles.inputStyle}>
        <h1 className={Styles.iconStyle}>
          <FaLock />
        </h1>
        <input
          type='password'
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

export default Login;
