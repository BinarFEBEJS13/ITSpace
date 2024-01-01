import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { useGetCategory } from "../../../../services/Admin/category/get-data-category";
import { postDataCategory } from "../../../../services/Admin/category/post-data-category";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { editDataCategory } from "../../../../services/Admin/category/put-data-category";
import { AlertCategory } from "./AlertCategory";

export const Category = () => {
  const [addCategory, setaddCategory] = useState("");
  const [CategoryID, setCategoryID] = useState(null);
  const [AlertDelete, setAlertDelete] = useState("");
  const { data: Category, refetch: reloadData } = useGetCategory();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (CategoryID) {
      await editDataCategory({
        categoryId: CategoryID,
        name: addCategory,
      })
        .then((result) => {
          console.log(result);
          toast({
            title: result?.message,
            duration: 9000,
            status: "success",
            isClosable: true,
            position: "top",
          });
          reloadData();
          setCategoryID("");
          setaddCategory("");
        })
        .catch((err) => {
          toast({
            title: err?.response?.data?.message,
            duration: 9000,
            status: "error",
            isClosable: true,
            position: "top",
          });
        });
    } else {
      await postDataCategory({
        name: addCategory,
      })
        .then((result) => {
          console.log(result, "KOCAK");
          toast({
            title: "Berhasil menambah kategori baru",
            duration: 9000,
            status: "success",
            isClosable: true,
            position: "top",
          });
          reloadData();
          setaddCategory("");
        })
        .catch((err) => {
          toast({
            title: err?.response?.data?.message,
            duration: 9000,
            status: "error",
            isClosable: true,
            position: "top",
          });
        });
    }
  };

  const handleEdit = (id) => {
    const data = Category?.data?.find((category) => category.id === id);
    setCategoryID(data?.id);
    setaddCategory(data?.name);
  };

  const handleDelete = (id) => {
    const data = Category?.data?.find((category) => category.id === id);
    setCategoryID(data?.id);
    setAlertDelete(true);
  };

  const handleBack = () => {
    setCategoryID("");
    setaddCategory("");
  };

  return (
    <div className="flex h-screen flex-col bg-[rgba(208,208,208,0.21)] sm:flex-row md:flex-col lg:flex-row lg:overflow-x-hidden">
      {AlertDelete && (
        <AlertCategory
          reloadData={reloadData}
          CategoryID={CategoryID}
          setAlertDelete={setAlertDelete}
        />
      )}
      <Sidebar />
      <div className=" w-full lg:overflow-x-hidden">
        {/* ========================= Header =========================  */}
        <Header />
        {/* ========================= User Data =========================  */}

        <div className="flex flex-col gap-5 items-center  mx-[2rem] md:mx-[4rem] border-r-indigo-50 my-[2rem]">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-xl h-[300px] sm:w-[40%] rounded-lg flex justify-center flex-col gap-3 py-4 px-10"
          >
            <h1 className="font-bold text-center text-xl">
              Tambah Kategori Kelas
            </h1>
            <div className="flex flex-col gap-2">
              <label htmlFor="">Nama Kategori</label>
              <input
                id="KodeKelas"
                type="text"
                className="px-3 py-2 rounded-lg border border-[#D0D0D0]"
                onChange={(e) => setaddCategory(e.target.value)}
                value={addCategory}
              />
            </div>
            <div className="flex gap-3 ">
              <button
                type="submit"
                className="bg-[#6148FF] sm:w-1/4 text-white font-bold rounded-lg p-3"
              >
                {CategoryID ? "Edit" : "Tambah"}
              </button>
              {CategoryID && (
                <button
                  onClick={handleBack}
                  className="bg-gray-200 text-black sm:w-1/4 font-bold rounded-lg p-3"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
          <div className="bg-white shadow-xl rounded-lg w-full  py-4 px-10">
            <h1 className="text-center font-bold text-xl">Semua Kategori</h1>
            <TableContainer className="mt-3 capitalize text-xl">
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Kategori Kelas</Th>
                    <Th>Edit</Th>
                    <Th>Delete</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {Category?.data?.map((category, index) => (
                    <Tr key={index}>
                      <Td>{category.name}</Td>
                      <Td>
                        <button
                          onClick={() => {
                            handleEdit(category.id);
                          }}
                          className="bg-[#ffa500] text-xl text-white rounded-xl p-4"
                        >
                          <FaEdit />
                        </button>
                      </Td>
                      <Td>
                        <button
                          onClick={() => {
                            handleDelete(category.id);
                          }}
                          className="bg-[#FF0000] text-xl text-white rounded-xl p-4"
                        >
                          <FaTrash />
                        </button>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
