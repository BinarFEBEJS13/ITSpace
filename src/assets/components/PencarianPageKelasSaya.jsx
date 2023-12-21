import React, { useState } from "react";
import searchkelas from "../svg/search.svg";
import { useNavigate } from "react-router-dom";

export const PencarianPageKelasSaya = () => {
  const navigate = useNavigate();
  const [queryEnrollments, setQueryEnrollments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!queryEnrollments || queryEnrollments.trim() === "") return;
    if (/^[!@#$%^&*()_+={}|[\]:;"'<>,.?/\\|~`]+$/.test(queryEnrollments)) return;

    navigate(`/kelassaya/${queryEnrollments}`);
    setQueryEnrollments("");
  };

  return (
    <div className="hidden sm:block relative w-3/12">
      <form onSubmit={handleSubmit}>
        <input value={queryEnrollments} onChange={(e) => setQueryEnrollments(e.target.value)} placeholder="cari Kelas..." className="pl-4 pr-14 w-full py-3 border rounded-2xl"></input>
        <img onClick={handleSubmit} src={searchkelas} alt="" className="bg-biru-0 absolute top-1/2 transform -translate-y-1/2 right-3 rounded-md cursor-pointer p-1" />
      </form>
    </div>
  );
};
