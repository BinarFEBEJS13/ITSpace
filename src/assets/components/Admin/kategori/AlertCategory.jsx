import React from "react";
import { FaXmark } from "react-icons/fa6";
import { useDeleteChapter } from "../../../../services/Admin/chapters/delete-chapter";
import { deleteDataCategory } from "../../../../services/Admin/category/delete-data-category";
import { useToast } from "@chakra-ui/react";


export const AlertCategory = ({ setAlertDelete,CategoryID, reloadData}) => {
  const toast = useToast()
  const toggleClose = () => {
    setAlertDelete(false);
  
  };

  const handleDelete = (hapusId) => {
    deleteDataCategory({
      categoryId : hapusId
    }).then((result) => {
      console.log(result);
      toast({
        title: result?.message,
        duration: 5000,
        description: `Kategori yang di hapus : ${result?.data?.name}`,
        isClosable: true,
        status: "success",
        position: "top",
      });
      reloadData()
    }).catch((err) => {
      
    });
    setAlertDelete(false)
  };

  return (
    <div className="w-full  z-40 h-full fixed top-0 left-0 bg-[rgba(0,0,0,0.4)] flex items-start justify-center">
      <div className="bg-white flex rounded-lg shadow-lg flex-col items-center justify-center mt-[5rem]">
        <div className="flex justify-between w-full px-6 my-4">
          <h1 className="font-bold text-2xl">Delete Kategori</h1>
          <FaXmark
            className="font-bold text-2xl cursor-pointer"
            onClick={toggleClose}
          />
        </div>
        <div className="flex flex-col gap-2 w-full px-6">
          <div className="flex flex-col text-lg">
            <label htmlFor="">Apakah anda yakin ingin menghapus data ini?</label>
          </div>
        </div>
        <div className="flex gap-3 justify-end items-end w-full px-5 my-5">
          <button
          onClick={() => handleDelete(CategoryID)}
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
