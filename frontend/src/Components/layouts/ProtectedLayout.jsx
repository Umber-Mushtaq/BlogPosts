import { Navigate, Outlet } from "react-router-dom";
import DashboardLayout from "../NavBar/DashboardNav";
import NavBar from "../NavBar/NavBar";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function ProtectedLayout() {
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);
  const isLogedIn = localStorage.getItem("login");
  if (isLogedIn !== "true") {
    return <Navigate to='/' replace />;
  }
  return (
    <div className='flex h-screen relative'>
      {/* Left Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full transition-all duration-300 ${
          leftOpen ? "w-50" : "w-0"
        } overflow-hidden`}
      >
        <DashboardLayout />
      </aside>

      {/* Main Content */}
      <main className='w-full overflow-auto'>
        <div className='min-h-screen flex justify-center items-center'>
          <Outlet />
        </div>
      </main>

      {/* Right Sidebar */}
      <aside
        className={`fixed right-0 top-0 h-full bg-white shadow-md transition-all duration-300 ${
          rightOpen ? "w-50" : "w-0"
        } overflow-hidden`}
      >
        <NavBar />
      </aside>

      {/* Toggle Buttons */}
      <button
        onClick={() => setLeftOpen(!leftOpen)}
        className='md:hidden fixed top-5 left-5 z-50 bg-border p-2 font-extrabold rounded-md shadow-md'
      >
        {leftOpen ? <FaArrowLeft /> : <FaArrowRight />}
      </button>

      <button
        onClick={() => setRightOpen(!rightOpen)}
        className='md:hidden fixed top-5 right-5 z-50 bg-border p-2 font-extrabold rounded-md shadow-md '
      >
        {rightOpen ? <FaArrowRight /> : <FaArrowLeft />}
      </button>
    </div>
  );
}
