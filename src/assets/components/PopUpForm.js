import React, { useState } from "react";

export const PopUpForm = (props) => {
  const [NamaKelas, setNamaKelas] = useState("");
  const [Kategori, setKategori] = useState("");
  const [KodeKelas, setKodeKelas] = useState("");
  const [TipeKelas, setTipeKelas] = useState("GRATIS");
  const [Level, setLevel] = useState("");
  const [Harga, setHarga] = useState("");
  const [Materi, setMateri] = useState("");

  const { handleClose, KelasData, setKelasData } = props;

  const handleKelas = (e) => {
    e.preventDefault();
    const newKelas = {
      id: props.KelasData.length + 1,
      NamaKelas,
      Kategori,
      KodeKelas,
      TipeKelas,
      Level,
      Harga,
      Materi,
    };
    setKelasData([...KelasData, newKelas]);
    handleClose();
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center z-20 fixed t-2 l-[50px] bg-[rgba(0,0,0,0.8)] ">
      <form onSubmit={handleKelas} className="flex flex-col rounded-2xl items-center justify-center lg:h-[95%] w-11/12 md:w-3/4 md:h-[80%] xl:w-5/12 bg-white absolute">
        <i onClick={props.handleClose} className="ri-close-fill absolute text-[#6148FF] right-3 top-3 font-bold text-3xl"></i>
        <h1 className="font-bold sm:text-xl text-[#6148FF] my-2">Tambah Kelas</h1>
        <div className="flex flex-col gap-2 w-4/5 sm:w-4/5">
          <div className="flex flex-col">
            <label htmlFor="">Nama Kelas</label>
            <input type="text" className="px-3 py-2 rounded-2xl border border-[#D0D0D0]" value={NamaKelas} onChange={(e) => setNamaKelas(e.target.value)} />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Kategori</label>
            <input type="text" className="px-3 py-2 rounded-2xl border border-[#D0D0D0]" value={Kategori} onChange={(e) => setKategori(e.target.value)} />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="">Kode Kelas</label>
            <input type="text" className="px-3 py-2 rounded-2xl border border-[#D0D0D0]" value={KodeKelas} onChange={(e) => setKodeKelas(e.target.value)} />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="">Tipe Kelas</label>
            <select className="px-3 py-2 rounded-2xl border border-[#D0D0D0]" value={TipeKelas} onChange={(e) => setTipeKelas(e.target.value)}>
              <option value="GRATIS">GRATIS</option>
              <option value="PREMIUM">PREMIUM</option>
            </select>
          </div>
          <div className="flex flex-col ">
            <label htmlFor="">Level</label>
            <input type="text" className="px-3 py-2 rounded-2xl border border-[#D0D0D0]" value={Level} onChange={(e) => setLevel(e.target.value)} />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="">Harga</label>
            <input type="text" className="px-3 py-2 rounded-2xl border border-[#D0D0D0]" value={Harga} onChange={(e) => setHarga(e.target.value)} />
          </div>
          <div className="flex flex-col ">
            <label htmlFor="">Materi</label>
            <input type="" className="px-3 py-4 rounded-2xl border border-[#D0D0D0]" value={Materi} onChange={(e) => setMateri(e.target.value)} />
          </div>

          <div className="text-white flex gap-2 font-bold text-base my-2">
            <button type="submit" className="bg-[#FF0000] w-1/2 rounded-[25px] p-3">
              Upload Video
            </button>
            <button className="bg-[#6148FF] w-1/2 rounded-[25px] p-3">Simpan</button>
          </div>
        </div>
      </form>
    </div>
  );
};
