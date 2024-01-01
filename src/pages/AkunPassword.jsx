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
import { Link, useNavigate } from "react-router-dom";
import { useLogoutUser } from "../services/auth/logout_user";
import { CookieKeys, CookieStorage } from "../utils/cookies";

export const AkunPassword = () => {
  const [Akun, setAkun] = useState("changepass");
  const navigate = useNavigate();

  const handleAccount = (item) => {
    setAkun(item);
  };

  const { mutate: logoutUser } = useLogoutUser();

  const handleLogout = () => {
    logoutUser();
    CookieStorage.remove(CookieKeys.AccessToken);
    CookieStorage.remove(CookieKeys.RefreshToken);
    navigate("/login");
  };

  return (
    <div className="flex flex-col w-full sm:bg-white overflow-x-hidden">
      <Navbar></Navbar>
      <div className="hidden sm:flex justify-start sm:justify-center">
        <div className="flex justify-start w-[55%] sm:w-[60%] md:w-[85%] lg:w-[60%] px-0 mt-5">
          <div className="flex space-x-2 cursor-pointer" onClick={() => navigate("/")}>
            <div className="text-[#6148FF]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </div>
            <p className="text-[#6148FF] font-bold">Kembali ke Beranda</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-center">
        <div className="flex px-0 sm:w-[80%] md:w-[80%] lg:w-[55%] mt-8">
          <div className="relative flex flex-col bg-transparent sm:bg-white sm:border-[1.5px] sm:border-[#6148FF] w-full h-[550px] bottom-5 rounded-xl z-0">
            <div className="hidden sm:flex sm:static w-full min-h-[40px] justify-center items-center rounded-tl-xl rounded-tr-xl bg-gradientkanan text-white font-semibold tracking-[1px] z-10">Akun</div>
            <div className="hidden sm:flex justify-center">
              <h1 className="flex w-[90%] sm:hidden text-[1.5rem] font-extrabold">Akun</h1>
            </div>
            <div className="flex w-full justify-center sm:gap-4 mt-2 sm:mt-0 overflow-hidden">
              {/* Bagian Kiri */}
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
                  <div onClick={handleLogout} className="flex items-center space-x-3 cursor-pointer">
                    <img className="w-7 h-7 sm:w-5 sm:h-5" src={logout} alt=""></img>
                    <p className="text-[12px] font-semibold hover:text-[#6148FF]">Keluar</p>
                  </div>
                  <hr className="border-[1px]"></hr>
                  <p className="text-center text-[12px] text-gray-400 my-4 sm:mt-4">Version 1.1.0</p>
                </div>
              </div>
              {/* Bagian Kanan */}
              <div className="overflow-y-auto custom-scrollbar">
                {Akun === "profile" ? (
                  <div className="hidden sm:flex">
                    <Profile></Profile>
                  </div>
                ) : (
                  ""
                )}
                <Link to="/akun">
                  <div className="flex sm:hidden absolute mx-auto justify-start w-[80%] ml-5 cursor-pointer">
                    <img className="flex justify-start" src={arrow} alt=""></img>
                  </div>
                </Link>
                {Akun === "changepass" ? (
                  <div className="flex">
                    <UbahPassword></UbahPassword>
                  </div>
                ) : (
                  ""
                )}
                {Akun === "transaction" ? (
                  <div className="hidden sm:flex">
                    <Pembayaran></Pembayaran>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
