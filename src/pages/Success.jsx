import React from "react";
// png logo navbar
import logo from "../assets/img/logo-navbar.png";
// png success
import selamat from "../assets/img/payment-success.png";
// svg detail kelas
import { useNavigate, useParams } from "react-router-dom";
import { useGetDataTransactionsId } from "../services/get-Datas-Transactions";

export const Success = () => {
  const { courseId, idTransactions } = useParams();
  const navigate = useNavigate();

  // Intergrasi API
  const { data: getDataTransactions } = useGetDataTransactionsId({
    query: idTransactions,
  });

  return (
    <>
      <div className="overflow-x-hidden ">
        <div className="w-screen h-20 bg-gradientkanan">
          <div className="container mx-auto h-full">
            <div className="flex h-full px-6 sm:px-20">
              {/* Logo ITSpace */}
              <div className="flex sm:flex items-center w-2/6 sm:w-1/6  md:w-2/6">
                <img src={logo} alt="" className="w-[12rem] sm:w-5/6 md:w-5/6 lg:w-[12rem]" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen">
          <div className="container mx-auto">
            <div className="flex justify-center items-center px-6 sm:px-12 py-8 sm:py-8">
              <div className="flex flex-col justify-center items-center gap-4 sm:gap-8">
                <div className="bg-hijau-0 flex items-center justify-center px-4 py-2 rounded-md">
                  <p className="text-center text-white">Terimakasih atas pembayaran transaksi anda!</p>
                </div>
                <div className="w-full flex justify-center items-center flex-col gap-4">
                  <h2 className="text-ungu-0 font-semibold text-3xl">Selamat!</h2>
                  <img src={selamat} alt="" />
                  <div className="text-center">
                    <p className="font-semibold">Transaksi pembayaran kelas premium berhasil!</p>
                  </div>
                  <div className="flex flex-col w-2/3 gap-2">
                    <button onClick={() => (window.location.href = `/detail-kelas/${courseId}`)} className="bg-ungu-0 text-white px-4 py-2 rounded-md">
                      Mulai Belajar
                    </button>
                    <button onClick={() => navigate("/")} className="text-ungu-0">
                      Kembali ke beranda
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
