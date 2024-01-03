import React, { useEffect } from "react";
import { FaXmark } from "react-icons/fa6";
import { deleteVideo, useDeleteVideo } from "../../../../services/Admin/videos/delete-data-video";
import { useToast } from "@chakra-ui/react";

export const DeleteVideo = ({
  courseId,
  chapterId,
  settoggleAlert,
  selectVideo,
}) => {
  const toggleClose = () => {
    settoggleAlert(false);
  };
  const toast = useToast()

  const handleDelete = (id) => {
    deleteVideo({
      courseId: courseId,
      chapterId: chapterId,
      videoId: id,
    }).then((result) => {
      console.log(result, "rrr");
      toast({
        title: result?.message,
        duration: 5000,
        status: "success",
        isClosable: true,
        position: "top",
      });
    }).catch((err) => {
      toast({
        title: err?.response?.data?.message,
        duration: 5000,
        status: "error",
        isClosable: true,

        position: "top",
      });
    });;
    settoggleAlert(false)
  };

  return (
    <div className="w-full p-5 z-40 h-full fixed top-0 left-0 bg-[rgba(0,0,0,0.4)] flex items-start justify-center">
      <div className="bg-white flex rounded-lg shadow-lg flex-col items-center justify-center mt-[5rem]">
        <div className="flex justify-between w-full px-6 my-4">
          <h1 className="font-bold text-2xl">Hapus Video</h1>
          <FaXmark
            className="font-bold text-2xl cursor-pointer"
            onClick={toggleClose}
          />
        </div>
        <div className="flex flex-col gap-2 w-full px-6">
          <div className="flex flex-col text-lg">
            <label htmlFor="">Apakah yakin ingin menghapus video ini?</label>
          </div>
        </div>
        <div className="flex gap-3 justify-end items-end w-full px-5 my-5">
          <button
            onClick={() => handleDelete(selectVideo.id)}
            className="font-bold bg-[#FF0000] text-white rounded-lg px-5 py-3"
          >
            Delete
          </button>
          <button
            onClick={toggleClose}
            className="font-bold bg-gray-200 text-black rounded-lg p-3"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
