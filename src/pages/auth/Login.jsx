import React, { useState } from "react";
import LogoBg from "../../assets/img/LogoBg.jpg";
import pass from "../../assets/svg/pass.svg";
import passClose from "../../assets/svg/passClose.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginUser } from "../../redux/actions/authLogin";

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  //FUNGSI UNTUK EMAIL
  const [email, setEmail] = useState("");
  const [isEmailTerdaftar, setIsEmailTerdaftar] = useState(true);
  const periksaApakahEmailTerdaftar = (emailYangDimasukkan) => {
    const emailTerdaftar = ["user1@gmail.com", "user2@gmail.com", "user3@gmail.com"];
    const isTerdaftar = emailTerdaftar.includes(emailYangDimasukkan);
    setIsEmailTerdaftar(isTerdaftar);
    return isTerdaftar;
  };

  //FUNGSI UNTUK PASSWORD
  const [PasswordVisible, setPasswordVisible] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const togglePasswordVisibility = () => {
    setPasswordVisible(!PasswordVisible);
  };

  const handleInputPass = (event) => {
    const newPassword = event.target.value;
    setInputPassword(newPassword);

    if (passwordError && newPassword) {
      setPasswordError("");
    }
  };

  const getPasswordByEmail = (inputEmail) => {
    const userCredentials = {
      "user1@gmail.com": "Ayuni.123",
      "user2@gmail.com": "password2",
      "user3@gmail.com": "password3",
    };

    return userCredentials[inputEmail];
  };

  // UNTUK LINK LUPA KATA SANDI
  const handleForgotPassword = () => {
    navigate("/logres");
  };

  //FUNGSI BUTTON MASUK
  const handleLogin = () => {
    const isTerdaftar = periksaApakahEmailTerdaftar(email);

    setIsEmailTerdaftar(isTerdaftar);

    if (!isTerdaftar) {
      console.log("Email tidak terdaftar");
      return;
    }

    const registeredPassword = getPasswordByEmail(email);

    if (inputPassword !== registeredPassword) {
      setPasswordError("Password salah!");
      return;
    }
    setPasswordError("");
    console.log("Login berhasil!");
    navigate("/brnd");
  };

  const handleInput = (e) => {
        if (e) {
            if (e.target.id === 'email') {
                setEmail(e.target.value);
            }
            if (e.target.id === 'password') {
                setInputPassword(e.target.value);
            }
        }
    };

  const loginUser = () => {
    dispatch(LoginUser({
      email: email,
      password: inputPassword
    }))
  }

  return (
    <div className="flex flex-row w-full h-screen">
      {/* SEBELAH KIRI */}
      <div className="w-full md:w-2/3 flex flex-col h-screen items-center justify-center mx-auto p-4">
        <h1 className="mb-[2rem] font-bold text-2xl text-purple-800">Masuk</h1>

        <div className="flex flex-col space-y-5 items-center w-full md:w-[35rem] md:items-center mx-4">
          {/* INPUTAN EMAIL */}
          <div className="w-full md:w-[35rem] flex flex-col relative">
            <label className="mb-1">Email/No Telepon</label>
            <input id="email"
              type="text"
              className={`h-[3rem] w-full rounded-xl border ${!isEmailTerdaftar ? "border-red-500" : "border-gray-300"} pl-3`}
              placeholder="Contoh: user1@gmail.com"
              value={email}
              onChange={handleInput}
            />
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
              <input id="password"
                type={PasswordVisible ? "text" : "password"}
                value={inputPassword}
                onChange={handleInput}
                className={`h-[3rem] w-full md:w-full rounded-xl border ${passwordError ? "border-red-500" : "border-gray-300"} pl-3`}
                placeholder="Masukkan Password"
              />
              <img src={PasswordVisible ? passClose : pass} alt={PasswordVisible ? "passClose" : "pass"} className="top-3 right-5 absolute cursor-pointer" onClick={togglePasswordVisibility} />
            </div>
          </div>

          {/* BUTTON LOGIN */}
          <button className="h-[3rem] w-full md:w-[35rem] rounded-xl bg-gradientkanan text-white" onClick={() => {loginUser()}}>
            Masuk
          </button>

          <span>
            Belum punya akun?{" "}
            <a className="text-purple-800 font-semibold hover:underline" href="/register">
              Daftar di sini
            </a>
          </span>
          {!isEmailTerdaftar && <div className="absolute bottom-8 mb-4 h-[3rem] w-[20rem] md:w-[20rem] bg-merah-0 text-white rounded-xl flex justify-center items-center">Email tidak terdaftar</div>}
          {passwordError && <div className="absolute  bottom-8 mb-4 h-[3rem] w-[20rem] md:w-[20rem] bg-merah-0 text-white rounded-xl flex justify-center items-center">{passwordError}</div>}
        </div>
      </div>

      {/* SEBELAH KANAN */}
      <div className="w-[30rem] justify-center items-center text-white h-screen bg-cover bg-center hidden lg:block">
        <img src={LogoBg} alt="bg" className="h-screen w-full" />
      </div>
    </div>
  );
};
