import React, { useState } from "react";
import { FaCloudArrowUp } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  Input,
  useToast,
  Textarea,
} from "@chakra-ui/react";
import { useGetCategory } from "../../../../services/Admin/category/get-data-category";
import Selectt from "react-select";
import makeAnimated from "react-select/animated";
import { postDataCourse } from "../../../../services/Admin/courses/post-data-course";

export const AddCourse = (props) => {
  const animatedComponents = makeAnimated();
  const [NamaKelas, setNamaKelas] = useState("");
  const [Kategori, setKategori] = useState([]);
  const [KodeKelas, setKodeKelas] = useState("");
  const [TipeKelas, setTipeKelas] = useState("");
  const [Level, setLevel] = useState("");
  const [Harga, setHarga] = useState(0);
  const [Mentor, setMentor] = useState([]);
  const [Description, setDescription] = useState("");
  const [LinkKelas, setLinkKelas] = useState("");
  const [fileName, setFileName] = useState("No selected file");
  const [selectedFile, setSelectedFile] = useState(null);
  const [Img, setImg] = useState(null);
  const [inputErrors, setInputErrors] = useState({
    NamaKelas: "",
    Kategori: [],
    KodeKelas: "",
    TipeKelas: "",
    Level: "",
    Harga: "",
    Mentor: [],
    Description: "",
    LinkKelas: "",
  });
  const toast = useToast();

  const { handleClose, refetchData } = props;

  const { data: AllCategory } = useGetCategory();

  const dataKategori =
    AllCategory?.data?.map((category) => ({
      value: category.name,
      label: category.name,
    })) || [];

  const mapKategori = Kategori.map((ok) => ok.value);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
      setFileName(file.name);
      setImg(file);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {
      NamaKelas: "",
      Kategori: [],
      KodeKelas: "",
      TipeKelas: "",
      Level: "",
      Harga: "",
      Mentor: [],
      Description: "",
      LinkKelas: "",
    };

    if (!NamaKelas.trim()) {
      errors.NamaKelas = "Nama Kelas tidak boleh kosong";
      isValid = false;
    }
    if (!Kategori.length) {
      errors.Kategori = "Kategori Kelas tidak boleh kosong";
      isValid = false;
    }
    if (!KodeKelas.trim()) {
      errors.KodeKelas = "Kode Kelas tidak boleh kosong";
      isValid = false;
    }

    if (TipeKelas !== "0" && TipeKelas !== "1") {
      errors.TipeKelas = "Pilih Tipe Kelas";
      isValid = false;
    }

    if (
      Level !== "BEGINNER" &&
      Level !== "INTERMEDIATE" &&
      Level !== "ADVANCED"
    ) {
      errors.Level = "Pilih level Kelas";
      isValid = false;
    }
    
    if (Harga > 0 && TipeKelas === "0") {
      errors.Harga = "Kelas Gratis tidak berbayar";
      isValid = false;
    } else if (TipeKelas === "1" && Harga === 0) {
      errors.Harga = "Masukkan harga untuk kelas premium";
      isValid = false;
    }
    
    if (!Mentor.length) {
      errors.Mentor = "Mentor tidak boleh kosong";
      isValid = false;
    }
    if (!LinkKelas.trim()) {
      errors.LinkKelas = "Link Kelas tidak boleh kosong";
      isValid = false;
    }
    if (!Description.trim()) {
      errors.Description = "Deskripsi Kelas tidak boleh kosong";
      isValid = false;
    }
    setInputErrors(errors);
    return isValid;
  };

  const handleKelas = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    const formData = new FormData();

    formData.append("code", KodeKelas);
    formData.append("title", NamaKelas);
    formData.append("price", Harga);
    formData.append("level", Level);
    formData.append("isPremium", TipeKelas);
    formData.append("description", Description);
    formData.append("image", Img);
    formData.append("groupUrl", LinkKelas);

    const mentorArray = typeof Mentor === "string" ? Mentor.split(",") : [];
    mentorArray.forEach((email, index) => {
      formData.append(`mentorEmail[${index}]`, email);
    });
    // formData.append("kategori", Kategori)

    // const kategoriArray =
    //   typeof Kategori === "string" ? Kategori.split(",") : [];
    mapKategori.forEach((category, index) => {
      formData.append(`courseCategory[${index}]`, category);
    });

    postDataCourse(formData)
      .then((result) => {
        toast({
          title: result?.message || "Berhasil Menambah Kelas Baru",
          duration: 9000,
          status: "success",
          isClosable: true,
          position: "top",
        });
        refetchData();
      })
      .catch((err) => {
        toast({
          title: err?.response?.data?.message,
          duration: 9000,
          status: "error",
          isClosable: true,

          position: "top",
        });
      });
    handleClose();
  };

  const handleOnchange = (e) => {
    if (e) {
      if (e.target.id === "KodeKelas") {
        setKodeKelas(e.target.value);
      }
      if (e.target.id === "kategori") {
        setKategori(e.target.value);
      }
      if (e.target.id === "NamaKelas") {
        setNamaKelas(e.target.value);
      }
      if (e.target.id === "TipeKelas") {
        setTipeKelas(e.target.value);
      setHarga(e.target.value === "0" ? 0 : Harga);
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        Harga: e.target.value === "0" ? "" : prevErrors.Harga,
      }));
      }
      if (e.target.id === "level") {
        setLevel(e.target.value);
      }
      if (e.target.id === "mentor") {
        setMentor(e.target.value);
      }
      if (e.target.id === "harga") {
        setHarga(parseInt(e.target.value));
      }
      if (e.target.id === "LinkKelas") {
        setLinkKelas(e.target.value);
      }
      if (e.target.id === "description") {
        setDescription(e.target.value);
      }
    }
  };

  const handleDeleteImage = () => {
    setFileName("");
    setSelectedFile(null);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center fixed t-2 l-[50px] bg-[rgba(0,0,0,0.4)] ">
      <form
        encType="multipart/form-data"
        onSubmit={handleKelas}
        className="pop-up overflow-y-auto max-h-[85%] lg:max-h-[95%] md:max-h-[95%] rounded-2xl w-[80%] xl:w-[65%] 2xl:w-[45%] bg-white absolute"
      >
        <i
          onClick={props.handleClose}
          className="ri-close-fill absolute text-[#6148FF] right-3 top-3 font-bold text-3xl"
        ></i>
        <div className="flex items-center justify-center flex-col sm:gap-5">
          <h1 className="font-bold sm:text-xl text-[#6148FF] my-2">
            Tambah Kelas
          </h1>
          <div className="flex flex-col gap-4 w-4/5 sm:w-4/5 ">
            <FormControl isInvalid={inputErrors.KodeKelas !== ""}>
              <FormLabel>Kode Kelas</FormLabel>
              <Input
                id="KodeKelas"
                value={KodeKelas}
                placeholder="Kode Kelas"
                onChange={(e) => {
                  handleOnchange(e);
                  setInputErrors((prevErrors) => ({
                    ...prevErrors,
                    KodeKelas: "",
                  }));
                }}
                onBlur={validateForm}
              />
              {inputErrors.KodeKelas && (
                <FormErrorMessage>{inputErrors.KodeKelas}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={inputErrors.Kategori.length !== 0}>
              <FormLabel>Kategori</FormLabel>
              <Selectt
                value={Kategori}
                onChange={(e) => {
                  setKategori(e);
                  setInputErrors((prevErrors) => ({
                    ...prevErrors,
                    Kategori: [],
                  }));
                }}
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                placeholder="Pilih kategori Kelas"
                options={dataKategori}
                className="basic-multi-select"
                classNamePrefix="select"
              />
              {inputErrors.Kategori && (
                <FormErrorMessage>{inputErrors.Kategori}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={inputErrors.NamaKelas !== ""}>
              <FormLabel>Nama Kelas</FormLabel>
              <Input
                id="NamaKelas"
                value={NamaKelas}
                onChange={(e) => {
                  handleOnchange(e);
                  setInputErrors((prevErrors) => ({
                    ...prevErrors,
                    NamaKelas: "",
                  }));
                }}
                onBlur={validateForm}
                placeholder="Nama Kelas"
              />
              {inputErrors.NamaKelas && (
                <FormErrorMessage>{inputErrors.NamaKelas}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl
              isInvalid={
                inputErrors.TipeKelas !== "" &&
                (inputErrors.TipeKelas !== "1" || inputErrors.TipeKelas !== "0")
              }
            >
              <FormLabel>Tipe Kelas</FormLabel>
              <Select
                id="TipeKelas"
                value={TipeKelas}
                onChange={(e) => {
                  handleOnchange(e);
                  setInputErrors((prevErrors) => ({
                    ...prevErrors,
                    TipeKelas: "",
                  }));
                }}
                placeholder="Pilih Tipe Kelas"
                onBlur={validateForm}
              >
                <option value="0">GRATIS</option>
                <option value="1">PREMIUM</option>
              </Select>
              {inputErrors.TipeKelas && (
                <FormErrorMessage>{inputErrors.TipeKelas}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl
              isInvalid={
                inputErrors.Level !== "" &&
                (inputErrors.Level !== "BEGINNER" ||
                  inputErrors.Level !== "INTERMEDIATE" ||
                  inputErrors.Level !== "ADVANCED")
              }
            >
              <FormLabel>Level</FormLabel>
              <Select
                id="level"
                value={Level}
                placeholder="Pilih level kelas"
                onChange={(e) => {
                  handleOnchange(e);
                  setInputErrors((prevErrors) => ({
                    ...prevErrors,
                    Level: "",
                  }));
                }}
                onBlur={validateForm}
              >
                <option value="BEGINNER">BEGINNER</option>
                <option value="INTERMEDIATE">INTERMEDIATE</option>
                <option value="ADVANCED">ADVANCED</option>
              </Select>
              {inputErrors.Level && (
                <FormErrorMessage>{inputErrors.Level}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={inputErrors.Mentor.length !== 0}>
              <FormLabel>Mentor</FormLabel>
              <Input
                id="mentor"
                value={Mentor}
                onChange={(e) => {
                  handleOnchange(e);
                  setInputErrors((prevErrors) => ({
                    ...prevErrors,
                    Mentor: [],
                  }));
                }}
                onBlur={validateForm}
                placeholder="Mentor Kelas"
              />
              {inputErrors.Mentor && (
                <FormErrorMessage>{inputErrors.Mentor}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={inputErrors.Harga !== ""}>
              <FormLabel>Harga</FormLabel>
              <Input
                id="harga"
                value={Harga}
                onChange={(e) => {
                  handleOnchange(e);
                  setInputErrors((prevErrors) => ({
                    ...prevErrors,
                    Harga: "",
                  }));
                }}
                onBlur={validateForm}
                placeholder="Harga Kelas"
              />
              {inputErrors.Harga && (
                <FormErrorMessage>{inputErrors.Harga}</FormErrorMessage>
              )}
            </FormControl>

            <div className="flex flex-col gap-1">
              <FormLabel>Images</FormLabel>
              <div className="py-4 bg-[#e6e9ed36] flex flex-col gap-4 justify-center items-center border w-full h-[300px] pointer rounded-lg">
                <div className="border-[3px] border-dashed border-[#D0D0D0] rounded-lg h-full w-[95%] flex flex-col items-center justify-center">
                  <input
                    className="opacity-0 translate-y-[3rem] translate-x-8"
                    onChange={handleFileChange}
                    type="file"
                    accept="image/*"
                  />
                  <FaCloudArrowUp size={60} />
                  <p>Upload Your Image Here</p>
                </div>
                {selectedFile && (
                  <div className="flex py-4 justify-between items-center border-2 rounded-lg border-[#D0D0D0] h-[30%] w-[95%]">
                    <div className="px-4 flex items-center text-xl gap-4">
                      <img width={70} height={40} alt="" src={selectedFile} />
                      <p className="text-[12px] ">{fileName}</p>
                    </div>
                    <div className="bg-red-500 p-2 mx-5 rounded-lg text-white  cursor-pointer">
                      <FaTrash onClick={handleDeleteImage} />
                    </div>
                  </div>
                )}
              </div>
            </div>

            <FormControl isInvalid={inputErrors.LinkKelas !== ""}>
              <FormLabel>Link Kelas</FormLabel>
              <Input
                id="LinkKelas"
                value={LinkKelas}
                onChange={(e) => {
                  handleOnchange(e);
                  setInputErrors((prevErrors) => ({
                    ...prevErrors,
                    LinkKelas: "",
                  }));
                }}
                onBlur={validateForm}
                placeholder="Link Kelas"
              />
              {inputErrors.LinkKelas && (
                <FormErrorMessage>{inputErrors.LinkKelas}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={inputErrors.Description !== ""}>
              <FormLabel>Deskripsi</FormLabel>
              <Textarea
                id="description"
                value={Description}
                onChange={(e) => {
                  handleOnchange(e);
                  setInputErrors((prevErrors) => ({
                    ...prevErrors,
                    Description: "",
                  }));
                }}
                onBlur={validateForm}
                placeholder="Deskripsi Kelas"
              />
              {inputErrors.Description && (
                <FormErrorMessage>{inputErrors.Description}</FormErrorMessage>
              )}
            </FormControl>

            <div className="text-white flex gap-4 font-bold text-sm sm:text-base my-4">
              <button
                type="submit"
                className="bg-[#6148FF] w-1/2 rounded-lg p-3"
              >
                Simpan
              </button>
              <button
                onClick={() => handleClose()}
                className="bg-gray-200 w-1/2 text-black rounded-lg p-3"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
