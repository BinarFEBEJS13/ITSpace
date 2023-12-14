import React, { useEffect, useState } from "react";
import picture from "../img/picture.png";
import { useDispatch, useSelector } from "react-redux";
import { GetUsers } from "../../redux/actions/authUsers";
import { useParams } from "react-router-dom";
import { CookieKeys, CookieStorage } from "../../utils/cookies";

export const Profile = () => {
  const dispatch = useDispatch()
  const [Nama, setNama] = useState("")
  const { id } = useParams()
  const idUser = CookieStorage.get(CookieKeys.Id)
  console.log(idUser, "id User")
  const users = useSelector((state) => state.users.dataUsers)
  console.log(users, "ini users")
  console.log(id, "id")

  const getDataUsers = async () => {
    const userDatas = await dispatch(GetUsers(idUser))
  }
  
  useEffect(() => {
    getDataUsers()
    setNama(users?.profile?.name);
  }, [id, dispatch])

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center ml-0 sm:ml-4 mt-[1rem] mobile sm:mt-4 w-[23rem] sm:w-[18rem] px-5">
        <div className="relative">
          <div className="mx-auto w-[70px] h-[70px] bg-white outline outline-[#6148FF] rounded-full z-0"></div>
          <div className="flex justify-center absolute left-[175px] sm:left-[130px] bottom-0 z-10 cursor-pointer">
            <div className="flex items-center justify-center w-7 h-7 bg-white rounded-lg z-20">
              <img className="w-4 h-4" src={picture} alt=""></img>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className="">
            <span className="text-[12px] font-semibold">Nama</span>
            <input value={Nama} type="text" className="w-full p-3 sm:p-2 rounded-2xl sm:rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[12px]" placeholder="Masukkan nama Anda"></input>
          </div>
          <div>
            <span className="text-[12px] font-semibold">Email</span>
            <input type="text" className="w-full p-3 sm:p-2 rounded-2xl sm:rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[12px]" placeholder="Masukkan email Anda"></input>
          </div>
          <div>
            <span className="text-[12px] font-semibold">Nomor Telepon</span>
            <input type="text" className="w-full p-3 sm:p-2 rounded-2xl sm:rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[12px]" placeholder="Masukkan nomor telepon"></input>
          </div>
          <div>
            <span className="text-[12px] font-semibold">Negara</span>
            <input type="text" className="w-full p-3 sm:p-2 rounded-2xl sm:rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[12px]" placeholder="Masukkan kota tempat tinggal"></input>
          </div>
          <div>
            <span className="text-[12px] font-semibold">Kota</span>
            <input type="text" className="w-full p-3 sm:p-2 rounded-2xl sm:rounded-xl outline outline-gray-400 outline-[1.5px] placeholder:text-[12px]" placeholder="Masukkan kota tempat tinggal"></input>
          </div>
          <div className="my-4 sm:mt-2">
            <button className="w-full p-3 sm:p-2 bg-[#6148FF] rounded-3xl sm:rounded-2xl text-white font-semibold text-sm tracking-[1px]">Simpan profil saya</button>
          </div>
        </div>
      </div>
    </div>
  );
};
