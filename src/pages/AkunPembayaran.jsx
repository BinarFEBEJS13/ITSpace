import React, { useState } from "react";
import pencil from "../assets/img/pencil.png";
import setting from "../assets/img/setting.png";
import cart from "../assets/img/cart.png";
import logout from "../assets/img/logout.png";
import arrow from "../assets/svg/arrow-left-black.svg";
import { Navbar } from "../assets/components/Navbar";
import { Profile } from "../assets/components/Profile";
import { Pembayaran } from "../assets/components/Pembayaran";
import { UbahPassword } from "../assets/components/UbahPassword";
import { Link } from "react-router-dom";

export const AkunPembayaran = () => {
  const [Akun, setAkun] = useState("transaction");

  const handleAccount = (item) => {
    setAkun(item);
  };

  return (
    <div className="flex flex-col w-full h-screen bg-blue-100 sm:bg-white">
      <div className="hidden sm:flex">
        <Navbar></Navbar>
      </div>
      <div className="hidden sm:flex justify-start sm:justify-center ">
        <div className="flex justify-start w-[55%] px-0 mt-5">
          <div className="flex space-x-2">
            <div className="text-[#6148FF]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </div>
            <p className="text-[#6148FF] font-bold">Kembali ke Beranda</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-center">
        <div className="flex px-0 sm:w-[50%] mt-8">
          <div className="relative flex flex-col bg-transparent sm:bg-white sm:border-[1.5px] sm:border-[#6148FF] w-full h-[550px] bottom-5 rounded-xl z-0">
            <div className="hidden sm:flex w-full h-[8%] justify-center items-center rounded-tl-xl rounded-tr-xl bg-[#6148FF] text-white font-semibold tracking-[1px] z-10">Akun</div>
            <div className="hidden sm:flex justify-center">
              <h1 className="flex w-[90%] sm:hidden text-[1.5rem] font-extrabold">Akun</h1>
            </div>
            <div className="flex w-full justify-center sm:gap-4 mt-2 sm:mt-0">
              <div className="hidden sm:flex flex-row justify-center sm:justify-start w-[90%] sm:w-[18rem] bg-white sm:bg-transparent shadow-lg sm:shadow-none rounded-xl">
                <div className="hidden sm:flex flex-col justify-start w-[90%] gap-3 sm:ml-4 mt-4 sm:w-[18rem]">
                  <div onClick={() => handleAccount("profile")} className="flex items-center space-x-3 cursor-pointer">
                    {Akun === "profile" ? (
                      <div className="flex items-center space-x-3">
                        <img className="w-7 h-7 sm:w-5 sm:h-5" src={pencil} alt=""></img>
                        <p className="font-bold text-[#6148FF] text-[15px]">Profil Saya</p>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-3">
                        <img className="w-7 h-7 sm:w-5 sm:h-5" src={pencil} alt=""></img>
                        <p className="text-[12px] font-semibold">Profil Saya</p>
                      </div>
                    )}
                  </div>
                  <hr className="border-[1px]"></hr>
                  <div onClick={() => handleAccount("changepass")} className="flex items-center space-x-3 cursor-pointer">
                    {Akun === "changepass" ? (
                      <div className="flex items-center space-x-3">
                        <img className="w-7 h-7 sm:w-5 sm:h-5" src={setting} alt=""></img>
                        <p className="font-bold text-[#6148FF] text-[15px]">Ubah Password</p>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-3">
                        <img className="w-7 h-7 sm:w-5 sm:h-5" src={setting} alt=""></img>
                        <p className="text-[12px] font-semibold">Ubah Password</p>
                      </div>
                    )}
                  </div>
                  <hr className="border-[1px]"></hr>
                  <div onClick={() => handleAccount("transaction")} className="flex items-center space-x-3 cursor-pointer">
                    {Akun === "transaction" ? (
                      <div className="flex items-center space-x-3">
                        <img className="w-7 h-7 sm:w-5 sm:h-5" src={cart} alt=""></img>
                        <p className="font-bold text-[#6148FF] text-[15px]">Riwayat Pembayaran</p>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-3">
                        <img className="w-7 h-7 sm:w-5 sm:h-5" src={cart} alt=""></img>
                        <p className="text-[12px] font-semibold">Riwayat Pembayaran</p>
                      </div>
                    )}
                  </div>
                  <hr className="border-[1px]"></hr>
                  <div className="flex items-center space-x-3 ">
                    <img className="w-7 h-7 sm:w-5 sm:h-5" src={logout} alt=""></img>
                    <p className="text-[12px] font-semibold">Keluar</p>
                  </div>
                  <hr className="border-[1px]"></hr>
                  <p className="text-center text-[12px] text-gray-400 my-4 sm:mt-4">Version 1.1.0</p>
                </div>
              </div>
              {/* Kanan */}
              {Akun === "profile" ? (
                <div className="hidden sm:flex">
                  <Profile></Profile>
                </div>
              ) : (
                ""
              )}
              {Akun === "changepass" ? (
                <div className="hidden sm:flex">
                  <UbahPassword></UbahPassword>
                </div>
              ) : (
                ""
              )}
              <Link to="/akun">
                <div className="flex sm:hidden absolute mx-auto w-[90%] mt-5 left-8 cursor-pointer">
                  <img className="flex justify-start" src={arrow} alt=""></img>
                </div>
              </Link>
              {Akun === "transaction" ? (
                <div className="flex">
                  <Pembayaran></Pembayaran>
                </div>
              ) : (
                ""
              )}
              {/* Kanan */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
