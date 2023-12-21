import React, { useEffect, useRef, useState } from "react";
import { Navbar } from "../assets/components/Navbar";
// svg card
import star from "../assets/svg/star.svg";
import level from "../assets/svg/kategori-level.svg";
import modul from "../assets/svg/book.svg";
import clock from "../assets/svg/clock.svg";
import complete from "../assets/svg/progress.svg";
import { FilterMobile } from "../assets/components/FilterMobile";
import { BelumLoginKelas } from "../assets/components/HandleErrorPage/BelumLoginKelas";
import { BelumAdaKelas } from "../assets/components/HandleErrorPage/BelumAdaKelas";
import { useDispatch, useSelector } from "react-redux";
import { actGetDataMyEnrollments } from "../redux/actions/actGetDataMyEnrollments";
import { useNavigate, useParams } from "react-router-dom";
import { useGetSearchMyEnrollments } from "../services/get-search-my-enrollments";
import { PencarianPageKelasSaya } from "../assets/components/PencarianPageKelasSaya";
import { Footer } from "../assets/components/Footer";

export const BerandaKelasSaya = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sortDataMyEnrollments, setSortDataMyEnrollments] = useState([]);
  const courses = useSelector((state) => state.getDataMyEnrollments?.courses);
  const [activeProgress, setActiveProgress] = useState("all");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [activeInputSearch, setActiveInputSearch] = useState(false);
  const [progress, setProgress] = useState(100);
  const { queryEnrollments } = useParams();

  // console.log(sortDataMyEnrollments);

  const handleActiveProgress = (item) => {
    setActiveProgress(item);
  };

  // Handle Pagination Dinamis
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 12;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const dataKelas = sortDataMyEnrollments ? sortDataMyEnrollments.slice(firstIndex, lastIndex) : [];
  const npage = Math.ceil((sortDataMyEnrollments ? sortDataMyEnrollments.length : 0) / recordsPerPage);
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

  const { data: coursesSearchMyEnrollments, isLoading } = useGetSearchMyEnrollments({ query: debouncedQuery });

  //Handle Filter SIPALING
  const [sortSipaling, setSortSipaling] = useState([]);
  const handleChangeSipaling = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSortSipaling([value]);
    } else {
      setSortSipaling([]);
    }
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
  };

  //  Handle Clear Item ALL Filter
  const baruCheckboxRef = useRef(null);
  const populerCheckboxRef = useRef(null);
  const promoCheckboxRef = useRef(null);
  const kategoriCheckboxRef = useRef([]);
  const levelCheckboxRef = useRef([]);

  const handleClearFilter = () => {
    // Reset state filter di halaman Kursus dari Filter Mobile
    setSortSipaling([]);
    setSortKategori([]);
    setSortLevel([]);
  };

  const handleHapusFilter = () => {
    // Menghapus state
    setSortSipaling([]);
    setSortKategori([]);
    setSortLevel([]);

    // Menghilangkan centang pada checkbox
    if (baruCheckboxRef.current) {
      baruCheckboxRef.current.checked = false;
    }
    if (populerCheckboxRef.current) {
      populerCheckboxRef.current.checked = false;
    }
    if (promoCheckboxRef.current) {
      promoCheckboxRef.current.checked = false;
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
    // Handle queryEnrollments PARAMS
    if (queryEnrollments !== "all") {
      setActiveInputSearch(true);
      setDebouncedQuery(queryEnrollments);
    }

    // Handle Sort Data Course
    const dataKursus = coursesSearchMyEnrollments?.data?.courses;
    // Filter by Active Difficulty
    let filteredCourses = dataKursus;

    // if (activeProgress === "inprogress") {
    //   filteredCourses = dataKursus?.filter((course) => course?.isPremium === true);
    // } else if (activeProgress === "selesai") {
    //   filteredCourses = dataKursus?.filter((course) => course?.isPremium === false);
    // }

    // Filter by Sipaling
    if (sortSipaling.length > 0) {
      switch (sortSipaling[0]) {
        case "baru":
          filteredCourses = filteredCourses?.slice().sort((a, b) => a.id - b.id); // Urutkan berdasarkan ID dari besar ke kecil
          break;
        case "populer":
          filteredCourses = filteredCourses?.slice().sort((a, b) => b.rate - a.rate); // Urutkan berdasarkan rate dari besar ke kecil
          break;
        case "promo":
          // Logika sorting untuk "Promo"
          break;
        default:
          break;
      }
    }

    // Filter by Kategori
    if (sortKategori.length > 0) {
      filteredCourses = filteredCourses?.filter((course) => sortKategori.includes(course?.courseCategory[0]?.category?.name));
    }

    // Filter by Level
    if (sortLevel.length > 0) {
      filteredCourses = filteredCourses?.filter((course) => sortLevel.includes(course?.level));
    }

    setSortDataMyEnrollments(filteredCourses);
  }, [activeProgress, sortLevel, courses, sortKategori, sortSipaling, coursesSearchMyEnrollments?.data?.courses, queryEnrollments]);

  // Handle Filter Mobile
  const [activeFilter, setActiveFilter] = useState(false);
  const handleFilter = () => {
    setActiveFilter(!activeFilter);
  };

  const handleApplyFilter = (filters) => {
    // Add your logic to update the state based on the applied filters
    setSortSipaling(filters.sipaling);
    setSortKategori(filters.kategori);
    setSortLevel(filters.level);
  };

  useEffect(() => {
    const getDataCourses = async () => {
      await dispatch(actGetDataMyEnrollments());
    };
    getDataCourses();
  }, [dispatch, queryEnrollments]);

  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar />
        <div className="w-screen px-6 sm:px-12 py-8">
          <div className="container mx-auto">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <h1 className="text-xl sm:text-2xl font-bold">Kelas Berjalan</h1>
                <PencarianPageKelasSaya />
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
                          <input ref={baruCheckboxRef} onChange={handleChangeSipaling} value={"baru"} type="checkbox" className="accent-biru-0 w-4"></input>
                          <p className="text-sm">Paling Baru</p>
                        </div>
                        <div className="flex gap-2">
                          <input ref={populerCheckboxRef} onChange={handleChangeSipaling} value={"populer"} type="checkbox" className="accent-biru-0 w-4"></input>
                          <p className="text-sm">Paling Populer</p>
                        </div>
                        <div className="flex gap-2">
                          <input ref={promoCheckboxRef} onChange={handleChangeSipaling} value={"promo"} type="checkbox" className="accent-biru-0 w-4"></input>
                          <p className="text-sm">Promo</p>
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
                  {/* Button Filter kelas saya*/}
                  <div className="flex bg-white justify-between gap-4">
                    <button className={`${activeProgress === "all" ? "bg-ungu-0 text-white " : "bg-birumuda-0 text-black "}w-1/3 border rounded-md py-2 text-sm hover:bg-ungu-0 hover:text-white`} onClick={() => handleActiveProgress("all")}>
                      All
                    </button>
                    <button
                      className={`${activeProgress === "inprogress" ? "bg-ungu-0 text-white " : "bg-birumuda-0 text-black "}w-1/3 border rounded-md py-2 text-sm hover:bg-ungu-0 hover:text-white`}
                      onClick={() => handleActiveProgress("inprogress")}
                    >
                      In Progress
                    </button>
                    <button
                      className={`${activeProgress === "selesai" ? "bg-ungu-0 text-white " : "bg-birumuda-0 text-black "}w-1/3 border rounded-md py-2 text-sm hover:bg-ungu-0 hover:text-white`}
                      onClick={() => handleActiveProgress("selesai")}
                    >
                      Selesai
                    </button>
                  </div>
                  {/* Tampilin State Hasil pencarian dari search */}
                  {activeInputSearch ? <div className="text-xs sm:text-sm">Hasil pencarian untuk "{debouncedQuery}"</div> : ""}
                  {/* Card Kursus */}
                  <div className="flex w-full">
                    {isLoading ? (
                      // Display a loading indicator while the search is in progress
                      <div className="w-full flex justify-center items-center">
                        <p>SABAR CUKK LOADING...</p>
                      </div>
                    ) : sortDataMyEnrollments?.length > 0 ? (
                      <div className=" w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                        {/* Card Beli */}
                        {dataKelas?.map((value) => {
                          return (
                            <div key={value.id} className="w-full shadow-sm-button rounded-2xl">
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
                                  <h2 onClick={() => navigate(`/detail-kelas/${value.id}`)} className="font-bold cursor-pointer text-xs sm:text-sm">
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
                                    {value?._count?.chapter} Modul
                                  </span>
                                  <span className="flex gap-2 items-center">
                                    <img src={clock} alt="" className="w-4" />
                                    {value.duration} Menit
                                  </span>
                                </div>
                                <div className="text-sm flex gap-2">
                                  <img src={complete} alt="" className="w-5" />
                                  <div className="w-full xl:w-5/6 bg-birumuda-0 rounded-md">
                                    <div className=" text-white text-center bg-biru-0 rounded-md text-xs sm:text-sm py-1 flex pl-2 max-w-full" style={{ width: `${progress}%` }}>
                                      {progress}%<span className="pl-1">Complete</span>
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
                        <BelumAdaKelas />
                      </div>
                    )}
                  </div>
                  <div className="flex w-full justify-center py-4">
                    <ul className="">
                      <li className="flex gap-2 justify-center items-center">
                        <button onClick={handlePrePage} disabled={currentPage === 1} className={`border text-black px-2 rounded-md ${currentPage === 1 ? "text-opacity-20" : ""} ${currentPage === 1 ? "cursor-not-allowed" : ""} `}>
                          Prev
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
                        <button
                          onClick={handleNextPage}
                          disabled={currentPage === npage}
                          className={`border text-black px-2 rounded-md ${currentPage === npage ? "text-opacity-20" : ""} ${currentPage === npage ? "cursor-not-allowed" : ""} `}
                        >
                          Next
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

/* Handle Error Belum Login*/
<div className="hidden w-full py-4">
  <BelumLoginKelas />
</div>;
