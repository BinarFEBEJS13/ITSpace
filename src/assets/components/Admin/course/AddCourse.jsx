import React, { useState } from "react";
import { FaCloudArrowUp } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import { useToast } from "@chakra-ui/react";
import { useGetCategory } from "../../../../services/Admin/category/get-data-category";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { postDataCourse } from "../../../../services/Admin/courses/post-data-course";

export const AddCourse = (props) => {
  const animatedComponents = makeAnimated();
  const [NamaKelas, setNamaKelas] = useState("");
  const [Kategori, setKategori] = useState([]);
  const [KodeKelas, setKodeKelas] = useState("");
  const [TipeKelas, setTipeKelas] = useState("0");
  const [Level, setLevel] = useState("BEGINNER");
  const [Harga, setHarga] = useState(0);
  const [Mentor, setMentor] = useState([]);
  const [Description, setDescription] = useState("");
  const [LinkKelas, setLinkKelas] = useState("");
  const [fileName, setFileName] = useState("No selected file");
  const [selectedFile, setSelectedFile] = useState(null);
  const [Img, setImg] = useState(null);
  const toast = useToast();

  const { handleClose, refetchData } = props;


  const { data: AllCategory } = useGetCategory();

  const dataKategori =
    AllCategory?.data?.map((category) => ({
      value: category.name,
      label: category.name,
    })) || [];

  const mapKategori = Kategori.map((ok)=> ok.value)

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
      setFileName(file.name);
      setImg(file);
    }
  };

