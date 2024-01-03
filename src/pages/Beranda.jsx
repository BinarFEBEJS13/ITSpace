import React, { useState } from "react";
import { Navbar } from "../assets/components/Navbar";
// png main section
import course from "../assets/img/course.png";
import uiux from "../assets/img/ui-ux.jpeg";
import database from "../assets/img/database.jpeg";
import frontend from "../assets/img/frontend.jpeg";
import backend from "../assets/img/backend.jpeg";
import machinelearning from "../assets/img/machinelearning.jpeg";
import datascience from "../assets/img/datascience.jpeg";

// svg card
import star from "../assets/svg/star.svg";
import level from "../assets/svg/kategori-level.svg";
import modul from "../assets/svg/book.svg";
import clock from "../assets/svg/clock.svg";
import diamond from "../assets/svg/diamond.svg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination } from "swiper/modules";
import { Footer } from "../assets/components/Footer";
import { NotFoundCourse } from "../assets/components/HandleErrorPage/NotFoundCourse";
// IMPORT CHAKRA UI
import { Spinner } from "@chakra-ui/react";
import { useGetDataKursus } from "../services/get-Datas-Courses";

export const Beranda = () => {
  const [activePopular, setActivePopular] = useState("");

  const handleActivePopular = (item) => {
    setActivePopular(item);
  };
  const { data: dataKursuss, isLoading } = useGetDataKursus({
    category: activePopular,
    order: "popularity",
    page: 1,
    limit: 100,
  });
  const datasCourses = dataKursuss?.data?.courses;

  function capitalizeFirstLetter(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        {/* Section Main Beranda */}
        <div className="w-screen bg-gradientkanan">
          <div className="container mx-auto">
            <div className="flex flex-col sm:flex sm:flex-row gap-6 px-6 sm:px-12">
              {/* Ini Judul */}
              <div className="w-full sm:w-1/2 flex flex-col gap-8 justify-center items-center py-8 sm:items-start order-2 sm:order-1">
                <div className="flex flex-col gap-4">
                  <h2 className="text-white text-center sm:text-start text-3xl sm:text-4xl font-bold">
                    Your{" "}
                    <span
                      className="text-[#B285EC]
                    "
                    >
                      Space
                    </span>{" "}
                    for Skills Up
                  </h2>
                  <p className="w-full xl:w-3/4 text-xs sm:text-sm xl:text-base text-center sm:text-start text-white opacity-90">
                    Dengan kelas yang berkualitas dan fasilitas pembelajaran yang mendukung, membuka peluang untuk mengasah kemampuan dan meraih kesuksesan di dunia teknologi.
                  </p>
                </div>
                <div className="w-full flex justify-center sm:justify-start">
                  <button onClick={() => (window.location.href = "/kursus/all")} className="w-5/6 sm:w-3/4 md:w-3/4 lg:w-2/3 xl:w-1/2 bg-gradientbutton text-white px-8 py-2 rounded-md shadow-sm-button">
                    Daftar Kelas Sekarang
                  </button>
                </div>
              </div>
              {/* Ini Gambar */}
              <div className="w-full sm:w-1/2 flex items-end order-1 lg:order-2 ">
                <img src={course} alt="" className="" />
              </div>
            </div>
          </div>
        </div>
        {/* Kategori Belajar */}
        <div className="w-screen">
          <div className="container mx-auto">
            <div className="flex flex-col gap-4  px-6 sm:px-12 py-8 sm:pt-16">
              <div className="flex justify-between items-center">
                <h1 className="text-xl sm:text-2xl font-bold">Kategori Belajar</h1>
              </div>
              <div className="flex flex-wrap justify-center sm:flex-nowrap sm:gap-2">
                <div onClick={() => (window.location.href = "/category/uiux")} className="flex flex-col w-1/3 sm:w-1/6 items-center border rounded-md gap-2 pb-4 cursor-pointer overflow-hidden hover:shadow-sm-button">
                  <img src={uiux} alt="ui/ux" className="w-44 rounded-md" />
                  <h2 className="items-center text-xs sm:text-sm font-semibold text-center">UI/UX Design</h2>
                </div>
                <div onClick={() => (window.location.href = "/category/frontend")} className="flex flex-col w-1/3 sm:w-1/6 items-center border rounded-md gap-2 pb-4 cursor-pointer overflow-hidden hover:shadow-sm-button">
                  <img src={frontend} alt="frontend" className="w-44 rounded-md" />
                  <h2 className="items-center text-xs sm:text-sm font-semibold text-center">Frontend</h2>
                </div>
                <div onClick={() => (window.location.href = "/category/database")} className="flex flex-col w-1/3 sm:w-1/6 items-center border rounded-md gap-2 pb-4 cursor-pointer overflow-hidden hover:shadow-sm-button">
                  <img src={database} alt="database" className="w-44 rounded-md" />
                  <h2 className="items-center text-xs sm:text-sm font-semibold text-center">Database</h2>
                </div>
                <div onClick={() => (window.location.href = "/category/backend")} className="flex flex-col w-1/3 sm:w-1/6 items-center border rounded-md gap-2 pb-4 cursor-pointer overflow-hidden hover:shadow-sm-button">
                  <img src={backend} alt="backend" className="w-44 rounded-md" />
                  <h2 className="items-center text-xs sm:text-sm font-semibold text-center">Backend</h2>
                </div>
                <div onClick={() => (window.location.href = "/category/machinelearning")} className="flex flex-col w-1/3 sm:w-1/6 items-center border rounded-md gap-2 pb-4 cursor-pointer overflow-hidden hover:shadow-sm-button">
                  <img src={machinelearning} alt="machine learning" className="w-44 rounded-md" />
                  <h2 className="items-center text-xs sm:text-sm font-semibold text-center">Machine Learning</h2>
                </div>
                <div onClick={() => (window.location.href = "/category/datascience")} className="flex flex-col w-1/3 sm:w-1/6 items-center border rounded-md gap-2 pb-4 cursor-pointer overflow-hidden hover:shadow-sm-button">
                  <img src={datascience} alt="data science" className="w-44 rounded-md" />
                  <h2 className="items-center text-xs sm:text-sm font-semibold text-center">Data Science</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Kursus Populer */}
        <div className="w-screen">
          <div className="container mx-auto">
            <div className="flex flex-col gap-6 px-6 sm:px-12 sm:py-8">
              {/* Judul Kursus Populer */}
              <div className="flex justify-between items-center">
                <h1 className="text-xl sm:text-2xl font-bold">Kelas Populer</h1>
                <h6 onClick={() => (window.location.href = "/kursus/all")} className="text-ungu-0 text-sm cursor-pointer">
                  Lihat Semua...
                </h6>
              </div>
              {/* Button Filter Kursus */}
              <div className="flex w-full ">
                <div className="flex flex-wrap lg:flex-nowrap w-full justify-center gap-2 xl:gap-6">
                  <button
                    className={`${activePopular === "" ? "bg-ungu-0 text-white " : "bg-birumuda-0 text-black "}border rounded-md px-2 sm:px-4 xl:px-8 py-2 xl:py-4 text-sm hover:bg-ungu-0 hover:text-white`}
                    onClick={() => handleActivePopular("")}
                  >
                    All
                  </button>
                  <button
                    className={`${activePopular === "ui/ux" ? "bg-ungu-0 text-white " : "bg-birumuda-0 text-black "}border rounded-md px-2 sm:px-4 xl:px-8 py-2 xl:py-4 text-sm hover:bg-ungu-0 hover:text-white`}
                    onClick={() => handleActivePopular("ui/ux")}
                  >
                    UI/UX Design
                  </button>
                  <button
                    className={`${activePopular === "frontend" ? "bg-ungu-0 text-white " : "bg-birumuda-0 text-black "}border rounded-md px-2 sm:px-4 xl:px-8 py-2 xl:py-4 text-sm hover:bg-ungu-0 hover:text-white`}
                    onClick={() => handleActivePopular("frontend")}
                  >
                    Frontend
                  </button>
                  <button
                    className={`${activePopular === "database" ? "bg-ungu-0 text-white " : "bg-birumuda-0 text-black "}border rounded-md px-2 sm:px-4 xl:px-8 py-2 xl:py-4 text-sm hover:bg-ungu-0 hover:text-white`}
                    onClick={() => handleActivePopular("database")}
                  >
                    Database
                  </button>
                  <button
                    className={`${activePopular === "backend" ? "bg-ungu-0 text-white " : "bg-birumuda-0 text-black "}border rounded-md px-2 sm:px-4 xl:px-8 py-2 xl:py-4 text-sm hover:bg-ungu-0 hover:text-white`}
                    onClick={() => handleActivePopular("backend")}
                  >
                    Backend
                  </button>
                  <button
                    className={`${activePopular === "machine learning" ? "bg-ungu-0 text-white " : "bg-birumuda-0 text-black "}border rounded-md px-2 sm:px-4 xl:px-8 py-2 xl:py-4 text-sm hover:bg-ungu-0 hover:text-white`}
                    onClick={() => handleActivePopular("machine learning")}
                  >
                    Machine Learning
                  </button>
                  <button
                    className={`${activePopular === "data science" ? "bg-ungu-0 text-white " : "bg-birumuda-0 text-black "}border rounded-md px-2 sm:px-4 xl:px-8 py-2 xl:py-4 text-sm hover:bg-ungu-0 hover:text-white`}
                    onClick={() => handleActivePopular("data science")}
                  >
                    Data Science
                  </button>
                </div>
              </div>
              {/* Card Kursus */}
              <div className="flex w-full">
                {/* Untuk Tablet dan Laptop */}
                <div className="hidden sm:flex gap-4 w-full">
                  {isLoading ? (
                    // Display a loading indicator while the search is in progress
                    <div className="w-full h-56 flex justify-center items-center">
                      <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
                    </div>
                  ) : datasCourses?.length > 0 ? (
                    <Swiper
                      slidesPerView={4}
                      spaceBetween={10}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Pagination]}
                      className="mySwiper w-full"
                      breakpoints={{
                        319: {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 10,
                        },
                        1440: {
                          slidesPerView: 4,
                          spaceBetween: 10,
                        },
                      }}
                    >
                      {datasCourses?.slice(0, 10).map((value) => {
                        return (
                          <SwiperSlide key={value.id} className="p-2 ">
                            <div className="w-full shadow-sm-button rounded-2xl">
                              <div className="relative w-full sm:h-44 lg:h-48 overflow-hidden">
                                <img src={value.thumbnailUrl} alt="" className="w-full h-full object-cover rounded-2xl hover:scale-110 transition-transform duration-300 ease-in-out" />
                              </div>
                              <div className="px-2 sm:px-4 py-4 flex flex-col gap-2 rounded-2xl">
                                <div className="flex justify-between items-center">
                                  <h6 className="text-ungu-0 text-xs sm:text-sm overflow-x-hidden">{value?.courseCategory[0]?.category?.name}</h6>
                                  <span className="flex items-center text-sm">
                                    <img src={star} alt="" className="w-4" />
                                    {value?.rate !== null ? value.rate?.toFixed(1) : "0.0"}
                                  </span>
                                </div>
                                <div>
                                  <h2 onClick={() => (window.location.href = `/detail-kelas/${value.id}`)} className="font-semibold truncate-3-lines cursor-pointer text-xs sm:text-base">
                                    {capitalizeFirstLetter(value.title)}
                                  </h2>
                                  <span className="opacity-50 text-xs sm:text-sm">by {value?.mentor[0]?.author?.profile?.name}</span>
                                </div>
                                <div className="flex flex-wrap w-full gap-2 text-xs sm:text-sm">
                                  <span className="flex gap-2 items-center">
                                    <img src={level} alt="" className="w-4" />
                                    {value.level} Level
                                  </span>
                                  <span className="flex gap-2 items-center">
                                    <img src={modul} alt="" className="w-4" />
                                    {value._count.chapter} Modul
                                  </span>
                                  <span className="flex gap-2 items-center">
                                    <img src={clock} alt="" className="w-4" />
                                    {value.duration !== null ? value.duration : 0} Menit
                                  </span>
                                </div>
                                <div className="text-sm">
                                  <div className="flex text-white items-center">
                                    {value?.isPremium === true ? (
                                      <div className="flex gap-2 items-center justify-center bg-ungu-0 px-4 py-1 rounded-md">
                                        <img src={diamond} alt="" className="w-[0.9rem] sm:w-4" />
                                        <span className="text-xs sm:text-sm">
                                          {value?.price &&
                                            Number(value.price).toLocaleString("id-ID", {
                                              style: "currency",
                                              currency: "IDR",
                                              minimumFractionDigits: 0,
                                              maximumFractionDigits: 0,
                                            })}
                                        </span>
                                      </div>
                                    ) : (
                                      <div onClick={() => (window.location.href = `/detail-kelas/${value.id}`)} className="flex gap-2 items-center justify-center bg-hijau-0 px-4 py-1 rounded-md cursor-pointer">
                                        <span className="text-xs sm:text-sm">Mulai Kelas</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  ) : (
                    /* Handling Error Ketika Courses Not Found*/
                    <div className="w-full py-4">
                      <NotFoundCourse />
                    </div>
                  )}
                </div>
                {/* Untuk Mobile */}
                <div className="w-full sm:hidden pt-2 pb-6 ">
                  {isLoading ? (
                    <div className="w-full h-48 flex justify-center items-center">
                      <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
                    </div>
                  ) : datasCourses?.length > 0 ? (
                    <div className="w-full sm:hidden grid grid-cols-2 gap-3 sm:gap-4">
                      {/* Card Premium */}
                      {datasCourses?.slice(0, 10).map((value) => {
                        return (
                          <div key={value.id}>
                            <div className="w-full shadow-sm-button rounded-2xl">
                              <div className="relative w-full h-32 overflow-hidden">
                                <img src={value.thumbnailUrl} alt="" className="w-full h-full object-cover rounded-2xl hover:scale-110 transition-transform duration-300 ease-in-out" />
                              </div>
                              <div className="px-2 sm:px-4 py-4 flex flex-col gap-2 rounded-2xl">
                                <div className="flex justify-between items-center">
                                  <h6 className="text-ungu-0 text-xs sm:text-sm overflow-x-hidden">{value?.courseCategory[0]?.category?.name}</h6>
                                  <span className="flex items-center text-sm">
                                    <img src={star} alt="" className="w-4" />
                                    {value?.rate !== null ? value.rate?.toFixed(1) : "0.0"}
                                  </span>
                                </div>
                                <div>
                                  <h2 onClick={() => (window.location.href = `/detail-kelas/${value.id}`)} className="font-semibold truncate-3-lines cursor-pointer text-xs sm:text-base">
                                    {capitalizeFirstLetter(value.title)}
                                  </h2>
                                  <span className="opacity-50 text-xs sm:text-sm">by {value?.mentor[0]?.author?.profile?.name}</span>
                                </div>
                                <div className="flex flex-wrap w-full gap-2 text-xs sm:text-sm">
                                  <span className="flex gap-2 items-center">
                                    <img src={level} alt="" className="w-4" />
                                    {value.level} Level
                                  </span>
                                  <span className="flex gap-2 items-center">
                                    <img src={modul} alt="" className="w-4" />
                                    {value._count.chapter} Modul
                                  </span>
                                  <span className="flex gap-2 items-center">
                                    <img src={clock} alt="" className="w-4" />
                                    {value.duration !== null ? value.duration : 0} Menit
                                  </span>
                                </div>
                                <div className="text-sm">
                                  <div className="flex text-white items-center">
                                    {value?.isPremium === true ? (
                                      <div className="flex gap-2 bg-ungu-0 px-4 py-1 rounded-md">
                                        <img src={diamond} alt="" className="w-[0.9rem] sm:w-4" />
                                        <span className="text-xs sm:text-sm">
                                          {value?.price &&
                                            Number(value.price).toLocaleString("id-ID", {
                                              style: "currency",
                                              currency: "IDR",
                                              minimumFractionDigits: 0,
                                              maximumFractionDigits: 0,
                                            })}
                                        </span>
                                      </div>
                                    ) : (
                                      <div onClick={() => (window.location.href = `/detail-kelas/${value.id}`)} className="flex gap-2 bg-hijau-0 px-4 py-1 rounded-md cursor-pointer">
                                        <span className="text-xs sm:text-sm">Mulai Kelas</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    /* Handle Eror Not Found Course */
                    <div className="w-full">
                      <NotFoundCourse />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
