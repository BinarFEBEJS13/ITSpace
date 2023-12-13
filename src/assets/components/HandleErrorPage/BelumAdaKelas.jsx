import React from "react";
import belumadakelas from "../../img/notfoundcourse.png";
import { useNavigate } from "react-router-dom";

export const BelumAdaKelas = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <h2 className="text-ungu-0 font-bold text-xl text-center">Maaf Kelasmu Kosong!</h2>
          <img src={belumadakelas} alt="" />
          <div className="text-center">
            <p className="text-sm sm:text-base">Silakan cari kursus yang sesuai dengan keinginanmu</p>
          </div>
          <div className="flex flex-col w-2/3 lg:w-1/3 gap-2">
            <button onClick={() => navigate("/kursus")} className="bg-ungu-0 text-white px-4 py-2 rounded-md">
              Cari Kursus
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
