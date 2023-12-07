import React from "react";
// png kategori belajar
import uiux from "../img/uiux.png";
// svg card
import star from "../svg/star.svg";
import level from "../svg/kategori-level.svg";
import modul from "../svg/book.svg";
import clock from "../svg/clock.svg";
import diamond from "../svg/diamond.svg";
// svg premium
import arrow from "../svg/arrow-right-white.svg";

export const KelasPremium = () => {
  return (
    <>
      <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-center">
        <div className=" bg-white p-4 rounded-md flex flex-col gap-4 fixed sm:relative bottom-0 w-full sm:w-auto max-h-screen overflow-y-auto">
          {/* Button Close */}
          <button className=" bg-white hover:bg-biru-0 hover:text-white rounded-full px-2 absolute top-1 right-1">X</button>
          {/* Header */}
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold">Selangkah lagi menuju</h2>
            <h2 className="font-bold text-ungu-0">Kelas Premium</h2>
          </div>
          {/* Kelas Premium*/}
          <div className="w-full shadow-sm-button rounded-2xl">
            <div>
              <img src={uiux} alt="" className="w-full rounded-2xl" />
            </div>
            <div className="px-4 py-4 flex flex-col gap-2 rounded-2xl">
              <div className="flex justify-between">
                <h6 className="text-ungu-0">Android Development</h6>
                <span className="flex items-center">
                  <img src={star} alt="" className="w-6" />
                  4.7
                </span>
              </div>
              <div>
                <h2 className="font-bold cursor-pointer">Belajar Web Designer dengan Figma</h2>
                <span className="opacity-50 text-sm">by Angela Doe</span>
              </div>
              <div className="flex flex-wrap w-full gap-2 text-sm">
                <span className="flex gap-2 items-center">
                  <img src={level} alt="" className="w-5" />
                  Intermediate Level
                </span>
                <span className="flex gap-2 items-center">
                  <img src={modul} alt="" className="w-5" />
                  10 Modul
                </span>
                <span className="flex gap-2 items-center">
                  <img src={clock} alt="" className="w-5" />
                  120 Menit
                </span>
              </div>
              <div className="text-sm">
                <div className="flex text-white items-center">
                  <div className="flex gap-2 bg-ungu-0 px-4 py-1 rounded-md">
                    <img src={diamond} alt="" className="w-4" />
                    <span>Beli</span>
                    <span>Rp 249.000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Button Beli Sekarang */}
          <div className="flex justify-center items-center">
            <button className="flex items-center gap-2 bg-gradientkanan text-white px-4 py-2 rounded-md">
              Beli Sekarang
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
