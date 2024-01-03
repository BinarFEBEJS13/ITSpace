import React, { useEffect, useState } from "react";
import { Navbar } from "../assets/components/Navbar";
// svg card
import star from "../assets/svg/star.svg";
import level from "../assets/svg/kategori-level.svg";
import modul from "../assets/svg/book.svg";
import clock from "../assets/svg/clock.svg";
import complete from "../assets/svg/progress.svg";
// svg detail kelas
import arrow from "../assets/svg/arrow-left-black.svg";
import tele from "../assets/svg/telegram.svg";
import simpankelas from "../assets/svg/tambah-putih.svg";
import rating from "../assets/svg/bintang-putih.svg";
import playgredient from "../assets/svg/play-gredient.svg";
import successgreen from "../assets/svg/success-green.svg";
import gembok from "../assets/svg/gembok.svg";
import { KelasPremium } from "../assets/components/KelasPremium";
// import { Onboarding } from "../assets/components/Onboarding";
import { useNavigate, useParams } from "react-router-dom";
import { Footer } from "../assets/components/Footer";
import ReactPlayer from "react-player";
import { useGetDataChapters } from "../services/get-Datas-Chapters";
import { useGetDataCoursesId } from "../services/get-Datas-CoursesId";
import { useGetDataVideos } from "../services/get-Datas-Videos";
import { useGetDataCheckEnrollment } from "../services/get-Datas-CheckEnrollments";
import { useDataProgress } from "../services/post-Datas-progress";
import { useGetDecode } from "../services/get-Datas-Decode";
import { useDataEnrollments } from "../services/post-Datas-enrollments";
// Chakra UI
import { useToast } from "@chakra-ui/react";
import { Rating } from "../assets/components/Rating";

