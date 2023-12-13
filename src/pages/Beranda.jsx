import React, { useEffect, useState } from "react";
import { Navbar } from "../assets/components/Navbar";
// png main section
import course from "../assets/img/course.png";
// import productmanagement from "../assets/img/productmanagement.png";
import uiuxdesign from "../assets/img/uiux.jpeg";
import frontend from "../assets/img/webdev.jpeg";
import database from "../assets/img/android.jpeg";
import backend from "../assets/img/ios.jpeg";
import machinelearning from "../assets/img/datascience.jpeg";
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
import { Pagination, Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actGetDataCourses } from "../redux/actions/actGetDataCourses";
import { Footer } from "../assets/components/Footer";
import { NotFoundCourse } from "../assets/components/HandleErrorPage/NotFoundCourse";

export const Beranda = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activePopular, setActivePopular] = useState("all");
  const [sortDataCourse, setSortDataCourse] = useState([]);
  const courses = useSelector((state) => state.getDataCourses?.courses);

  const handleActivePopular = (item) => {
    setActivePopular(item);
  };

  // Handle Sort Data Course
  useEffect(() => {
    // Handle Sort Data Course
    const dataKursus = courses;

    if (activePopular === "all") {
      setSortDataCourse(dataKursus);
    }
    if (activePopular === "uiuxdesign") {
      setSortDataCourse(dataKursus?.filter((course) => course?.courseCategory[0]?.category?.name?.toLowerCase() === "ui/ux"));
    }
    if (activePopular === "frontend") {
      setSortDataCourse(dataKursus?.filter((course) => course?.courseCategory[0]?.category?.name?.toLowerCase() === "frontend"));
    }
    if (activePopular === "database") {
      setSortDataCourse(dataKursus?.filter((course) => course?.courseCategory[0]?.category?.name?.toLowerCase() === "database"));
    }
    if (activePopular === "backend") {
      setSortDataCourse(dataKursus?.filter((course) => course?.courseCategory[0]?.category?.name?.toLowerCase() === "backend"));
    }
    if (activePopular === "machinelearning") {
      setSortDataCourse(dataKursus?.filter((course) => course?.courseCategory[0]?.category?.name?.toLowerCase() === "machine learning"));
    }
  }, [activePopular, courses]);

  useEffect(() => {
    const getDataCourses = async () => {
      await dispatch(actGetDataCourses());
    };
    getDataCourses();
  }, [dispatch]);

  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        {/* Section Main Beranda */}
        <div className="w-screen bg-gradientkanan px-6 sm:px-12 ">
          <div className="container mx-auto">
            <div className="flex flex-col sm:flex sm:flex-row gap-6">
              {/* Ini Judul */}
              <div className="w-full sm:w-1/2 flex flex-col gap-8 justify-center items-center py-8 sm:items-start order-2 sm:order-1">
                <div className="flex flex-col gap-4">
                  <h2 className="text-white text-center sm:text-start text-4xl font-bold">
                    Your{" "}
                    <span
                      className="text-yellow-300
                    "
                    >
                      Space
                    </span>{" "}
                    for Skills Up
                  </h2>
                  <p className="w-full xl:w-3/4 text-xs sm:text-sm xl:text-base text-center sm:text-start text-white opacity-90">
                    Dengan kursus yang berkualitas dan fasilitas pembelajaran yang mendukung, membuka peluang untuk mengasah kemampuan dan meraih kesuksesan di dunia teknologi.
                  </p>
                </div>
                <div className="w-full">
                  <button onClick={() => navigate("/kursus")} className="w-full sm:w-3/4 md:w-1/2 bg-gradientbutton text-white px-8 py-2 rounded-md shadow-sm-button">
                    Ikuti Kelas Sekarang
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
        <div className="w-screen px-6 sm:px-12 py-8 sm:pt-16">
          <div className="container mx-auto">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h1 className="text-xl sm:text-2xl font-bold">Kategori Belajar</h1>
                <h6 onClick={() => navigate("/kursus")} className="text-ungu-0 text-sm cursor-pointer">
                  Lihat Semua...
                </h6>
              </div>
              <div className="flex flex-wrap justify-center sm:flex-nowrap sm:gap-2">
                <div className="flex flex-col w-1/3 sm:w-1/6 items-center border rounded-md gap-2 pb-4 cursor-pointer overflow-hidden">
                  <img src={uiuxdesign} alt="" className="w-44 rounded-md" />
                  <h2 className="items-center text-xs sm:text-sm font-semibold text-center">UI/UX Design</h2>
                </div>
                <div className="flex flex-col w-1/3 sm:w-1/6 items-center border rounded-md gap-2 pb-4 cursor-pointer overflow-hidden">
                  <img src={frontend} alt="" className="w-44 rounded-md" />
                  <h2 className="items-center text-xs sm:text-sm font-semibold text-center">Frontend</h2>
                </div>
                <div className="flex flex-col w-1/3 sm:w-1/6 items-center border rounded-md gap-2 pb-4 cursor-pointer overflow-hidden">
                  <img src={database} alt="" className="w-44 rounded-md" />
                  <h2 className="items-center text-xs sm:text-sm font-semibold text-center">Database</h2>
                </div>
                <div className="flex flex-col w-1/3 sm:w-1/6 items-center border rounded-md gap-2 pb-4 cursor-pointer overflow-hidden">
                  <img src={backend} alt="" className="w-44 rounded-md" />
                  <h2 className="items-center text-xs sm:text-sm font-semibold text-center">Backend</h2>
                </div>
                <div className="flex flex-col w-1/3 sm:w-1/6 items-center border rounded-md gap-2 pb-4 cursor-pointer overflow-hidden">
                  <img src={machinelearning} alt="" className="w-44 rounded-md" />
                  <h2 className="items-center text-xs sm:text-sm font-semibold text-center">Machine Learning</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Kursus Populer */}
        <div className="w-screen px-6 sm:px-12 sm:py-8">
          <div className="container mx-auto">
            <div className="flex flex-col gap-6">
              {/* Judul Kursus Populer */}
              <div className="flex justify-between items-center">
                <h1 className="text-xl sm:text-2xl font-bold">Kursus Populer</h1>
                <h6 onClick={() => navigate("/kursus")} className="text-ungu-0 text-sm cursor-pointer">
                  Lihat Semua...
                </h6>
              </div>
              {/* Button Filter Kursus */}
              <div className="flex w-full ">
                <div className="flex flex-wrap lg:flex-nowrap w-full justify-center gap-2 xl:gap-6">
                  <button
                    className={`${activePopular === "all" ? "bg-ungu-0 text-white " : "bg-birumuda-0 text-black "}border rounded-md px-2 sm:px-4 xl:px-8 py-2 xl:py-4 text-sm hover:bg-ungu-0 hover:text-white`}
                    onClick={() => handleActivePopular("all")}
                  >
                    All
                  </button>
                  <button
                    className={`${activePopular === "uiuxdesign" ? "bg-ungu-0 text-white " : "bg-birumuda-0 text-black "}border rounded-md px-2 sm:px-4 xl:px-8 py-2 xl:py-4 text-sm hover:bg-ungu-0 hover:text-white`}
                    onClick={() => handleActivePopular("uiuxdesign")}
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
                    className={`${activePopular === "machinelearning" ? "bg-ungu-0 text-white " : "bg-birumuda-0 text-black "}border rounded-md px-2 sm:px-4 xl:px-8 py-2 xl:py-4 text-sm hover:bg-ungu-0 hover:text-white`}
                    onClick={() => handleActivePopular("machinelearning")}
                  >
                    Machine Learning
                  </button>
                </div>
              </div>
              {/* Card Kursus */}
              <div className="flex w-full">
                {/* Untuk Tablet dan Laptop */}
                <div className="hidden sm:flex gap-4 w-full">
                  {sortDataCourse?.length > 0 ? (
                    <Swiper
                      slidesPerView={4}
                      spaceBetween={10}
                      navigation={true}
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Pagination, Navigation]}
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
                      {sortDataCourse?.map((value) => {
                        return (
                          <SwiperSlide key={value.id} className="p-2 ">
                            <div className="w-full shadow-sm-button rounded-2xl">
                              <div className="relative w-full overflow-hidden">
                                <img src={value.thumbnailUrl} alt="" className="w-full rounded-2xl hover:scale-110 transition-transform duration-300 ease-in-out" />
                              </div>
                              <div className="px-2 sm:px-4 py-4 flex flex-col gap-2 rounded-2xl">
                                <div className="flex justify-between items-center">
                                  <h6 className="text-ungu-0 text-xs sm:text-sm overflow-x-hidden">{value?.courseCategory[0]?.category?.name}</h6>
                                  <span className="flex items-center text-sm">
                                    <img src={star} alt="" className="w-4" />
                                    {value?.rate?.toFixed(1)}
                                  </span>
                                </div>
                                <div>
                                  <h2 onClick={() => navigate("/detail-kelas")} className="font-bold cursor-pointer text-xs sm:text-base">
                                    {value.title}
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
                                    10 Modul
                                  </span>
                                  <span className="flex gap-2 items-center">
                                    <img src={clock} alt="" className="w-4" />
                                    120 Menit
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
                                      <div className="flex gap-2 bg-ungu-0 px-4 py-1 rounded-md">
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
                  {sortDataCourse?.length > 0 ? (
                    <div className="w-full sm:hidden grid grid-cols-2 gap-4">
                      {/* Card Premium */}
                      {sortDataCourse?.map((value) => {
                        return (
                          <div key={value.id} className="w-full shadow-sm-button rounded-2xl">
                            <div className="relative w-full overflow-hidden">
                              <img src={value.thumbnailUrl} alt="" className="w-full rounded-2xl hover:scale-110 transition-transform duration-300 ease-in-out" />
                            </div>
                            <div className="px-2 sm:px-4 py-4 flex flex-col gap-2 rounded-2xl">
                              <div className="flex justify-between items-center">
                                <h6 className="text-ungu-0 text-xs sm:text-sm overflow-x-hidden">{value?.courseCategory[0]?.category?.name}</h6>
                                <span className="flex items-center text-sm">
                                  <img src={star} alt="" className="w-4" />
                                  {value?.rate?.toFixed(1)}
                                </span>
                              </div>
                              <div>
                                <h2 onClick={() => navigate("/detail-kelas")} className="font-bold cursor-pointer text-xs sm:text-base">
                                  {value.title}
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
                                  10 Modul
                                </span>
                                <span className="flex gap-2 items-center">
                                  <img src={clock} alt="" className="w-4" />
                                  120 Menit
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
                                    <div className="flex gap-2 bg-ungu-0 px-4 py-1 rounded-md">
                                      <span className="text-xs sm:text-sm">Mulai Kelas</span>
                                    </div>
                                  )}
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
