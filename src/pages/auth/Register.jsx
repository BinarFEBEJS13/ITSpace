import React, { useEffect, useRef, useState } from "react";
import pass from "../../assets/svg/pass.svg";
import passClose from "../../assets/svg/passClose.svg";
import LogoBg from "../../assets/img/LogoBg.jpg";
import salah from "../../assets/svg/salah.svg";
import check from "../../assets/svg/check.svg";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();

  //FUNSGI UNTUK NAMA
  const [nama, setNama] = useState("");
  const handleInputNama = (event) => {
    const nilaiInputNama = event.target.value;
    setNama(nilaiInputNama);
  };

  //FUNGSI UNTUK EMAIL
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const handleInputEmail = (event) => {
    const inputValue = event.target.value;
    setEmail(inputValue);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(inputValue));
  };

  //FUNGSI UNTUK NOMOR TELEPON
  const inputNoTeleponRef = useRef(null);
  const countryCodes = [
    { code: "+1", name: "United States" },
    { code: "+44", name: "United Kingdom" },
    { code: "+62", name: "Indonesia" },
  ];
  const [selectedCountryCode, setSelectedCountryCode] = useState(countryCodes[0].code);

  const validasiNomorTelepon = () => {
    const inputNoTelepon = inputNoTeleponRef.current;
    const checkIcon = document.getElementById("checkIcon");
    const apakahNomorTeleponValid = !isNaN(inputNoTelepon.value) && inputNoTelepon.value.length > 10;

    if (apakahNomorTeleponValid) {
      checkIcon.classList.remove("hidden");
    } else {
      checkIcon.classList.add("hidden");
    }
  };

  useEffect(() => {
    validasiNomorTelepon();
  }, []);

  //FUNSGI UNTUK PASSWORD
  const [PasswordVisible, setPasswordVisible] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [registrationAttempted, setRegistrationAttempted] = useState(false);
  const [isLengthValid, setIsLengthValid] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!PasswordVisible);
  };

  const handleInputPass = (event) => {
    const newPassword = event.target.value;
    setInputPassword(newPassword);
    setRegistrationAttempted(false);
    setIsValidPassword(false);

    const hasUpperCase = /[A-Z]/.test(newPassword);
    const hasNumber = /\d/.test(newPassword);
    setIsLengthValid(newPassword.length >= 8);
    setIsValidPassword(hasUpperCase && hasNumber && isLengthValid);
  };

  //FUNGSI UNTUK REGISTER
  const handleRegistration = () => {
    setRegistrationAttempted(true);
    console.log("Nama:", nama);
    console.log("Email:", email);
    console.log("Nomor Telepon:", selectedCountryCode + (inputNoTeleponRef.current ? inputNoTeleponRef.current.value : ""));
    console.log("Password:", inputPassword);

    if (isValidPassword) {
      console.log("Registrasi Sukses");
      setRegistrationSuccess(true);

      setTimeout(() => {
        setRegistrationSuccess(false);
        navigate("/otp");
      }, 3000);
    }
  };

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  return (
    <div className="flex flex-row w-full h-screen">
      {/* SEBELAH KIRI */}
      <div className="w-full md:w-2/3 flex flex-col h-screen items-center justify-center mx-auto p-4 translate-y-[-30px]">
        <h1 className="font-bold text-2xl text-ungu-0">Daftar</h1>

        <div className="flex flex-col space-y-5 items-center w-full md:w-[35rem] md:items-center mx-4">
          {/* INPUTAN NAMA */}
          <div className="w-full md:w-[35rem] flex flex-col relative">
            <label className="mb-1">Nama</label>
            <input type="text" className="h-[3rem] w-full rounded-xl border border-gray-300 pl-3" placeholder="Nama Lengkap" value={nama} onChange={handleInputNama} />
          </div>

          {/*INPUTAN EMAIL*/}
          <div className="w-full md:w-[35rem] flex flex-col">
            <label className="mb-1">Email</label>
            <div className="relative">
              <input type="email" className="h-[3rem] w-full rounded-xl border border-gray-300 pl-3" placeholder="Contoh:sayahuman@gmail.com" value={email} onChange={handleInputEmail} />
              {isValidEmail && <img src={check} alt="check" className="top-[0.9rem] right-5 absolute" />}
            </div>
          </div>

          {/*INPUTAN NO TELEPON*/}
          <div className="w-full md:w-[35rem] flex flex-col relative">
            <label className="mb-1">Nomor Telepon</label>
            <div className="flex items-center">
              <select className="h-[3rem] w-1/4 md:w-1/5 rounded-l-xl border border-gray-300 pl-3" value={selectedCountryCode} onChange={(e) => setSelectedCountryCode(e.target.value)}>
                {countryCodes.map((country) => (
                  <option key={country.code} value={country.code}>
                    ({country.code})
                  </option>
                ))}
              </select>
              <input
                ref={inputNoTeleponRef}
                type="text"
                inputMode="tel"
                className="h-[3rem] w-full rounded-r-xl border border-gray-300 pl-3"
                placeholder="Masukan Nomor Telepon"
                pattern="[0-9]{10,15}"
                onChange={() => {
                  validasiNomorTelepon();
                }}
              />
              <img id="checkIcon" src={check} alt="check2" className="top-[2.5rem] right-5 absolute hidden" />
            </div>
          </div>

          {/*INPUTAN BUAT PASSWORD*/}
          <div className="w-full md:w-[35rem] flex flex-col">
            <div className="flex justify-between items-center mb-1">
              <label>Buat Password</label>
            </div>
            <div className="relative">
              <input
                type={PasswordVisible ? "text" : "password"}
                value={inputPassword}
                onChange={handleInputPass}
                className={`h-[3rem] w-full rounded-xl border ${isValidPassword || !registrationAttempted ? "border-gray-300" : "border-red-500"} pl-3`}
                placeholder="Buat Password"
              />
              {isValidPassword && <img src={check} alt="check" className="top-3 right-5 absolute cursor-pointer" />}
              {!isValidPassword && !registrationAttempted && (
                <>
                  <img src={PasswordVisible ? passClose : pass} alt={PasswordVisible ? "passClose" : "pass"} className="top-3 right-5 absolute cursor-pointer" onClick={togglePasswordVisibility} />
                </>
              )}
              {!isValidPassword && registrationAttempted && inputPassword.length > 0 && <img src={salah} alt="wrong" className="top-3 right-5 absolute cursor-pointer" />}
            </div>
            {!isValidPassword && isLengthValid && <p className="text-red-500 text-sm mt-1">Password harus mengandung huruf kapital, angka, dan tanda baca.</p>}
          </div>

          {/*BUTTON REGISTER */}
          <button className="h-[3rem] w-full md:w-[35rem] rounded-xl bg-gradientkanan text-white" onClick={handleRegistration}>
            Daftar
          </button>

          {/* PERTANYAAN */}
          <span>
            Sudah punya akun?{" "}
            <a className="text-purple-800 font-semibold hover:underline" href="/">
              Masuk di sini
            </a>
          </span>
          {!isValidPassword && registrationAttempted && <div className="flex absolute bottom-0 h-[3rem] w-[20rem] md:w-[20rem] bg-merah-0 text-white rounded-xl justify-center items-center">Password min 8 karakter!</div>}
          {registrationSuccess && <div className="flex absolute bottom-0 h-[3rem] w-[20rem] md:w-[20rem] bg-hijau-0 text-white rounded-xl justify-center items-center">Tautan Verifikasi telah dikirim!</div>}
        </div>
      </div>

      {/* SEBELAH KANAN */}
      <div className="w-[30rem] justify-center items-center text-white h-screen bg-cover bg-center hidden lg:block">
        <img src={LogoBg} alt="bg" className="h-screen w-full" />
      </div>
    </div>
  );
};
