import React, { useState } from "react";
import { useGetUsers } from "../../../services/Admin/user/get-user";
import ImgUsers from "../../../assets/svg/Users.svg";
import { useGetCourse } from "../../../services/Admin/courses/get-data-courses";

export const DataDashboard = () => {
  const { data: AllUser } = useGetUsers();
  const {data : Kelas} = useGetCourse()

  const totalPremiumClasses = Kelas?.data?.courses?.filter((course) => course.isPremium === true || course.isPremium === "1")?.length || 0;

  console.log(Kelas);
  console.log(totalPremiumClasses);
  return (
    <div className=" m-[2rem] grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 md:flex-row lg:flex-nowrap lg:flex-row gap-6 justify-between">
      {/* User Card */}
      <div className="bg-[#489CFF] h-[6.75rem]  md:h-[10rem] md:w-full sm:w-full rounded-[15px] ">
        <div className="flex items-center h-full gap-4 w-3/4 justify-center">
          <img className="rounded-[25px] bg-white p-4" src={ImgUsers} alt="" />
          <div className="flex flex-col text-white">
            <p className="sm:text-2xl font-normal">
              {AllUser?.data?.pagination?.total_items}
            </p>
            <h1 className="font-bold text-md lg:text-xl">Active User</h1>
          </div>
        </div>
      </div>
      {/* Active Class Card */}
      <div className="bg-[#73CA5C] h-[6.75rem] md:h-[10rem] md:w-full sm:w-full rounded-[15px] ">
        <div className="flex items-center h-full gap-4 w-3/4  justify-center">
          <img className="rounded-[25px] bg-white p-4" src={ImgUsers} alt="" />
          <div className="flex flex-col text-white">
            <p className="sm:text-2xl font-normal">25</p>
            <h1 className="font-bold  sm:text-xl">Active Class</h1>
          </div>
        </div>
      </div>
      {/* Active User Card */}
      <div className="bg-[#6148FF] h-[6.75rem] md:h-[10rem] md:w-full sm:w-full rounded-[15px] ">
        <div className="flex items-center h-full gap-4 w-3/4 justify-center">
          <img className="rounded-[25px] bg-white p-4" src={ImgUsers} alt="" />
          <div className="flex flex-col text-white">
            <p className="sm:text-2xl font-normal">{totalPremiumClasses}</p>
            <h1 className="font-bold  sm:text-xl">Premium Class</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
