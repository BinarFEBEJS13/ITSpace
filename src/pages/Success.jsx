import React from "react";
import { Navbar } from "../assets/components/Navbar";
// png success
import selamat from "../assets/img/payment-success.png";
// svg detail kelas
import arrow from "../assets/svg/arrow-left-black.svg";
import { useNavigate } from "react-router-dom";

export const Success = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="overflow-x-hidden ">
        <Navbar />
        <div className="w-screen px-6 sm:px-12 py-8 sm:py-8">
          <div className="container mx-auto">
            <div className="flex justify-center items-center">
              <div className="flex flex-col justify-center items-center gap-4 w-full lg:w-1/3">
                <h2 className="text-ungu-0 font-bold text-3xl">Selamat!</h2>
                <img src={selamat} alt="" />
                <div className="text-center">
                  <p className="font-semibold">Transaksi pembayaran kelas premium berhasil!</p>
                  <p>E-receipt telah dikirimkan ke email.</p>
                </div>
                <div className="flex flex-col w-2/3 gap-2">
                  <button className="bg-ungu-0 text-white px-4 py-2 rounded-md">Mulai Belajar</button>
                  <button onClick={() => navigate("/")} className="text-ungu-0">
                    Kembali ke beranda
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
