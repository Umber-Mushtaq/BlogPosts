import { Navigate, Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

export default function PublicLayout() {
  const isLogedIn = localStorage.getItem("login");
  if (isLogedIn === "true") {
    return <Navigate to='/main' replace />;
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
