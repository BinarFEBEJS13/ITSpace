import React from "react";
import { FaXmark } from "react-icons/fa6";
import { deleteChapter, useDeleteChapter } from "../../../../services/Admin/chapters/delete-chapter";
import { useToast } from "@chakra-ui/react";


export const AlertDeletePage = ({ setAlertDelete, selectedChapter, courseId, reloadData}) => {
  const toast = useToast();

  const toggleClose = () => {
    setAlertDelete(false);
  
  };

  const { mutate: DeleteChapter } = useDeleteChapter();
  const handleDelete =  (hapusId) => {
    deleteChapter({
      courseId: courseId,
      chapterId: hapusId,
    }).then((result) => {
      toast({
        title: result?.data?.message,
        description: ` Chapter Dengan judul (${result?.data?.data?.title}) berhasil di hapus `,
        status: "success",
        duration: 9000,
        size: "lg",
        position: "top",
      });
      reloadData()
    }).catch((err) => {
      return err
    });;

    setAlertDelete(false);
  };

  return (
    <div className="w-full p-5 z-40 h-full fixed top-0 left-0 bg-[rgba(0,0,0,0.4)] flex items-start justify-center">
      <div className="bg-white flex rounded-lg shadow-lg flex-col items-center justify-center mt-[5rem]">
        <div className="flex justify-between w-full px-6 my-4">
          <h1 className="font-bold text-2xl">Delete Chapter</h1>
          <FaXmark
            className="font-bold text-2xl cursor-pointer"
            onClick={toggleClose}
          />
        </div>
        <div className="flex flex-col gap-2 w-full px-6">
          <div className="flex flex-col text-lg">
            <label htmlFor="">Are You Sure You Want To Delete This</label>
          </div>
        </div>
        <div className="flex gap-3 justify-end items-end w-full px-5 my-5">
          <button
          onClick={() => handleDelete(selectedChapter.id)}
            className="bg-[#FF0000] text-white rounded-lg px-5 py-3"
          >
            Delete
          </button>
          <button
             onClick={toggleClose}
            className="bg-gray-200 text-black rounded-lg p-3"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
