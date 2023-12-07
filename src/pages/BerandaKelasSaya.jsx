import React, { useEffect, useState } from "react";
import { Navbar } from "../assets/components/Navbar";
import searchkelas from "../assets/svg/search.svg";
// png kategori belajar
import uiux from "../assets/img/uiux.png";
// svg card
import star from "../assets/svg/star.svg";
import level from "../assets/svg/kategori-level.svg";
import modul from "../assets/svg/book.svg";
import clock from "../assets/svg/clock.svg";
import diamond from "../assets/svg/diamond.svg";
import complete from "../assets/svg/progress.svg";
import { FilterMobile } from "../assets/components/FilterMobile";

export const BerandaKelasSaya = () => {
  const [activeKelas, setActiveKelas] = useState("all");
  const [progress, setProgress] = useState(100);

  const handleActivePopular = (item) => {
    setActiveKelas(item);
  };

  // Handle Filter Mobile
  const [activeFilter, setActiveFilter] = useState(false);
  const handleFilter = () => {
    setActiveFilter(!activeFilter);
  };

  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <div className="w-screen px-6 sm:px-12 py-8">
          <div className="container mx-auto">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h1 className="text-xl sm:text-2xl font-bold">Kelas Berjalan</h1>
                <div className="hidden sm:block relative w-3/12">
                  <input placeholder="cari kelas..." className="pl-4 pr-14 w-full py-3 border rounded-2xl"></input>
                  <img src={searchkelas} alt="" className="bg-biru-0 absolute top-1/2 transform -translate-y-1/2 right-3 rounded-md cursor-pointer p-1" />
                </div>
                <h6 onClick={handleFilter} className="block sm:hidden text-ungu-0">
                  Filter
                </h6>
              </div>
              <div className="flex flex-col sm:flex-row gap-8">
                {/* Filter Kelas Berjalan*/}
                <div className="hidden sm:block w-2/6 xl:w-3/12  ">
                  <div className="flex flex-col gap-3 px-6 py-8 bg-birumuda-0 shadow-sm-button rounded-md">
                    <h2 className="font-semibold text-lg">Filter</h2>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-2">
                          <input type="checkbox" className="accent-biru-0 w-4"></input>
                          <p className="text-sm">Paling Baru</p>
                        </div>
                        <div className="flex gap-2">
                          <input type="checkbox" className="accent-biru-0 w-4"></input>
                          <p className="text-sm">Paling Populer</p>
                        </div>
                        <div className="flex gap-2">
                          <input type="checkbox" className="accent-biru-0 w-4"></input>
                          <p className="text-sm">Promo</p>
                        </div>
                      </div>

                      {/* Berdasarkan Kategori */}
                      <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-lg">Kategori</h2>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-2">
                            <input type="checkbox" className="accent-biru-0 w-4"></input>
                            <p className="text-sm">UI/UX Design</p>
                          </div>
                          <div className="flex gap-2">
                            <input type="checkbox" className="accent-biru-0 w-4"></input>
                            <p className="text-sm">Product Management</p>
                          </div>
                          <div className="flex gap-2">
                            <input type="checkbox" className="accent-biru-0 w-4"></input>
                            <p className="text-sm">Web Development</p>
                          </div>
                          <div className="flex gap-2">
                            <input type="checkbox" className="accent-biru-0 w-4"></input>
                            <p className="text-sm">Android Development</p>
                          </div>
                          <div className="flex gap-2">
                            <input type="checkbox" className="accent-biru-0 w-4"></input>
                            <p className="text-sm">IOS Development</p>
                          </div>
                          <div className="flex gap-2">
                            <input type="checkbox" className="accent-biru-0 w-4"></input>
                            <p className="text-sm">Data Science</p>
                          </div>
                        </div>
                      </div>
                      {/* Berdasarkan Level kesulitan */}
                      <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-lg">Level Kesulitan</h2>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-2">
                            <input type="checkbox" className="accent-biru-0 w-4"></input>
                            <p className="text-sm">Semua Level</p>
                          </div>
                          <div className="flex gap-2">
                            <input type="checkbox" className="accent-biru-0 w-4"></input>
                            <p className="text-sm">Beginner Level</p>
                          </div>
                          <div className="flex gap-2">
                            <input type="checkbox" className="accent-biru-0 w-4"></input>
                            <p className="text-sm">Intermediate Level</p>
                          </div>
                          <div className="flex gap-2">
                            <input type="checkbox" className="accent-biru-0 w-4"></input>
                            <p className="text-sm">Advanced Level</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <button className="bg-merah-0 text-white rounded-md px-4 py-1 mt-4 shadow-sm-button">Hapus Filter</button>
                    </div>
                  </div>
                </div>
                {/* Daftar Kelas*/}
                <div className="w-full sm:w-4/6 xl:w-9/12 flex flex-col gap-4">
                  {/* Button Filter kelas saya*/}
                  <div className="flex bg-white justify-between gap-4">
                    <button className={`${activeKelas === "all" ? "bg-ungu-0 text-white " : "bg-birumuda-0 text-black "}w-1/3 border rounded-md py-2 text-sm hover:bg-ungu-0 hover:text-white`} onClick={() => handleActivePopular("all")}>
                      All
                    </button>
                    <button
                      className={`${activeKelas === "inprogress" ? "bg-ungu-0 text-white " : "bg-birumuda-0 text-black "}w-1/3 border rounded-md py-2 text-sm hover:bg-ungu-0 hover:text-white`}
                      onClick={() => handleActivePopular("inprogress")}
                    >
                      In Progress
                    </button>
                    <button
                      className={`${activeKelas === "selesai" ? "bg-ungu-0 text-white " : "bg-birumuda-0 text-black "}w-1/3 border rounded-md py-2 text-sm hover:bg-ungu-0 hover:text-white`}
                      onClick={() => handleActivePopular("selesai")}
                    >
                      Selesai
                    </button>
                  </div>
                  {/* Card Kelas */}
                  <div className="flex w-full">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 ">
                      {/* Card Progress */}
                      <div className="w-full shadow-sm-button rounded-2xl ">
                        <div className="relative w-full overflow-hidden">
                          <img src={uiux} alt="" className="w-full rounded-2xl hover:scale-110 transition-transform duration-300 ease-in-out" />
                        </div>
                        <div className="px-2 sm:px-4 py-4 flex flex-col gap-2 rounded-2xl">
                          <div className="flex justify-between items-center ">
                            <h6 className="text-ungu-0 text-xs sm:text-sm overflow-x-hidden">Software Development</h6>
                            <span className="flex items-center text-xs sm:text-sm">
                              <img src={star} alt="" className="w-4" />
                              4.7
                            </span>
                          </div>
                          <div>
                            <h2 className="font-bold cursor-pointer text-xs sm:text-sm">Belajar Web Designer dengan Figma</h2>
                            <span className="opacity-50 text-xs sm:text-sm">by Angela Doe</span>
                          </div>
                          <div className="flex flex-wrap w-full gap-2 text-xs sm:text-sm">
                            <span className="flex gap-2 items-center">
                              <img src={level} alt="" className="w-4" />
                              Intermediate Level
                            </span>
                            <span className="flex gap-2 items-center">
                              <img src={modul} alt="" className="w-4" />
                              10 Modul
                            </span>
                            <span className="flex gap-2 items-center">
                              <img src={clock} alt="" className="w-4" />
                              120 Menit
                            </span>
                          </div>
                          <div className="text-sm flex gap-2">
                            <img src={complete} alt="" className="w-5" />
                            <div className="w-full xl:w-5/6 bg-birumuda-0 rounded-md">
                              <div className=" text-white text-center bg-ungu-0 rounded-md text-xs sm:text-sm py-1 flex pl-2 max-w-full" style={{ width: `${progress}%` }}>
                                {progress}%<span className="pl-1">Complete</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {activeFilter ? <FilterMobile onClose={handleFilter} /> : ""}
    </>
  );
};
