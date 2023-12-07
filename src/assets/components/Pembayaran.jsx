import React from "react";
import imagepayment from "../img/image_payment.png";

// svg
import star from "../svg/star.svg";
import clock from "../svg/clock.svg";
import book from "../svg/book.svg";
import badge from "../svg/badge.svg";
import diamond from "../svg/diamond.svg";

export const Pembayaran = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center ml-0 sm:ml-4 mt-[4rem] sm:mt-4 w-[23rem] sm:w-[18rem] px-5">
        <h2 className="flex w-[90%] sm:w-full text-[1.5rem] sm:text-lg text-start sm:justify-center font-extrabold">Riwayat Pembayaran</h2>
        <div className="card mt-3 gap-2">
          <img src={imagepayment} alt=""></img>
          <div className="flex flex-col gap-[2px] ml-2 mt-1">
            <div className="flex space-x-8 text-[10px] font-bold">
              <p>UI/UX Design</p>
              <div className="flex items-center">
                <img src={star} alt=""></img>
                <p>4.7</p>
              </div>
            </div>
            <p className="text-[10px] font-bold">Belajar Web Designer dengan Figma</p>
            <p className="text-[8px] sm:text-[7px]">by Angela Doe</p>
            <div className="flex text-[9px] sm:text-[7px] gap-5 font-bold">
              <div className="flex space-x-1">
                <img className="w-2.5 h-2.5" src={badge} alt=""></img>
                <p className="text-[#6148FF]">Intermediate Level</p>
              </div>
              <div className="flex space-x-1">
                <img className="w-2.5 h-2.5" src={book} alt=""></img>
                <p>10 Modul</p>
              </div>
              <div className="flex space-x-1">
                <img className="w-2.5 h-2.5" src={clock} alt=""></img>
                <p>120 Menit</p>
              </div>
            </div>
            <div className="flex justify-center space-x-1 rounded-lg items-center w-[8rem] h-4 sm:w-[7rem] sm:h-3 bg-merah-0 text-white my-2 sm:mt-1">
              <img className="w-2 h-2" src={diamond} alt=""></img>
              <p className="text-[8px]">Waiting for Payment</p>
            </div>
          </div>
        </div>
        <div className="card mt-3 gap-2">
          <img src={imagepayment} alt=""></img>
          <div className="flex flex-col gap-[2px] ml-2 mt-1">
            <div className="flex space-x-8 text-[10px] font-bold">
              <p>UI/UX Design</p>
              <div className="flex items-center">
                <img src={star} alt=""></img>
                <p>4.8</p>
              </div>
            </div>
            <p className="text-[10px] font-bold">Membuat Wireframe Hingga ke Visual Design</p>
            <p className="text-[8px] sm:text-[7px]">by Angela Doe</p>
            <div className="flex text-[9px] sm:text-[7px] gap-5 font-bold">
              <div className="flex space-x-1">
                <img className="w-2.5 h-2.5" src={badge} alt=""></img>
                <p className="text-[#6148FF]">Intermediate Level</p>
              </div>
              <div className="flex space-x-1">
                <img className="w-2.5 h-2.5" src={book} alt=""></img>
                <p>5 Modul</p>
              </div>
              <div className="flex space-x-1">
                <img className="w-2.5 h-2.5" src={clock} alt=""></img>
                <p>60 Menit</p>
              </div>
            </div>
            <div className="flex justify-center space-x-1 rounded-lg items-center w-[4rem] h-4 sm:w-[3rem] sm:h-3 bg-hijau-0 text-white my-2 sm:mt-1">
              <img className="w-2 h-2" src={diamond} alt=""></img>
              <p className="text-[8px]">Paid</p>
            </div>
          </div>
        </div>
        <div className="card mt-3 gap-2">
          <img src={imagepayment} alt=""></img>
          <div className="flex flex-col gap-[2px] ml-2 mt-1">
            <div className="flex space-x-8 text-[10px] font-bold">
              <p>UI/UX Design</p>
              <div className="flex items-center">
                <img src={star} alt=""></img>
                <p>4.4</p>
              </div>
            </div>
            <p className="text-[10px] font-bold">Pengenalan tentang Design System</p>
            <p className="text-[8px] sm:text-[7px]">by Angela Doe</p>
            <div className="flex text-[9px] sm:text-[7px] gap-5 font-bold">
              <div className="flex space-x-1">
                <img className="w-2.5 h-2.5" src={badge} alt=""></img>
                <p className="text-[#6148FF]">Advanced Level</p>
              </div>
              <div className="flex space-x-1">
                <img className="w-2.5 h-2.5" src={book} alt=""></img>
                <p>10 Modul</p>
              </div>
              <div className="flex space-x-1">
                <img className="w-2.5 h-2.5" src={clock} alt=""></img>
                <p>120 Menit</p>
              </div>
            </div>
            <div className="flex justify-center space-x-1 rounded-lg items-center w-[4rem] h-4 sm:w-[3rem] sm:h-3 bg-hijau-0 text-white my-2 sm:mt-1">
              <img className="w-2 h-2" src={diamond} alt=""></img>
              <p className="text-[8px]">Paid</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
