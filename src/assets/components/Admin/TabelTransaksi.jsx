import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { Header } from "./Header";
import { DataDashboard } from "./DataDashboard";
import { useGetPembayaran } from "../../../services/Admin/dashboard-utama/get-status-pembayaran";
import SearhIcon from "../../../assets/svg/search-admin.svg";
import Filter from "../../../assets/svg/filter.svg";
import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Spinner,
} from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TabelTransaksi = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [Search, setSearch] = useState("");
  const [SearchBtn, setSearchBtn] = useState("");
  // const [courseCode, setCourseCode] = useState("");
  const [Payment, setPayment] = useState("");
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const {
    data: Transaksi,
    isLoading,
    refetch: refetchData,
  } = useGetPembayaran({
    // courseCode: courseCode,
    se: Search,
    method: Payment,
  });

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  // const handleFilterByCourseCode = (selectedLevel) => {
  //   setCourseCode(selectedLevel);
  //   setCurrentPage(1);
  // };

  const handleFilterByPayment = (selectedCategory) => {
    setPayment(selectedCategory);
    setCurrentPage(1);
  };

  const datafilter = (e) => {
    Transaksi.filter((kelas) =>
      kelas.course.title.toLowerCase().includes(Search.toLowerCase())
    );
  };
  // const handleToggleSearch = async (e) => {
  //   e.preventDefault(); // Prevent automatic form submission

  //   if (SearchBtn) {
  //     setSearch(e.target.value);
  //     // Pesetrform search when the search button is clicked
  //     await refetchData();
  //     // Add any other logic related to search results or messages
  //   }
  // };
  console.log(Transaksi, "PAYMENT");
  return (
    <div className="flex h-screen flex-col bg-[rgba(208,208,208,0.21)] sm:flex-row md:flex-col lg:flex-row lg:overflow-x-hidden">
      <Sidebar setSidebarVisible={setSidebarVisible} />

      <div className=" w-full lg:overflow-x-hidden">
        {/* ========================= Header =========================  */}
        <Header />
        {/* ========================= User Data =========================  */}
        <DataDashboard />

        <div>
          <div className="mx-[2rem] md:mx-[2rem] flex justify-between">
            <h1 className="sm:w-full font-bold text-normal sm:text-xl">
              Status Pembayaran
            </h1>
            <div className="flex gap-2 sm:gap-3">
              <div>
                <Menu>
                  <MenuButton
                    border="1px"
                    borderRadius="16px"
                    color="#6148FF"
                    borderColor="6148FF"
                    colorScheme="white"
                    as={Button}
                    leftIcon={<IoChevronDownCircleOutline />}
                  >
                    Filter
                  </MenuButton>
                  <MenuList>
                    <MenuOptionGroup color="#6148FF" title="Level" type="radio">
                      {/* <MenuItemOption
                        onClick={() => handleFilterByCourseCode(courseCode)}
                      >
                        Course Code
                      </MenuItemOption> */}
                      <MenuItemOption
                        onClick={() => handleFilterByPayment(Payment)}
                      >
                        Pembayaran
                      </MenuItemOption>
                    </MenuOptionGroup>
                    <MenuDivider />
                  </MenuList>
                </Menu>
              </div>
            </div>
          </div>
          <div
            className="mx-[2rem] md:mx-[2rem] relative mt-5"
            onChange={(e) => setSearch(e.target.value)}
          >
            <input
              type="text"
              placeholder="Search Nama Kelas"
              className="sm pl-5 pr-10 border border-[#6148FF] w-full rounded-md py-2 flex items-center"
            />
            <button onClick={Search} className="flex justify-end items-center">
              <img
                className=" p-2 absolute right-2 top-0"
                src={SearhIcon}
                alt=""
              />
            </button>
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
            ) : Transaksi?.data?.transactions.length === 0 ? (
              <div className="mt-5 text-center text-gray-500">
                No results found.
              </div>
            ) : (
              <div className="bg-white my-[2rem] px-[3rem] py-[1rem] rounded-[20px] overflow-x-auto">
                <table className="w-full mt-5">
                  <thead className="bg-[#EBF3FC] font-light md:font-normal text-md text-center">
                    <tr>
                      <th>ID</th>
                      <th>Nama Kelas</th>
                      <th>Tipe Kelas</th>
                      <th>Status</th>
                      <th>Metode Pembayaran</th>
                      <th>Tanggal Bayar</th>
                    </tr>
                  </thead>
                  <tbody className="font-bold text-sm">
                    {Transaksi?.data?.transactions.map((transaksi, index) => (
                      <tr key={index}>
                        <td>{transaksi.id}</td>
                        <td>{transaksi.course.title}</td>
                        <td>
                          <span
                            className={`text-white px-2 py-1 rounded-[50px] ${
                              transaksi.course.isPremium === true
                                ? "bg-[#6148FF]"
                                : "bg-[#73CA5C]"
                            }`}
                          >
                            {transaksi.course.isPremium === true
                              ? "PREMIUM"
                              : "GRATIS"}
                          </span>
                        </td>
                        <td
                          className={`${
                            transaksi.payDone === true
                              ? "text-[#73CA5C]"
                              : "text-[#FF0000]"
                          }`}
                        >
                          {transaksi.payDone === true
                            ? "SUDAH BAYAR"
                            : "BELUM BAYAR"}
                        </td>
                        <td>{transaksi.paymentMethod}</td>
                        <td>{transaksi.payDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          {Transaksi?.data?.transactions.length > 4 && (
            <div className="flex mt-2 gap-2 justify-end mx-[4rem]">
              <div className="flex bg-[rgba(0,0,0,0.4)] rounded-[50px] p-3 gap-3 text-white">
                <div
                  onClick={handlePrev}
                  className={`p-1 rounded-[50px] bg-[#6048ff] ${
                    !Transaksi?.data?.Pagination?.links.prev
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  }`}
                >
                  <IoIosArrowBack />
                </div>
                <p>{currentPage}</p>
                <div
                  onClick={handleNext}
                  className={`p-1 rounded-[50px] bg-[#6148FF] ${
                    !Transaksi?.data?.Pagination?.links.next
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
    </div>
  );
};

export default TabelTransaksi;
