import React, { useState } from "react";
import { FaCloudArrowUp } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa6";
import { usePostDataQuery } from "../../services/Admin/courses/post-data-course";
import { useUploadImage } from "../../services/Admin/courses/post-image-course";

export const AddPopup = (props) => {
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

  const { handleClose } = props;

const {mutate: addKelas} = usePostDataQuery({
  onSuccess: () => {
    props.refetch()
  }
})



  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // setSelectedFile(URL.createObjectURL(file));
      setFileName(file);

      // setSelectedFile(file);
    }
  };
  const editData = (props) => {
    console.log(props);
    if (props.length === 0) {
      return [];
    } else {
      return props.split(",");
    }
  };

  const handleKelas =  (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("code", KodeKelas);
    formData.append("title", NamaKelas);
    formData.append("price", Harga);
    formData.append("level", Level);
    formData.append("isPremium", TipeKelas);
    formData.append("description", Description);
    formData.append("image", fileName);
    formData.append("groupUrl", LinkKelas);
    Mentor.mentorEmail.forEach((email, index) => {
      formData.append(`mentorEmail[${index}]`, email);
    });
  
    [Kategori].courseCategory.forEach((category, index) => {
      formData.append(`courseCategory[${index}]`, category);
    });
   

    addKelas(formData);
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
    <div className="w-screen h-screen flex items-center justify-center  fixed t-2 l-[50px] bg-[rgba(0,0,0,0.8)] ">
      <form
      encType="multipart/form-data"
        onSubmit={handleKelas}
        className="pop-up overflow-y-auto max-h-[70%] lg:max-h-[95%] rounded-2xl w-11/12 md:w-3/4 xl:w-5/12 bg-white absolute"
      >
        <i
          onClick={props.handleClose}
          className="ri-close-fill absolute text-[#6148FF] right-3 top-3 font-bold text-3xl"
        ></i>
        <div className="flex items-center justify-center flex-col sm:gap-5">
          <h1 className="font-bold sm:text-xl text-[#6148FF] my-2">
            Tambah Kelas
          </h1>
          <div className="flex flex-col gap-2 w-4/5 sm:w-4/5 ">
            <div className="flex flex-col">
              <label htmlFor="">Kode Kelas</label>
              <input
                id="KodeKelas"
                type="text"
                className="px-3 py-2 rounded-2xl border border-[#D0D0D0]"
                onChange={handleOnchange}
                value={KodeKelas}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Kategori</label>
              <input
                id="kategori"
                type="text"
                className="px-3 py-2 rounded-2xl border border-[#D0D0D0]"
                onChange={handleOnchange}
                value={Kategori}
              />
            </div>

            <div className="flex flex-col ">
              <label htmlFor="">Nama Kelas</label>
              <input
                id="NamaKelas"
                type="text"
                className="px-3 py-2 rounded-2xl border border-[#D0D0D0]"
                value={NamaKelas}
                onChange={handleOnchange}
              />
            </div>

            <div className="flex flex-col ">
              <label htmlFor="TipeKelas">Tipe Kelas</label>
              <select
                id="TipeKelas"
                className="px-3 py-2 rounded-2xl border border-[#D0D0D0]"
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
                className="px-3 py-2 rounded-2xl border border-[#D0D0D0]"
                value={Level}
                onChange={handleOnchange}
              >
                <option value="BEGINNER">BEGINNER</option>
                <option value="INTERMEDIATE">INTERMEDIATE</option>
                <option value="ADVANCED">ADVANCED</option>
              </select>
            </div>

            <div className="flex flex-col ">
              <label htmlFor="">Mentor</label>
              <input
                id="mentor"
                type="text"
                className="px-3 py-2 rounded-2xl border border-[#D0D0D0]"
                value={Mentor}
                onChange={handleOnchange}
              />
            </div>

            <div className="flex flex-col ">
              <label htmlFor="">Harga</label>
              <input
                id="harga"
                type="text"
                className="px-3 py-2 rounded-2xl border border-[#D0D0D0]"
                value={Harga}
                onChange={handleOnchange}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="img">Images</label>
              <div
                className="py-4 bg-[#ebf3fc63] flex flex-col gap-4 justify-center items-center border-2 border-dashed- w-full h-[300px] pointer rounded-lg"
              >
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
                className="px-3 py-2 rounded-2xl border border-[#D0D0D0]"
                value={LinkKelas}
                onChange={handleOnchange}
              />
            </div>

            <div className="flex flex-col ">
              <label htmlFor="">Description</label>
              <input
                id="description"
                type="text"
                className="px-3 py-2 rounded-2xl border border-[#D0D0D0]"
                value={Description}
                onChange={handleOnchange}
              />
            </div>

            <div className="text-white flex gap-2 font-bold text-sm sm:text-base my-4">
              <button
                type="submit"
                className="bg-[#FF0000] w-1/2 rounded-[25px] p-3"
              >
                Upload Video
              </button>
              <button
                type="submit"
                className="bg-[#6148FF] w-1/2 rounded-[25px] p-3"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
