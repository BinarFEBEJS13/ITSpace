import React, { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { postDataVideo, usePostDataVideos } from "../../../../services/Admin/videos/post-data-videos";
import { useToast } from "@chakra-ui/react";
import { useGetDataChaptersID } from "../../../../services/Admin/chapters/get-chapterID";


export const AddVideo = ({
  setaddLinkPopUp,
  courseId,
  selectedChapter,
  selectVideo,
  reloadData
}) => {
  const [Judul, setJudul] = useState("");
  const [Deskripsi, setDeskripsi] = useState("");
  const [Link, setLink] = useState("");
  const [Durasi, setDurasi] = useState(0);
  const [Number, setNumber] = useState(0);

  const toast = useToast();

  const { data: chapterBYID } = useGetDataChaptersID({
    courseId: courseId,
    chapterId: selectedChapter.id,
  });

  console.log(selectVideo, "selectVideo");


  const handleonChange = (e) => {
    if (e) {
      if (e.target.id === "title") {
        setJudul(e.target.value);
      }
      if (e.target.id === "desc") {
        setDeskripsi(e.target.value);
      }
      if (e.target.id === "link") {
        setLink(e.target.value);
      }
      if (e.target.id === "durasi") {
        setDurasi(parseInt(e.target.value));
      }
      if (e.target.id === "number") {
        setNumber(parseInt(e.target.value));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await postDataVideo({
      chapterId: selectedChapter.id,
      courseId: courseId,
      title: Judul,
      description: Deskripsi,
      url: Link,
      duration: Durasi,
      number: Number,
    }).then((result) => {
      toast({
        title: "Berhasil Tambah Video",
        duration: 9000,
        status: "success",
        position: "bottom-right",
      });
      reloadData()
    }).catch((err) => {
      toast({
        title: err?.response?.data?.message,
        duration: 9000,
        status: "error",
        position: "bottom-right",
      });
      return err
    });
 

    setaddLinkPopUp(false);
  };

  const toggleClose = () => {
    setaddLinkPopUp(false);
  };
  return (
    <div className="w-full z-40 h-full fixed top-0 left-0 bg-[rgba(0,0,0,0.4)] flex items-start justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white flex rounded-lg shadow-lg flex-col items-center justify-center w-[80%] sm:w-[30%] mt-[5rem]"
      >
        <div className="flex justify-between w-full px-6 my-4">
          <h1 className="font-bold text-2xl">Add Data Videos</h1>
          <FaXmark
            className="font-bold text-2xl cursor-pointer"
            onClick={toggleClose}
          />
        </div>
        <div className="flex flex-col gap-2 w-full px-6">
          <div className="flex flex-col">
            <label htmlFor="">Video Title</label>
            <input
              onChange={handleonChange}
              id="title"
              className="px-3 py-2 rounded-lg border border-[#D0D0D0]"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Video Description</label>
            <input
              onChange={handleonChange}
              id="desc"
              className="px-3 py-2 rounded-lg  border border-[#D0D0D0]"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Link Video</label>
            <input
              onChange={handleonChange}
              id="link"
              className="px-3 py-2 rounded-lg  border border-[#D0D0D0]"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Video Duration</label>
            <input
              onChange={handleonChange}
              id="durasi"
              className="px-3 py-2 rounded-lg  border border-[#D0D0D0]"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Video Number</label>
            <input
              onChange={handleonChange}
              id="number"
              className="px-3 py-2 rounded-lg  border border-[#D0D0D0]"
              type="text"
            />
          </div>
        </div>
        <div className="flex gap-3 justify-end items-end w-full px-5 my-5">
          <button
            className="bg-[#6148FF] text-white rounded-lg px-5 py-3"
            type="submit"
          >
            Add
          </button>
          <button
            onClick={toggleClose}
            className="bg-gray-200 text-black rounded-lg p-3"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