export const DetailKelas = () => {
  const toast = useToast();
  const { courseId } = useParams();
  const [chaptersId, setchaptersId] = useState(null);
  const [videoId, setVideoId] = useState(null);
  const [UrlVideos, setUrlVideos] = useState("");
  const navigate = useNavigate();
  const [ActivePremium, setActivePremium] = useState(false);
  const [toggleKelas, setToggleKelas] = useState("tentang");

  // GET API ALL
  const { data: dataChptrs, isSuccess: successChapter } = useGetDataChapters({ query: courseId });
  const dataChapters = dataChptrs?.data;

  // console.log(successChapter);

  const { data: dataCrsId } = useGetDataCoursesId({ query: courseId });
  const dataCoursesId = dataCrsId?.data;

  const { data: dataVid } = useGetDataVideos({ courseId, chaptersId, videoId });
  const datavideoId = dataVid?.data;

  const { data: dataCheckEnrollment } = useGetDataCheckEnrollment({ query: courseId });

  const { mutate: postProgress } = useDataProgress();
  const { mutate: postEnrollments, error: errorenrolment, isSuccess: successenrolment } = useDataEnrollments();

  const { data: dataDecode } = useGetDecode();

  // Hitung data total duration chapters
  const totalDuration = dataChapters?.reduce((acc, chapter) => acc + chapter.duration, 0);
  // Hitung data total modul chapters
  const totalModul = dataChapters?.length;

  // Menghitung total progress
  // Step 1: Extract _count from each video
  const countArray = dataChapters?.map((chapter) => chapter?.video?.map((video) => video._count));
  // Step 2: Calculate total watched and total videos
  let totalWatched = 0;
  let totalVideos = 0;
  countArray?.forEach((videoCount) => {
    videoCount?.forEach((count) => {
      totalVideos++;
      totalWatched += count.progress === 1 ? 1 : 0;
    });
  });
  // Step 3: Calculate percentage
  const completionPercentage = totalVideos !== 0 ? (totalWatched / totalVideos) * 100 : 0;

  // Function Handle ALL
  const handleToggleKelas = (item) => {
    setToggleKelas(item);
  };

  const handleKirimIdVideo = (vidId, chptId, cekPremium) => {
    if (dataCheckEnrollment?.data === true || cekPremium === false) {
      setVideoId(vidId);
      setchaptersId(chptId);
    } else {
      setActivePremium(!ActivePremium);
    }
  };

  const handleSimpanKelas = async () => {
    await postEnrollments({ courseId });
  };

  useEffect(() => {
    if (errorenrolment?.response?.status === 400) {
      toast({
        description: errorenrolment?.response?.data?.message,
        duration: 3000,
        status: "error",
        position: "top",
      });
    }
    if (successenrolment === true) {
      toast({
        description: "Daftar Kelas Berhasil",
        duration: 3000,
        status: "success",
        position: "top",
      });
    }
  }, [errorenrolment, toast, successenrolment]);

  const handleClosePremium = () => {
    setActivePremium(!ActivePremium);
  };

  useEffect(() => {
    setUrlVideos(datavideoId?.url);
  }, [datavideoId]);

  useEffect(() => {
    if (successChapter) {
      setchaptersId(dataChapters?.map((chpt) => chpt?.id)[0]);
      setVideoId(dataChapters?.map((chpt) => chpt?.video)[0]?.map((vid) => vid?.id)[0]);
    }
  }, [dataChapters, successChapter]);

  const handleVideoProgressMobile = (videoId) => {
    postProgress({
      videoId: videoId,
    });
  };

  const handleVideoProgressDesktop = (videoId) => {
    postProgress({
      videoId: videoId,
    });
  };

  return (
    <>
      <div className="overflow-x-hidden ">
        <Navbar />
        {/* Button arrow kelas lainnnya */}
        <div className="w-screen ">
          <div className="container mx-auto">
            <div className="px-6 sm:px-12 pt-4 sm:pt-8">
              <button onClick={() => navigate("/kursus/all")} className="flex gap-2 font-semibold items-center">
                <img src={arrow} alt="" />
                Kelas Lainnya
              </button>
            </div>
          </div>
        </div>
        {/* Detail kelas */}
        <div className="w-screen">
          <div className="container mx-auto">
            <div className="flex flex-col gap-4 px-4 sm:px-12 py-4 sm:py-8">
              <div className="flex gap-8">
                {/* Kelas*/}
                <div className="w-full sm:w-4/6 xl:w-8/12 flex flex-col gap-4">
                  {/* Video Belajar Ukuran Mobile */}
                  <div className="block sm:hidden w-full rounded-md bg-biru-0 h-[240px] sm:h-[280px] lg:h-[350px] xl:h-[500px]">
                    <ReactPlayer onEnded={() => handleVideoProgressMobile(videoId)} controls={true} url={UrlVideos} width="100%" height="100%" className="h-[240px] sm:h-[280px] lg:h-[350px] xl:h-[500px]" />
                  </div>
                  <div className="flex flex-col gap-2 ">
                    {/* Header detail per kelas */}
                    <div className="flex flex-col gap-2 w-full bg-birumuda-0 rounded-md px-4 py-2">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          {dataCoursesId?.courseCategory?.map((category, index) => (
                            <React.Fragment key={index}>
                              <h6 className="text-ungu-0 font-semibold text-xs xl:text-sm">{category?.category?.name}</h6>
                              {index < dataCoursesId.courseCategory.length - 1 && <span className="pr-2">,</span>}
                            </React.Fragment>
                          ))}
                        </div>
                        <span className="flex items-center">
                          <img src={star} alt="" className="w-6" />
                          {dataCoursesId?.rate !== null ? dataCoursesId?.rate?.toFixed(1) : "0.0"}
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h2 className="font-semibold cursor-pointer">{dataCoursesId?.title}</h2>
                        <div className="flex items-center">
                          {dataCoursesId?.mentor?.map((mentor, index) => (
                            <React.Fragment key={index}>
                              <span className="opacity-50 text-sm">by {mentor?.author?.profile?.name}</span>
                              {index < dataCoursesId?.mentor.length - 1 && <span className="opacity-50 text-sm pr-2">,</span>}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap w-full gap-2 text-xs xl:text-sm">
                        <span className="flex gap-2 items-center">
                          <img src={level} alt="" className="w-5" />
                          {dataCoursesId?.level} Level
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
                      {/* Button Grup Tele, Join Kelas, Rating*/}
                      <div className={`${dataDecode?.message === "jwt verify succes" ? "flex flex-wrap w-full gap-2 text-xs xl:text-sm" : "hidden"}  `}>
                        <button
                          className={`${dataCoursesId?.groupUrl === undefined ? "opacity-50 cursor-not-allowed" : ""} bg-[#2AABEE] rounded-md px-4 py-1 text-white text-xs xl:text-sm flex gap-2 items-center`}
                          disabled={dataCheckEnrollment?.data === false}
                        >
                          <a href={dataCoursesId?.groupUrl} target="_blank" rel="noopener noreferrer" className="flex gap-1  items-center">
                            <img src={tele} alt="telegram" className="w-5" />
                            Gabung Grup Telegram
                          </a>
                        </button>
                        <button
                          onClick={() => handleSimpanKelas()}
                          className={`${
                            dataCoursesId?.isPremium === true ? "hidden" : `${dataCheckEnrollment?.data === true ? "opacity-50 cursor-not-allowed" : ""} bg-hijau-0 rounded-md px-4 py-1 text-white text-xs xl:text-sm flex gap-1 items-center`
                          } `}
                          disabled={dataCheckEnrollment?.data === true}
                        >
                          <img src={simpankelas} alt="simpankelas" /> Daftar Kelas
                        </button>
                        <button
                          className={`${dataCheckEnrollment?.data === false ? "opacity-50 cursor-not-allowed" : ""} bg-yellow-500 rounded-md px-4 py-1 text-white text-xs xl:text-sm flex gap-1 items-center`}
                          disabled={dataCheckEnrollment?.data === false}
                        >
                          <img src={rating} alt="rating" />
                          <Rating courseId={courseId} />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*/////////////////////////// Toggle Tentang & Materi Kelas Pada Mobile ////////////////////////////////*/}
                  <div className="block sm:hidden w-full ">
                    <div className="flex w-full">
                      <button onClick={() => handleToggleKelas("tentang")} className={`w-1/2 py-4 rounded-l-md ${toggleKelas === "tentang" ? "bg-biru-0 text-white" : "bg-birumuda-0"}`}>
                        Tentang
                      </button>
                      <button onClick={() => handleToggleKelas("materi")} className={`w-1/2 py-4 rounded-r-md ${toggleKelas === "materi" ? "bg-biru-0 text-white" : "bg-birumuda-0"}`}>
                        Materi Kelas
                      </button>
                    </div>
                  </div>
                  {/* Section Kelas */}
                  <div className="flex flex-col gap-4 w-full">
                    {/* Video Belajar ukuran Desktop*/}
                    <div className="hidden sm:block w-full rounded-md bg-biru-0 h-[240px] sm:h-[280px] lg:h-[350px] xl:h-[500px]">
                      <ReactPlayer onEnded={() => handleVideoProgressDesktop(videoId)} controls={true} url={UrlVideos} width="100%" height="100%" />
                    </div>
                    {/* Detail Belajar */}
                    <div className="hidden sm:flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <h2 className="font-semibold">Tentang Kelas</h2>
                        <div className="">
                          <p className="text-xs xl:text-sm text-justify indent-12">{dataCoursesId?.description}</p>
                        </div>
                      </div>
                    </div>
                    {toggleKelas === "tentang" ? (
                      /*///////////////////////////////  Tentang Untuk Mobile ////////////////////////////////////////////// */
                      <div className="flex sm:hidden flex-col gap-4">
                        <div className="flex flex-col gap-2">
                          <h2 className="font-semibold">Tentang Kelas</h2>
                          <div className="">
                            <p className="text-xs xl:text-sm text-justify indent-12">{dataCoursesId?.description}</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /*///////////////////////////////////////// Materi Kelas Versi Mobile Phone ///////////////////////////////////////////////////////*/
                      <div className="flex sm:hidden flex-col gap-2 px-4 py-2 pb-6 shadow-sm-button rounded-md">
                        {/* Header & Progress */}
                        <div className="lg:flex lg:items-center gap-2">
                          <h2 className="w-full lg:w-1/2 xl:w-1/3 font-semibold">Materi Belajar</h2>
                          <div className="text-sm flex gap-1 w-full lg:w-2/3 xl:w-2/3">
                            <img src={complete} alt="" className="w-6" />
                            <div className="w-full bg-biru-0 bg-opacity-20 rounded-md">
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
                          {dataChapters?.map((valuedata) => (
                            <div key={valuedata.id} className="w-full">
                              <div className="flex flex-col gap-2">
                                <div className="text-xs flex gap-2 justify-between text-biru-0 font-semibold">
                                  <h3>
                                    Chapter {valuedata.number} - {valuedata.title}
                                  </h3>
                                  <span>{valuedata.duration} Menit</span>
                                </div>
                                {/* Materi 1 */}
                                {valuedata?.video.map((value) => (
                                  <div key={value.id} onClick={() => handleKirimIdVideo(value?.id, valuedata.id, valuedata?.isPremium)} className={`text-xs flex flex-col gap-1 cursor-pointer `}>
                                    <div className={`flex gap-2 items-center justify-between py-2 px-2 hover:bg-birumuda-0 rounded-md ${videoId === value.id ? "bg-birumuda-0 rounded-md" : ""}`}>
                                      <div className="flex w-full justify-start items-center gap-2">
                                        <h6 className="">{value.number}.</h6>
                                        <div className="flex items-start truncate-3-lines w-full ">{value.title}</div>
                                        {valuedata?.isPremium === true ? (
                                          dataCheckEnrollment?.data === true ? (
                                            value._count.progress === 0 ? (
                                              <img src={playgredient} alt="w-5" />
                                            ) : (
                                              <img src={successgreen} alt="w-5" />
                                            )
                                          ) : (
                                            <img src={gembok} alt="" className="w-5"></img>
                                          )
                                        ) : value._count.progress === 0 ? (
                                          <img src={playgredient} alt="w-5" />
                                        ) : (
                                          <img src={successgreen} alt="w-5" />
                                        )}
                                      </div>
                                    </div>
                                    <div className="border-b border-biru-0"></div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/*Materi Belajar*/}
                <div className="hidden sm:block w-2/6 xl:w-4/12 ">
                  <div className="flex flex-col gap-2 px-4 py-2 pb-6 shadow-sm-button rounded-md">
                    {/* Header & Progress */}
                    <div className="lg:flex lg:items-center gap-2">
                      <h2 className="w-full lg:w-1/2 xl:w-1/3 font-semibold text-sm">Materi Belajar</h2>
                      <div className="text-sm flex gap-1 w-full lg:w-2/3 xl:w-2/3">
                        <img src={complete} alt="" className="w-6" />
                        <div className="w-full bg-biru-0 bg-opacity-20 rounded-md">
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
                      {dataChapters?.map((valuedata) => (
                        <div key={valuedata.id} className="w-full ">
                          <div className="flex flex-col gap-2">
                            <div className="text-xs flex gap-2 justify-between text-biru-0 font-semibold">
                              <h3 className="truncate-3-lines">
                                Chapter {valuedata.number} - {valuedata.title}
                              </h3>
                              <span className="">{valuedata.duration} Menit</span>
                            </div>
                            {/* Materi 1 */}
                            {valuedata?.video.map((value) => (
                              <div key={value.id} onClick={() => handleKirimIdVideo(value?.id, valuedata.id, valuedata?.isPremium)} className={`text-xs flex flex-col gap-1 cursor-pointer `}>
                                <div className={`flex gap-2 items-center justify-between py-2 px-2 hover:bg-birumuda-0 rounded-md ${videoId === value.id ? "bg-birumuda-0 rounded-md" : ""}`}>
                                  <div className="flex w-full justify-start items-center gap-2">
                                    <h6 className="">{value.number}.</h6>
                                    <div className="flex items-start truncate-3-lines w-full">{value.title}</div>
                                    {valuedata?.isPremium === true ? (
                                      dataCheckEnrollment?.data === true ? (
                                        value._count.progress === 0 ? (
                                          <img src={playgredient} alt="w-5" />
                                        ) : (
                                          <img src={successgreen} alt="w-5" />
                                        )
                                      ) : (
                                        <img src={gembok} alt="" className="w-5"></img>
                                      )
                                    ) : value._count.progress === 0 ? (
                                      <img src={playgredient} alt="w-5" />
                                    ) : (
                                      <img src={successgreen} alt="w-5" />
                                    )}
                                  </div>
                                </div>
                                <div className="border-b border-biru-0"></div>
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
        {ActivePremium ? <KelasPremium onClose={handleClosePremium} values={dataCoursesId} totalModul={totalModul} totalDuration={totalDuration} /> : ""}
        {/* <Onboarding /> */}
        <Footer />
      </div>
    </>
  );
};
