import { Outlet } from "react-router-dom";
import SideNav from "../components/SideNav";
import NavBar from "../components/NavBar";
import Catagories from "../components/Catagories";

const MainLayout = () => {
  return (
    <div className='flex'>
      <SideNav />
      <div>
        <NavBar />
        <Catagories />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
