import { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import { usePopUp } from "../Context/PopUpContext";
import { FaTimes } from "react-icons/fa";

const Authentication = () => {
  const [mode, setMode] = useState("signup");
  const { closePop } = usePopUp();

  return (
    <div className='fixed inset-0 flex justify-center items-center  bg-black/50 bg-opacity-50'>
      <div className='w-md flex flex-col justify-center items-center bg-[#EFF2F2] py-5 px-5'>
        <button
          onClick={closePop}
          className='text-2xl text-buttonB w-full py-2 px-2'
        >
          <FaTimes />
        </button>

        {mode === "signup" ? <SignUp /> : <Login />}

        <div className='flex w-full justify-between items-center gap-2'>
          <button
            onClick={() => setMode("signup")}
            className={`text-center w-full py-2 px-2 ${
              mode === "signup"
                ? "bg-buttonB text-buttonT"
                : "border-1 border-buttonB"
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => setMode("login")}
            className={`text-center w-full py-2 px-2 ${
              mode === "login"
                ? "bg-buttonB text-buttonT"
                : "border-1 border-buttonB"
            }`}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
