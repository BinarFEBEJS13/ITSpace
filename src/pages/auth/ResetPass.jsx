import React, { useState } from "react";
import LogoBg from "../../assets/img/LogoBg.jpg";
import pass from "../../assets/svg/pass.svg";
import passClose from "../../assets/svg/passClose.svg";

export const ResetPass = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password2Visible, setPassword2Visible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const togglePassword2Visibility = () => {
    setPassword2Visible((prevVisible) => !prevVisible);
  };

  return (
    <div className="flex flex-row w-full h-screen">
      {/* SEBELAH KIRI */}
      <div className="w-full md:w-2/3 flex flex-col h-screen items-center justify-center mx-auto p-4">
        <h1 className="mb-[2rem] font-bold text-2xl text-purple-800">Reset Password</h1>

        <div className="flex flex-col space-y-5 items-center w-full md:w-[35rem] md:items-center mx-4">
          {/* INPUTAN PASSWORD 1*/}
          <div className="w-full md:w-[35rem] flex flex-col relative">
            <label className="mb-1">Masukan Password Baru</label>
            <input type={passwordVisible ? "text" : "password"} className="h-[3rem] w-[35rem] rounded-xl border border-gray-300 pl-3" placeholder="Masukkan Password" />
            <img src={passwordVisible ? passClose : pass} alt="pass" className="top-[2.5rem] right-5 absolute cursor-pointer" onClick={togglePasswordVisibility} />
          </div>

          {/* INPUTAN PASSWORD 2*/}
          <div className="w-full md:w-[35rem] flex flex-col relative">
            <label className="mb-1">Ulangi Password Baru</label>
            <input type={password2Visible ? "text" : "password"} className="h-[3rem] w-[35rem] rounded-xl border border-gray-300 pl-3" placeholder="Masukkan Password" />
            <img src={password2Visible ? passClose : pass} alt="pass" className="top-[2.5rem] right-5 absolute cursor-pointer" onClick={togglePassword2Visibility} />
          </div>

          {/* BUTTON LOGIN */}
          <button className="h-[3rem] w-full md:w-[35rem] rounded-xl bg-gradientkanan text-white">Simpan</button>
        </div>
      </div>

      {/* SEBELAH KANAN */}
      {/* <div className="flex col-span-2 bg-gradientbawah justify-center items-center text-white">
      Logo
    </div> */}
      <div className="w-[30rem] justify-center items-center text-white h-screen bg-cover bg-center hidden lg:block">
        <img src={LogoBg} alt="bg" className="h-screen w-full" />
      </div>
    </div>
  );
};
