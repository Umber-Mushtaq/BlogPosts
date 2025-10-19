import { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";

const AuthPage = () => {
  const [mode, setMode] = useState("SignUp");
  return (
    <div className='fixed inset-0 bg-black/50 bg-opacity-50 flex justify-center items-center'>
      <div className='w-fit bg-white flex flex-col justify-center items-center gap-6 py-5 px-5'>
        <div className='border-1 border-border bg-white rounded-md w-full flex justify-center gap-2 items-center'>
          <button
            onClick={() => setMode("SignUp")}
            className={`py-2 px-3 rounded-md w-full ${
              mode === "SignUp" ? "bg-buttonB text-buttonT" : "text-black"
            }`}
          >
            SignUp
          </button>
          <button
            onClick={() => setMode("Login")}
            className={`py-2 px-3 rounded-md w-full ${
              mode === "Login" ? "bg-buttonB text-buttonT" : "text-black"
            }`}
          >
            Login
          </button>
        </div>
        {mode === "SignUp" ? <SignUp /> : <Login />}
      </div>
    </div>
  );
};

export default AuthPage;
