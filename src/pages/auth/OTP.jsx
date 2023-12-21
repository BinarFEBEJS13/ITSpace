import React, { useEffect, useState } from "react";
import LogoBg from "../../assets/img/LogoBg.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { UseVerifyOtp } from "../../services/auth/verify_otp";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { UseResendOtp } from "../../services/auth/resend_otp";
// import check from "../../assets/svg/check.svg";

export const OTP = () => {
  const navigate = useNavigate();
  const { mutate: veryOtp } = UseVerifyOtp();
  const { mutate: resendOtpMutation } = UseResendOtp();
  const [OTP, setOtp] = useState(Array(6).fill(""));
  const location = useLocation();
  const emailFromState = location.state?.email || "";
  const emailFromCookies = CookieStorage.get(CookieKeys.email) || "";
  const email = emailFromState || emailFromCookies;
  const [errorNotification, setErrorNotification] = useState("");

  // INPUT OTP
  const handleInputOtp = (e, index) => {
    if (e.target.id === "otp") {
      const newOtp = [...OTP];
      newOtp[index] = e.target.value;
      setOtp(newOtp);
    }
    setErrorNotification("");
  };

  // TIMER
  const [resendTimer, setResendTimer] = useState(60);
  const [resendOTP, setResendOTP] = useState(true);

  useEffect(() => {
    let timer;

    if (resendOTP) {
      timer = setInterval(() => {
        if (resendTimer > 0) {
          setResendTimer((prevTimer) => prevTimer - 1);
        } else {
          setResendOTP(false);
          clearInterval(timer);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [resendTimer, resendOTP]);

  // HANDLE BUAT KIRIM ULANG
  const handleResendOtp = async () => {
    try {
      await resendOtpMutation({ email });
      setResendTimer(60);
      setResendOTP(true);
  
      // Reset status verifikasi
    } catch (error) {
      console.error("Gagal mengirim ulang OTP", error);
    }
  };

  // BUTTON SIMPAN
  const handleSimpan = async () => {
    try {
        const verifyData = {
            email: email,
            otp: OTP.join(""),
        };

        const response = await veryOtp(verifyData);

        if (response && response.success === true) {
            console.log("Verifikasi Berhasil");
            navigate("/login"); // Pastikan perpindahan halaman ini berfungsi
        } else {
            console.error("Verifikasi gagal:", response?.message || "Unknown error");
            setErrorNotification("Kode OTP salah!!!");
        }
    } catch (error) {
        console.error(error.message);
        setErrorNotification("Kode OTP salah!!!");
    }
};
  
  console.log(OTP, "otp");
  console.log(email, "email");

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      {/* SEBELAH KIRI */}
      <div className="flex flex-col md:w-2/3 md:mx-auto h-screen justify-center mx-4">
        <a href="/register" className="flex-shrink-0 ml-0 mb-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 ml-[5rem] mb-[1rem]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>{" "}
        </a>

        <h1 className="mb-[2rem] font-bold text-2xl text-purple-800">
          Masukan OTP
        </h1>

        <div className="flex flex-col items-center justify-center space-y-5">
          <p>
            Kode 6 digit dikirimkan ke{" "}
            <span style={{ fontWeight: "bold" }}>{email}</span>
          </p>
          <div className="flex space-x-5">
            {OTP.map((value, index) => (
              <input
                key={index}
                id="otp"
                onChange={(e) => handleInputOtp(e, index)}
                type="text"
                className="h-[3rem] w-[3rem] border border-gray-400 rounded-xl text-center text-2xl font-semibold"
                maxLength={1}
                value={value}
              />
            ))}
          </div>

          {resendOTP ? (
            <p>Kirim ulang OTP dalam {resendTimer} detik</p>
          ) : (
            <p
              className="text-merah-0 font-bold cursor-pointer"
              onClick={handleResendOtp}
            >
              Kirim ulang OTP
            </p>
          )}

          <button
            className="h-[3rem] w-full md:w-[35rem] rounded-xl bg-gradientkanan text-white"
            onClick={handleSimpan}
          >
            Simpan
          </button>
          {errorNotification && (
            <div className="absolute bottom-8 mb-4 h-[3rem] w-[20rem] md:w-[20rem] bg-merah-0 text-white rounded-xl flex justify-center items-center">
              {errorNotification}
            </div>
          )}

          {/* {showWrongOtpNotification && <div className="absolute bottom-[5rem] mb-4 h-[3rem] w-[20rem] md:w-[20rem] bg-merah-0 text-white rounded-xl flex justify-center items-center">Maaf, Kode OTP salah!</div>}
          {showSuccessNotification && <div className="absolute bottom-[5rem] mb-4 h-[3rem] w-[20rem] md:w-[20rem] bg-hijau-0 text-white rounded-xl flex justify-center items-center">Registrasi Berhasil!</div>} */}

          {/* NOTOFIKASI BAGIAN MOBILE */}
          {/* {showSuccessNotification && <div className="fixed inset-0 bg-black bg-opacity-75 z-10 md:hidden"></div>}
          {showSuccessNotification && (
            <div className="fixed bottom-0 left-0 w-full h-[60%] bg-white z-10 md:hidden flex flex-col items-center justify-center rounded-t-[3rem]">
              <p className="text-4xl font-bold text-ungu-0 mb-2">Registrasi</p>
              <p className="text-4xl font-bold text-ungu-0 mb-4">Berhasil!!!</p>
              <img src={check} alt="check" className="w-[6rem] h-[6rem] text-green-500 mb-2" /> */}
          {/* <div className="flex flex-col items-center mt-2">
            <button
              className="fixed bottom-8 bg-ungu-0 h-[3rem] w-[20rem] rounded-full text-white"
              onClick={() => navigate("/")}
            >
              Beranda
            </button>
          </div> */}
        </div>
      </div>

      {/* SEBELAH KANAN */}
      <div className="w-full md:w-[30rem] justify-center items-center text-white h-screen bg-cover bg-center hidden lg:block">
        <img src={LogoBg} alt="bg" className="h-screen w-full" />
      </div>
    </div>
  );
};
