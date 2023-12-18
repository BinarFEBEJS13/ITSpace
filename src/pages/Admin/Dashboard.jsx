import React, { useState } from "react";
import Admin from "../../assets/svg/user.svg";
import ImgUsers from "../../assets/svg/Users.svg";
import { Sidebar } from "../../assets/components/Sidebar";
import { TableDashboard } from "../../assets/components/TableDashboard";
import { TableKelas } from "../../assets/components/TableKelas";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { TableUser } from "../../assets/components/TableUser";
import { useNavigate } from "react-router-dom";
import { useGetUserDecode } from "../../services/Admin/user/get-user-decode";
import { useGetUsers } from "../../services/Admin/user/get-user";
import { useGetUsersID } from "../../services/Admin/user/get-user-id";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const navigate = useNavigate();

  const { data: UserDecode } = useGetUserDecode();
  const { data: AllUser } = useGetUsers();

  const { data: UsersID } = useGetUsersID({
    id: UserDecode?.data?.id,
  });

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row lg:overflow-x-hidden">
      {/* ========================= Bagian Kiri =========================  */}
      <div className="bg-[#6148FF]">
        <div
          className={`lg:block ${
            sidebarVisible
              ? "fixed z-10 w-full  bg-[rgba(0,0,0,0.8)] "
              : "hidden"
          }`}
        >
          <IoClose
            onClick={() => setSidebarVisible()}
            className="w-[92%] block lg:hidden mt-3 absolute text-3xl "
          />
          <Sidebar
            setSidebarVisible={setSidebarVisible}
            setActiveMenu={setActiveMenu}
          />
        </div>
      </div>
      {/* ========================= Bagian Kanan =========================  */}
      <div className=" w-full lg:overflow-x-hidden">
        {/* ========================= Header =========================  */}
        <div className="w-full flex items-center justify-between px-6 sm:px-20 h-[100px] bg-[#EBF3FC]">
          <div className="flex items-center gap-4 w-3/4">
            <FiMenu
              onClick={toggleSidebar}
              className="block font-3xl sm:block md:block lg:hidden"
            />
            <h1 className="uppercase text-lg font-bold sm:text-2xl text-[#6148FF]">
              Hi {UsersID?.data?.profile?.name}
            </h1>
          </div>
          <div className="flex justify-center items-center mb-5">
          <div className="flex bg-white justify-between px-[3rem] rounded-2xl items-center w-[300px] h-[62px] mt-5">
             <h1>{UsersID?.data?.profile?.name}</h1> 
              <img
                className="bg-[#6148FF] rounded-3xl p-2 "
                src={Admin}
                alt=""
              />
          </div>
          </div>
        </div>

        {/* ========================= User Data =========================  */}
        <div className=" m-[2rem] flex-col flex flex-wrap md:flex-row lg:flex-nowrap lg:flex-row gap-6 justify-between">
          {/* User Card */}
          <div className="bg-[#489CFF] h-[6.75rem] md:h-[10rem] md:w-full sm:w-full rounded-[15px] ">
            <div className="flex items-center h-full gap-4 w-3/4 lg:w-full xl:w-3/4  justify-center">
              <img
                className="rounded-[25px] bg-white p-4"
                src={ImgUsers}
                alt=""
              />
              <div className="flex flex-col text-white">
                <p className="lg:text-2xl font-normal">
                  {AllUser?.data?.pagination?.total_items}
                </p>
                <h1 className="font-bold text-base lg:text-xl">Active User</h1>
              </div>
            </div>
          </div>
          {/* Active Class Card */}
          <div className="bg-[#73CA5C] h-[6.75rem] md:h-[10rem] md:w-full sm:w-full rounded-[15px] ">
            <div className="flex items-center h-full gap-4 w-3/4 lg:w-full xl:w-3/4  justify-center">
              <img
                className="rounded-[25px] bg-white p-4"
                src={ImgUsers}
                alt=""
              />
              <div className="flex flex-col text-white">
                <p className="text-2xl font-normal">25</p>
                <h1 className="font-bold text-lg sm:text-xl">Active Class</h1>
              </div>
            </div>
          </div>
          {/* Active User Card */}
          <div className="bg-[#6148FF] h-[6.75rem] md:h-[10rem] md:w-full sm:w-full rounded-[15px] ">
            <div className="flex items-center h-full gap-4 w-3/4 lg:w-full xl:w-3/4 justify-center">
              <img
                className="rounded-[25px] bg-white p-4"
                src={ImgUsers}
                alt=""
              />
              <div className="flex flex-col text-white">
                <p className="text-2xl font-normal">20</p>
                <h1 className="font-bold text-lg sm:text-xl">Premium Class</h1>
              </div>
            </div>
          </div>
        </div>
        {activeMenu === "dashboard" ? (
          <TableDashboard />
        ) : activeMenu === "user" ? (
          <TableUser />
        ) : (
          <TableKelas />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
