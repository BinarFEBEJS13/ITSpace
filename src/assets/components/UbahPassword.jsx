import React, { useEffect, useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useChangePassword } from "../../services/auth/change_password";
import { useToast } from "@chakra-ui/react";
import { useLogoutUser } from "../../services/auth/logout_user";

export const UbahPassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const toast = useToast();

  const toggleOldPassword = () => {
    setOldPass(!oldPass);
  };
  const toggleNewPassword = () => {
    setNewPass(!newPass);
  };
  const toggleConfirmPassword = () => {
    setConfirmPass(!confirmPass);
  };

  const { mutate: changePassword, isSuccess, error } = useChangePassword();

  const { mutate: postLogout, isSuccess: successLogout } = useLogoutUser();

  const handleChangePass = (e) => {
    if (e) {
      if (e.target.id === "oldPassword") {
        setOldPassword(e.target.value);
      }
      if (e.target.id === "newPassword") {
        setNewPassword(e.target.value);
      }
      if (e.target.id === "newPasswordValidation") {
        setConfirmPassword(e.target.value);
      }
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Berhasil",
        description: "Password berhasil diubah.",
        status: "success",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
      setTimeout(() => {
        postLogout();
      }, 3000);
    } else if (error) {
      if (error.response && error.response.status === 400) {
        toast({
          title: "Error",
          description: "Harap isi semua kolom.",
          status: "error",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
      } else {
        toast({
          title: "Error",
          description: error.message,
          status: "error",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
      }
    }
  }, [isSuccess, error, toast, postLogout]);

  useEffect(() => {
    if (successLogout) {
      window.location.href = "/login";
    }
  }, [successLogout]);

  const changePass = () => {
    changePassword({
      oldPassword: oldPassword,
      newPassword: newPassword,
      newPasswordValidation: confirmPassword,
    });
  };

  return (
    <div className="flex justify-center mb-5">
      <div className="flex flex-col justify-center ml-0 sm:ml-4 mt-[2rem] sm:mt-4 w-[23rem] mobile sm:w-[18rem] px-5">
        <h2 className="flex w-[90%] sm:w-full text-[1.5rem] sm:text-lg text-start sm:justify-center font-extrabold">Ubah Password</h2>
        <div className="flex flex-col justify-center gap-2 mt-3">
          <div className="space-y-1">
            <span className="text-[12px] sm:text-[11px] font-semibold">Masukkan Password Lama</span>
            <div className="flex items-center justify-end">
              <input
                id="oldPassword"
                onChange={handleChangePass}
                type={oldPass === false ? "text" : "password"}
                className="w-full bg-white p-3 sm:p-2 text-[12px] rounded-xl shadow-lg shadow-gray-200 outline outline-none outline-[1.5px] placeholder:text-[12px] sm:placeholder:text-[10px]"
                placeholder="Masukkan Password Lama"
              ></input>
              <span className="absolute mr-3 text-ungu-0 text-[20px]">{oldPass === false ? <AiFillEyeInvisible onClick={toggleOldPassword} /> : <AiFillEye onClick={toggleOldPassword} />}</span>
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-[12px] sm:text-[11px] font-semibold">Masukkan Password Baru</span>
            <div className="flex items-center justify-end">
              <input
                id="newPassword"
                onChange={handleChangePass}
                type={newPass === false ? "text" : "password"}
                className="w-full bg-white p-3 sm:p-2 text-[12px] rounded-xl shadow-lg shadow-gray-200 outline outline-none outline-[1.5px] placeholder:text-[12px] sm:placeholder:text-[10px]"
                placeholder="Masukkan Password Baru"
              ></input>
              <span className="absolute mr-3 text-ungu-0 text-[20px]">{newPass === false ? <AiFillEyeInvisible onClick={toggleNewPassword} /> : <AiFillEye onClick={toggleNewPassword} />}</span>
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-[12px] sm:text-[11px] font-semibold">Ulangi Password Baru</span>
            <div className="flex items-center justify-end">
              <input
                id="newPasswordValidation"
                onChange={handleChangePass}
                type={confirmPass === false ? "text" : "password"}
                className="w-full bg-white p-3 sm:p-2 text-[12px] rounded-xl shadow-lg shadow-gray-200 outline outline-none outline-[1.5px] placeholder:text-[12px] sm:placeholder:text-[10px]"
                placeholder="Ulangi Password Baru"
              ></input>
              <span className="absolute mr-3 text-ungu-0 text-[20px]">{confirmPass === false ? <AiFillEyeInvisible onClick={toggleConfirmPassword} /> : <AiFillEye onClick={toggleConfirmPassword} />}</span>
            </div>
          </div>
          <div className="mt-[2rem] sm:mt-4">
            <button
              onClick={() => {
                changePass();
              }}
              className="w-full p-3 sm:p-2 bg-gradientkanan rounded-2xl text-white font-semibold text-[12px] tracking-[1px] shadow-lg shadow-gray-200 hover:scale-110 transition-transform duration-300"
            >
              Ubah Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
