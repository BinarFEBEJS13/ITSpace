import React, { useState } from "react";
import { Sidebar } from "../../assets/components/Admin/Sidebar";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { Header } from "../../assets/components/Admin/Header";
import SearhIcon from "../../assets/svg/search-admin.svg";
// import 'react-date-range/dist/styles.css'; // main css file
// import 'react-date-range/dist/theme/default.css'; // theme css file
import "rsuite/dist/rsuite-no-reset.min.css";

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
import { DateRangePicker } from "rsuite";
import { DataDashboard } from "../../assets/components/Admin/DataDashboard";
import { useGetPembayaran } from "../../services/Admin/transaksi/get-status-pembayaran";

const TabelTransaksi = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [Search, setSearch] = useState("");
  const [Status, setStatus] = useState("");
  const [Payment, setPayment] = useState("");
  const [isFilterActive, setIsFilterActive] = useState(false);
  // const [startDate, setstartDate] = useState();
  // const [endDate, setendDate] = useState();
  const [state, setState] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const { data: Transaksi, isLoading } = useGetPembayaran({
    // courseCode: courseCode,
    page: currentPage,
    limit: 10,
    status: Status,
    se: Search,
    method: Payment,
    from: state.startDate,
    to: state.endDate,
  });
  console.log(Transaksi, "Transaksi");
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  const handleFilterByPayment = (selectedCategory) => {
    if (Payment === selectedCategory) {
      // Jika filter sudah aktif, reset filter
      setPayment("");
      setIsFilterActive(false);
    } else {
      // Jika filter belum aktif, set filter
      setPayment(selectedCategory);
      setIsFilterActive(true);
    }
    setCurrentPage(1);
  };
  // const handleFilterByDate = (startDate, endDate) => {
  //   setDateRange({ startDate, endDate });
  //   setCurrentPage(1);
  // };

  const handleFilterByStatus = (selectedCategory) => {
    if (Status === selectedCategory) {
      // Jika filter sudah aktif, reset filter
      setStatus("");
      setIsFilterActive(false);
    } else {
      // Jika filter belum aktif, set filter
      setStatus(selectedCategory);
      setIsFilterActive(true);
    }
    setCurrentPage(1);
  };

  console.log(Transaksi, "PAYMENT");
  return (
    <div className="flex h-screen bg-[rgba(169,167,167,0.11)] flex-col sm:flex-row md:flex-col lg:flex-row lg:overflow-x-hidden">
      <Sidebar />

      <div className=" w-full bg-[rgba(169,167,167,0.11)] lg:overflow-x-hidden">
        {/* ========================= Header =========================  */}
        <Header />
        {/* ========================= User Data =========================  */}
        <DataDashboard />

        <div className="mx-[2rem] md:mx-[2rem] flex justify-between">
          <h1 className="w-full sm:w-full font-bold text-normal sm:text-xl">
            Status Pembayaran
          </h1>

          <div className="text-center rounded-lg flex  sm:flex-row items-center  sm:gap-3">
            <div className="ml-[3rem] sm:m-0">
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
                  {isFilterActive ? "Reset Filter" : "Filter"}
                </MenuButton>
                <MenuList>
                  <MenuOptionGroup
                    color="#6148FF"
                    title="Status Pembayaran"
                    type="checkbox"
                  >
                    <MenuItemOption
                      value="SUDAH BAYAR"
                      onClick={() => handleFilterByStatus("1")}
                    >
                      Sudah Bayar
                    </MenuItemOption>
                    <MenuItemOption
                      value="BELUM BAYAR"
                      onClick={() => handleFilterByStatus("0")}
                    >
                      Belum Bayar
                    </MenuItemOption>
                  </MenuOptionGroup>
                  <MenuOptionGroup
                    color="#6148FF"
                    title="Metode Pembayaran"
                    type="checkbox"
                  >
                    <MenuItemOption
                      value="VIRTUAL_ACCOUNT"
                      onClick={() => handleFilterByPayment("VIRTUAL_ACCOUNT")}
                    >
                      Virtual Account
                    </MenuItemOption>
                    <MenuItemOption
                      value="GERAI_RETAIL"
                      onClick={() => handleFilterByPayment("GERAI_RETAIL")}
                    >
                      Gerai Retail
                    </MenuItemOption>
                    <MenuItemOption
                      value="E_WALLET"
                      onClick={() => handleFilterByPayment("E_WALLET")}
                    >
                      E-Wallet
                    </MenuItemOption>
                  </MenuOptionGroup>
                  <MenuDivider />
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
        <div className="mx-[2rem] md:mx-[2rem] hidden sm:block">
          <DateRangePicker
            value={[state.startDate, state.endDate]}
            onChange={(dates) => {
              if (dates) {
                setState({ startDate: dates[0], endDate: dates[1] });
              } else {
                setState({ startDate: null, endDate: null });
              }
            }}
            editable={false}
          />
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
                    <th>ID Transaksi</th>
                    <th>ID User</th>
                    <th>User Pembeli</th>
                    <th>Nama Kelas</th>
                    <th>Tipe Kelas</th>
                    <th>Status</th>
                    <th>Metode Pembayaran</th>
                    <th>Harga Kelas</th>
                    <th>Tanggal Beli</th>
                    <th>Tanggal Bayar</th>
                  </tr>
                </thead>
                <tbody className="font-bold text-sm">
                  {Transaksi?.data?.transactions.map((transaksi, index) => (
                    <tr key={index}>
                      <td>{transaksi.id}</td>
                      <td>{transaksi.author.id}</td>
                      <td>{transaksi.author.profile.name}</td>
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
                      <td>
                        Rp.
                        {new Intl.NumberFormat("id-ID").format(
                          transaksi.course.price
                        )}
                      </td>
                      <td>
                        {new Date(transaksi.date).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>
                      <td>
                        {transaksi.payDone === true
                          ? new Date(transaksi.payDate).toLocaleDateString(
                              "id-ID",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              }
                            )
                          : "-"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        {Transaksi?.data?.transactions.length >= 0 && (
          <div className="flex mt-2 gap-2 justify-end mx-[4rem]">
            <div className="flex bg-gray-300 shadow-xl rounded-lg p-3 gap-3 text-white">
              <div
                onClick={handlePrev}
                className={`p-1 rounded-[50px] bg-[#6048ff] ${
                  !Transaksi?.data?.pagination?.links?.prev
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
                  !Transaksi?.data?.pagination?.links?.next
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

export default TabelTransaksi;
