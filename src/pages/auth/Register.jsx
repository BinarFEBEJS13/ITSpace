import React, { useState } from "react";
import pass from "../../assets/svg/pass.svg";
import passClose from "../../assets/svg/passClose.svg";
import LogoBg from "../../assets/img/LogoBg.jpg";
import check from "../../assets/svg/check.svg";
import { useNavigate } from "react-router-dom";
import { Registrasi } from "../../services/auth/register";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { useToast } from "@chakra-ui/react";

export const Register = () => {
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [validPass, setValidPass] = useState("");
  const navigate = useNavigate();
  const [isEmailValid, setIsEmailValid] = useState(false);
  const toast = useToast();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "name") {
        setUsername(e.target.value);
      }
      if (e.target.id === "email") {
        const emailValue = e.target.value;
        const isValidEmail = isValidSimpleEmail(emailValue);

        setIsEmailValid(isValidEmail);
        setEmail(emailValue);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
      if (e.target.id === "validPass") {
        setValidPass(e.target.value);
      }
    }
  };

  // EMAIL
  const isValidSimpleEmail = (email) => {
    return email.includes("@") && email.includes(".");
  };

  //PASSWORD
  const [PasswordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!PasswordVisible);
  };
  const [ValidPassVisible, setValidPassVisible] = useState(false);
  const toggleValidPassVisibility = () => {
    setValidPassVisible(!ValidPassVisible);
  };

  //FUNGSI UNTUK REGISTER
  const handleRegister = () => {
    Registrasi({
      name: Username,
      email: Email,
      password: Password,
      passwordValidation: validPass,
    })
      .then((result) => {
        CookieStorage.set(CookieKeys.email, Email);
        navigate("/otp", { state: { email: Email } });
        toast({
          title: "tautan terkirim",
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
      })
      .catch((err) => {
        toast({
          title: err?.response?.data?.message,
          status: "error",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
      });
  };

  return (
    <div className="flex flex-row w-full h-screen">
      {/* SEBELAH KIRI */}
      <div className="w-full lg:w-2/3 flex flex-col min-h-screen overflow-y-auto overflow-x-hidden items-center justify-center mx-auto p-4 translate-y-[-30px]">
        {" "}
        <h1 className="font-bold text-2xl mt-[6rem] text-ungu-0">Daftar</h1>
        <div className="flex flex-col space-y-5 items-center w-full md:w-[35rem] md:items-center mx-4">
          {/* INPUTAN NAMA */}
          <div className="w-full md:w-[35rem] flex flex-col relative">
            <label className="mb-1">Nama</label>
            <input id="name" type="text" className="h-[3rem] w-full rounded-xl border border-gray-300 pl-3" placeholder="Nama Lengkap" onChange={handleInput} />
          </div>

          {/*INPUTAN EMAIL*/}
          <div className="w-full md:w-[35rem] flex flex-col">
            <label className="mb-1">Email</label>
            <div className="relative">
              <input id="email" type="email" className="h-[3rem] w-full rounded-xl border border-gray-300 pl-3" placeholder="Contoh:sayahuman@gmail.com" onChange={handleInput} />
              {isEmailValid && <img src={check} alt="check" className="top-3 right-5 absolute" />}
            </div>
          </div>

          {/*INPUTAN BUAT PASSWORD*/}
          <div className="w-full md:w-[35rem] flex flex-col">
            <div className="flex justify-between items-center mb-1">
              <label>Buat Password</label>
            </div>
            <div className="relative">
              <input id="password" type={PasswordVisible ? "text" : "password"} className="h-[3rem] w-full rounded-xl border border-gray-300 pl-3" placeholder="Buat Password" onChange={handleInput} />
              <img src={PasswordVisible ? passClose : pass} alt={PasswordVisible ? "passClose" : "pass"} className="top-3 right-5 absolute cursor-pointer" onClick={togglePasswordVisibility} />
            </div>
          </div>

          {/* PASSWORD VALIDASI */}
          <div className="w-full md:w-[35rem] flex flex-col">
            <div className="flex justify-between items-center mb-1">
              <label>Ulangi Password</label>
            </div>
            <div className="relative">
              <input id="validPass" type={ValidPassVisible ? "text" : "password"} className="h-[3rem] w-full rounded-xl border border-gray-300 pl-3" placeholder="Ulangi Password" onChange={handleInput} />
              <img src={ValidPassVisible ? passClose : pass} alt={ValidPassVisible ? "passClose" : "pass"} className="top-3 right-5 absolute cursor-pointer" onClick={toggleValidPassVisibility} />
            </div>
          </div>

          {/*BUTTON REGISTER */}
          <button className="h-[3rem] w-full md:w-[35rem] rounded-xl bg-gradientkanan text-white" onClick={handleRegister}>
            Daftar
          </button>

          {/* PERTANYAAN */}
          <span className="text-center">
            Sudah punya akun?{" "}
            <a className="text-purple-800 font-semibold hover:underline" href="/login">
              Masuk di sini
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
