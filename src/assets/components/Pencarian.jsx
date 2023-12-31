import React, { useState } from "react";
import searchnav from "../svg/search.svg";
import { useNavigate } from "react-router-dom";

export const Pencarian = ({ onClose }) => {
  const navigate = useNavigate();
  const [querySearch, setQuerySearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!querySearch || querySearch.trim() === "") return;
    if (/^[!@#$%^&*()_+={}|[\]:;"'<>,.?/\\|~`]+$/.test(querySearch)) return;

    navigate(`/kursus/${querySearch}`);
    onClose();
  };

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black bg-opacity-90 py-4 px-4 sm:hidden">
        <div className="w-full bg-gradientkanan relative p-4 rounded-md flex flex-col gap-4">
          {/* Button Close */}
          <button onClick={onClose} className=" bg-white text-biru-0 rounded-full px-2 absolute -top-3 -right-3">
            X
          </button>
          {/* Input Pencarian */}
          <div className="relative w-full">
            <form onSubmit={handleSubmit}>
              <input value={querySearch} onChange={(e) => setQuerySearch(e.target.value)} placeholder="cari kursus terbaik.." className="block sm:hidden pl-4 pr-14 w-full py-3 rounded-2xl"></input>
            </form>
            <img onClick={handleSubmit} src={searchnav} alt="" className="block sm:hidden bg-biru-0 absolute top-1/2 transform -translate-y-1/2 right-3 rounded-md cursor-pointer p-1" />
          </div>
        </div>
      </div>
    </>
  );
};
