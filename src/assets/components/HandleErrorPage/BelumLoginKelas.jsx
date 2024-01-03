import React from "react";
import belumlogin from "../../img/notfoundcourse.png";
import { useNavigate } from "react-router-dom";

export const BelumLoginKelas = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <h2 className="text-ungu-0 font-bold text-xl text-center">Maaf Kelasmu Tidak Ditemukan!</h2>
          <img src={belumlogin} alt="" />
          <div className="text-center">
            <p className="text-sm sm:text-base">Silakan masuk ke akunmu untuk untuk melihat kelasmu</p>
          </div>
          <div className="flex flex-col w-2/3 lg:w-1/3 gap-2">
            <button onClick={() => navigate("/login")} className="bg-ungu-0 text-white px-4 py-2 rounded-md">
              Masuk ke Akun
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
