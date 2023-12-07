import React, { useEffect, useState } from "react";
import LogoBg from "../../assets/img/LogoBg.jpg";
import { useNavigate } from "react-router-dom";
import check from "../../assets/svg/check.svg";

export const OTP = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [showWrongOtpNotification, setShowWrongOtpNotification] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  const handleInputOtp = (index, value) => {
    if (value.match(/[0-9a-zA-Z]/) && index >= 0 && index < otp.length) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    } else if (value === "") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleInputFocus = () => {
    setShowWrongOtpNotification(false);
  };

  const handleSave = () => {
    const enteredOtp = otp.join("");
    const validOtp = "123456";

    if (enteredOtp === validOtp) {
      setShowSuccessNotification(true);
    } else {
      setOtp(["", "", "", "", "", ""]);
      setShowWrongOtpNotification(true);
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      {/* SEBELAH KIRI */}
      <div className="flex flex-col md:w-2/3 md:mx-auto h-screen justify-center mx-4">
        <a href="/register" className="flex-shrink-0 ml-0 mb-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ml-[5rem] mb-[1rem]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>{" "}
        </a>

        <h1 className="mb-[2rem] font-bold text-2xl text-purple-800">Masukan OTP</h1>

        <div className="flex flex-col items-center justify-center space-y-5">
          <p>Kode 6 digit dikirimkan ke email anda</p>

          <div className="flex space-x-5">
            {otp.map((digit, index) => (
              <input
                type="text"
                key={index}
                className="h-[3rem] w-[3rem] border border-gray-400 rounded-xl text-center text-2xl font-semibold"
                maxLength={1}
                value={digit}
                onChange={(e) => handleInputOtp(index, e.target.value)}
                onFocus={handleInputFocus}
              />
            ))}
          </div>

          <button className="h-[3rem] w-full md:w-[35rem] rounded-xl bg-gradientkanan text-white" onClick={handleSave}>
            Simpan
          </button>

          {showWrongOtpNotification && <div className="absolute bottom-[5rem] mb-4 h-[3rem] w-[20rem] md:w-[20rem] bg-merah-0 text-white rounded-xl flex justify-center items-center">Maaf, Kode OTP salah!</div>}
          {showSuccessNotification && <div className="absolute bottom-[5rem] mb-4 h-[3rem] w-[20rem] md:w-[20rem] bg-hijau-0 text-white rounded-xl flex justify-center items-center">Registrasi Berhasil!</div>}

          {/* NOTOFIKASI BAGIAN MOBILE */}
          {showSuccessNotification && <div className="fixed inset-0 bg-black bg-opacity-75 z-10 md:hidden"></div>}
          {showSuccessNotification && (
            <div className="fixed bottom-0 left-0 w-full h-[60%] bg-white z-10 md:hidden flex flex-col items-center justify-center rounded-t-[3rem]">
              <p className="text-4xl font-bold text-ungu-0 mb-2">Registrasi</p>
              <p className="text-4xl font-bold text-ungu-0 mb-4">Berhasil!!!</p>
              <img src={check} alt="check" className="w-[6rem] h-[6rem] text-green-500 mb-2" />
              <div className="flex flex-col items-center mt-2">
                <button className="fixed bottom-8 bg-ungu-0 h-[3rem] w-[20rem] rounded-full text-white" onClick={() => navigate("/")}>
                  Beranda
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* SEBELAH KANAN */}
      <div className="w-full md:w-[30rem] justify-center items-center text-white h-screen bg-cover bg-center hidden lg:block">
        <img src={LogoBg} alt="bg" className="h-screen w-full" />
      </div>
    </div>
  );
};
