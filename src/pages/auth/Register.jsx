import React, { useState } from "react";
import pass from "../../assets/svg/pass.svg";
import passClose from "../../assets/svg/passClose.svg";
import LogoBg from "../../assets/img/LogoBg.jpg";
// import salah from "../../assets/svg/salah.svg";
import check from "../../assets/svg/check.svg";
import { useNavigate } from "react-router-dom";
import { UseRegister } from "../../services/auth/register";
import { CookieKeys, CookieStorage } from "../../utils/cookies";

export const Register = () => {
  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Telp, setTelp] = useState("");
  const [Password, setPassword] = useState("");
  const [validPass, setValidPass] = useState("");
  const navigate = useNavigate();
  const { mutate: register, data: registrationData } = UseRegister();

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "name") {
        setUsername(e.target.value);
      }
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "telp") {
        setTelp(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
      if (e.target.id === "validPass") {
        setValidPass(e.target.value);
      }
    }
  };
  const isEmailValid = registrationData && registrationData.isEmailValid;

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
  const handleRegister = async () => {
    try {
      const registerData = {
        name: Username,
        telp: Telp,
        email: Email,
        password: Password,
        passwordValidation: validPass,
      };

      await register(registerData);

      CookieStorage.set(CookieKeys.email, Email);

      console.log("Register berhasil!");
      navigate("/otp", { state: { email: Email } });
    } catch (error) {
      console.error("Register error:", error);
    }
  };

  console.log(Username, "name");
  console.log(Email, "email");
  console.log(Telp, "telp");
  console.log(Password, "password");
  console.log(validPass, " passwordValidation");

  return (
    <div className="flex flex-row w-full h-screen">
      {/* SEBELAH KIRI */}
      <div className="w-full md:w-2/3 flex flex-col min-h-screen overflow-y-auto items-center justify-center mx-auto p-4 translate-y-[-30px]">
        {" "}
        <h1 className="font-bold text-2xl mt-[6rem] text-ungu-0">Daftar</h1>
        <div className="flex flex-col space-y-5 items-center w-full md:w-[35rem] md:items-center mx-4">
          {/* INPUTAN NAMA */}
          <div className="w-full md:w-[35rem] flex flex-col relative">
            <label className="mb-1">Nama</label>
            <input
              id="name"
              type="text"
              className="h-[3rem] w-full rounded-xl border border-gray-300 pl-3"
              placeholder="Nama Lengkap"
              onChange={handleInput}
            />
          </div>

          {/*INPUTAN EMAIL*/}
          <div className="w-full md:w-[35rem] flex flex-col">
            <label className="mb-1">Email</label>
            <div className="relative">
              <input
                id="email"
                type="email"
                className="h-[3rem] w-full rounded-xl border border-gray-300 pl-3"
                placeholder="Contoh:sayahuman@gmail.com"
                onChange={handleInput}
              />
              {isEmailValid && (
                <img
                  src={check}
                  alt="cek"
                  className="w-6 h-6 top-3 right-5 absolute"
                />
              )}
            </div>
          </div>

          {/*INPUTAN NO TELEPON*/}
          <div className="w-full md:w-[35rem] flex flex-col relative">
            <label className="mb-1">Nomor Telepon</label>
            <div className="flex items-center">
              <input
                id="telp"
                type="text"
                className="h-[3rem] w-full rounded-xl border border-gray-300 pl-3"
                placeholder="Masukan Nomor Telepon"
                onChange={handleInput}
              />
            </div>
          </div>

          {/*INPUTAN BUAT PASSWORD*/}
          <div className="w-full md:w-[35rem] flex flex-col">
            <div className="flex justify-between items-center mb-1">
              <label>Buat Password</label>
            </div>
            <div className="relative">
              <input
                id="password"
                type={PasswordVisible ? "text" : "password"}
                className="h-[3rem] w-full rounded-xl border border-gray-300 pl-3"
                placeholder="Buat Password"
                onChange={handleInput}
              />
              <img
                src={PasswordVisible ? passClose : pass}
                alt={PasswordVisible ? "passClose" : "pass"}
                className="top-3 right-5 absolute cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>

          {/* PASSWORD VALIDASI */}
          <div className="w-full md:w-[35rem] flex flex-col">
            <div className="flex justify-between items-center mb-1">
              <label>Ulangi Password</label>
            </div>
            <div className="relative">
              <input
                id="validPass"
                type={ValidPassVisible ? "text" : "password"}
                className="h-[3rem] w-full rounded-xl border border-gray-300 pl-3"
                placeholder="Ulangi Password"
                onChange={handleInput}
              />
              <img
                src={ValidPassVisible ? passClose : pass}
                alt={ValidPassVisible ? "passClose" : "pass"}
                className="top-3 right-5 absolute cursor-pointer"
                onClick={toggleValidPassVisibility}
              />
            </div>
          </div>

          {/*BUTTON REGISTER */}
          <button
            className="h-[3rem] w-full md:w-[35rem] rounded-xl bg-gradientkanan text-white"
            onClick={handleRegister}
          >
            Daftar
          </button>

          {/* PERTANYAAN */}
          <span>
            Sudah punya akun?{" "}
            <a
              className="text-purple-800 font-semibold hover:underline"
              href="/login"
            >
              Masuk di sini
            </a>
          </span>
          {/* {!isValidPassword && registrationAttempted && (
            <div className="flex absolute bottom-0 h-[3rem] w-[20rem] md:w-[20rem] bg-merah-0 text-white rounded-xl justify-center items-center">
              Password min 8 karakter!
            </div>
          )}
          {registrationSuccess && (
            <div className="flex absolute bottom-0 h-[3rem] w-[20rem] md:w-[20rem] bg-hijau-0 text-white rounded-xl justify-center items-center">
              Tautan Verifikasi telah dikirim!
            </div>
          )} */}
        </div>
      </div>

      {/* SEBELAH KANAN */}
      <div className="w-[30rem] justify-center items-center text-white h-screen bg-cover bg-center hidden lg:block">
        <img src={LogoBg} alt="bg" className="h-screen w-full" />
      </div>
    </div>
  );
};
