import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import masuk from "../svg/log-in.svg";
import keluar from "../svg/log-out-white.svg";
import { useAuthLogout } from "../../services/post-auth-logout";

export const NavbarMobile = ({ onClose, isSuccessDecode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dataToggle, setDataToggle] = useState(false);

  const { mutate: logoutUser, data: dataLogout } = useAuthLogout();

  const handleLogoutUser = () => {
    logoutUser();
  };

  useEffect(() => {
    if (dataLogout?.data?.success === true) {
      window.location.href = "/login";
    }
  }, [dataLogout]);

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
      if (item === "beranda") {
        navigate("/");
      } else if (item === "kursus") {
        window.location.href = "/kursus/all";
      } else if (item === "kelas") {
        window.location.href = "/kelassaya/all";
      } else if (item === "notifikasi") {
        window.location.href = "/notifikasi";
      } else if (item === "akun") {
        window.location.href = "/akun";
      }
    }
  };

  useEffect(() => {
    if (isSuccessDecode) {
      setDataToggle(!dataToggle);
    }
  }, [isSuccessDecode]);

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black bg-opacity-90 sm:hidden">
        <div className="relative rounded-md flex justify-end">
          <div className="relative w-1/2 bg-gradientkanan h-screen px-3">
            {/* Button Close */}
            <button onClick={onClose} className=" bg-white text-biru-0 rounded-full absolute px-2 right-3 top-3">
              X
            </button>
            {/* Filter Untuk Mobile */}
            <div className="flex rounded-md pt-10">
              {/* <div className="flex flex-col gap-4 items-start"> */}
              {dataToggle ? (
                <div className="flex flex-col gap-4 items-start text-white">
                  <button onClick={() => handleActiveItem("beranda")} className=" text-sm">
                    Beranda
                  </button>
                  <button onClick={() => handleActiveItem("kursus")} className=" text-sm">
                    Kursus
                  </button>
                  <button onClick={() => handleActiveItem("kelas")} className=" text-sm">
                    Kelas
                  </button>
                  <button onClick={() => handleActiveItem("notifikasi")} className=" text-sm">
                    Notifikasi
                  </button>
                  <button onClick={() => handleActiveItem("akun")} className=" text-sm">
                    Akun
                  </button>
                  <div onClick={() => handleLogoutUser()} className="flex gap-1 bg-merah-0 px-2 py-2 rounded-md text-sm">
                    <img src={keluar} alt="keluar" />
                    <button className="text-white">Keluar</button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4 items-start text-white">
                  <button onClick={() => handleActiveItem("beranda")} className=" text-sm">
                    Beranda
                  </button>
                  <button onClick={() => handleActiveItem("kursus")} className=" text-sm">
                    Kursus
                  </button>
                  <div onClick={() => navigate("/login")} className="flex gap-1 border border-white px-4 py-2 rounded-md text-sm">
                    <img src={masuk} alt="masuk" />
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
