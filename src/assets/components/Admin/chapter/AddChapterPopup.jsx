import React, { useEffect, useMemo, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { usePostDataChapters,postDataChapter } from "../../../../services/Admin/chapters/post-chapters";
import { useGetDataChapters } from "../../../../services/Admin/chapters/get-chapters";
import { useParams } from "react-router-dom";
import { useUpdateChapter,updateChapter } from "../../../../services/Admin/chapters/edit-chapter";
import { useGetDataChaptersID } from "../../../../services/Admin/chapters/get-chapterID";
import { useToast } from "@chakra-ui/react";

export const AddChapterPopup = ({
  setAddChapters,
  selectedChapter,
  Type,
  courseId,
  reloadData,
}) => {
  const [Judul, setJudul] = useState("");
  const [TipeKelas, setTipeKelas] = useState("0");
  const [Chapter, setChapter] = useState(0);
  const [inputErrors, setInputErrors] = useState({
    judul: "",
    tipeKelas: "",
    chapter: "",
  });

  const toast = useToast();

  const { data: chapterBYID } = useGetDataChaptersID({
    courseId: courseId,
    chapterId: selectedChapter.id,
  });

  const { id } = useParams();

  const { data: Chapters } = useGetDataChapters({
    courseId: id,
  });



  const dataType = useMemo(() => (Type ? Type : "add"), [Type]);

  useEffect(() => {
    if (selectedChapter.id && dataType === "edit") {
      setJudul(selectedChapter.title);
      setTipeKelas(selectedChapter.isPremium === true? "1" : "0");
      setChapter(selectedChapter.number);
      // setEdit()
    }
  }, [selectedChapter]);

  const validateForm = () => {
    let isValid = true;
    const errors = {
      judul: "",
      tipeKelas: "",
      chapter: "",
    };

    if (!Judul.trim()) {
      errors.judul = "Judul Chapter tidak boleh kosong";
      isValid = false;
    }

    if (TipeKelas !== "0" && TipeKelas !== "1") {
      errors.tipeKelas = "Invalid Tipe Kelas";
      isValid = false;
    }

    if (!String(Chapter).trim()) {
      errors.chapter = "Chapter tidak boleh kosong";
      isValid = false;
    }
    setInputErrors(errors);
    return isValid;
  };

  const handleonChange = (e) => {
    if (e) {
      if (e.target.id === "Judul") {
        setJudul(e.target.value);
      }
      if (e.target.id === "TipeKelas") {
        setTipeKelas(e.target.value);
      }
      if (e.target.id === "Chapter") {
        setChapter(parseInt(e.target.value));
      }
    }
  };

  const toggleClose = () => {
    setAddChapters(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (dataType === "add") {
      if (!validateForm()) {
        return;
      }
    }

    const chapterData = {
      courseId: courseId,
      isPremium: TipeKelas,
      number: Chapter,
      title: Judul,
    };

    if (dataType === "edit" && selectedChapter.id) {
      updateChapter({
        chapterId: selectedChapter.id,
        ...chapterData,
      })
        .then((result) => {
          toast({
            title: result?.data?.message,
            description: `Anda Telah Membuat chapter Dengan judul ${result?.data?.data?.title} `,
            status: "info",
            duration: 9000,
            size: "lg",
            position: "top",
            colorScheme: "orange",
          });
        reloadData()
        })
        .catch((err) => {
          toast({
            title: err?.response?.data?.message,
            description: "Maaf terjadi kesalahan tolong cek kembali",
            status: "error",
            duration: 9000,
            size: "lg",
            position: "top",
          });
        });
    } else {
      postDataChapter(chapterData).then((result) => {
        toast({
          title: result?.data?.message,
          description: `Anda Telah Membuat chapter Dengan judul ${result?.data?.data?.title} `,
          status: "success",
          duration: 9000,
          size: "lg",
          position: "bottom-right",
        });
        reloadData()
      }).catch((err) => {
        toast({
          title: err?.response?.data?.message,
          description: "Ada Terjadi Kesalahan Tolong Periksa Kembali",
          status: "error",
          duration: 9000,
          size: "lg",
          position: "bottom-right",
        });
      });;
     
    }

    toggleClose();
  };

  return (
    <div className="w-screen h-screen flex items-start justify-center fixed t-2 l-[50px] bg-[rgba(0,0,0,0.4)] ">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="pop-up overflow-y-auto  mt-[3rem]  rounded-lg w-[50%] xl:w-[25%] bg-white absolute"
      >
        <FaXmark
          onClick={toggleClose}
          className="ri-close-fill absolute text-[#6148FF] right-3 top-3 font-bold text-3xl"
        />
        <div className="flex items-center justify-center flex-col sm:gap-5">
          <h1 className="font-bold sm:text-xl text-[#6148FF] my-2">
          {dataType === "edit" ? "Edit Chapter" : "Tambah Chapter"}
          </h1>
          <div className="flex flex-col gap-2 w-4/5 sm:w-4/5 ">
            <div className="flex flex-col ">
              <label htmlFor="">Judul Chapter</label>
              <input
                onChange={handleonChange}
                id="Judul"
                type="text"
                className={`px-3 py-2 rounded-2xl border ${
                  inputErrors.judul ? "border-red-500" : "border-[#D0D0D0]"
                }`}
                value={Judul}
              />
              {inputErrors.judul && (
                <p className="text-red-500 text-sm">{inputErrors.judul}</p>
              )}
            </div>

            <div className="flex flex-col ">
              <label htmlFor="TipeKelas">Tipe Kelas</label>
              <select
                id="TipeKelas"
                className="px-3 py-2 rounded-2xl border border-[#D0D0D0]"
                onChange={handleonChange}
                value={TipeKelas}
              >
                <option value="0">GRATIS</option>
                <option value="1">PREMIUM</option>
              </select>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="">Chapter</label>
              <input
                id="Chapter"
                onChange={handleonChange}
                type="text"
                className={`px-3 py-2 rounded-2xl border ${
                  inputErrors.chapter ? "border-red-500" : "border-[#D0D0D0]"
                }`}
                value={Chapter}
              />
              {inputErrors.chapter && (
                <p className="text-red-500 text-sm">{inputErrors.chapter}</p>
              )}
            </div>
            <div className="text-white flex justify-end gap-2 font-bold text-sm sm:text-base my-4">
              <button
                type="submit"
                className="bg-[#6148FF] w-1/2 rounded-lg p-3"
              >
                {dataType === "edit" ? "Edit" : "Tambah"}
              </button>
              <button
                onClick={toggleClose}
                className="bg-gray-200 text-black w-1/2 rounded-lg p-3"
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