console.log(Kategori.map((ok)=> ok.value), "WOWOWOWOWOOWO");

  const handleKelas = async (e) => {
    e.preventDefault();
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
    console.log(mentorArray, "mentorArraymentorArraymentorArray");
    // formData.append("kategori", Kategori)

    // const kategoriArray =
    //   typeof Kategori === "string" ? Kategori.split(",") : [];
    mapKategori.forEach((category, index) => {
      formData.append(`courseCategory[${index}]`, category);
    });

    postDataCourse(formData)
      .then((result) => {
        toast({
          title: result?.response?.data?.message,
          duration: 9000,
          status: "success",
          position: "top",
        });
        refetchData();
      })
      .catch((err) => {
        toast({
          title: err?.response?.data?.message,
          duration: 9000,
          status: "error",
          position: "top",
        });
      });
    handleClose();
  };

  // const handleAddMentor = () => {
  //   if (newMentor.trim() !== "") {
  //     setMentor([...Mentor, newMentor]);
  //     setNewMentor("");
  //   }
  // };

  // const handleRemoveMentor = (index) => {
  //   const updatedMentors = [...Mentor];
  //   updatedMentors.splice(index, 1);
  //   setMentor(updatedMentors);
  // };

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
        className="pop-up overflow-y-auto max-h-[70%] lg:max-h-[95%] rounded-2xl  md:w-[50%] lg:w-[] xl:w-[35%] bg-white absolute"
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
            <div className="flex flex-col">
              <label htmlFor="">Kode Kelas</label>
              <input
                id="KodeKelas"
                type="text"
                className="px-3 py-2 rounded-lg border border-[#D0D0D0]"
                onChange={handleOnchange}
                value={KodeKelas}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Kategori</label>
              <Select
                value={Kategori}
                onChange={(e) => setKategori(e)}
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                options={dataKategori}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>

            {/* Menampilkan tag kategori yang dipilih */}

            <div className="flex flex-col ">
              <label htmlFor="">Nama Kelas</label>
              <input
                id="NamaKelas"
                type="text"
                className="px-3 py-2 rounded-lg border border-[#D0D0D0]"
                value={NamaKelas}
                onChange={handleOnchange}
              />
            </div>

            <div className="flex flex-col ">
              <label htmlFor="TipeKelas">Tipe Kelas</label>
              <select
                id="TipeKelas"
                className="px-3 py-2 rounded-lg border border-[#D0D0D0]"
                onChange={handleOnchange}
                value={TipeKelas}
              >
                <option value="0">GRATIS</option>
                <option value="1">PREMIUM</option>
              </select>
            </div>

            <div className="flex flex-col ">
              <label htmlFor="">Level</label>
              <select
                id="level"
                className="px-3 py-2 rounded-lg border border-[#D0D0D0]"
                value={Level}
                onChange={handleOnchange}
              >
                <option value="BEGINNER">BEGINNER</option>
                <option value="INTERMEDIATE">INTERMEDIATE</option>
                <option value="ADVANCED">ADVANCED</option>
              </select>
            </div>

            {/* <div className="flex flex-col">
              <label htmlFor="">Tambah Mentor</label>
              <div className="flex items-center">
                <input
                  id="mentor"
                  type="text"
                  className="px-3 py-2 rounded-lg border w-full border-[#D0D0D0]"
                  value={newMentor}
                  onChange={(e) => setNewMentor(e.target.value)}
                />
                <button
                  type="button"
                  className="bg-[#a3a2a5c9] text-white p-4 ml-2 rounded-xl"
                  onClick={handleAddMentor}
                >
                  <FaPlus />
                </button>
              </div>
              {Mentor.length > 0 && (
                <div className="mt-2 ">
                  <label htmlFor="">Mentor Terpilih</label>
                  <ul>
                    {Mentor?.map((mentor, index) => (
                      <li key={index} className="flex items-center my-2">
                        <input
                          value={mentor}
                          className="px-3 py-2 rounded-lg border w-full border-[#D0D0D0]"
                        />
                        <button
                          type="button"
                          className="bg-red-500 ml-2 text-white p-4 rounded-xl"
                          onClick={() => handleRemoveMentor(index)}
                        >
                          <FaTrash />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div> */}

            <div className="flex flex-col ">
              <label htmlFor="">Mentor</label>
              <input
                id="mentor"
                type="text"
                className="px-3 py-2 rounded-lg border border-[#D0D0D0]"
                value={Mentor}
                onChange={handleOnchange}
              />
            </div>

            <div className="flex flex-col ">
              <label htmlFor="">Harga</label>
              <input
                id="harga"
                type="text"
                className="px-3 py-2 rounded-lg border border-[#D0D0D0]"
                value={Harga}
                onChange={handleOnchange}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="img">Images</label>
              <div className="py-4 bg-[#ebf3fc63] flex flex-col gap-4 justify-center items-center border-2 border-dashed- w-full h-[300px] pointer rounded-lg">
                <div className="border-4 border-dashed border-[#D0D0D0] rounded-lg h-[70%] w-[90%] flex flex-col items-center justify-center">
                  <input
                    className="opacity-0 translate-y-[3rem] translate-x-8"
                    onChange={handleFileChange}
                    type="file"
                    accept="image/*"
                  />
                  <FaCloudArrowUp size={60} />
                  <p>Upload Your Image Here</p>
                </div>
                <div className="flex justify-between items-center border-4 rounded-lg border-[#D0D0D0] h-[30%] w-[90%]">
                  <div className="px-4 flex items-center text-xl gap-4">
                    {selectedFile && (
                      <>
                        <img width={70} height={40} alt="" src={selectedFile} />
                        <p>{fileName}</p>
                      </>
                    )}
                  </div>
                  {selectedFile && (
                    <div className="bg-red-500 p-2 mx-5 rounded-lg  cursor-pointer">
                      <FaTrash onClick={handleDeleteImage} />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col ">
              <label htmlFor="">Link Kelas</label>
              <input
                id="LinkKelas"
                type="text"
                className="px-3 py-2 rounded-lg border border-[#D0D0D0]"
                value={LinkKelas}
                onChange={handleOnchange}
              />
            </div>

            <div className="flex flex-col ">
              <label htmlFor="">Deskripsi</label>
              <input
                id="description"
                type="text"
                placeholder="Tambahkan Deskripsi"
                className="px-3 py-2 rounded-lg border border-[#D0D0D0]"
                value={Description}
                onChange={handleOnchange}
              />
            </div>

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
