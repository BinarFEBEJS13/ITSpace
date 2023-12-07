import React from "react";
// png onboarding
import onboard from "../img/onboarding.png";

export const Onboarding = () => {
  return (
    <>
      <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-center">
        <div className="w-2/3 lg:w-1/3 bg-white relative p-4 rounded-md flex flex-col gap-4">
          {/* Button Close */}
          <button className=" bg-white hover:bg-biru-0 hover:text-white rounded-full px-2 absolute top-1 right-1">X</button>
          {/* Header */}
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-2xl font-bold">Onboarding...</h2>
            <img src={onboard} alt="" />
            <div className="flex flex-col items-center justify-center w-full text-xs gap-2">
              <p className="font-bold text-center">Persiapkan hal berikut untuk belajar yang maksimal:</p>
              <p className="text-center">Mempunyai akun Figma atau Install Adobe XD Menggunakan internet minimal kecepatan 2Mbps Belajar di tempat yang nyaman</p>
            </div>
            <button className="bg-gradientkanan text-white px-4 py-2 rounded-md">Ikuti Kelas</button>
          </div>
        </div>
      </div>
    </>
  );
};
