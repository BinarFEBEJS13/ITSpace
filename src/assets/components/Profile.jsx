import React, { useEffect, useState } from "react";
import { useGetUsersProfile } from "../../services/users/get-user-profile";
import { Wrap, WrapItem, useToast } from "@chakra-ui/react";
// img
import picture from "../img/picture.png";

import { API_ENDPOINT } from "../../utils/api-endpoint";
import http from "../../utils/http";
import { useGetDataUser } from "../../services/users/get-data-user";
import { Avatar } from "@chakra-ui/react";

export const Profile = () => {
  const [Nama, setNama] = useState("");
  const [Email, setEmail] = useState("");
  const [Telepon, setTelepon] = useState("");
  const [Negara, setNegara] = useState("");
  const [Kota, setKota] = useState("");
  const [Image, setImage] = useState(null);
  const [showImage, setShowImage] = useState();
  const toast = useToast();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setShowImage(URL.createObjectURL(file));
  };

  const { data: GetUserProfile } = useGetUsersProfile();
  const { data: getDataUser } = useGetDataUser({ query: GetUserProfile?.data?.id });

  useEffect(() => {
    if (getDataUser && getDataUser.data && getDataUser.data.profile) {
      setShowImage(getDataUser.data.profile.profilePicture);
      setNama(getDataUser.data.profile.name);
      setEmail(getDataUser.data.email);
      setTelepon(getDataUser.data.profile.phoneNumber);
      setNegara(getDataUser.data.profile.country);
      setKota(getDataUser.data.profile.city);
    }
  }, [getDataUser]);

  const handlePutProfile = (e) => {
    if (e) {
      if (e.target.id === "nama") {
        setNama(e.target.value);
      }
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "telepon") {
        setTelepon(e.target.value);
      }
      if (e.target.id === "negara") {
        setNegara(e.target.value);
      }
      if (e.target.id === "kota") {
        setKota(e.target.value);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", Image);
    formData.append("name", Nama);
    formData.append("email", Email);
    formData.append("phoneNumber", Telepon ?? "");
    formData.append("country", Negara ?? "");
    formData.append("city", Kota ?? "");

    try {
      const response = await http.put(`${API_ENDPOINT.PUT_USER}/${getDataUser?.data?.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 201) {
        toast({
          title: "Profil Berhasil Diperbarui",
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
      } else {
        console.error("Image upload failed.");
        if (response.status === 401) {
          toast({
            title: "Tidak dapat memperbarui profil",
            status: "error",
            position: "top",
            duration: 3000,
            isClosable: true,
          });
        }
      }
    } catch (error) {
      toast({
        title: "Tidak dapat memperbarui profil",
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-center ml-0 sm:ml-4 mt-[1rem] mobile sm:mt-4 w-[23rem] sm:w-[18rem] px-5">
        <div className=" mt-auto mx-auto relative rounded-full border-[1.5px] border-ungu-0">
          <Wrap>
            <WrapItem>
              <Avatar outline="blue" size="xl" src={showImage} />
            </WrapItem>
          </Wrap>
          <div className="absolute bottom-0 right-0 bg-white w-6 h-6 flex items-center justify-center rounded-md overflow-hidden cursor-pointer">
            <input id="image" type="file" onChange={handleImageChange} accept="image/*" className="absolute transform scale-200 opacity-0 cursor-pointer" />
            <img className="w-4 h-4 fill-white" src={picture} alt=""></img>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className="">
            <span className="text-[12px] font-semibold">Nama</span>
            <input
              id="nama"
              onChange={handlePutProfile}
              value={Nama || ""}
              type="text"
              className="w-full p-3 sm:p-2 text-[12px] rounded-2xl sm:rounded-xl outline outline-none bg-gray-50 shadow-lg shadow-gray-200 outline-[1.5px] placeholder:text-[12px]"
              placeholder="Masukkan nama Anda"
            />
          </div>
          <div>
            <span className="text-[12px] font-semibold">Email</span>
            <input
              id="email"
              onChange={handlePutProfile}
              value={Email || ""}
              type="email"
              readOnly
              className="w-full p-3 sm:p-2 text-[12px] rounded-2xl sm:rounded-xl outline outline-none bg-gray-50 shadow-lg shadow-gray-200 outline-[1.5px] placeholder:text-[12px] text-gray-400"
              placeholder="Masukkan email Anda"
            />
          </div>
          <div>
            <span className="text-[12px] font-semibold">Nomor Telepon</span>
            <input
              id="telepon"
              onChange={handlePutProfile}
              value={Telepon || ""}
              type="text"
              className="w-full p-3 sm:p-2 text-[12px] rounded-2xl sm:rounded-xl outline outline-none bg-gray-50 shadow-lg shadow-gray-200 outline-[1.5px] placeholder:text-[12px]"
              placeholder="Masukkan nomor telepon"
            />
          </div>
          <div>
            <span className="text-[12px] font-semibold">Negara</span>
            <input
              id="negara"
              onChange={handlePutProfile}
              value={Negara || ""}
              type="text"
              className="w-full p-3 sm:p-2 text-[12px] rounded-2xl sm:rounded-xl outline outline-none bg-gray-50 shadow-lg shadow-gray-200 outline-[1.5px] placeholder:text-[12px]"
              placeholder="Masukkan negara Anda"
            />
          </div>
          <div>
            <span className="text-[12px] font-semibold">Kota</span>
            <input
              id="kota"
              onChange={handlePutProfile}
              value={Kota || ""}
              type="text"
              className="w-full p-3 sm:p-2 text-[12px] rounded-2xl sm:rounded-xl outline outline-none bg-gray-50 shadow-lg shadow-gray-200 outline-[1.5px] placeholder:text-[12px]"
              placeholder="Masukkan kota tempat tinggal"
            />
          </div>
          <div className="my-4 sm:mt-2">
            <button onClick={handleSubmit} className="w-full p-3 sm:p-2 bg-gradientkanan rounded-3xl sm:rounded-2xl text-white font-semibold text-sm tracking-[1px] hover:scale-110 transition-transform duration-300">
              Simpan profil saya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
