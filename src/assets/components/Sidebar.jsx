import React, { useState, useEffect } from "react";
import Logo from "../../assets/img/logo-navbar.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLogoutAdmin } from "../../services/Admin/auth/post-logout-admin";
import { LuLogOut } from "react-icons/lu";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaHouse } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";


export const Sidebar = ({ setActiveMenu, setSidebarVisible }) => {
  const [activeButton, setActiveButton] = useState("dashboard");
  const {pathname} = useLocation()
  const navigate = useNavigate()


  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
    setActiveButton(menu);
    setSidebarVisible();
  };
  const { mutate: logoutAdmin } = useLogoutAdmin();

  return (
    <div>
      <div className="h-screen w-1/2 lg:w-[300px] md:w-1/2 bg-[#6148FF]">
        <div className="h-[100px] my-4 flex justify-center items-center">
          <img src={Logo} className="w-[70%] mr-[2rem]" alt="" />
        </div>
      <hr className="text-[#D0D0D0] w-full mb-[3rem]"/>
        <div className="flex justify-center text-white">
          <div className="flex w-full flex-col items-start">
            <button
              className={`flex items-center gap-2 w-full px-[2rem] h-[50px] text-left ${
                activeButton === "dashboard" ? "bg-[#489CFF] text-xl" : "text-normal"
              }`}
              onClick={() => handleMenuClick("dashboard")}
            >
              <p><FaHouse/></p>Dashboard 
            </button>
            <button
              className={`flex items-center gap-2 w-full px-[2rem] h-[50px] text-left ${
                activeButton === "user" ? "bg-[#489CFF] text-xl" : "text-normal"
              }`}
              onClick={() => handleMenuClick("user")}
            >
              <p><FaUsers/></p>Users
            </button>
            <button
              className={`flex items-center gap-2 w-full px-[2rem] h-[50px] text-left ${
                activeButton === "kelola-kelas" ? "bg-[#489CFF] text-xl" : "text-normal"
              }`}
              onClick={() => handleMenuClick("kelola-kelas")}
            >
             <p><FaChalkboardTeacher/></p> Kelola Kelas
            </button>
            <button className="w-full h-[50px]  px-[2rem] text-left ">
              <Link onClick={logoutAdmin} to="/admin/login" className="flex items-center gap-2">
                <p><LuLogOut/></p>Keluar
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
