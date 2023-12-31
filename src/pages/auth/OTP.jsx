import React, { useEffect, useRef, useState } from "react";
import LogoBg from "../../assets/img/LogoBg.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { UseVerifyOtp } from "../../services/auth/verify_otp";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { UseResendOtp } from "../../services/auth/resend_otp";
import { useToast } from "@chakra-ui/react";
import check from "../../assets/svg/check.svg";

const createRefsArray = (length) => Array.from({ length }, () => useRef());

export const OTP = () => {
  const navigate = useNavigate();
  const { mutate: veryOtp, isSuccess, error } = UseVerifyOtp();
  const { mutate: resendOtpMutation } = UseResendOtp();
  const [OTP, setOtp] = useState(Array(6).fill(""));
  const location = useLocation();
  const emailFromState = location.state?.email || "";
  const emailFromCookies = CookieStorage.get(CookieKeys.email) || "";
  const email = emailFromState || emailFromCookies;
  const toast = useToast();
  const inputRefs = createRefsArray(6);
  

  // INPUT OTP
  const handleInputOtp = (e, index) => {
    if (e.target.id === "otp") {
      const newOtp = [...OTP];
      newOtp[index] = e.target.value;
      setOtp(newOtp);

      if (index < inputRefs.length - 1 && e.target.value.length === 1) {
        inputRefs[index + 1]?.current?.focus();
      }
    }
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
    } catch (error) {
      console.error("Gagal mengirim ulang OTP", error);
    }
  };

  // BUTTON SIMPAN
  const handleSimpan = () => {
    veryOtp({
      email: email,
      otp: OTP.join(""),
    });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/login");
      toast({
        title: "Register Berhasil",
        status: "success",
        duration: 3000,
        position: "bottom",
        isClosable: true,
      });
    } else if (error) {
      if (error.response && error.response.status === 401) {
        toast({
          title: "OTP tidak Valid!!!",
          status: "error",
          duration: 3000,
          position: "bottom",
          isClosable: true,
        });
        setOtp(Array(6).fill(""));
      } else if (error) {
        if (error.response && error.response.status === 400) {
          toast({
            title: "Masukan OTP!!!",
            status: "error",
            duration: 3000,
            position: "bottom",
            isClosable: true,
          });
        }
      }
    }
  }, [navigate, toast, isSuccess, error]);

  console.log(OTP, "otp");
  console.log(email, "email");

  //NOTIFIKASI BUAT MOBILE
  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Registrasi Berhasil",
        status: "success",
        position: "bottom",
        duration: null,
      isClosable: true,
        render: ({ onClose }) => (
          <>
            <div className="fixed inset-0 bg-black bg-opacity-75 z-10 md:hidden"></div>
            <div className="fixed bottom-0 left-0 w-full h-[60%] bg-white z-20 md:hidden flex flex-col items-center justify-center rounded-t-[3rem]">
              <p className="text-4xl font-bold text-ungu-0 mb-2">Registrasi</p>
              <p className="text-4xl font-bold text-ungu-0 mb-4">Berhasil!!!</p>
              <img
                src={check}
                alt="check"
                className="w-[6rem] h-[6rem] text-green-500 mb-2"
              />
              <div className="flex flex-col items-center mt-2">
                <button
                  className="fixed bottom-8 bg-ungu-0 h-[3rem] w-[20rem] rounded-full text-white"
                  onClick={() => {
                    navigate("/login");
                    onClose();
                  }}
                >
                  Beranda
                </button>
              </div>
            </div>
          </>
        ),
      });
    }
  }, [isSuccess, navigate, toast]);

  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      {/* SEBELAH KIRI */}
      <div className="w-full md:w-2/3 flex flex-col h-screen items-center justify-center mx-auto p-4">
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
                ref={inputRefs[index]}
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
        </div>
      </div>

      {/* SEBELAH KANAN */}
      <div className="w-full md:w-[30rem] justify-center items-center text-white h-screen bg-cover bg-center hidden lg:block">
        <img src={LogoBg} alt="bg" className="h-screen w-full" />
      </div>
    </div>
  );
};
