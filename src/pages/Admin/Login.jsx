import React, { useState } from "react";
import Logo from "../../assets/img/Login Image.png";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex items-center">
        <div className="w-[53%] h-screen hidden md:hidden lg:block">
          <img className="h-full w-full" src={Logo} alt="" />
        </div>

        <div className="w-full h-screen flex flex-col items-center justify-center">
          <h1 className="text-[#6148FF] font-bold text-2xl">Login</h1>
          <div className="flex flex-col w-4/5 px-[1rem] md:w-3/4 lg:w-2/3 mt-10 gap-4">
            <div className="flex flex-col">
              <label htmlFor="">ID Admin</label>
              <input className="px-3 py-4 rounded-2xl border border-[#D0D0D0]" type="text" placeholder="ID Admin" />
            </div>
            <div className="flex flex-col relative">
              <div className="flex justify-between">
                <label htmlFor="">Password</label>
                <a className="text-[#6148FF]" href="/">
                  Lupa Kata Sandi
                </a>
              </div>
              <input className=" px-3 py-4 rounded-2xl border border-[#D0D0D0]" type={showPassword ? "text" : "password"} placeholder="Password" />
              {showPassword ? (
                <FiEye onClick={handleShowPassword} className="absolute right-5 bottom-4 text-[#8A8A8A] text-2xl font-bold" />
              ) : (
                <FiEyeOff onClick={handleShowPassword} className="absolute right-5 bottom-4 text-[#8A8A8A] text-2xl font-bold" />
              )}
            </div>
            <button className="mt-3 text-white px-3 py-4 bg-[#6148FF] rounded-2xl">
              <Link to="/admin/dashboard">Masuk</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
