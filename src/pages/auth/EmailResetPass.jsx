import React, { useState } from "react";
import LogoBg from "../../assets/img/LogoBg.jpg";
// import { useNavigate } from "react-router-dom";
import { ForgotPass } from "../../services/auth/forgotPass";

export const EmailResetPass = () => {
  // const navigate = useNavigate();
  // const { mutate: reset } = UseResetPass();
  const [email, setEmail] = useState("");
  const [errorNotification, setErrorNotification] = useState("");
  const [successNotification, setSuccessNotification] = useState("");

  const handleInput = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    }
  };

  const handleResetPassword = async () => {
    try {
      const emailReset = {
        email: email,
      };

      const response = await ForgotPass(emailReset);
      if (response && response.success) {
        console.log("Validasi berhasil");
        setSuccessNotification("Tautan telah dikirim!");
        setErrorNotification("");
        // navigate("/reset");
      } else {
        console.error("Validasi gagal:", response?.message || "Unknown error");
        setErrorNotification("Email tidak terdaftar!!!");
        setSuccessNotification("");
      }
    } catch (error) {
      console.error(error.message);
      setErrorNotification("Email tidak terdaftar!!!");
      setSuccessNotification("");
    }
  };

  return (
    <div className="flex flex-row w-full h-screen">
      {/* SEBELAH KIRI */}
      <div className="w-full md:w-2/3 flex flex-col h-screen items-center justify-center mx-auto p-4">
        <h1 className="mb-[2rem] font-bold text-2xl text-purple-800">
          Masukan Email
        </h1>

        <div className="flex flex-col space-y-5 items-center w-full md:w-[35rem] md:items-center mx-4">
          {/* INPUTAN EMAIL */}
          <div className="w-full md:w-[35rem] flex flex-col relative">
            <label className="mb-1">Email</label>
            <input
              id="email"
              type="text"
              className="h-[3rem] w-full rounded-xl border pl-3"
              placeholder="Contoh: user1@gmail.com"
              value={email}
              onChange={handleInput}
            />
          </div>

          {/* BUTTON LOGIN */}
          <button
            className="h-[3rem] w-full md:w-[35rem] rounded-xl bg-gradientkanan text-white"
            onClick={handleResetPassword}
          >
            Kirim Tautan
          </button>

          {errorNotification && (
            <div className="absolute bottom-8 mb-4 h-[3rem] w-[20rem] md:w-[20rem] bg-merah-0 text-white rounded-xl flex justify-center items-center">
              {errorNotification}
            </div>
          )}

          {successNotification && (
            <div className="absolute bottom-8 mb-4 h-[3rem] w-[20rem] md:w-[20rem] bg-hijau-0 text-white rounded-xl flex justify-center items-center">
              {successNotification}
            </div>
          )}
        </div>
      </div>

      {/* SEBELAH KANAN */}
      <div className="w-[30rem] justify-center items-center text-white h-screen bg-cover bg-center hidden lg:block">
        <img src={LogoBg} alt="bg" className="h-screen w-full" />
      </div>
    </div>
  );
};
