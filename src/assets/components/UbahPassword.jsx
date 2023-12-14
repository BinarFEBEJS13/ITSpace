import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useChangePassword } from "../../services/auth/change_password";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const UbahPassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");


  const toggleOldPassword = () => {
    setOldPass(!oldPass);
  };
  const toggleNewPassword = () => {
    setNewPass(!newPass);
  };
  const toggleConfirmPassword = () => {
    setConfirmPass(!confirmPass);
  };

  const {mutate: changePassword} = useChangePassword();

  const handleChangePass = (e) => {
    if (e) {
      if (e.target.id === 'oldPassword') {
        setOldPassword(e.target.value);
      }
      if (e.target.id === "newPassword") {
        setNewPassword(e.target.value);
      }
      if (e.target.id === "newPasswordValidation") {
        setConfirmPassword(e.target.value);
      }
    }
  }

  console.log(oldPassword, "old Password")

  const changePass = async () => {
    try {
      await changePassword({
        oldPassword: oldPassword,
        newPassword: newPassword,
        newPasswordValidation: confirmPassword,
      });
      toast.success("Password berhasil diubah!", {
        position: "top-center",
        autoClose: 3000, // milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Reset the form fields
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Gagal mengubah password:", error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center ml-0 sm:ml-4 mt-[2rem] sm:mt-4 w-[23rem] mobile sm:w-[18rem] px-5">
        <h2 className="flex w-[90%] sm:w-full text-[1.5rem] sm:text-lg text-start sm:justify-center font-extrabold">Ubah Password</h2>
        <div className="flex flex-col justify-center gap-2 mt-3">
          <div>
            <span className="text-[12px] sm:text-[10px] font-semibold">Masukkan Password Lama</span>
            <div className="flex items-center justify-end">
              <input id="oldPassword" onChange={handleChangePass}
                type={oldPass === false ? "text" : "password"}
                className="w-full p-3 sm:p-2 rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[12px] sm:placeholder:text-[10px]"
                placeholder="Masukkan Password Lama"
              ></input>
              <span className="absolute mr-3 text-gray-500 text-[20px]">{oldPass === false ? <AiFillEyeInvisible onClick={toggleOldPassword} /> : <AiFillEye onClick={toggleOldPassword} />}</span>
            </div>
          </div>
          <div>
            <span className="text-[12px] sm:text-[10px] font-semibold">Masukkan Password Baru</span>
            <div className="flex items-center justify-end">
              <input id="newPassword" onChange={handleChangePass}
                type={newPass === false ? "text" : "password"}
                className="w-full p-3 sm:p-2 rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[12px] sm:placeholder:text-[10px]"
                placeholder="Masukkan Password Baru"
              ></input>
              <span className="absolute mr-3 text-gray-500 text-[20px]">{newPass === false ? <AiFillEyeInvisible onClick={toggleNewPassword} /> : <AiFillEye onClick={toggleNewPassword} />}</span>
            </div>
          </div>
          <div>
            <span className="text-[12px] sm:text-[10px] font-semibold">Ulangi Password Baru</span>
            <div className="flex items-center justify-end">
              <input id="newPasswordValidation" onChange={handleChangePass}
                type={confirmPass === false ? "text" : "password"}
                className="w-full p-3 sm:p-2 rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[12px] sm:placeholder:text-[10px]"
                placeholder="Ulangi Password Baru"
              ></input>
              <span className="absolute mr-3 text-gray-500 text-[20px]">{confirmPass === false ? <AiFillEyeInvisible onClick={toggleConfirmPassword} /> : <AiFillEye onClick={toggleConfirmPassword} />}</span>
            </div>
          </div>
          <div className="mt-[2rem] sm:mt-4">
            <button onClick={() => {changePass()}} className="w-full p-3 sm:p-2 bg-[#6148FF] rounded-2xl text-white font-semibold text-[12px] tracking-[1px] shadow-lg shadow-gray-200">Ubah Password</button>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};
