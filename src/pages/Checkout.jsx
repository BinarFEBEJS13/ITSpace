import React, { useEffect, useState } from "react";
// svg checkout
import arrow from "../assets/svg/arrow-left-black.svg";
import arrowwhite from "../assets/svg/arrow-right-white.svg";
import dollar from "../assets/svg/dollar.svg";
// svg bayar kelas premium
import calculator from "../assets/svg/calculator.svg";
import drop from "../assets//svg/Suffix-bottom.svg";
// png kategori belajar
import logo from "../assets/img/logo-navbar.png";
// png card e-wallet
import dana from "../assets/img/payment/e-wallet/dana.png";
import gopay from "../assets/img/payment/e-wallet/gopay.png";
import ovo from "../assets/img/payment/e-wallet/ovo.png";
import shopeepay from "../assets/img/payment/e-wallet/shopeepay.png";
// png card gerai-retail
import alfamart from "../assets/img/payment/gerai-retail/Alfamart.png";
import alfamidi from "../assets/img/payment/gerai-retail/Alfamidi.png";
import dandan from "../assets/img/payment/gerai-retail/Dan+Dan.png";
import indomaret from "../assets/img/payment/gerai-retail/Indomaret.png";
// Png card virtual account
import bca from "../assets/img/payment/virtual-account/bca.png";
import bni from "../assets/img/payment/virtual-account/bni.png";
import bri from "../assets/img/payment/virtual-account/bri.png";
import mandiri from "../assets/img/payment/virtual-account/mandiri.png";

import { useNavigate, useParams } from "react-router-dom";
import { useGetDataCoursesId } from "../services/get-Datas-CoursesId";
import { useToast } from "@chakra-ui/react";
import { useDataTransactions } from "../services/post-Datas-transactions";

