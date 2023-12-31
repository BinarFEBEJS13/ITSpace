import React, { useState } from "react";
import { Sidebar } from "../../assets/components/Admin/Sidebar";
import { TableKelas } from "../../assets/components/Admin/TableKelas";
import { IoClose } from "react-icons/io5";
import { TableUser } from "../../assets/components/Admin/TableUser";
import { Header } from "../../assets/components/Admin/Header";
import { DataDashboard } from "../../assets/components/Admin/DataDashboard";
import { Navigate, useNavigate } from "react-router-dom";
import TabelTransaksi from "../../assets/components/Admin/TabelTransaksi";

const Dashboard = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const navigate = useNavigate()

  return (
    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row lg:overflow-x-hidden">
      {/* ========================= Bagian Kiri =========================  */}
      <div className="bg-[#D0D0D0]">
        <div
          className={`lg:block ${
            sidebarVisible
              ? "fixed z-10 w-full  bg-[rgba(0,0,0,0.8)] "
              : "hidden"
          }`}
        >
          <Sidebar
            setSidebarVisible={setSidebarVisible}
            setActiveMenu={setActiveMenu}
          />
        </div>
      </div>
      {/* ========================= Bagian Kanan =========================  */}
      <div className=" w-full lg:overflow-x-hidden">
        {/* ========================= Header =========================  */}
        <Header/>

        {/* ========================= User Data =========================  */}
        <DataDashboard/>
      </div>
    </div>
  );
};

export default Dashboard;
