import React, { useEffect, useState } from "react";
import Logo from "../../assets/img/Login Image.png";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useLoginAdmin } from "../../services/Admin/auth/post-login-admin";
import { useToast } from "@chakra-ui/react";

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
      else if (!data?.data?.data?.profile?.role === "ADMIN") {
        toast({
          title: "Your Account is not an Admin",
          status : "error",
          position : "top-right",
          isClosable : true,
          duration : 3000,
          size: "lg"
        })
        setTimeout(() => {
          navigate("/admin/dashboard/transaksi")
        }, 3000);
      }
      else if (data?.response?.status === 400){
        toast({
          title : "Please Fill All Input",
          status: "error",
          position : "top-right",
          duration : 4000,
          isClosable : true,
          size: "lg"
        })
      }
      else if (data?.response?.status === 401){
        toast({
          title : "Sorry This User is Not Admin",
          status: "error",
          duration : 4000,
          position : "top-right",
          isClosable : true,
          size : "lg"
        })
      }
      else if (data?.response?.status === 403){
        toast({
          title : "Unauthorized Account",
          status: "error",
          duration : 4000,
          position : "top-right",
          isClosable : true,
          size : "lg"
        })
      }

  }, [data, loginAdmin, navigate]);


  const handleLogin = () => {
    loginAdmin({
      email: Email,
      password: Password,
    })
  };
 
  console.log(Email ,"EMAILLL");
  console.log(Password ,"PWWWWW");
  return (
    <>
      <div className="flex items-center">
        <div className="w-1/2 h-screen hidden md:hidden lg:hidden xl:block">
          <img className="h-full w-full" src={Logo} alt="" />
        </div>

        <div className="w-full h-screen flex flex-col items-center justify-center">
          <h1 className="text-[#6148FF] font-bold text-2xl">Login</h1>
          <div className="flex flex-col w-4/5 px-[1rem] md:w-3/4 lg:w-2/3 mt-10 gap-4">
            <div className="flex flex-col">
              <label htmlFor="">ID Admin</label>
              <input
                id="email"
                onChange={handleInput}
                className="px-3 py-4 rounded-2xl border border-[#D0D0D0]"
                type="text"
                placeholder="ID Admin"
                required
              />
            </div>
            <div className="flex flex-col relative">
              <div className="flex justify-between">
                <label htmlFor="">Password</label>
                <a className="text-[#6148FF]" href="/">
                  Lupa Kata Sandi
                </a>
              </div>
              <input
                id="password"
                onChange={handleInput}
                className=" px-3 py-4 rounded-2xl border border-[#D0D0D0]"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
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
              className="mt-3 text-white px-3 py-4 bg-[#6148FF] rounded-2xl"
            >
              Masuk
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
