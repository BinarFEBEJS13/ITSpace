import React from "react";
import imagepayment from "../img/image_payment.png";

// svg
import star from "../svg/star.svg";
import clock from "../svg/clock.svg";
import book from "../svg/book.svg";
import badge from "../svg/badge.svg";
import diamond from "../svg/diamond.svg";
import { useGetMyTransactions } from "../../services/transactions/get-my-transactions";

export const Pembayaran = () => {
  const {data: getMyTransactions} = useGetMyTransactions()
  console.log(getMyTransactions?.data?.transactions, "ini transaksi")

  const getTransactions = getMyTransactions?.data?.transactions

  const getNewTransactions = getTransactions ? getTransactions.map((transaction) => transaction.id) : [];
  console.log(getNewTransactions, "new trans")

  const susuMurniNasional = (idCOurse, idTransaksi, isDone) => {
    if (isDone === true) {
      console.log(isDone, "fernandes")
    } else {
      window.location.href = `/payment/${idCOurse}/${idTransaksi}`;
    }
    // console.log(idCOurse, "idcourse")
    // console.log(idTransaksi, "idTransaksi");
  }

  console.log(getTransactions, "ini pembayaran")
  return (
    <div className="flex justify-center overflow-x-hidden">
      <div className="flex flex-col justify-center ml-0 sm:ml-4 mt-[2rem] sm:mt-4 mb-5 mobile w-[21rem] sm:w-[18rem] px-5">
        <h2 className="flex w-full text-[1.5rem] sm:text-lg justify-start sm:justify-center font-extrabold">
          Riwayat Pembayaran
        </h2>
        {getTransactions && getTransactions.map((transactions, index) => (
            <div key={index} className="card mt-3 gap-2">
              <img className="flex w-full" src={transactions?.course?.thumbnailUrl} alt=""></img>
              <div className="flex flex-col gap-[2px] ml-2 mt-1">
                <div className="flex space-x-[11rem] transaction sm:space-x-[9rem] text-[10px] font-bold">
                  <p>{transactions?.course?.courseCategory[0]?.category?.name}</p>
                  <div className="flex justify-center items-center w-10 h-4 bg-[#6148FF] rounded-lg">
                    <img src={star} alt=""></img>
                    <p className="text-white">{transactions?.course?.rate !== null ? transactions?.course?.rate: '0.0'}</p>
                  </div>
                </div>
                <p className="text-[10px] font-bold">
                  {transactions?.course?.title}
                </p>
                <p className="text-[8px] sm:text-[7px]">by {transactions?.course?.mentor[0]?.author?.profile?.name}</p>
                <div className="flex text-[9px] sm:text-[7px] gap-5 font-bold">
                  <div className="flex space-x-1">
                    <img className="w-2.5 h-2.5" src={badge} alt=""></img>
                    <p className="text-[#6148FF]">{transactions?.course?.level}</p>
                  </div>
                  <div className="flex space-x-1">
                    <img className="w-2.5 h-2.5" src={book} alt=""></img>
                    <p className="text-[#6148FF]">{transactions?.course?._count?.chapter} modul</p>
                  </div>
                  <div className="flex space-x-1">
                    <img className="w-2.5 h-2.5" src={clock} alt=""></img>
                    <p className="text-[#6148FF]">{transactions?.course?.duration !== null ? transactions?.course?.duration: '0'} menit</p>
                  </div>
                </div>
              </div>
                <div className="flex justify-center">
                  <div onClick={() => susuMurniNasional(transactions?.courseId, transactions?.id, transactions?.payDone)} className={`flex justify-center space-x-1 rounded-md items-center w-[16rem] h-4 sm:w-[14rem] sm:h-3 ${transactions?.payDone ? 'bg-green-400' : 'bg-merah-0'} text-white my-2 sm:mt-1 cursor-pointer`}>
                    <img className="w-2 h-2" src={diamond} alt="" />
                    <p className="text-[8px]">
                      {transactions?.payDone ? "Paid" : "Waiting for payment"}
                    </p>
                  </div>
                </div>
            </div>
          ))}
      </div>
    </div>
  );
};
