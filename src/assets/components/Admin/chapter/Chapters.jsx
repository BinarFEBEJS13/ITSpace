import React, { useState } from "react";
import { Header } from "../Header";
import { FaArrowLeftLong, FaPlus } from "react-icons/fa6";
import Tambah from "../../../../assets/svg/add-admin.svg";
import { useNavigate, useParams } from "react-router-dom";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { AddVideo } from "../video/AddVideo";
import { useGetDataChapters } from "../../../../services/Admin/chapters/get-chapters";
import { AddChapterPopup } from "./AddChapterPopup";
import { AlertDeletePage } from "./AlertDelete";
import { Video } from "../video/Video";
import chapterImg from "../../../../assets/img/chapter-not-found.png"

export const Chapters = () => {
  const [addLinkPopUp, setaddLinkPopUp] = useState(false);
  const [AddChapters, setAddChapters] = useState(false);
  const [AlertDelete, setAlertDelete] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState("");
  const [showVideo, setShowVideo] = useState(false);
  const [Type, setType] = useState("edit");
  const navigate = useNavigate();
  const { id } = useParams();


  const { data: Chapter, refetch: reloadData } = useGetDataChapters({
    courseId: id,
  });

  const courses = Chapter?.data?.map((ok) => ok.course)[0];

  const handleEdit = (chapterId) => {
    setShowVideo(!showVideo);
    setType("edit");
    const selectedChapterss = Chapter?.data?.find(
      (chapter) => chapter.id === chapterId
    );
    setSelectedChapter(selectedChapterss);
    setAddChapters(true);
  };

  const toggleAddChapters = () => {
    setType("add");
    setAddChapters(!AddChapters);
  };

  const handleDelete = (chapterId) => {
    const selectedChapterss = Chapter?.data?.find(
      (chapter) => chapter.id === chapterId
    );
    setSelectedChapter(selectedChapterss);
    setAlertDelete(true);
  };

  const togglePopUp = (chapterId) => {
    const selectedChapterss = Chapter?.data?.find(
      (chapter) => chapter.id === chapterId
    );
    setSelectedChapter(selectedChapterss);
    setaddLinkPopUp(!addLinkPopUp);
  };

  return (
    <div className="flex bg-[rgba(208,208,208,0.21)] h-screen flex-col sm:flex-row md:flex-col lg:flex-row lg:overflow-x-hidden">
      {AddChapters && (
        <AddChapterPopup
          setAddChapters={setAddChapters}
          selectedChapter={selectedChapter}
          Type={Type}
          courseId={id}
          reloadData={reloadData}
        />
      )}

      {AlertDelete && (
        <AlertDeletePage
          setAlertDelete={setAlertDelete}
          selectedChapter={selectedChapter}
          courseId={id}
          reloadData={reloadData}
        />
      )}
      {addLinkPopUp && (
        <AddVideo
          reloadDatas={reloadData}
          setaddLinkPopUp={setaddLinkPopUp}
          courseId={id}
          selectedChapter={selectedChapter}
        />
      )}

      <div className="w-full lg:overflow-x-hidden">
        <Header />
        <div className="mx-[2rem] my-[2rem] md:mx-[2rem] flex justify-between ">
          <div className="flex text-3xl items-center gap-4">
            <FaArrowLeftLong
              onClick={() => navigate("/admin/dashboard/course")}
            />

            <h1 className=" font-bold text-normal sm:text-3xl">
              Kembali ke halaman course
            </h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 sm:mx-[3rem]">
            <div
              onClick={toggleAddChapters}
              className="flex items-center gap-2 border-2 px-4 py-2 font-bold text-base rounded-2xl bg-[#6148FF] border-[#6148FF] text-white"
            >
              <img src={Tambah} alt="" />
              New Chapter
            </div>
          </div>
        </div>
        {Chapter?.data?.length === 0 ? (
          <div className="flex flex-col gap-6 items-center justify-center h-[60%] ">
            <img src={chapterImg} alt="" />
            <h1 className="text-xl font-bold text-[#6148FF]">Maaf Chapter untuk course ini tidak ada</h1>
          </div>
        ) : (
          <div>
            <div className="mx-[2rem] flex flex-col gap-4 text-xl my-[2rem] md:mx-[5rem]">
              <h1 className="capitalize font-bold text-normal sm:text-3xl">
                {courses?.title}
              </h1>
              <div className="flex items-center gap-3">
                <h1 className="uppercase font-bold">{courses?.code}</h1>
                <h1
                  className={`rounded-[50px] font-bold px-3 text-white ${
                    courses?.level === "BEGINNER"
                      ? " bg-[#73CA5C] "
                      : courses?.level === "INTERMEDIATE"
                      ? "bg-[orange]"
                      : "bg-[#FF0000]"
                  } `}
                >
                  {courses?.level}
                </h1>
                <h1
                  className={`text-white rounded-full px-3 py-1 font-bold ${
                    Chapter?.data?.course?.isPremium === 1
                      ? "bg-[#6148FF]"
                      : "bg-[#73CA5C]"
                  } `}
                >
                  {Chapter?.data?.course?.isPremium === 1
                    ? "PREMIUM"
                    : "GRATIS"}
                </h1>
              </div>
            </div>
            <div className=" my-[2rem] flex flex-col gap-3 mx-[2rem] md:mx-[5rem]">
              {Chapter?.data?.map((chapter, index) => (
                <div
                  key={index}
                  className="bg-white my-4 mx-auto w-full shadow-xl p-4 rounded-[16px] max-h-[400px] overflow-y-auto"
                >
                  <div className="flex justify-between">
                    <div className="w-full justify-center p-6 flex flex-col gap-3">
                      <h1 className="text-4xl text-[#6148FF]">
                        Chapter {chapter.number}
                      </h1>
                      <div className="capitalize flex items-center gap-3">
                        <label className="text-2xl" htmlFor="">
                          Judul Chapter :
                        </label>
                        <span className="capitalize text-3xl font-medium ">
                          {chapter.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <label className="text-2xl" htmlFor="">
                          Tipe Chapter :
                        </label>
                        <span
                          className={`px-7 py-3 text-white font-bold text-sm rounded-[25px] ${
                            chapter.isPremium === true
                              ? "bg-[#6148FF]"
                              : "bg-[#73CA5C]"
                          }`}
                        >
                          {chapter.isPremium === true ? "PREMIUM" : "GRATIS"}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex justify-end ">
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => togglePopUp(chapter.id)}
                          className="bg-blue-500 text-xl text-white rounded-xl p-4"
                        >
                          <FaPlus />
                        </button>
                        <button
                          onClick={() => handleEdit(chapter.id)}
                          className="bg-[#ffa500] text-xl text-white rounded-xl p-4"
                        >
                          <FaEdit />
                        </button>
                        <button
                          onClick={() => handleDelete(chapter.id)}
                          className="bg-[#FF0000] text-xl text-white rounded-xl p-4"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                  <Video
                    key={`video-${chapter.id}`}
                    chapterId={chapter.id}
                    courseId={id}
                    setaddLinkPopUp={setaddLinkPopUp}
                    reloadData={reloadData}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
