import React, { useEffect, useState } from "react";
// png kategori belajar
import logo from "../assets/img/logo-navbar.png";
// svg checkout
import arrowwhite from "../assets/svg/arrow-right-white.svg";
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
import { useParams } from "react-router-dom";
import { useGetDataTransactionsId } from "../services/get-Datas-Transactions";
import { ExpirationPayment } from "../assets/components/HandleErrorPage/ExpirationPayment";
import { usePutTransactions } from "../services/put-Datas-transactions";
import { useGetDecode } from "../services/get-Datas-Decode";

export const Payment = () => {
  const { courseId, idTransactions } = useParams();
  const [pembayaran, setPembayaran] = useState("");
  const courseIdInteger = Number(courseId);

  // Intergrasi API
  const { data: getDataTransactions } = useGetDataTransactionsId({
    query: idTransactions,
  });
  const { mutate: putTransactions, isSuccess } = usePutTransactions();
  const { data: getDataDecode } = useGetDecode();

  // Convert Tanggal dan Jam
  const timestamp = getDataTransactions?.data?.expirationDate;
  // Create a Date object from the timestamp
  const utcDate = new Date(timestamp);
  const options = { year: "numeric", month: "long", day: "numeric" };
  // Get local time
  const localTime = utcDate.toLocaleTimeString();
  // Get local date
  const localDate = utcDate.toLocaleDateString("id-ID", options);

  // Handle expiration date
  const isExpired = () => {
    const currentDateTime = new Date();
    const expirationDateTime = new Date(timestamp);

    // Membandingkan tanggal dan waktu saat ini dengan expiration date
    return currentDateTime > expirationDateTime;
  };

  // Handle Total Pembayaran
  const [Ppn, setPpn] = useState(0);
  useEffect(() => {
    if (getDataTransactions?.data?.course?.price) {
      const hargaKursus = Number(getDataTransactions?.data?.course?.price);
      const calculatedPpn = (11 / 100) * hargaKursus;
      setPpn(calculatedPpn);
    }
  }, [getDataTransactions]);
  const totalPembayaran = getDataTransactions?.data?.course?.price ? Number(getDataTransactions?.data?.course?.price) + Ppn : 0;

  // Handle Buat Pesanan
  const handleBuatPesanan = async () => {
    await putTransactions(idTransactions);
  };

  useEffect(() => {
    if (isSuccess) {
      window.location.href = `/success/payment/${courseId}/${idTransactions}`;
    }
  }, [isSuccess, courseId, idTransactions]);

  useEffect(() => {
    setPembayaran(getDataTransactions?.data?.paymentMethod);
    if (getDataTransactions?.data?.payDone === true) {
      window.location.href = `/success/payment/${courseId}/${idTransactions}`;
    }
  }, [getDataTransactions, getDataDecode, courseIdInteger, courseId, idTransactions]);

  return (
    <>
      <div className="overflow-x-hidden ">
        {/* Navbar */}
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

        {/* Detail kelas */}
        <div className="w-screen">
          <div className="container mx-auto">
            <div className="flex flex-col gap-4 px-6 sm:px-20 py-4 sm:py-8">
              <div className="flex flex-col  justify-center items-center sm:flex sm:flex-col gap-4 sm:gap-8">
                {/* section VIRTUAL_ACCOUNT, gerai retail dan e-wallet Card*/}
                <div className="bg-merah-0 flex items-center justify-center px-4 py-2 rounded-md">
                  {isExpired() ? <p className="text-center text-white">Pembayaran Anda terlambat dan waktu pesan sudah berakhir!</p> : <p className="text-center text-white">{`Bayar sebelum ${localDate} ${localTime}`}</p>}
                </div>
                <div className="w-full sm:w-4/6 md:w-full lg:w-8/12 flex flex-col gap-4 bg-gray-100">
                  {/* Virtual Account */}
                  {pembayaran === "VIRTUAL_ACCOUNT" ? (
                    isExpired() ? (
                      <ExpirationPayment courseId={courseId} />
                    ) : (
                      <div className={`border rounded-md flex flex-col gap-2`}>
                        <div className="flex text-white bg-black justify-between px-4 py-2 rounded-t-md">
                          <p>Transfer Virtual Account</p>
                        </div>
                        <div className="flex flex-col gap-6 sm:gap-8 justify-center items-center p-4 pb-4 sm:pb-8 ">
                          <div className="flex flex-col gap-4 sm:flex-row  w-full ">
                            <div className="flex gap-2 w-full justify-center items-center order-1 md:order-2 ">
                              <img src={bca} alt="bca" className="w-14 sm:w-16 xl:w-20" />
                              <img src={bri} alt="bri" className="w-14 sm:w-16 xl:w-20" />
                              <img src={bni} alt="bni" className="w-14 sm:w-16 xl:w-20" />
                              <img src={mandiri} alt="mandiri" className="w-14 sm:w-16 xl:w-20" />
                            </div>
                            <div className="w-full flex flex-col gap-2 justify-center items-start order-2 md:order-1">
                              <div className="flex flex-col justify-center items-start">
                                <h2 className="font-semibold">Virtual Account</h2>
                                <span className="text-lg">{getDataTransactions?.data?.paymentCode}</span>
                              </div>
                              <div className="flex flex-col justify-center items-start">
                                <h2 className="font-semibold">Nama Virtual Account</h2>
                                <span className="text-lg">IT Space Indonesia</span>
                              </div>
                              <div className="flex flex-col justify-center items-start">
                                <h2 className="font-semibold">Nomial yang harus dibayarkan</h2>
                                <span className="text-lg">
                                  {Number(totalPembayaran).toLocaleString("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0,
                                  })}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex justify-center items-center">
                            <div onClick={() => handleBuatPesanan()} className="flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-md cursor-pointer">
                              <h6>Bayar Sekarang</h6>
                              <img src={arrowwhite} alt="arrowwhite" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  ) : (
                    ""
                  )}
                  {/* Gerai Retail */}
                  {pembayaran === "GERAI_RETAIL" ? (
                    isExpired() ? (
                      <ExpirationPayment courseId={courseId} />
                    ) : (
                      <div className={`border rounded-md flex flex-col gap-2`}>
                        <div className="flex text-white bg-biru-0 justify-between px-4 py-2 rounded-t-md">
                          <p>Tunai di Gerai Retail</p>
                        </div>
                        <div className="flex flex-col gap-6 sm:gap-8 justify-center items-center p-4 pb-4 sm:pb-8 ">
                          <div className="flex flex-col gap-4 sm:flex-row  w-full ">
                            <div className="flex gap-2 w-full justify-center items-center order-1 md:order-2 ">
                              <img src={alfamart} alt="alfamart" className="w-14 sm:w-16 xl:w-20" />
                              <img src={alfamidi} alt="alfamidi" className="w-14 sm:w-16 xl:w-20" />
                              <img src={indomaret} alt="indomaret" className="w-14 sm:w-16 xl:w-20" />
                              <img src={dandan} alt="dandan" className="w-14 sm:w-16 xl:w-20" />
                            </div>
                            <div className="w-full flex flex-col gap-2 justify-center items-start order-2 md:order-1">
                              <div className="flex flex-col justify-center items-start">
                                <h2 className="font-semibold">Kode Pembayaran</h2>
                                <span className="text-lg">{getDataTransactions?.data?.paymentCode}</span>
                              </div>
                              <div className="flex flex-col justify-center items-start">
                                <h2 className="font-semibold">Nama kepada Merchant</h2>
                                <span className="text-lg">IT Space Indonesia</span>
                              </div>
                              <div className="flex flex-col justify-center items-start">
                                <h2 className="font-semibold">Nomial yang harus dibayarkan</h2>
                                <span className="text-lg">
                                  {Number(totalPembayaran).toLocaleString("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0,
                                  })}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex justify-center items-center">
                            <div onClick={() => handleBuatPesanan()} className="flex items-center justify-center gap-2 bg-biru-0 text-white px-4 py-2 rounded-md cursor-pointer">
                              <h6>Bayar Sekarang</h6>
                              <img src={arrowwhite} alt="arrowwhite" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  ) : (
                    ""
                  )}
                  {/* Dompet E_WALLET */}
                  {pembayaran === "E_WALLET" ? (
                    isExpired() ? (
                      <ExpirationPayment courseId={courseId} />
                    ) : (
                      <div className={`border rounded-md flex flex-col gap-2`}>
                        <div className="flex text-white bg-ungu-0 justify-between px-4 py-2 rounded-t-md">
                          <p>Dompet Digital (E_Wallet)</p>
                        </div>
                        <div className="flex flex-col gap-6 sm:gap-8 justify-center items-center p-4 pb-4 sm:pb-8 ">
                          <div className="flex flex-col gap-4 sm:flex-row  w-full ">
                            <div className="flex gap-2 w-full justify-center items-center order-1 md:order-2 ">
                              <img src={shopeepay} alt="shopeepay" className="w-14 sm:w-16 xl:w-20" />
                              <img src={ovo} alt="ovo" className="w-14 sm:w-16 xl:w-20" />
                              <img src={dana} alt="dana" className="w-14 sm:w-16 xl:w-20" />
                              <img src={gopay} alt="gopay" className="w-14 sm:w-16 xl:w-20" />
                            </div>
                            <div className="w-full flex flex-col gap-2 justify-center items-start order-2 md:order-1">
                              <div className="flex flex-col justify-center items-start">
                                <h2 className="font-semibold">Kode Pembayaran</h2>
                                <span className="text-lg">{getDataTransactions?.data?.paymentCode}</span>
                              </div>
                              <div className="flex flex-col justify-center items-start">
                                <h2 className="font-semibold">Nama kepada Merchant</h2>
                                <span className="text-lg">IT Space Indonesia</span>
                              </div>
                              <div className="flex flex-col justify-center items-start">
                                <h2 className="font-semibold">Nomial yang harus dibayarkan</h2>
                                <span className="text-lg">
                                  {Number(totalPembayaran).toLocaleString("id-ID", {
                                    style: "currency",
                                    currency: "IDR",
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 0,
                                  })}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="w-full flex justify-center items-center">
                            <div onClick={() => handleBuatPesanan()} className="flex items-center justify-center gap-2 bg-ungu-0 text-white px-4 py-2 rounded-md cursor-pointer">
                              <h6>Bayar Sekarang</h6>
                              <img src={arrowwhite} alt="arrowwhite" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
