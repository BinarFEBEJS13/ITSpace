import React from "react";
import belumlogin from "../../img/notfoundcourse.png";

export const ExpirationPayment = ({ courseId }) => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <h2 className="text-ungu-0 font-bold text-xl text-center">Pemberitahuan: Pembayaran Anda terlambat dan waktu pesan sudah berakhir.</h2>
          <img src={belumlogin} alt="" />
          <div className="text-center">
            <p className="text-sm sm:text-base">Harap lakukan pemesanan ulang untuk melanjutkan proses</p>
          </div>
          <div className="flex flex-col w-2/3 lg:w-1/3 gap-2">
            <button onClick={() => (window.location.href = `/detail-kelas/${courseId}`)} className="bg-ungu-0 text-white px-4 py-2 rounded-md">
              Kembali ke Kelas
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
