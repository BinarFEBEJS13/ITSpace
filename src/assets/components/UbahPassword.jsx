import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

export const UbahPassword = () => {
  const [oldPassword, setOldPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const toggleOldPassword = () => {
    setOldPassword(!oldPassword);
  };
  const toggleNewPassword = () => {
    setNewPassword(!newPassword);
  };
  const toggleConfirmPassword = () => {
    setConfirmPassword(!confirmPassword);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center ml-0 sm:ml-4 mt-[4rem] sm:mt-4 w-[23rem] sm:w-[18rem] px-5">
        <h2 className="flex w-[90%] sm:w-full text-[1.5rem] sm:text-lg text-start sm:justify-center font-extrabold">Ubah Password</h2>
        <div className="flex flex-col justify-center gap-2 mt-3">
          <div>
            <span className="text-[12px] sm:text-[10px] font-semibold">Masukkan Password Lama</span>
            <div className="flex items-center justify-end">
              <input
                type={oldPassword === false ? "password" : "text"}
                className="w-full p-3 sm:p-2 rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[12px] sm:placeholder:text-[10px]"
                placeholder="Masukkan Password Lama"
              ></input>
              <span className="absolute mr-3 text-gray-500 text-[20px]">{oldPassword === false ? <AiFillEye onClick={toggleOldPassword} /> : <AiFillEyeInvisible onClick={toggleOldPassword} />}</span>
            </div>
          </div>
          <div>
            <span className="text-[12px] sm:text-[10px] font-semibold">Masukkan Password Baru</span>
            <div className="flex items-center justify-end">
              <input
                type={newPassword === false ? "password" : "text"}
                className="w-full p-3 sm:p-2 rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[12px] sm:placeholder:text-[10px]"
                placeholder="Masukkan Password Baru"
              ></input>
              <span className="absolute mr-3 text-gray-500 text-[20px]">{newPassword === false ? <AiFillEye onClick={toggleNewPassword} /> : <AiFillEyeInvisible onClick={toggleNewPassword} />}</span>
            </div>
          </div>
          <div>
            <span className="text-[12px] sm:text-[10px] font-semibold">Ulangi Password Baru</span>
            <div className="flex items-center justify-end">
              <input
                type={confirmPassword === false ? "password" : "text"}
                className="w-full p-3 sm:p-2 rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[12px] sm:placeholder:text-[10px]"
                placeholder="Ulangi Password Baru"
              ></input>
              <span className="absolute mr-3 text-gray-500 text-[20px]">{confirmPassword === false ? <AiFillEye onClick={toggleConfirmPassword} /> : <AiFillEyeInvisible onClick={toggleConfirmPassword} />}</span>
            </div>
          </div>
          <div className="mt-[15rem] sm:mt-4">
            <button className="w-full p-3 sm:p-2 bg-[#6148FF] rounded-2xl text-white font-semibold text-[12px] tracking-[1px] shadow-lg shadow-gray-200">Ubah Password</button>
          </div>
        </div>
      </div>
    </div>
  );
};
