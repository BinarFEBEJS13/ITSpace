import React, { useState } from "react";
import searchkelas from "../svg/search.svg";
import { useNavigate } from "react-router-dom";

export const PencarianPageKursus = () => {
  const navigate = useNavigate();
  const [querySearch, setQuerySearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!querySearch || querySearch.trim() === "") return;
    if (/^[!@#$%^&*()_+={}|[\]:;"'<>,.?/\\|~`]+$/.test(querySearch)) return;

    navigate(`/kursus/${querySearch}`);
    setQuerySearch("");
  };

  return (
    <div className="hidden sm:block relative w-3/12">
      <form onSubmit={handleSubmit}>
        <input value={querySearch} onChange={(e) => setQuerySearch(e.target.value)} placeholder="cari Kursus..." className="pl-4 pr-14 w-full py-3 border rounded-2xl"></input>
        <img onClick={handleSubmit} src={searchkelas} alt="" className="bg-biru-0 absolute top-1/2 transform -translate-y-1/2 right-3 rounded-md cursor-pointer p-1" />
      </form>
    </div>
  );
};
