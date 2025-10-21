import { NavLink } from "react-router-dom";

const Styles = {
  activeNavs: "border-b-2 border-border text-[#3B82F6] py-2 px-2 rounded-md",
};

const DashboardLayout = () => {
  return (
    <div className='flex flex-col py-5 h-screen gap-8 px-5'>
      <h1 className='text-buttonL text-2xl font-semibold tracking-wide rounded-md'>
        Top Authors
      </h1>
    </div>
  );
};

export default DashboardLayout;
