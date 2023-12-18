import React from "react";
import Filter from "../../assets/svg/filter.svg";
import { useGetPembayaran } from "../../services/Admin/dashboard-utama/get-status-pembayaran";
import SearhIcon from "../../assets/svg/search-admin.svg";
import { Spinner } from "@chakra-ui/react";

export const TableDashboard = () => {
  const { data: Transaksi, isLoading } = useGetPembayaran();

  // console.log(Transaksi, "DATAAA");
  return (
    <div>
      <div className="mx-[2rem] md:mx-[2rem] flex justify-between">
        <h1 className="sm:w-full font-bold text-normal sm:text-xl">
          Status Pembayaran
        </h1>
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <h4 className="flex gap-1 border-2 pl-3 pr-4 py-1 font-bold text-base rounded-2xl border-[#6148FF] text-[#6148FF]">
            <img src={Filter} alt="" />
            Filter
          </h4>
        </div>
      </div>
      <form action="" className="mx-[2rem] z-10 md:mx-[2rem] relative mt-5">
        <input
          type="text"
          placeholder="Search Nama Kelas"
          className="sm pl-5 pr-10 border border-[#6148FF] w-full rounded-md py-2 flex items-center"
        />
        <button className="flex justify-end items-center">
          <img className=" p-2 absolute right-2 top-0" src={SearhIcon} alt="" />
        </button>
      </form>
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
          <table className="w-full mt-5">
            <thead className="bg-[#EBF3FC] font-light md:font-normal text-md text-center">
              <tr>
                <th>ID</th>
                <th>Nama Kelas</th>
                <th>Kelas Premium</th>
                <th>Status</th>
                <th>Metode Pembayaran</th>
                <th>Tanggal Bayar</th>
              </tr>
            </thead>
            <tbody className="font-bold text-sm">
              {Transaksi?.data?.transactions?.map((transaksi, index) => (
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
                    {transaksi.payDone === true ? "SUDAH BAYAR" : "BELUM BAYAR"}
                  </td>
                  <td>
                    {transaksi.paymentMethod === "cc" ? "Credit Card" : ""}
                  </td>
                  <td>{transaksi.payDate}</td>

                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
