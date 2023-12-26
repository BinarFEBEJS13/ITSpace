import React, { useEffect, useMemo, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { usePostDataChapters } from "../../../services/Admin/chapters/post-chapters";
import { useGetDataChapters } from "../../../services/Admin/chapters/get-chapters";
import { useParams } from "react-router-dom";
import { useUpdateChapter } from "../../../services/Admin/chapters/edit-chapter";
import { useGetDataChaptersID } from "../../../services/Admin/chapters/get-chapterID";
import { useToast } from "@chakra-ui/react";

export const AddChapterPopup = ({ setAddChapters, selectedChapter, Type, courseId }) => {
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

  
  const { mutate: AddChapters, data: postChapter } = usePostDataChapters()

  const { mutate: UpdateChapter } = useUpdateChapter();


  const dataType = useMemo(() => (Type ? Type : "add"), [Type]);
  console.log(dataType, "MODE");

  useEffect(() => {
    if (selectedChapter.id && dataType === "edit") {
      setJudul(selectedChapter.title);
      setTipeKelas(selectedChapter.isPremium);
      setChapter(selectedChapter.number);
      // setEdit()
    }
  }, [selectedChapter]);

  useEffect(() => {
  
  }, [])
  

  const validateForm = () => {
    let isValid = true;
    const errors = {
      judul: "",
      tipeKelas: "",
      chapter: "",
    };

    if (!Judul.trim()) {
      errors.judul = "Judul Chapter cannot be empty";
      isValid = false;
    }

    if (TipeKelas !== "0" && TipeKelas !== "1") {
      errors.tipeKelas = "Invalid Tipe Kelas";
      isValid = false;
    }

    if (!String(Chapter).trim()) {
      errors.chapter = "Chapter cannot be empty";
      isValid = false;
    } else if (chapterBYID && chapterBYID.number === parseInt(Chapter)) {
      errors.chapter = "Chapter already exists";
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

    if(dataType === "add"){
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
      UpdateChapter({
        chapterId: selectedChapter.id,
        ...chapterData,
        
      });
      toast({
        title : "Success",
        description : "Chapter Edited",
        status: "info",
        duration : 9000,
        size: 'lg',
        position : "bottom-right",
        colorScheme : "orange"
      })
    } else {
      if (postChapter?.data?.response?.status === 400) {
        toast({
          title : "Success",
          description : "SALAHHHH",
          status: "error",
          duration : 9000,
          size: "lg",
          position : "bottom-right"
        })
        return;
      }
      else{
        AddChapters(chapterData);
        toast({
          title : "Success",
          description : "Chapter successfully added",
          status: "success",
          duration : 9000,
          size: "lg",
          position : "bottom-right"
        })
      }
      }
    
    toggleClose();
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center fixed t-2 l-[50px] bg-[rgba(0,0,0,0.4)] ">
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="pop-up overflow-y-auto max-h-[70%] lg:max-h-[95%] rounded-2xl w-11/12 md:w-3/4 xl:w-[20%] bg-white absolute"
      >
        <FaXmark
          onClick={toggleClose}
          className="ri-close-fill absolute text-[#6148FF] right-3 top-3 font-bold text-3xl"
        />
        <div className="flex items-center justify-center flex-col sm:gap-5">
          <h1 className="font-bold sm:text-xl text-[#6148FF] my-2">
            Tambah Chapter
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
                className="bg-[#FF0000] w-1/2 rounded-[25px] p-3"
              >
                Submit
              </button>
              <button
                onClick={toggleClose}
                className="bg-[#6148FF] w-1/2 rounded-[25px] p-3"
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