export const Checkout = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { courseId } = useParams();
  const [pembayaran, setPembayaran] = useState("");

  // Integrasi API
  const { data: dataCrsId } = useGetDataCoursesId({ query: courseId });
  const dataCourseId = dataCrsId?.data;

  const { mutate: postTransactions, data: getDataTransactions, isSuccess, error } = useDataTransactions();

  // Handle PPN & Total Pembayaran
  const hargaKursus = Number(dataCourseId?.price) || 0;
  const [Ppn, setPpn] = useState(0);
  useEffect(() => {
    if (dataCourseId?.price) {
      const hargaKursus = Number(dataCourseId?.price);
      const calculatedPpn = (11 / 100) * hargaKursus;
      setPpn(calculatedPpn);
    }
  }, [dataCourseId]);
  const totalPembayaran = dataCourseId?.price ? Number(dataCourseId?.price) + Ppn : 0;

  // Handle Buat Pesanan
  const handleBuatPesanan = async () => {
    if (dataCourseId?.isPremium === true) {
      await postTransactions({
        courseId: courseId,
        paymentMethod: pembayaran,
      });
    } else {
      toast({
        title: "Gagal",
        description: "Silahkan pilih kursus yang lain",
        duration: 3000,
        status: "error",
        position: "top",
      });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      window.location.href = `/payment/${courseId}/${getDataTransactions?.data?.data?.id}`;
    }
    if (error?.response?.status === 401) {
      toast({
        title: "Gagal",
        description: "Silahkan login terlebih dahulu",
        duration: 3000,
        status: "error",
        position: "top",
      });
    }
    if (error?.response?.status === 400) {
      toast({
        title: "Gagal",
        description: error?.response?.data?.message,
        duration: 3000,
        status: "error",
        position: "top",
      });
    }
  }, [isSuccess, error, courseId, getDataTransactions, toast]);

  useEffect(() => {
    if (dataCourseId?.isPremium === false) {
      window.location.href = `/detail-kelas/${courseId}`;
    }
  }, [dataCourseId, courseId]);

  const handleBayarKelas = (item) => {
    setPembayaran(pembayaran === item ? "" : item);
  };

  const handleGoBack = () => {
    // untuk kembali ke halaman sebelumnya
    navigate(-1);
  };
  return (
    <>
      <div className="overflow-x-hidden ">
        {/* Navbar */}
        <div className="w-screen h-20 bg-gradientkanan ">
          <div className="container mx-auto h-full">
            <div className="flex h-full px-4 sm:px-20">
              {/* Logo ITSpace */}
              <div className="flex sm:flex items-center w-2/6 sm:w-1/6  md:w-2/6">
                <img src={logo} alt="" className="w-[12rem] sm:w-5/6 md:w-5/6 lg:w-[12rem]" />
              </div>
            </div>
          </div>
        </div>

        {/* Button arrow kelas lainnnya */}
        <div className="w-screen">
          <div className="container mx-auto">
            <div className="px-6 sm:px-20 pt-4 sm:pt-8">
              <button onClick={handleGoBack} className="flex gap-2 font-semibold items-center">
                <img src={arrow} alt="kembali" />
                Kembali
              </button>
            </div>
          </div>
        </div>
        {/* Detail kelas */}
        <div className="w-screen">
          <div className="container mx-auto">
            <div className="flex flex-col gap-4 px-6 sm:px-20 py-4 sm:py-8">
              <div className="flex flex-col sm:flex sm:flex-row gap-4 sm:gap-8">
                {/* section VIRTUAL_ACCOUNT, gerai retail dan e-wallet Card*/}
                <div className="w-full sm:w-4/6 md:w-7/12 lg:w-8/12 flex flex-col gap-4 order-2 sm:order-1">
                  <div className="flex gap-1">
                    <img src={dollar} alt="dollar" />
                    <h6>Pilih Metode Pembayaran</h6>
                  </div>
                  {/* Virtual Account */}
                  <div className="border rounded-md flex flex-col gap-2 bg-gray-100">
                    <div onClick={() => handleBayarKelas("VIRTUAL_ACCOUNT")} className="flex text-white bg-black justify-between px-4 py-2 rounded-t-md cursor-pointer">
                      <p>Transfer Virtual Account</p>
                      <img src={drop} alt="" className={`${pembayaran === "VIRTUAL_ACCOUNT" ? "rotate-180" : "rotate-0"}`} />
                    </div>
                    {pembayaran === "VIRTUAL_ACCOUNT" ? (
                      <div className="flex flex-col gap-6 sm:gap-8 justify-center items-center p-4 pb-4 sm:pb-8 bg-gray-100">
                        {/* Png VIRTUAL_ACCOUNT Card */}
                        <div className="flex gap-2 w-full justify-center items-center">
                          <img src={bca} alt="bca" className="w-14 sm:w-16 lg:w-20" />
                          <img src={bri} alt="bri" className="w-14 sm:w-16 lg:w-20" />
                          <img src={bni} alt="bni" className="w-14 sm:w-16 lg:w-20" />
                          <img src={mandiri} alt="mandiri" className="w-14 sm:w-16 lg:w-20" />
                        </div>
                        <div className="w-full flex justify-center items-center">
                          <div onClick={() => handleBuatPesanan()} className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-md cursor-pointer">
                            <h6>Buat Pesanan</h6>
                            <img src={arrowwhite} alt="arrowwhite" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  {/* Gerai Retail */}
                  <div className="border rounded-md flex flex-col gap-2 bg-gray-100">
                    {/* Button CC dropdown */}
                    <div onClick={() => handleBayarKelas("GERAI_RETAIL")} className="flex text-white bg-biru-0 justify-between px-4 py-2 rounded-t-md cursor-pointer">
                      <p>Tunai di Gerai Retail</p>
                      <img src={drop} alt="" className={`${pembayaran === "GERAI_RETAIL" ? "rotate-180" : "rotate-0"}`} />
                    </div>
                    {pembayaran === "GERAI_RETAIL" ? (
                      <div className="flex flex-col gap-6 sm:gap-8 justify-center items-center p-4 pb-4 sm:pb-8 bg-gray-100">
                        {/* Png GERAI_RETAIL Card */}
                        <div className="flex gap-2 w-full justify-center items-center">
                          <img src={alfamart} alt="alfamart" className="w-14 sm:w-16 lg:w-20" />
                          <img src={alfamidi} alt="alfamidi" className="w-14 sm:w-16 lg:w-20" />
                          <img src={indomaret} alt="indomaret" className="w-14 sm:w-16 lg:w-20" />
                          <img src={dandan} alt="dandan" className="w-14 sm:w-16 lg:w-20" />
                        </div>
                        <div className="w-full flex justify-center items-center">
                          <div onClick={() => handleBuatPesanan()} className="flex items-center justify-center gap-2 bg-biru-0 text-white px-4 py-2 rounded-md cursor-pointer">
                            <h6>Buat Pesanan</h6>
                            <img src={arrowwhite} alt="arrowwhite" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  {/* Dompet E_WALLET */}
                  <div className="border rounded-md flex flex-col gap-2 bg-gray-100">
                    {/* Button CC dropdown */}
                    <div onClick={() => handleBayarKelas("E_WALLET")} className="flex text-white bg-ungu-0 justify-between px-4 py-2 rounded-t-md cursor-pointer">
                      <p>Dompet Digital (E_Wallet)</p>
                      <img src={drop} alt="" className={`${pembayaran === "E_WALLET" ? "rotate-180" : "rotate-0"}`} />
                    </div>
                    {pembayaran === "E_WALLET" ? (
                      <div className="flex flex-col gap-6 sm:gap-8 justify-center items-center p-4 pb-4 sm:pb-8 ">
                        {/* Png E_WALLET Card */}
                        <div className="flex gap-2 w-full justify-center items-center">
                          <img src={shopeepay} alt="shopeepay" className="w-14 sm:w-16 lg:w-20" />
                          <img src={ovo} alt="ovo" className="w-14 sm:w-16 lg:w-20" />
                          <img src={dana} alt="dana" className="w-14 sm:w-16 lg:w-20" />
                          <img src={gopay} alt="gopay" className="w-14 sm:w-16 lg:w-20" />
                        </div>
                        <div className="w-full flex justify-center items-center">
                          <div onClick={() => handleBuatPesanan()} className="flex items-center justify-center gap-2 bg-ungu-0 text-white px-4 py-2 rounded-md cursor-pointer">
                            <h6>Buat Pesanan</h6>
                            <img src={arrowwhite} alt="arrowwhite" />
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                {/* Section card class payment */}
                <div className="w-full sm:w-2/6 md:w-5/12 lg:w-4/12 order-1 sm:order-2">
                  {/* Judul Header */}
                  <div className="shadow-sm-button flex flex-col gap-4 px-4 sm:px-4 py-4 border rounded-md">
                    <div className="flex justify-center items-center">
                      <h2 className="font-bold text-xl text-center">Detail Pembayaran</h2>
                    </div>
                    {/* Card Beli */}
                    <div className="flex flex-col gap-2">
                      {/* Card yang akan dibeli */}
                      <div>
                        <div className="w-full border rounded-2xl">
                          <div className="w-full sm:h-44 md:h-32 lg:h-48 xl:h-56">
                            <img src={dataCourseId?.thumbnailUrl} alt="" className="w-full h-full object-cover rounded-2xl" />
                          </div>
                          <div className="px-4 py-4 flex flex-col gap-2 rounded-2xl">
                            <div className="flex justify-between">
                              <h6 className="text-ungu-0 text-sm">{dataCourseId?.courseCategory[0]?.category?.name}</h6>
                            </div>
                            <div>
                              <h2 className="font-semibold truncate-3-lines cursor-pointer text-sm sm:text-base ">{dataCourseId?.title}</h2>
                              <span className="opacity-50 text-xs xl:text-sm">by {dataCourseId?.mentor[0]?.author?.profile?.name}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Daftar Total Harga */}
                      <div className="flex flex-col gap-3 px-2 text-xs xl:text-sm">
                        <div className="">
                          <div className="w-full flex items-center">
                            <img src={calculator} alt="calculator" className="w-6" />
                            <h6 className="font-semibold">Rincian Pembayaran</h6>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="w-full flex justify-between">
                            <h6 className="font-medium">Harga Kursus</h6>
                            <p className="">
                              {hargaKursus.toLocaleString("id-ID", {
                                style: "currency",
                                currency: "IDR",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                              })}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="w-full flex justify-between">
                            <h6 className="font-medium">PPN 11%</h6>
                            <p>
                              {Number(Ppn).toLocaleString("id-ID", {
                                style: "currency",
                                currency: "IDR",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                              })}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <div className="w-full flex justify-between">
                            <h6 className="font-bold">Total Pembayaran</h6>
                            <p className="text-ungu-0 font-bold">
                              {Number(totalPembayaran).toLocaleString("id-ID", {
                                style: "currency",
                                currency: "IDR",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                              })}
                            </p>
                          </div>
                          <div className="border-b border-black"></div>
                        </div>
                      </div>
                    </div>
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
