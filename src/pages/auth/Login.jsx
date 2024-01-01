import React, { useEffect, useState } from "react";
import LogoBg from "../../assets/img/LogoBg.jpg";
import pass from "../../assets/svg/pass.svg";
import passClose from "../../assets/svg/passClose.svg";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { useLoginUser } from "../../services/auth/login_user";
import { resendOtp } from "../../services/auth/resend_otp";
// import { GoogleLogin } from "@react-oauth/google";
import LoginGoogle from "../../assets/components/LoginGoogle";

export const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const { mutate: loginData, isSuccess, error } = useLoginUser();

  //EMAIL
  const [Email, setEmail] = useState("");

  //PASSWORD
  const [PasswordVisible, setPasswordVisible] = useState(false);
  const [Password, setPassword] = useState("");
  const togglePasswordVisibility = () => {
    setPasswordVisible(!PasswordVisible);
  };

  //INPUT
  const handleInput = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    }
    if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  // UNTUK LINK LUPA KATA SANDI
  const handleForgotPassword = () => {
    navigate("/resetValidasi");
  };

  //FUNGSI BUTTON MASUK

  const handleLogin = () => {
    loginData({
      email: Email,
      password: Password,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
      toast({
        title: "Login Berhasil",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    } else if (error) {
      if (error.response && error.response.status === 403) {
        navigate("/otp", { state: { email: Email } });
        resendOtp({ email: Email });
        toast({
          title: "Akun belum terverifikasi",
          status: "error",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
      } else {
        toast({
          title: "Email atau Password salah",
          status: "error",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
      }
    }
  }, [Email, navigate, toast, isSuccess, error]);

  return (
    <div className="flex flex-row w-full h-screen">
      {/* SEBELAH KIRI */}
      <div className="w-full md:w-2/3 flex flex-col h-screen items-center justify-center mx-auto p-4">
        <h1 className="mb-[2rem] font-bold text-2xl text-purple-800">Masuk</h1>

        <div className="flex flex-col space-y-5 items-center w-full md:w-[35rem] md:items-center mx-4">
          {/* INPUTAN EMAIL */}
          <div className="w-full md:w-[35rem] flex flex-col relative">
            <label className="mb-1">Email/No Telepon</label>
            <input id="email" type="text" className="h-[3rem] w-full rounded-xl border pl-3" placeholder="Contoh: user1@gmail.com" value={Email} onChange={handleInput} />
          </div>

          {/* INPUTAN PASSWORD */}
          <div className="w-full md:w-[35rem] flex flex-col">
            <div className="flex justify-between items-center mb-1">
              <label>Password</label>
              <a href="/logres" className="text-blue-500 hover:underline" onClick={handleForgotPassword}>
                Lupa Kata sandi
              </a>
            </div>
            <div className="relative">
              <input id="password" type={PasswordVisible ? "text" : "password"} onChange={handleInput} className="h-[3rem] w-full md:w-full rounded-xl border pl-3" placeholder="Masukkan Password" />
              <img src={PasswordVisible ? passClose : pass} alt={PasswordVisible ? "passClose" : "pass"} className="top-3 right-5 absolute cursor-pointer" onClick={togglePasswordVisibility} />
            </div>
          </div>

          {/* BUTTON LOGIN */}
          <button className="h-[3rem] w-full md:w-[35rem] rounded-xl bg-gradientkanan text-white" onClick={handleLogin}>
            Masuk
          </button>

          {/* BUTTON GOOGLE LOGIN */}
          <LoginGoogle />
          <span>
            Belum punya akun?{" "}
            <a className="text-purple-800 font-semibold hover:underline" href="/register">
              Daftar di sini
            </a>
          </span>
        </div>
      </div>

      {/* SEBELAH KANAN */}
      <div className="w-[30rem] justify-center items-center text-white h-screen bg-cover bg-center hidden lg:block">
        <img src={LogoBg} alt="bg" className="h-screen w-full" />
      </div>
    </div>
  );
};
