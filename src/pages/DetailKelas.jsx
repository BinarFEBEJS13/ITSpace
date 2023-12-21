import React, { useEffect, useState } from "react";
import { Navbar } from "../assets/components/Navbar";

// png kategori belajar

// svg card
import star from "../assets/svg/star.svg";
import level from "../assets/svg/kategori-level.svg";
import modul from "../assets/svg/book.svg";
import clock from "../assets/svg/clock.svg";
import complete from "../assets/svg/progress.svg";
// svg detail kelas
import arrow from "../assets/svg/arrow-left-black.svg";
import tele from "../assets/svg/chat.svg";
import playhijau from "../assets/svg/play-hijau.svg";
import playungu from "../assets/svg/play-ungu.svg";
import gembok from "../assets/svg/gembok.svg";
import { KelasPremium } from "../assets/components/KelasPremium";
import { Onboarding } from "../assets/components/Onboarding";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../assets/components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { actGetDataDecode } from "../redux/actions/actGetDataDecode";
import { actGetDataChapters } from "../redux/actions/actGetDataChapters";
import { actGetDataCoursesId } from "../redux/actions/actGetDataCoursesId";
import ReactPlayer from "react-player";
import { actGetDataVideos } from "../redux/actions/actGetDataVideos";

export const DetailKelas = () => {
  const { courseId } = useParams();
  const [chaptersId, setchaptersId] = useState(2);
  const [videoId, setVideoId] = useState(1);
  const [UrlVideos, setUrlVideos] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeKelas, setActiveKelas] = useState("all");
  const [toggleKelas, setToggleKelas] = useState("tentang");
  // const userId = useSelector((state) => state?.getDataDecode?.decode?.id);
  const dataChapters = useSelector((state) => state?.getDataChapters?.chapters);
  const dataCoursesId = useSelector((state) => state?.getDataCoursesId?.coursesId);
  const datavideoId = useSelector((state) => state?.getDataVideos?.videos);

  // console.log(dataCoursesId, "data course Id");
  // console.log(dataChapters, "data chapters");
  // console.log(datavideoId.url, "data video");

  const mapDataVideos = dataChapters?.map((value) => value.video.map((values) => values));

  // console.log(mapDataVideos, "data vid");
  // console.log(datavideoId, "data video ID");
  console.log(datavideoId?.chapter?.id);
  console.log(chaptersId, "id chapt");
  // console.log(videoId);
  // console.log(UrlVideos);

  // Hitung data total duration chapters
  const totalDuration = dataChapters.reduce((acc, chapter) => acc + chapter.duration, 0);
  // Hitung data total modul chapters
  const totalModul = dataChapters.length;

  // Menghitung total progress
  // Step 1: Extract _count from each video
  const countArray = dataChapters.map((chapter) => chapter.video.map((video) => video._count));
  // Step 2: Calculate total watched and total videos
  let totalWatched = 0;
  let totalVideos = 0;
  countArray.forEach((videoCount) => {
    videoCount.forEach((count) => {
      totalVideos++;
      totalWatched += count.progress === 1 ? 1 : 0;
    });
  });
  // Step 3: Calculate percentage
  const completionPercentage = (totalWatched / totalVideos) * 100;

  // console.log(`Total Watched: ${totalWatched}`);
  // console.log(`Total Videos: ${totalVideos}`);
  // console.log(`Completion Percentage: ${completionPercentage}%`);

  const handleActivePopular = (item) => {
    setActiveKelas(item);
  };
  const handleToggleKelas = (item) => {
    setToggleKelas(item);
  };
  const handleKirimIdVideo = (vidId) => {
    // console.log(vidId);
    setVideoId(vidId);
    // console.log(chptId);
    // setchaptersId(chptId);
  };

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(actGetDataDecode());
    };
    const getDataChapters = async () => {
      await dispatch(actGetDataChapters(courseId));
    };
    const getDataCoursesId = async () => {
      await dispatch(actGetDataCoursesId(courseId));
    };
    const getDataVideos = async () => {
      await dispatch(actGetDataVideos(courseId, chaptersId, videoId));
    };

    setUrlVideos(datavideoId?.url);
    setchaptersId(datavideoId?.chapter?.id);
    fetchData();
    getDataChapters();
    getDataCoursesId();
    getDataVideos();
  }, [dispatch, courseId, chaptersId, videoId, datavideoId?.url, datavideoId?.chapter?.id]);

  return (
    <>
      <div className="overflow-x-hidden ">
        <Navbar />
        {/* Button arrow kelas lainnnya */}
        <div className="w-screen px-6 sm:px-12 pt-4 sm:pt-8">
          <div className="container mx-auto">
            <div className="">
              <button onClick={() => navigate("/kursus/all")} className="flex gap-2 font-semibold items-center">
                <img src={arrow} alt="" />
                Kelas Lainnya
              </button>
            </div>
          </div>
        </div>
        {/* Detail kelas */}
        <div className="w-screen px-4 sm:px-12 py-4 sm:py-8">
          <div className="container mx-auto">
            <div className="flex flex-col gap-4">
              <div className="flex gap-8">
                {/* Kelas*/}
                <div className="w-full sm:w-4/6 xl:w-8/12 flex flex-col gap-4">
                  {/* Video Belajar Ukuran Mobile */}
                  <div className="block sm:hidden w-full rounded-md bg-biru-0 h-[240px] sm:h-[280px] lg:h-[350px] xl:h-[500px]">
                    <ReactPlayer controls={true} url={UrlVideos} width="100%" height="100%" className="h-[240px] sm:h-[280px] lg:h-[350px] xl:h-[500px]" />
                  </div>
                  <div className="flex flex-col gap-2 ">
                    {/* Header detail per kelas */}
                    <div className="flex flex-col gap-2 w-full bg-birumuda-0 rounded-md px-4 py-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          {dataCoursesId?.courseCategory?.map((category, index) => (
                            <React.Fragment key={index}>
                              <h6 className="text-ungu-0 font-bold text-xs xl:text-sm">{category?.category?.name}</h6>
                              {index < dataCoursesId.courseCategory.length - 1 && <span className="pr-2">,</span>}
                            </React.Fragment>
                          ))}
                        </div>
                        <span className="flex items-center">
                          <img src={star} alt="" className="w-6" />
                          {/* {value?.rate !== null ? value.rate?.toFixed(1) : "0.0"} */}
                          {dataCoursesId?.rate !== null ? dataCoursesId?.rate?.toFixed(1) : "0.0"}
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h2 className="font-bold cursor-pointer">{dataCoursesId.title}</h2>
                        <div className="flex items-center">
                          {dataCoursesId?.mentor?.map((mentor, index) => (
                            <React.Fragment key={index}>
                              <span className="opacity-50 text-sm">by {mentor?.author?.profile?.name}</span>
                              {index < dataCoursesId.mentor.length - 1 && <span className="opacity-50 text-sm pr-2">,</span>}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap w-full gap-2 text-xs xl:text-sm">
                        <span className="flex gap-2 items-center">
                          <img src={level} alt="" className="w-5" />
                          {dataCoursesId.level} Level
                        </span>
                        <span className="flex gap-2 items-center">
                          <img src={modul} alt="" className="w-5" />
                          {totalModul !== null ? totalModul : "0"} Modul
                        </span>
                        <span className="flex gap-2 items-center">
                          <img src={clock} alt="" className="w-5" />
                          {totalDuration !== null ? totalDuration : "0"} Menit
                        </span>
                      </div>
                    </div>
                    {/* Button Join Kelas */}
                    <div className="w-full flex justify-center sm:justify-start">
                      <button className="bg-hijau-0 rounded-md px-4 py-1 text-white flex gap-2 items-center">
                        <a href="https://t.me/+lWAndrPmRvdlZWY1" target="_blank" rel="noopener noreferrer" className="flex items-center">
                          Join Grup Telegram
                          <img src={tele} alt="" />
                        </a>
                      </button>
                    </div>
                  </div>
                  {/*/////////////////////////// Toggle Tentang & Materi Kelas Pada Mobile ////////////////////////////////*/}
                  <div className="block sm:hidden w-full ">
                    <div className="flex w-full">
                      <button onClick={() => handleToggleKelas("tentang")} className={`w-1/2 py-4 ${toggleKelas === "tentang" ? "bg-biru-0 text-white" : "bg-birumuda-0"}`}>
                        Tentang
                      </button>
                      <button onClick={() => handleToggleKelas("materi")} className={`w-1/2  py-4 ${toggleKelas === "materi" ? "bg-biru-0 text-white" : "bg-birumuda-0"}`}>
                        Materi Kelas
                      </button>
                    </div>
                  </div>
                  {/* Section Kelas */}
                  <div className="flex flex-col gap-4 w-full">
                    {/* Video Belajar ukuran Desktop*/}
                    <div className="hidden sm:block w-full rounded-md bg-biru-0 h-[240px] sm:h-[280px] lg:h-[350px] xl:h-[500px]">
                      <ReactPlayer controls={true} url={UrlVideos} width="100%" height="100%" />
                    </div>
                    {/* Detail Belajar */}
                    <div className="hidden sm:flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <h2 className="font-bold">Tentang Kelas</h2>
                        <div className="">
                          <p className="text-xs xl:text-sm text-justify indent-12">{dataCoursesId.description}</p>
                        </div>
                      </div>
                    </div>
                    {toggleKelas === "tentang" ? (
                      /*///////////////////////////////  Tentang Untuk Mobile ////////////////////////////////////////////// */
                      <div className="flex sm:hidden flex-col gap-4">
                        <div className="flex flex-col gap-2">
                          <h2 className="font-bold">Tentang Kelas</h2>
                          <div className="">
                            <p className="text-xs xl:text-sm text-justify indent-12">{dataCoursesId.description}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /*///////////////////////////////////////// Materi Kelas Versi Mobile Phone ///////////////////////////////////////////////////////*/
                      <div className="flex sm:hidden flex-col gap-2 px-4 py-2 pb-6 shadow-sm-button rounded-md">
                        {/* Header & Progress */}
                        <div className="lg:flex gap-2">
                          <h2 className="w-full lg:w-1/2 xl:w-1/3 font-bold">Materi Belajar</h2>
                          <div className="text-sm flex gap-1 w-full lg:w-2/3 xl:w-2/3">
                            <img src={complete} alt="" className="w-6" />
                            <div className="w-full bg-birumuda-0 rounded-md">
                              <div className="flex text-white text-center bg-biru-0 rounded-md text-sm py-1 px-2 max-w-full" style={{ width: `${completionPercentage}%` }}>
                                <h6 className="pl-2">
                                  {Math.round(completionPercentage)}%<span className="pl-1">Complete</span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Materi Per chapter */}
                        <div className="flex flex-col gap-4">
                          {/* Chapter 1 */}
                          <div className="w-full">
                            <div className="flex flex-col gap-2">
                              <div className="text-xs flex justify-between text-biru-0 font-semibold">
                                <h3>Chapter 1 - Pendahuluan</h3>
                                <span>60 Menit</span>
                              </div>
                              {/* Materi 1 */}
                              <div className="text-xs flex flex-col gap-1">
                                <div className="flex items-center justify-between py-2">
                                  1. Tujuan Mengikuti Kelas Design System
                                  <img src={playhijau} alt="" />
                                </div>
                                <div className="bg-biru-0 h-[0.1rem] w-full"></div>
                              </div>
                              {/* Materi 2 */}
                              <div className="text-xs flex flex-col gap-1">
                                <div className="flex items-center justify-between py-2">
                                  2. Tujuan Mengikuti Kelas Design System
                                  <img src={playungu} alt="" />
                                </div>
                                <div className="bg-biru-0 h-[0.1rem] w-full"></div>
                              </div>
                            </div>
                          </div>
                          {/* Chapter 2 */}
                          <div className="w-full">
                            <div className="flex flex-col gap-2">
                              <div className="text-xs flex justify-between text-biru-0 font-semibold">
                                <h3>Chapter 2 - Memulai Desain</h3>
                                <span>160 Menit</span>
                              </div>
                              {/* Materi 1 */}
                              <div className="text-xs flex flex-col gap-1">
                                <div className="flex items-center justify-between py-2">
                                  3. Tujuan Mengikuti Kelas Design System
                                  <img src={gembok} alt="" />
                                </div>
                                <div className="bg-biru-0 h-[0.1rem] w-full"></div>
                              </div>
                              {/* Materi 2 */}
                              <div className="text-xs flex flex-col gap-1">
                                <div className="flex items-center justify-between py-2">
                                  4. Tujuan Mengikuti Kelas Design System
                                  <img src={gembok} alt="" />
                                </div>
                                <div className="bg-biru-0 h-[0.1rem] w-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/*Materi Belajar*/}
                <div className="hidden sm:block w-2/6 xl:w-4/12 ">
                  <div className="flex flex-col gap-2 px-4 py-2 pb-6 shadow-sm-button rounded-md">
                    {/* Header & Progress */}
                    <div className="lg:flex gap-2">
                      <h2 className="w-full lg:w-1/2 xl:w-1/3 font-bold">Materi Belajar</h2>
                      <div className="text-sm flex gap-1 w-full lg:w-2/3 xl:w-2/3">
                        <img src={complete} alt="" className="w-6" />
                        <div className="w-full bg-birumuda-0 rounded-md">
                          <div className="flex text-white text-center bg-biru-0 rounded-md text-sm py-1 max-w-full" style={{ width: `${completionPercentage}%` }}>
                            <h6 className="pl-2">
                              {Math.round(completionPercentage)}%<span className="pl-1">Complete</span>
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Materi Per chapter */}
                    <div className="flex flex-col gap-4">
                      {/* Chapter 1 */}
                      {dataChapters.map((value) => (
                        <div key={value.id} className="w-full ">
                          <div className="flex flex-col gap-2">
                            <div className="text-xs flex gap-2 justify-between text-biru-0 font-semibold">
                              <h3 className="">
                                Chapter {value.number} - {value.title}
                              </h3>
                              <span className="">{value.duration} Menit</span>
                            </div>
                            {/* Materi 1 */}
                            {value?.video.map((value) => (
                              <div key={value.id} onClick={() => handleKirimIdVideo(value?.id)} className="text-xs flex flex-col gap-1 cursor-pointer hover:bg-birumuda-0">
                                <div className="flex gap-2 items-center justify-between py-2 ">
                                  {value.id}. {value.title}
                                  {value._count.progress === 0 ? <img src={playungu} alt="" /> : <img src={playhijau} alt="" />}
                                </div>
                                <div className="bg-biru-0 h-[0.1rem] w-full"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <KelasPremium /> */}
        {/* <Onboarding /> */}
        <Footer />
      </div>
    </>
  );
};
