import React from "react";
import { Navbar } from "../assets/components/Navbar";

export const Notifikasi = () => {
  return (
    <div className="flex flex-col w-full h-screen">
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
        <div className="flex px-0 sm:w-[50%] mt-5">
          <div className="flex flex-col bg-transparent sm:bg-white w-full h-[300px] rounded-xl z-10 sm:border-[1.5px] sm:border-[#6148FF]">
            <div className="hidden w-full h-[15%] justify-center items-center rounded-t-xl bg-biru-0 text-white font-semibold tracking-[1px] z-0 sm:flex">Notifikasi</div>
            <div className="flex justify-center sm:hidden">
              <h1 className="flex w-[90%] sm:hidden text-[1.5rem] font-extrabold">Notifikasi</h1>
            </div>
            <div className="relative flex flex-col mx-auto w-[90%]">
              <div className="relative flex w-full justify-start sm:justify-around">
                <div className="flex flex-row space-x-2 mt-5">
                  <div className="flex justify-center items-center w-5 h-5 sm:w-4 sm:h-4 rounded-full bg-[#6148FF] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-3 sm:h-3">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                  </div>
                  <div className="flex text-[12px] flex-col sm:text-[10px]">
                    <p className="text-[#6148FF] font-semibold">Promosi</p>
                    <p className="font-bold">Dapatkan potongan 50% selama bulan Maret!</p>
                    <p className="text-gray-400">Syarat dan Ketentuan berlaku!</p>
                  </div>
                </div>
                <div className="absolute flex flex-row mt-5 space-x-1 sm:relative right-5">
                  <p className="text-[10px] font-medium text-gray-400">2 Maret, 12.00</p>
                  <div className="w-2 h-2 bg-green-300 rounded-full mt-[3px]"></div>
                </div>
              </div>
              <hr className="flex mt-3 border-[1px] sm:hidden"></hr>
              <div className="relative flex w-full justify-start sm:justify-around space-x-[6.5rem]">
                <div className="flex flex-row space-x-2 mt-5">
                  <div className="flex justify-center items-center w-5 h-5 sm:w-4 sm:h-4 rounded-full bg-[#6148FF] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 sm:w-3 sm:h-3">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                  </div>
                  <div className="flex text-[12px] flex-col sm:text-[10px]">
                    <p className="text-[#6148FF] font-semibold">Notifikasi</p>
                    <p className="font-bold">Password berhasil diubah</p>
                  </div>
                </div>
                <div className="absolute sm:relative right-5 flex flex-row mt-5 space-x-1">
                  <p className="text-[10px] font-medium text-gray-400">1 Maret, 10.00</p>
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-[3px]"></div>
                </div>
              </div>
              <div className="hidden w-full justify-start sm:justify-around sm:flex sm:relative md:top-0">
                <div className="flex flex-row space-x-2 mt-5">
                  <div className="flex justify-center items-center w-4 h-4 rounded-full bg-[#6148FF] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                      />
                    </svg>
                  </div>
                  <div className="flex text-[12px] flex-col sm:text-[10px]">
                    <p className="text-[#6148FF] font-semibold">Promosi</p>
                    <p className="font-bold">Dapatkan potongan 50% selama bulan Maret!</p>
                    <p className="text-gray-400">Syarat dan Ketentuan berlaku!</p>
                  </div>
                </div>
                <div className="absolute sm:relative right-5 flex flex-row mt-5 space-x-1">
                  <p className="text-[10px] font-medium text-gray-400">1 Maret, 09.00</p>
                  <div className="w-2 h-2 bg-green-300 rounded-full mt-[3px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
