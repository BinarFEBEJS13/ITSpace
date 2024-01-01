import React, { useState } from "react";
import LogoBg from "../../assets/img/LogoBg.jpg";
import pass from "../../assets/svg/pass.svg";
import passClose from "../../assets/svg/passClose.svg";
import { useNavigate } from "react-router-dom";
import { useResetPassword } from "../../services/auth/resetPass";
import { useToast } from "@chakra-ui/react";

export const ResetPass = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password2Visible, setPassword2Visible] = useState(false);
  const navigate = useNavigate();
  const { mutate: reset } = useResetPassword();
  const [Password, setPassword] = useState("");
  const [validPass, setValidPass] = useState("");
  const token = window.location.search.slice(1);
  const toast = useToast();

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const togglePassword2Visibility = () => {
    setPassword2Visible((prevVisible) => !prevVisible);
  };

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
      if (e.target.id === "validPass") {
        setValidPass(e.target.value);
      }
    }
  };

  const handleChangePassword = async () => {
    try {
      const resetPass = {
        newPassword: Password,
        newPasswordValidation: validPass,
        token: token,
      };

      await reset(resetPass);
      toast({
        title: "Password berhasil diubah",
        status: "success",
        duration: 3000,
        position: "top",
      });
      navigate("/login");
      console.log(resetPass, "resetpass");
    } catch (error) {
      console.error("Error mengirim email reset:", error.message);
      console.log("Email tidak terdaftar.");
    }
  };

  return (
    <div className="flex flex-row w-full h-screen">
      {/* SEBELAH KIRI */}
      <div className="w-full md:w-2/3 flex flex-col h-screen items-center justify-center mx-auto p-4">
        <h1 className="mb-[2rem] font-bold text-2xl text-purple-800">Reset Password</h1>

        <div className="flex flex-col space-y-5 items-center w-full md:w-[35rem] md:items-center mx-4">
          {/* INPUTAN PASSWORD 1*/}
          <div className="w-full md:w-[35rem] flex flex-col relative">
            <label className="mb-1">Masukan Password Baru</label>
            <input id="password" type={passwordVisible ? "text" : "password"} className="h-[3rem] w-[35rem] rounded-xl border border-gray-300 pl-3" placeholder="Masukkan Password" onChange={handleInput} />
            <img src={passwordVisible ? passClose : pass} alt="pass" className="top-[2.5rem] right-5 absolute cursor-pointer" onClick={togglePasswordVisibility} />
          </div>

          {/* INPUTAN PASSWORD 2*/}
          <div className="w-full md:w-[35rem] flex flex-col relative">
            <label className="mb-1">Ulangi Password Baru</label>
            <input id="validPass" type={password2Visible ? "text" : "password"} className="h-[3rem] w-[35rem] rounded-xl border border-gray-300 pl-3" placeholder="Masukkan Password" onChange={handleInput} />
            <img src={password2Visible ? passClose : pass} alt="pass" className="top-[2.5rem] right-5 absolute cursor-pointer" onClick={togglePassword2Visibility} />
          </div>

          {/* BUTTON LOGIN */}
          <button className="h-[3rem] w-full md:w-[35rem] rounded-xl bg-gradientkanan text-white" onClick={handleChangePassword}>
            Simpan
          </button>
        </div>
      </div>

      {/* SEBELAH KANAN */}
      <div className="w-[30rem] justify-center items-center text-white h-screen bg-cover bg-center hidden lg:block">
        <img src={LogoBg} alt="bg" className="h-screen w-full" />
      </div>
    </div>
  );
};
