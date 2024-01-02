import React, { useEffect, useState } from "react";
import { useGetUsersProfile } from "../../../services/users/get-user-profile";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Wrap,
  WrapItem,
  useToast,
} from "@chakra-ui/react";
// img
import picture from "../../img/picture.png";

import { API_ENDPOINT } from "../../../utils/api-endpoint";
import { useGetDataUser } from "../../../services/users/get-data-user";
import { Avatar } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import http from "../../../utils/http";
export const ProfileAdmin = () => {
  const [Nama, setNama] = useState("");
  const [Email, setEmail] = useState("");
  const [Telepon, setTelepon] = useState("");
  const [Negara, setNegara] = useState("");
  const [Kota, setKota] = useState("");
  const [Image, setImage] = useState(null);
  const [showImage, setShowImage] = useState();
  const toast = useToast();
  const [inputErrors, setInputErrors] = useState({
    nama: "",
    email: "",
    telepon: "",
    negara: "",
    kota: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setShowImage(URL.createObjectURL(file));
  };

  const { data: GetUserProfile } = useGetUsersProfile();
  const { data: getDataUser } = useGetDataUser({
    query: GetUserProfile?.data?.id,
  });
  const validateForm = () => {
    let isValid = true;
    const errors = {
      nama: "",
      email: "",
      telepon: "",
      negara: "",
      kota: "",
    };

    if (!Nama.trim()) {
      errors.nama = "Nama tidak boleh kosong";
      isValid = false;
    }

    if (Email.trim()) {
      errors.tipeKelas = "Email tidak boleh kosong";
      isValid = false;
    }

    setInputErrors(errors);
    return isValid;
  };
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
    if (!validateForm()) {
      return;
    }
    const formData = new FormData();
    formData.append("image", Image);
    formData.append("name", Nama);
    formData.append("email", Email);
    formData.append("phoneNumber", Telepon ?? "");
    formData.append("country", Negara ?? "");
    formData.append("city", Kota ?? "");

    try {
      const response = await http.put(
        `${API_ENDPOINT.PUT_USER}/${getDataUser?.data?.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

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
    <div className="flex h-screen bg-[rgba(169,167,167,0.11)] flex-col sm:flex-row md:flex-col lg:flex-row lg:overflow-x-hidden">
      <Sidebar />

      <div className=" w-full lg:overflow-x-hidden">
        {/* ========================= Header =========================  */}
        <Header />
        {/* ========================= User Data =========================  */}
        <div className="mx-[2rem] md:mx-[4rem] mt-[3rem] flex justify-between ">
          <h1 className="font-bold text-normal sm:text-3xl">Profile Saya</h1>
        </div>
        <div className="flex justify-center items-center mt-[4rem] ">
          <div className="flex flex-col bg-white shadow-xl rounded-lg justify-center items mx-[2rem] md:mx-[4rem] w-[23rem] w-full px-5">
            <div className=" flex item mt-3 mx-auto relative rounded-full border-[1.5px] border-ungu-0">
              <Wrap>
                <WrapItem>
                  <Avatar outline="blue" size="xl" src={showImage} />
                </WrapItem>
              </Wrap>
              <div className="absolute bottom-0 right-0 bg-white w-6 h-6 flex items-center justify-center rounded-md overflow-hidden cursor-pointer">
                <input
                  id="image"
                  type="file"
                  onChange={handleImageChange}
                  accept="image/*"
                  className="absolute transform scale-200 opacity-0 cursor-pointer"
                />
                <img className="w-4 h-4 fill-white" src={picture} alt=""></img>
              </div>
            </div>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center gap-2"
            >
              <FormControl isInvalid={inputErrors.nama !== ""}>
                <FormLabel>Nama</FormLabel>
                <Input
                  borderColor="gray.400"
                  size="lg"
                  id="nama"
                  value={Nama}
                  onChange={(e) => {
                    handlePutProfile(e);
                    setInputErrors((prevErrors) => ({
                      ...prevErrors,
                      nama: "",
                    }));
                  }}
                  placeholder="Nama Kelas"
                />
                {inputErrors.nama && (
                  <FormErrorMessage>{inputErrors.nama}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl isInvalid={inputErrors.email !== ""}>
                <FormLabel>Email</FormLabel>
                <Input
                  borderColor="gray.400"
                  size="lg"
                  id="email"
                  value={Email}
                  onChange={(e) => {
                    handlePutProfile(e);
                    setInputErrors((prevErrors) => ({
                      ...prevErrors,
                      email: "",
                    }));
                  }}
                  placeholder="Masukkan email Anda"
                />
                {inputErrors.email && (
                  <FormErrorMessage>{inputErrors.email}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl>
                <FormLabel>Nomor Telepon</FormLabel>
                <Input
                  borderColor="gray.400"
                  size="lg"
                  id="telepon"
                  type="tel"
                  value={Telepon}
                  onChange={(e) => {
                    handlePutProfile(e);
                  }}
                  placeholder="Masukkan nomor telepon"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Negara</FormLabel>
                <Input
                  borderColor="gray.400"
                  size="lg"
                  id="negara"
                  value={Negara}
                  onChange={(e) => {
                    handlePutProfile(e);
                  }}
                  placeholder="Masukkan negara Anda"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Kota</FormLabel>
                <Input
                  borderColor="gray.400"
                  size="lg"
                  id="kota"
                  value={Kota}
                  onChange={(e) => {
                    handlePutProfile(e);
                  }}
                  placeholder="Masukkan kota tempat tinggal"
                />
              </FormControl>
              <div className="my-4 sm:mt-2 sm:w-[25%]">
                <button
                  type="submit"
                  className="w-full p-3 sm:py-3 bg-gradientkanan rounded-lg sm:rounded- text-white font-semibold text-sm tracking-[1px] hover:scale-110 transition-transform duration-300"
                >
                  Simpan profil saya
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
