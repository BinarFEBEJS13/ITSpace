import React from "react";
import searchnav from "../svg/search.svg";

export const Pencarian = ({ onClose }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 bg-black bg-opacity-90 py-4 px-4 sm:hidden">
        <div className="w-full bg-birumuda-0 relative p-4 rounded-md flex flex-col gap-4">
          {/* Button Close */}
          <button onClick={onClose} className=" bg-biru-0 text-white rounded-full px-2 absolute -top-3 -right-3">
            X
          </button>
          {/* Input Pencarian */}
          <div className="relative w-full">
            <input placeholder="cari kursus terbaik.." className="block sm:hidden pl-4 pr-14 w-full py-3 rounded-2xl"></input>
            <img src={searchnav} alt="" className="block sm:hidden bg-biru-0 absolute top-1/2 transform -translate-y-1/2 right-3 rounded-md cursor-pointer p-1" />
          </div>
        </div>
      </div>
    </>
  );
};
