import React from "react";
import { useNavigate } from "react-router-dom";
import not404 from "../assets/img/404-eror-page.png";

export const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center w-1/3">
          <img src={not404} alt="404" />
          <button onClick={() => navigate("/")} className="bg-ungu-0 text-white px-4 py-2 rounded-md">
            Kembali Ke Beranda
          </button>
        </div>
      </div>
    </>
  );
};
