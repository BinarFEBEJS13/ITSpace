import React from "react";
import notfoundcourse from "../../img/notfoundcourse.png";

export const NotFoundRecomendation = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-4 w-full lg:w-2/3">
          <h2 className="text-ungu-0 font-bold text-xl text-center">Maaf Rekomendasi Kelas Belom Ada!</h2>
          <img src={notfoundcourse} alt="" />
          <div className="text-center">
            <p className="text-sm sm:text-base">Silakan cari kelas lain yang diinginkan!</p>
          </div>
        </div>
      </div>
    </>
  );
};
