import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function ProtectedLayout() {
  const isLogedIn = localStorage.getItem("login");
  if (isLogedIn !== "true") {
    return <Navigate to='/' replace />;
  }
  return (
    <div className='flex'>
      <NavBar />
      <div className='h-screen overflow-scroll w-full'>
        <Outlet />
      </div>
    </div>
  );
}
