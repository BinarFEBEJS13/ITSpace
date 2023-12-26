import React, { useState } from "react";
import Logo from "../../../assets/img/Logo-kata.png";
import Logo2 from "../../../assets/img/Logo (Gradient).png";
import { NavLink } from "react-router-dom";
import { useLogoutAdmin } from "../../../services/Admin/auth/post-logout-admin";
import { LuLogOut } from "react-icons/lu";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaHouse, FaXmark } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";

export const Sidebar = ({setOpen, Open}) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleMenuClick = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const isDesktop = useMediaQuery({
    query: "(min-width: 1280px)", 
  });

  const { mutate: logoutAdmin } = useLogoutAdmin();

  return (
    <div className={`${Open && "bg-[rgba(0,0,0,0.4)]"}`}>
      <div className={`h-full  ${Open ? "block z-50 bg-white fixed top-0 left-0" : "relative hidden"} xl:block  ${sidebarVisible ? "xl:w-[300px]" : "xl:w-28"} w-[300px] duration-300 `}>
        <div className="h-[100px]  flex justify-center items-center">
          <img src={isDesktop ? (!sidebarVisible ? Logo2 : Logo) : Logo} className={` ${sidebarVisible ? "xl:w-[80%] xl:mr-[1rem]" : "xl:w-[100%] xl:mr-[0.5rem]"} w-[70%]  `} alt="" />
          <span onClick={() => setOpen(false)} className="lg:hidden absolute top-2 text-2xl right-3"><FaXmark/></span>
          <span onClick={handleMenuClick} className={`${!sidebarVisible && "rotate-180"} hidden xl:block absolute -right-6 top-20 rounded-full bg-gradientkanan p-3 text-lg cursor-pointer text-white border border-black`}><FaArrowLeft  /></span>
        </div>
        <hr className="border-2 border-[#D0D0D0] w-full mb-[3rem]" />
        <div className="flex  justify-center text-[#6148FF]">
          <ul className="flex gap-3 w-full flex-col items-center ">
            <NavLink
              to="/admin/dashboard/transaksi"
              className={({ isActive }) =>
                isActive
                  ? ` ${!sidebarVisible && "xl:w-[50%] xl:mx-0.5rem"} bg-gradientkanan text-white text-xl flex items-center gap-2 w-[90%] mx-[1rem] rounded-lg px-[1rem] h-[50px] text-left`
                  : `${!sidebarVisible && "xl:w-[50%] xl:mx-0.5rem"} flex items-center gap-2 w-[90%] mx-[1rem] rounded-lg px-[1rem] h-[50px] text-left`
              }
            >
              <p>
                <FaHouse />
              </p>
              <span className={`${!sidebarVisible && "xl:hidden"}`}>Dashboard</span>
            </NavLink>
            <NavLink
              to="/admin/dashboard/users"
              className={({ isActive }) =>
                isActive
                ? ` ${!sidebarVisible && "xl:w-[50%] xl:mx-0.5rem"} bg-gradientkanan text-white text-xl flex items-center gap-2 w-[90%] mx-[1rem] rounded-lg px-[1rem] h-[50px] text-left`
                : `${!sidebarVisible && "xl:w-[50%] xl:mx-0.5rem"} flex items-center gap-2 w-[90%] mx-[1rem] rounded-lg px-[1rem] h-[50px] text-left`
              }
            >
              <p>
                <FaUsers />
              </p>
              <span className={`${!sidebarVisible && "xl:hidden"}`}>Users</span>
            </NavLink>
            <NavLink
              to="/admin/dashboard/course"
              className={({ isActive }) =>
                isActive
                  ? ` ${!sidebarVisible && "xl:w-[50%] xl:mx-0.5rem"} bg-gradientkanan text-white text-xl flex items-center gap-2 w-[90%] mx-[1rem] rounded-lg px-[1rem] h-[50px] text-left`
                  : `${!sidebarVisible && "xl:w-[50%] xl:mx-0.5rem"} flex items-center  gap-2 w-[90%] mx-[1rem] rounded-lg px-[1rem] h-[50px] text-left`
              }
            >
              <div className="flex items-center gap-2 w-full">
                <li>
                  <FaChalkboardTeacher />
                </li>
                <li className={`${!sidebarVisible && "xl:hidden"}`}>Course</li>
              </div>
            </NavLink>
            {/* <NavLink
              to="/admin/dashboard/chapter"
              className={({ isActive }) =>
                isActive
                  ? "bg-gradientkanan  text-white text-xl flex items-center gap-2 w-[90%] mx-[1rem] rounded-lg px-[1rem] h-[50px] text-left"
                  : "flex items-center  gap-2 w-[90%] mx-[1rem] rounded-lg px-[1rem] h-[50px] text-left"
              }

            >
              <ul className="flex items-center gap-2 w-full">
                <li>
                  <FaBookOpenReader/>
                </li>
                <li>Chapter</li>
                <li>
                </li>
              </ul>
            </NavLink> */}
              <NavLink
                onClick={logoutAdmin}
                to="/admin/login"
                className={({ isActive }) =>
                isActive
                  ? ` ${!sidebarVisible && "xl:w-[50%] xl:mx-0.5rem"} bg-gradientkanan text-white text-xl flex items-center gap-2 w-[90%] mx-[1rem] rounded-lg px-[1rem] h-[50px] text-left`
                  : `${!sidebarVisible && "xl:w-[50%] xl:mx-0.5rem"} flex items-center  gap-2 w-[90%] mx-[1rem] rounded-lg px-[1rem] h-[50px] text-left`
              }
              >
                <p>
                  <LuLogOut />
                </p>
                <span className={`${!sidebarVisible && "xl:hidden"}`}> Keluar</span>
               
              </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};
