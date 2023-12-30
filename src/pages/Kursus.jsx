import React, { useEffect, useRef, useState } from "react";
import { Navbar } from "../assets/components/Navbar";
// svg card
import nexticon from "../assets/svg/next.svg";
import previcon from "../assets/svg/previous.svg";
import star from "../assets/svg/star.svg";
import level from "../assets/svg/kategori-level.svg";
import modul from "../assets/svg/book.svg";
import clock from "../assets/svg/clock.svg";
import diamond from "../assets/svg/diamond.svg";
import filterungu from "../assets/svg/filterungu.svg";
import { FilterMobile } from "../assets/components/FilterMobile";
import { NotFoundCourse } from "../assets/components/HandleErrorPage/NotFoundCourse";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../assets/components/Footer";
import { PencarianPageKursus } from "../assets/components/PencarianPageKursus";
// Import Chakra UI
import { Spinner } from "@chakra-ui/react";
import { useGetDataFilterKursus } from "../services/get-Datas-FilterKursus";

export const Kursus = () => {
  const navigate = useNavigate();
  const [SortDataMyEnrollment, setSortDataMyEnrollment] = useState([]);
  const [ActivePremium, setActivePremium] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [activeInputSearch, setActiveInputSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { querySearch } = useParams();

  const handleActivePremium = (item) => {
    setActivePremium(item);
  };

  //Handle Filter SIPALING
  const [SortPalingDisukai, setSortPalingDisukai] = useState([]);
  const handleChangePalingDisukai = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSortPalingDisukai([value]);
    } else {
      setSortPalingDisukai([]);
    }
  };

  //Handle Filter Popularity
  const [SortPopular, setSortPopular] = useState([]);
  const handleChangeSortPopular = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSortPopular([value]);
    } else {
      setSortPopular([]);
    }
    setCurrentPage(1);
  };

  // Handle Filter Kategori
  const [sortKategori, setSortKategori] = useState([]);
  const handleChangeKategori = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSortKategori((kat) => [...kat, value]);
    } else
      setSortKategori((kat) => {
        return [...kat.filter((kategori) => kategori !== value)];
      });
    setCurrentPage(1);
  };

  // Handle Filter Level
  const [sortLevel, setSortLevel] = useState([]);
  const handleChangeLevel = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSortLevel((lev) => [...lev, value]);
    } else
      setSortLevel((lev) => {
        return [...lev.filter((level) => level !== value)];
      });
    setCurrentPage(1);
  };

  //  Handle Clear Item ALL Filter
  const disukaiCheckboxRef = useRef(null);
  const populerCheckboxRef = useRef(null);
  const kategoriCheckboxRef = useRef([]);
  const levelCheckboxRef = useRef([]);

  const handleClearFilter = () => {
    // Reset state filter di halaman Kursus dari Filter Mobile
    setSortPalingDisukai([]);
    setSortPopular([]);
    setSortKategori([]);
    setSortLevel([]);
  };

  const handleHapusFilter = () => {
    // Menghapus state
    setSortPalingDisukai([]);
    setSortPopular([]);
    setSortKategori([]);
    setSortLevel([]);

    // Menghilangkan centang pada checkbox
    if (disukaiCheckboxRef.current) {
      disukaiCheckboxRef.current.checked = false;
    }
    if (populerCheckboxRef.current) {
      populerCheckboxRef.current.checked = false;
    }

    if (kategoriCheckboxRef.current && kategoriCheckboxRef.current.length > 0) {
      kategoriCheckboxRef.current.forEach((checkbox) => {
        if (checkbox) {
          checkbox.checked = false;
        }
      });
    }

    if (levelCheckboxRef.current && levelCheckboxRef.current.length > 0) {
      levelCheckboxRef.current.forEach((checkbox) => {
        if (checkbox) {
          checkbox.checked = false;
        }
      });
    }
  };

  useEffect(() => {
    // Handle querySearch PARAMS
    if (querySearch !== "all") {
      setActiveInputSearch(true);
      setDebouncedQuery(querySearch);
    }
  }, [querySearch]);

  // Handle Filter Mobile
  const [activeFilter, setActiveFilter] = useState(false);
  const handleFilter = () => {
    setActiveFilter(!activeFilter);
  };

  const handleApplyFilter = (filters) => {
    setSortPalingDisukai(filters.sipaling);
    setSortPopular(filters.sipopular);
    setSortKategori(filters.kategori);
    setSortLevel(filters.level);
  };

  const { data: dataFilterKursusss, isLoading } = useGetDataFilterKursus({
    ispremium: ActivePremium,
    category: sortKategori,
    level: sortLevel,
    se: debouncedQuery,
    order: SortPopular,
    page: 1,
    limit: 100,
  });
  const dataFilterKursus = dataFilterKursusss?.data?.courses;

  useEffect(() => {
    // Handle Sort Data Course
    const dataKursus = dataFilterKursus;
    // Filter by Active Difficulty
    let filteredCourses = dataKursus;

    // Filter by paling disukai
    if (SortPalingDisukai.length > 0) {
      switch (SortPalingDisukai[0]) {
        case "disukai":
          filteredCourses = filteredCourses?.slice().sort((a, b) => b.rate - a.rate);
          break;
        default:
          break;
      }
    }

    setSortDataMyEnrollment(filteredCourses);
  }, [dataFilterKursus, SortPalingDisukai]);

  // Handle Pagination Dinamis
  const recordsPerPage = 12;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const dataKursus = SortDataMyEnrollment ? SortDataMyEnrollment.slice(firstIndex, lastIndex) : [];
  const npage = Math.ceil((SortDataMyEnrollment ? SortDataMyEnrollment.length : 0) / recordsPerPage);
  const numbers = Array.from({ length: npage }, (_, index) => index + 1);

  const handlePrePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const changePage = (id) => {
    setCurrentPage(id);
  };
  const handleNextPage = () => {
    if (currentPage < npage) {
      setCurrentPage(currentPage + 1);
    }
  };

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
        <div className="w-screen">
          <div className="container mx-auto">
            <div className="flex flex-col gap-4 px-6 sm:px-12 py-4 sm:py-8">
              <div className="flex justify-between items-center">
                <h1 className="text-xl sm:text-2xl font-bold">Daftar Kursus</h1>
                <PencarianPageKursus />
                <div onClick={handleFilter} className="flex gap-1 border border-ungu-0 rounded-md px-2 sm:hidden">
                  <img src={filterungu} alt="filter" className="w-4" />
                  <h6 className=" text-ungu-0">Filter</h6>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-8">
                {/* Filter Kelas Berjalan untuk tablet dan Laptop*/}
                <div className="hidden sm:block w-2/6 xl:w-3/12 ">
                  <div className="flex flex-col gap-3 px-6 py-8 bg-birumuda-0 shadow-sm-button rounded-md">
                    <h2 className="font-semibold text-lg">Filter</h2>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <div className="flex gap-2">
                          <input ref={disukaiCheckboxRef} onChange={handleChangePalingDisukai} value={"disukai"} type="checkbox" className="accent-biru-0 w-4"></input>
                          <p className="text-sm">Paling Disukai</p>
                        </div>
                        <div className="flex gap-2">
                          <input ref={populerCheckboxRef} onChange={handleChangeSortPopular} value={"popularity"} type="checkbox" className="accent-biru-0 w-4"></input>
                          <p className="text-sm">Paling Populer</p>
                        </div>
                      </div>
                      {/* Berdasarkan Kategori */}
                      <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-lg">Kategori</h2>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-2">
                            <input ref={(el) => kategoriCheckboxRef.current.push(el)} onChange={handleChangeKategori} value={"ui/ux"} type="checkbox" className="accent-biru-0 w-4"></input>
                            <p className="text-sm">UI/UX Design</p>
                          </div>
                          <div className="flex gap-2">
                            <input ref={(el) => kategoriCheckboxRef.current.push(el)} onChange={handleChangeKategori} value={"frontend"} type="checkbox" className="accent-biru-0 w-4"></input>
                            <p className="text-sm">Frontend</p>
                          </div>
                          <div className="flex gap-2">
                            <input ref={(el) => kategoriCheckboxRef.current.push(el)} onChange={handleChangeKategori} value={"database"} type="checkbox" className="accent-biru-0 w-4"></input>
                            <p className="text-sm">Database</p>
                          </div>
                          <div className="flex gap-2">
                            <input ref={(el) => kategoriCheckboxRef.current.push(el)} onChange={handleChangeKategori} value={"backend"} type="checkbox" className="accent-biru-0 w-4"></input>
                            <p className="text-sm">Backend</p>
                          </div>
                          <div className="flex gap-2">
                            <input ref={(el) => kategoriCheckboxRef.current.push(el)} onChange={handleChangeKategori} value={"machine learning"} type="checkbox" className="accent-biru-0 w-4"></input>
                            <p className="text-sm">Machine Learning</p>
                          </div>
                          <div className="flex gap-2">
                            <input ref={(el) => kategoriCheckboxRef.current.push(el)} onChange={handleChangeKategori} value={"data science"} type="checkbox" className="accent-biru-0 w-4"></input>
                            <p className="text-sm">Data Science</p>
                          </div>
                        </div>
                      </div>
                      {/* Berdasarkan Level kesulitan */}
                      <div className="flex flex-col gap-2">
                        <h2 className="font-bold text-lg">Level Kesulitan</h2>
                        <div className="flex flex-col gap-1">
                          <div className="flex gap-2">
                            <input ref={(el) => levelCheckboxRef.current.push(el)} onChange={handleChangeLevel} value={"BEGINNER"} type="checkbox" className="accent-biru-0 w-4"></input>
                            <p className="text-sm">Beginner Level</p>
                          </div>
                          <div className="flex gap-2">
                            <input ref={(el) => levelCheckboxRef.current.push(el)} onChange={handleChangeLevel} value={"INTERMEDIATE"} type="checkbox" className="accent-biru-0 w-4"></input>
                            <p className="text-sm">Intermediate Level</p>
                          </div>
                          <div className="flex gap-2">
                            <input ref={(el) => levelCheckboxRef.current.push(el)} onChange={handleChangeLevel} value={"ADVANCED"} type="checkbox" className="accent-biru-0 w-4"></input>
                            <p className="text-sm">Advanced Level</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <button onClick={handleHapusFilter} className="bg-merah-0 text-white rounded-md px-4 py-1 mt-4 shadow-sm-button">
                        Hapus Filter
                      </button>
                    </div>
                  </div>
                </div>
                {/* Daftar Kelas*/}
                <div className="w-full sm:w-4/6 xl:w-9/12 flex flex-col gap-4">
                  {/* Button Filter pilih kursus premium & gratis*/}
                  <div className="flex justify-between gap-4">
                    <button
                      value={""}
                      className={`${ActivePremium === "" ? "bg-ungu-0 text-white " : "bg-birumuda-0 text-black "}w-1/3 border rounded-md py-2 text-sm hover:bg-ungu-0 hover:text-white`}
                      onClick={() => handleActivePremium("")}
                    >
                      All
                    </button>
                    <button
                      value={"1"}
                      className={`${ActivePremium === "1" ? "bg-ungu-0 text-white " : "bg-birumuda-0 text-black "}w-1/3 border rounded-md py-2 text-sm hover:bg-ungu-0 hover:text-white`}
                      onClick={() => handleActivePremium("1")}
                    >
                      Kursus Premium
                    </button>
                    <button
                      value={"0"}
                      className={`${ActivePremium === "0" ? "bg-ungu-0 text-white " : "bg-birumuda-0 text-black "}w-1/3 border rounded-md py-2 text-sm hover:bg-ungu-0 hover:text-white`}
                      onClick={() => handleActivePremium("0")}
                    >
                      Kursus Gratis
                    </button>
                  </div>
                  {/* Tampilin State Hasil pencarian dari search */}
                  {activeInputSearch ? <div className="text-xs sm:text-sm">Hasil pencarian untuk '{debouncedQuery}'</div> : ""}
                  {/* Card Kursus */}
                  <div className="flex w-full">
                    {isLoading ? (
                      // Display a loading indicator while the search is in progress
                      <div className="w-full flex justify-center items-center">
                        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
                      </div>
                    ) : SortDataMyEnrollment?.length > 0 ? (
                      <div className=" w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                        {/* Card Beli */}
                        {dataKursus?.map((value) => {
                          return (
                            <div key={value.id} className="w-full">
                              <div className="shadow-sm-button rounded-2xl">
                                <div className="relative w-full h-32 lg:h-48 overflow-hidden">
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
                                    <h2 onClick={() => navigate(`/detail-kelas/${value.id}`)} className="font-bold truncate-3-lines cursor-pointer text-xs sm:text-sm">
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
                                  <div className="text-xs sm:text-sm">
                                    <div className="flex text-white items-center">
                                      {value?.isPremium === true ? (
                                        <div className="flex gap-1 sm:gap-2 bg-ungu-0 px-4 py-1 rounded-md">
                                          <img src={diamond} alt="" className="hidden sm:block w-4" />
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
                      /* Handle Error Belum Ada kursus*/
                      <div className="w-full py-4">
                        <NotFoundCourse />
                      </div>
                    )}
                  </div>
                  <div className="flex w-full justify-center py-4">
                    <ul className="">
                      <li className="flex gap-2 justify-center items-center">
                        <button onClick={handlePrePage} disabled={currentPage === 1} className={` text-black px-2 ${currentPage === 1 ? "opacity-20" : ""} ${currentPage === 1 ? "cursor-not-allowed" : ""} `}>
                          <img src={previcon} alt="previcon" />
                        </button>
                        {numbers.map((n, i) => (
                          <div key={i} className={`${currentPage === n ? "block bg-ungu-0 text-white px-2 rounded-md" : ""} `}>
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                changePage(n);
                              }}
                            >
                              {n}
                            </button>
                          </div>
                        ))}
                        <button onClick={handleNextPage} disabled={currentPage === npage} className={` text-black px-2 ${currentPage === npage ? "opacity-20" : ""} ${currentPage === npage ? "cursor-not-allowed" : ""} `}>
                          <img src={nexticon} alt="nexticon" />
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {activeFilter ? <FilterMobile onClose={handleFilter} onApplyFilter={handleApplyFilter} onClearFilter={handleClearFilter} /> : ""}
    </>
  );
};
