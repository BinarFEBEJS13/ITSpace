import React from "react";
// svg card
import star from "../svg/star.svg";
import level from "../svg/kategori-level.svg";
import modul from "../svg/book.svg";
import clock from "../svg/clock.svg";
import diamond from "../svg/diamond.svg";
// svg premium
import arrow from "../svg/arrow-right-white.svg";
import { useNavigate } from "react-router-dom";

export const KelasPremium = ({ onClose, values, totalModul, totalDuration }) => {
  const navigate = useNavigate();

  console.log(values);

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-center">
        <div className=" bg-white p-4 rounded-md flex flex-col gap-4 fixed sm:relative bottom-0 w-full sm:w-auto max-h-screen overflow-y-auto">
          {/* Button Close */}
          <button onClick={onClose} className=" bg-white hover:bg-biru-0 hover:text-white rounded-full px-2 absolute top-1 right-1">
            X
          </button>
          {/* Header */}
          <div className="flex flex-col justify-center items-center">
            <h2 className="font-bold">Selangkah lagi menuju</h2>
            <h2 className="font-bold text-ungu-0">Kelas Premium</h2>
          </div>
          {/* Kelas Premium*/}
          <div className="w-full shadow-sm-button rounded-2xl">
            <div className="w-full sm:h-44 lg:h-48">
              <img src={values.thumbnailUrl} alt="" className="w-full h-full object-cover rounded-2xl" />
            </div>
            <div className="px-4 py-4 flex flex-col gap-2 rounded-2xl">
              <div className="flex items-center justify-between">
                <h6 className="text-ungu-0 text-xs xl:text-sm">Android Development</h6>
                <span className="flex items-center text-sm">
                  <img src={star} alt="" className="w-5" />
                  {values?.rate !== null ? values.rate?.toFixed(1) : "0.0"}
                </span>
              </div>
              <div>
                <h2 className="font-bold text-xs sm:text-base">{values?.title}</h2>
                <span className="opacity-50 text-xs sm:text-sm">by {values?.mentor[0]?.author?.profile?.name}</span>
              </div>
              <div className="flex flex-wrap w-full gap-2 text-xs sm:text-sm">
                <span className="flex gap-2 items-center">
                  <img src={level} alt="" className="w-4" />
                  {values.level} Level
                </span>
                <span className="flex gap-2 items-center">
                  <img src={modul} alt="" className="w-4" />
                  {totalModul !== null ? totalModul : "0"} Modul
                </span>
                <span className="flex gap-2 items-center">
                  <img src={clock} alt="" className="w-4" />
                  {totalDuration !== null ? totalDuration : "0"} Menit
                </span>
              </div>
              <div className="text-sm">
                <div className="flex text-white items-center">
                  <div className="flex gap-2 bg-ungu-0 px-4 py-1 rounded-md">
                    <img src={diamond} alt="" className="w-[0.9rem] sm:w-4" />
                    <span className="text-xs sm:text-sm">Beli</span>
                    <span className="text-xs sm:text-sm">
                      {values?.price &&
                        Number(values.price).toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Button Beli Sekarang */}
          <div className="flex justify-center items-center">
            <button onClick={() => (window.location.href = `/checkout/${values.id}`)} className="flex items-center gap-2 bg-gradientkanan text-white px-4 py-2 rounded-md">
              Beli Sekarang
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
