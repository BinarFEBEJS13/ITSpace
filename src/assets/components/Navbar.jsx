import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../img/logo-navbar.png";
import searchnav from "../svg/search.svg";
import hamburgermenu from "../svg/hamburger-putih.svg";
import login from "../svg/log-in.svg";
// import svg navbar web & laptop
import beranda from "../svg/beranda.svg";
import list from "../svg/list.svg";
import bell from "../svg/bell-putih.svg";
import user from "../svg/user.svg";
import kursus from "../svg/course.svg";
import { Pencarian } from "./Pencarian";
import { NavbarMobile } from "./NavbarMobile";
import { useGetDecode } from "../../services/get-Datas-Decode";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dataToggle, setDataToggle] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeNavbarMobile, setActiveNavbarMobile] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [querySearch, setQuerySearch] = useState("");

  // console.log(CookieStorage.get(CookieKeys.RefreshToken));

  const { isSuccess } = useGetDecode();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!querySearch || querySearch.trim() === "") return;
    if (/^[!@#$%^&*()_+={}|[\]:;"'<>,.?/\\|~`]+$/.test(querySearch)) return;

    navigate(`/kursus/${querySearch}`);
    setQuerySearch("");
  };

  const handleSearch = () => {
    setActiveSearch(!activeSearch);
  };
  const handleNavbarMobile = () => {
    setActiveNavbarMobile(!activeNavbarMobile);
  };

  const handleActiveItem = (item) => {
    setActiveItem(item);

    if (item === "beranda") {
      navigate("/");
    } else if (item === "kursus") {
      window.location.href = "/kursus/all";
    } else if (item === "kelas") {
      window.location.href = "/kelassaya/all";
    } else if (item === "notifikasi") {
      navigate("/notifikasi");
    } else if (item === "akun") {
      navigate("/akun");
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setDataToggle(true);
    }
  }, [isSuccess, setDataToggle]);

  useEffect(() => {
    // Mendapatkan path dari lokasi saat ini
    const path = location.pathname;

    // Mengatur activeItem sesuai dengan path
    if (path === "/") {
      setActiveItem("beranda");
    } else if (path === "/kursus/all") {
      setActiveItem("kursus");
    } else if (path === "/kelassaya/all") {
      setActiveItem("kelas");
    } else if (path === "/notifikasi") {
      setActiveItem("notifikasi");
    } else if (path === "/akun") {
      setActiveItem("akun");
    }
  }, [location.pathname]);

  return (
    <>
      <div className="w-screen h-20 bg-gradientkanan px-4 sm:px-12">
        <div className="container mx-auto h-full">
          <div className="flex h-full">
            {/* Logo ITSpace */}
            <div className="flex sm:flex items-center w-2/6 sm:w-1/6  md:w-2/6">
              <img src={logo} alt="" className="w-[12rem] sm:w-5/6 md:w-5/6 lg:w-[12rem] cursor-pointer" onClick={() => navigate("/")} />
            </div>
            {/* Search Ukuran diatas sm */}
            <div className="flex items-center justify-center w-2/3 sm:w-2/6">
              <div className="relative w-full">
                <form onSubmit={handleSubmit}>
                  <input value={querySearch} onChange={(e) => setQuerySearch(e.target.value)} placeholder="cari kursus terbaik.." className="hidden sm:block pl-4 pr-14 w-full py-3 rounded-2xl"></input>
                </form>
                <img onClick={handleSubmit} src={searchnav} alt="" className="hidden sm:block bg-biru-0 absolute top-1/2 transform -translate-y-1/2 right-3 rounded-md cursor-pointer p-1" />
                {/* Pencarian untuk mobile */}
                <img src={searchnav} alt="" onClick={handleSearch} className="block w-8 sm:hidden absolute top-1/2 transform -translate-y-1/2 right-3 rounded-md cursor-pointer mr-6" />
                <img src={hamburgermenu} alt="" onClick={handleNavbarMobile} className="block w-8 sm:hidden absolute top-1/2 transform -translate-y-1/2 right-0 rounded-md cursor-pointer " />
              </div>
            </div>
            {/* Menu Navbar */}
            <div className="hidden sm:flex items-center w-2/6 sm:w-3/6 lg:w-2/6 justify-end ">
              {/* Apbila user belum login */}
              {dataToggle ? (
                // Kalo user sudah login
                <div className="flex sm:gap-3 lg:gap-4 items-center">
                  {/* Beranda */}
                  <div className="cursor-pointer" onClick={() => handleActiveItem("beranda")}>
                    {activeItem === "beranda" ? (
                      <div className="flex text-white gap-1 lg:gap-2 bg-gradientbutton px-2 lg:px-4 py-1 rounded-md shadow-sm-button">
                        <img src={beranda} alt="" />
                        Beranda
                      </div>
                    ) : (
                      <img src={beranda} alt="" className="" />
                    )}
                  </div>
                  {/* Kursus */}
                  <div className="cursor-pointer" onClick={() => handleActiveItem("kursus")}>
                    {activeItem === "kursus" ? (
                      <div className="flex text-white gap-2 bg-gradientbutton px-4 py-1 rounded-md shadow-sm-button">
                        <img src={kursus} alt="" />
                        Kursus
                      </div>
                    ) : (
                      <img src={kursus} alt="" className="" />
                    )}
                  </div>
                  {/* Kelas */}
                  <div className="cursor-pointer" onClick={() => handleActiveItem("kelas")}>
                    {activeItem === "kelas" ? (
                      <div className="flex text-white gap-2 bg-gradientbutton px-4 py-1 rounded-md shadow-sm-button">
                        <img src={list} alt="" />
                        Kelas
                      </div>
                    ) : (
                      <img src={list} alt="" className="" />
                    )}
                  </div>
                  {/* Notfikasi */}
                  <div className="cursor-pointer" onClick={() => handleActiveItem("notifikasi")}>
                    {activeItem === "notifikasi" ? (
                      <div className="flex text-white gap-2 bg-gradientbutton px-4 py-1 rounded-md shadow-sm-button">
                        <img src={bell} alt="" />
                        Notifikasi
                      </div>
                    ) : (
                      <img src={bell} alt="" className="" />
                    )}
                  </div>
                  {/* Akun */}
                  <div className="cursor-pointer" onClick={() => handleActiveItem("akun")}>
                    {activeItem === "akun" ? (
                      <div className="flex text-white gap-2 bg-gradientbutton px-4 py-1 rounded-md shadow-sm-button">
                        <img src={user} alt="" />
                        Akun
                      </div>
                    ) : (
                      <img src={user} alt="" className="" />
                    )}
                  </div>
                </div>
              ) : (
                ///////
                <div className="flex gap-4 items-center">
                  {/* Beranda */}
                  <div className="cursor-pointer" onClick={() => handleActiveItem("beranda")}>
                    {activeItem === "beranda" ? (
                      <div className="flex text-white gap-1 lg:gap-2 bg-gradientbutton px-2 lg:px-4 py-1 rounded-md shadow-sm-button">
                        <img src={beranda} alt="" />
                        Beranda
                      </div>
                    ) : (
                      <img src={beranda} alt="" className="" />
                    )}
                  </div>
                  {/* Kursus */}
                  <div className="cursor-pointer" onClick={() => handleActiveItem("kursus")}>
                    {activeItem === "kursus" ? (
                      <div className="flex text-white gap-2 bg-gradientbutton px-4 py-1 rounded-md shadow-sm-button">
                        <img src={kursus} alt="" />
                        Kursus
                      </div>
                    ) : (
                      <img src={kursus} alt="" className="" />
                    )}
                  </div>
                  <button onClick={() => navigate("/login")} className="flex gap-2 items-center text-white">
                    <img src={login} alt="" />
                    Masuk
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {activeSearch ? <Pencarian onClose={handleSearch} /> : ""}
      {activeNavbarMobile ? <NavbarMobile onClose={handleNavbarMobile} isSuccessDecode={isSuccess} /> : ""}
    </>
  );
};
