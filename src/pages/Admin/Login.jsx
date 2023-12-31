import React, { useEffect, useState } from "react";
import Logo from "../../assets/img/Login Image.png";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useLoginAdmin } from "../../services/Admin/auth/post-login-admin";
import { Spinner, useToast } from "@chakra-ui/react";
import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const toast = useToast();

  const navigate = useNavigate();
  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const {
    mutate: loginAdmin,
    data,
    isPending
  } = useLoginAdmin();
  

  useEffect(() => {
      if (data?.data?.data?.profile?.role === "ADMIN") {
        toast({
          title: data?.data?.message,
          status : "success",
          position : "top-right",
          isClosable : true,
          duration : 3000,
          size: "lg"
        })
        setTimeout(() => {
          navigate("/admin/dashboard/transaksi")
        }, 3000);
      }
      else if (data?.data?.data?.profile?.role === "USER") {
        toast({
          title: "Akun anda bukan Admin",
          status : "error",
          position : "top-right",
          isClosable : true,
          duration : 4000,
          size: "lg"
        })
      }
      else if (data?.response?.status === 400){
        toast({
          title : "Kolom masih ada yang kosong",
          status: "error",
          position : "top-right",
          duration : 4000,
          isClosable : true,
          size: "lg"
        })
      }
      else if (data?.response?.status === 401){
        toast({
          title : "Email atau password salah",
          status: "error",
          duration : 4000,
          position : "top-right",
          isClosable : true,
          size : "lg"
        })
      }
      else if (data?.response?.status === 403){
        toast({
          title : "Akun anda tidak memiliki akses",
          status: "error",
          duration : 4000,
          position : "top-right",
          isClosable : true,
          size : "lg"
        })
      }

  }, [data]);

  const handleLogin = () => {
    loginAdmin({
      email: Email,
      password: Password,
    })
  };
 
  return (
    <>
      <div className="flex items-center">
        <div className="xl:w-[55%] 2xl:w-1/2 h-screen hidden md:hidden lg:hidden xl:block">
          <img className="h-full w-full" src={Logo} alt="" />
        </div>

        <div className="w-full h-screen flex flex-col items-center justify-center">
          <h1 className="text-[#6148FF] font-bold text-2xl">Login</h1>
          <div className="flex flex-col w-4/5 px-[1rem] md:w-3/4 lg:w-2/3 mt-10 gap-4">
            <div className="flex flex-col">
              <label htmlFor="">Email Admin</label>
              <input
                id="email"
                onChange={handleInput}
                className="px-3 py-4 rounded-2xl border border-[#D0D0D0]"
                type="text"
                placeholder="Masukkan email admin"
                required
              />
            </div>
            <div className="flex flex-col relative">
              <div className="flex justify-between">
                <label htmlFor="">Password Admin</label>
                <Link className="text-[#6148FF]" to="">
                  Lupa Kata Sandi
                </Link>
              </div>
              <input
                id="password"
                onChange={handleInput}
                className=" px-3 py-4 rounded-2xl border border-[#D0D0D0]"
                type={showPassword ? "text" : "password"}
                placeholder="Masukkan password admin"
                required
              />
              {showPassword ? (
                <FiEye
                  onClick={handleShowPassword}
                  className="absolute right-5 bottom-4 text-[#8A8A8A] text-2xl font-bold"
                />
              ) : (
                <FiEyeOff
                  onClick={handleShowPassword}
                  className="absolute right-5 bottom-4 text-[#8A8A8A] text-2xl font-bold"
                />
              )}
            </div>
            <button
              onClick={handleLogin}
              className="mt-3 text-white px-3 py-4 bg-gradientkanan rounded-2xl"
            >
              {isPending ? <Spinner size="md" /> : "Masuk"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
