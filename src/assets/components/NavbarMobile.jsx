import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import masuk from "../svg/log-in.svg";

export const NavbarMobile = ({ onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dataToggle, setDataToggle] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  const handleActiveItem = (item) => {
    const cleanedPathname = location.pathname.slice(1);

    if (item === "beranda" && cleanedPathname === "") {
      onClose();
    } else if (item === "kelas" && cleanedPathname === "kelassaya") {
      onClose();
    } else if (item === cleanedPathname) {
      // Jika pengguna mengklik item yang sudah aktif, tutup navbar
      onClose();
    } else {
      setActiveItem(item);
      if (item === "beranda") {
        navigate("/");
      } else if (item === "kursus") {
        navigate("/kursus");
      } else if (item === "kelas") {
        navigate("/kelassaya");
      } else if (item === "notifikasi") {
        navigate("/notifikasi");
      } else if (item === "akun") {
        navigate("/akun");
      }
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black bg-opacity-90 sm:hidden">
        <div className="relative rounded-md flex justify-end">
          <div className="relative w-1/2 bg-birumuda-0 h-screen px-3">
            {/* Button Close */}
            <button onClick={onClose} className=" bg-biru-0 text-white rounded-full absolute px-2 right-3 top-3">
              X
            </button>
            {/* Filter Untuk Mobile */}
            <div className="flex rounded-md pt-10">
              {/* <div className="flex flex-col gap-4 items-start"> */}
              {dataToggle ? (
                <div className="flex flex-col gap-4 items-start">
                  <button onClick={() => handleActiveItem("beranda")}>Beranda</button>
                  <button onClick={() => handleActiveItem("kursus")}>Kursus</button>
                  <button onClick={() => handleActiveItem("kelas")}>Kelas</button>
                  <button onClick={() => handleActiveItem("notifikasi")}>Notifikasi</button>
                  <button onClick={() => handleActiveItem("akun")}>Akun</button>
                </div>
              ) : (
                <div className="flex flex-col gap-4 items-start">
                  <button onClick={() => handleActiveItem("beranda")}>Beranda</button>
                  <button onClick={() => handleActiveItem("kursus")}>Kursus</button>
                  <div onClick={() => navigate("/login")} className="flex gap-1 bg-gradientkanan px-4 py-2 rounded-md">
                    <img src={masuk} alt="" />
                    <button className="text-white">Masuk</button>
                  </div>
                </div>
              )}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
