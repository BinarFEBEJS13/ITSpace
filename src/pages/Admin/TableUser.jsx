import React, { useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { useGetUsers } from "../../services/Admin/user/get-user";
import { Header } from "../../assets/components/Admin/Header";
import { DataDashboard } from "../../assets/components/Admin/DataDashboard";
import { Sidebar } from "../../assets/components/Admin/Sidebar";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
export const TableUser = () => {
 
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { data: getUsers, isLoading } = useGetUsers({
    page : currentPage,
    limit : 8
  });
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex h-screen bg-[rgba(169,167,167,0.11)] flex-col sm:flex-row md:flex-col lg:flex-row lg:overflow-x-hidden">
      <Sidebar setSidebarVisible={setSidebarVisible} />

      <div className=" w-full lg:overflow-x-hidden">
        {/* ========================= Header =========================  */}
        <Header />
        {/* ========================= User Data =========================  */}
        <DataDashboard />

        <div className="mx-[2rem] md:mx-[2rem]">
          <h1 className="font-bold text-normal sm:text-xl">Daftar Pengguna</h1>
        </div>
        <div
          className={
            isLoading
              ? "overflow-hidden"
              : "table-kelas mx-[2rem] md:mx-[2rem] overflow-x-auto"
          }
        >
          {isLoading ? (
            <div className="flex justify-center mt-[5rem]">
              <Spinner
                thickness="4px"
                speed="0.65s"
                emptyColor="gray.200"
                color="#6148FF"
                size="xl"
              />
            </div>
          ) : (
            // getUsers?.data?.courses.length === 0 ? (
            //   <div className="mt-5 text-center text-gray-500">
            //     No results found.
            //   </div>
            // )
            <div className="bg-white my-[2rem] px-[3rem] py-[1rem] rounded-[20px] overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#EBF3FC] font-light md:font-normal text-md text-center">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Role</th>
                  </tr>
                </thead>
                <tbody className="font-bold text-sm">
                  {getUsers?.data?.users.map((user, index) => (
                    <tr key={index}>
                      <td>{user.id}</td>
                      <td>{user.profile.name}</td>
                      <td>{user.email}</td>
                      <td
                        style={{
                          color: user.verified === true ? "#73CA5C" : "#FF0000",
                        }}
                      >
                        {user.verified === true ? "VERIFIED" : "NOT VERIFIED"}
                      </td>
                      <td>{user.profile.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        {getUsers?.data?.users.length > 0 && (
          <div className="flex mt-2 gap-2 justify-end mx-[4rem]">
            <div className="flex bg-gray-300 shadow-xl rounded-lg p-3 gap-3 text-white">
              <div
                onClick={handlePrev}
                className={`p-1 rounded-[50px] bg-[#6048ff] ${
                  !getUsers?.data?.pagination?.links?.prev
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
              >
                <IoIosArrowBack />
              </div>
              <p className="text-black">{currentPage}</p>
              <div
                onClick={handleNext}
                className={`p-1 rounded-[50px] bg-[#6148FF] ${
                  !getUsers?.data?.pagination?.links?.next
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
              >
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
