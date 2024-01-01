import React, { useMemo, useState } from "react";
import { useGetUsers } from "../../../services/Admin/user/get-user";
import ImgUsers from "../../../assets/svg/Users.svg";
import { useGetCourse } from "../../../services/Admin/courses/get-data-courses";
import { FaBook } from "react-icons/fa";
import { FaChalkboard } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";
import { useGetPembayaran } from "../../../services/Admin/transaksi/get-status-pembayaran";
import { FaUserCheck } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { FaListCheck } from "react-icons/fa6";
import { useGetCategory } from "../../../services/Admin/category/get-data-category";
export const DataDashboard = () => {
  const { data: AllUser } = useGetUsers();
  const {data : Category} = useGetCategory()
  const { data: transaksi } = useGetPembayaran({
    limit: 100,
  });
  const { data: Kelas } = useGetCourse({
    limit: 100,
  });
  
  const totalCategory = Category?.data?.length || 0;
  const totalAmountPaid = transaksi?.data?.transactions
    ? transaksi.data.transactions
        .filter((transaksi) => transaksi.payDone === true)
        .reduce(
          (total, transaksi) => total + parseFloat(transaksi.course.price),
          0
        )
    : 0;
  const formattedAmount = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(totalAmountPaid);
  const dataUser = AllUser?.data?.users.filter(
    (user) => user.profile.role === "USER" && user.verified === true
  ).length;

  const totalPremiumClasses =
    Kelas?.data?.courses?.filter(
      (course) => course.isPremium === true || course.isPremium === "1"
    )?.length || 0;
    
  const totalTransaksi = transaksi?.data?.transactions?.filter(
    (transaksis) => transaksis.payDone === true
  ).length;

  return (
    <div className=" m-[2rem] grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 md:flex-row lg:flex-nowrap lg:flex-row gap-6 justify-between">
      {/* User Card */}
      <div className="bg-[#489CFF] h-[6.75rem] shadow-xl  md:h-[10rem] md:w-full sm:w-full rounded-[15px] ">
        <div className="flex items-center h-full gap-4 w-3/4 justify-center">
          <span className="text-5xl text-white p-5 ">
            <FaUserCheck />
          </span>
          <div className="flex flex-col text-white">
            <p className="sm:text-2xl font-normal">{dataUser}</p>
            <h1 className="font-bold text-md lg:text-xl">User Aktif</h1>
          </div>
        </div>
      </div>
      {/* Active Class Card */}
      <div className="bg-[#73CA5C] h-[6.75rem] shadow-xl  md:h-[10rem] md:w-full sm:w-full rounded-[15px] ">
        <div className="flex items-center h-full gap-4 w-3/4  justify-center">
          <span className="text-5xl text-white p-5 ">
            <FaChalkboard />
          </span>
          <div className="flex flex-col text-white">
            <p className="sm:text-2xl font-normal">
              {Kelas?.data?.pagination?.total_items}
            </p>
            <h1 className="font-bold  sm:text-xl">Kelas Aktif</h1>
          </div>
        </div>
      </div>
      {/* Active User Card */}
      <div className="bg-[#6148FF] h-[6.75rem] shadow-xl  md:h-[10rem] md:w-full sm:w-full rounded-[15px] ">
        <div className="flex items-center h-full gap-4 w-3/4 justify-center">
          <span className="text-5xl text-white p-5 ">
            <FaDollarSign />
          </span>
          <div className="flex flex-col text-white">
            <p className="sm:text-2xl font-normal">{totalPremiumClasses}</p>
            <h1 className="font-bold  sm:text-xl">Kelas Premium</h1>
          </div>
        </div>
      </div>
      <div className="bg-[#6c6886] h-[6.75rem] shadow-xl  md:h-[10rem] md:w-full sm:w-full rounded-[15px] ">
        <div className="flex items-center h-full gap-4 w-3/4 justify-center">
          <span className="text-5xl text-white p-5 ">
            <FaHandshake />
          </span>
          <div className="flex flex-col text-white">
            <p className="sm:text-2xl font-normal">{totalTransaksi}</p>
            <h1 className="font-bold  sm:text-xl">Total Transaksi</h1>
          </div>
        </div>
      </div>
      <div className="bg-[#e4b341] h-[6.75rem] shadow-xl  md:h-[10rem] md:w-full sm:w-full rounded-[15px] ">
        <div className="flex items-center h-full gap-4 w-3/4 justify-center">
          <span className="text-5xl text-white p-5 ">
            <FaSackDollar />
          </span>
          <div className="flex flex-col text-white">
            <p className="sm:text-2xl font-normal">{formattedAmount}</p>
            <h1 className="font-bold  sm:text-xl">Pendapatan</h1>
          </div>
        </div>
      </div>
      <div className="bg-[#e13e3e] h-[6.75rem] shadow-xl md:h-[10rem] md:w-full sm:w-full rounded-[15px] ">
        <div className="flex items-center h-full gap-4 w-3/4 justify-center">
        <span className="text-5xl text-white p-5 ">
            <FaListCheck />
          </span>
          <div className="flex flex-col text-white">
            <p className="sm:text-2xl font-normal">{totalCategory}</p>
            <h1 className="font-bold  sm:text-xl">Kategori Kelas</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
