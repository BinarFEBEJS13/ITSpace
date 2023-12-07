import React, { useState } from "react";
import Filter from "../../assets/svg/filter.svg";
import Tambah from "../../assets/svg/add-admin.svg";
import { PopUpForm } from "./PopUpForm";

export const TableKelas = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [KelasData, setKelasData] = useState([]);

  const Delete = (id) => {
    const updateKelasData = KelasData.filter((kelas) => kelas.id !== id);
    setKelasData(updateKelasData);
  };

  const handleOpen = () => {
    setIsPopupOpen(true);
  };

  const handleClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="relative">
      <div className="fixed top-0 left-0">{isPopupOpen && <PopUpForm handleClose={handleClose} KelasData={KelasData} setKelasData={setKelasData} />}</div>
      <div className="mx-[2rem] md:mx-[4rem] flex justify-between ">
        <h1 className="font-bold text-normal sm:text-xl">Kelola Kelas</h1>
        <div className="flex gap-2 sm:gap-5">
          <h4 onClick={handleOpen} className="flex gap-2 border-2 px-2 py-1 font-bold text-base rounded-2xl bg-[#6148FF] border-[#6148FF] text-white">
            <img src={Tambah} alt="" />
            Add
          </h4>
          <h4 className="flex gap-1 border-2 px-3 py-1 font-bold text-base rounded-2xl border-[#6148FF] text-[#6148FF]">
            <img src={Filter} alt="" />
            Filter
          </h4>
        </div>
      </div>
      <div className="mx-[2rem] md:mx-[4rem] overflow-x-auto">
        <table className="w-full mt-5 ">
          <thead className="bg-[#EBF3FC]  font-normal text-md text-left">
            <tr>
              <th>Kode Kelas</th>
              <th>Kategori</th>
              <th>Nama Kelas</th>
              <th>Tipe Kelas</th>
              <th>Level</th>
              <th>Harga Kelas</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody className="font-bold text-sm">
            {KelasData.map((kelas, index) => (
              <tr key={index}>
                <td>{kelas.KodeKelas}</td>
                <td>{kelas.Kategori}</td>
                <td>{kelas.NamaKelas}</td>
                <td
                  style={{
                    color: kelas.TipeKelas === "GRATIS" ? "#73CA5C" : "#6148FF",
                  }}
                >
                  {kelas.TipeKelas}
                </td>
                <td>{kelas.Level}</td>
                <td>{kelas.Harga}</td>
                <td className="flex gap-2 text-white">
                  <button className="bg-[#6148FF] rounded-xl py-1 px-4">Ubah</button>
                  <button onClick={() => Delete(kelas.id)} className="bg-[#FF0000] rounded-xl py-1 px-4">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
