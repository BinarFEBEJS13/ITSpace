import React, { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import {
  postDataVideo,
} from "../../../../services/Admin/videos/post-data-videos";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useGetDataChaptersID } from "../../../../services/Admin/chapters/get-chapterID";

export const AddVideo = ({
  setaddLinkPopUp,
  courseId,
  selectedChapter,

}) => {
  const [Judul, setJudul] = useState("");
  const [Deskripsi, setDeskripsi] = useState("");
  const [Link, setLink] = useState("");
  const [Durasi, setDurasi] = useState(0);
  const [Number, setNumber] = useState(0);
  const [inputErrors, setInputErrors] = useState({
    Judul: "",
    Deskripsi: "",
    Link: "",
    Durasi: "",
    Number: "",
  });

  const toast = useToast();

  const { data: chapterBYID } = useGetDataChaptersID({
    courseId: courseId,
    chapterId: selectedChapter.id,
  });

  const handleonChange = (e) => {
    if (e) {
      if (e.target.id === "title") {
        setJudul(e.target.value);
      }
      if (e.target.id === "desc") {
        setDeskripsi(e.target.value);
      }
      if (e.target.id === "link") {
        setLink(e.target.value);
      }
      if (e.target.id === "durasi") {
        setDurasi(parseInt(e.target.value));
      }
      if (e.target.id === "number") {
        setNumber(parseInt(e.target.value));
      }
    }
  };
  const validateForm = () => {
    let isValid = true;
    const errors = {
      Judul: "",
      Deskripsi: "",
      Link: "",
      Durasi: "",
      Number: "",
    };

    if (!Judul.trim()) {
      errors.Judul = "Judul video tidak boleh kosong";
      isValid = false;
    }
    if (!Deskripsi.trim()) {
      errors.Deskripsi = "Deskripsi video tidak boleh kosong";
      isValid = false;
    }
    if (!Link.trim()) {
      errors.Link = "Link video tidak boleh kosong";
      isValid = false;
    }
    if (Durasi === 0) {
      errors.Durasi = "Durasi video tidak boleh kosong";
      isValid = false;
    }
    if (Number === 0) {
      errors.Number = "Angka chapter tidak boleh kosong";
      isValid = false;
    }

    setInputErrors(errors);
    return isValid;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    await postDataVideo({
      chapterId: selectedChapter.id,
      courseId: courseId,
      title: Judul,
      description: Deskripsi,
      url: Link,
      duration: Durasi,
      number: Number,
    }).then((result) => {
      console.log(result, "QUACKK");
        toast({
          title: result?.data?.message,
          duration: 5000,
        isClosable: true,
          status: "success",
          position: "top",
        });
        return result
      })
      .catch((err) => {
        toast({
          title: err?.response?.data?.message,
          duration: 5000,
          status: "error",
        isClosable: true,
          position: "top",
        });
        return err;
      });
    setaddLinkPopUp(false);
  };

  const toggleClose = () => {
    setaddLinkPopUp(false);
  };
  return (
    <div className="w-full z-40 h-screen fixed top-0 left-0 bg-[rgba(0,0,0,0.4)] flex items-start justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white flex rounded-lg max-h-[60%] shadow-lg flex-col overflow-y-auto  w-[80%] md:w-[70%] xl:w-[30%]  mt-[5rem]"
      >
        <div className="flex justify-between w-full px-6 my-4">
          <h1 className="font-bold text-2xl">Tambah Video</h1>
          <FaXmark
            className="font-bold text-2xl cursor-pointer"
            onClick={toggleClose}
          />
        </div>
        <div className="flex flex-col gap-2 w-full px-6">
          <FormControl isInvalid={inputErrors.Judul !== ""}>
            <FormLabel>Judul Video</FormLabel>
            <Input
              id="title"
              onChange={(e) => {
                handleonChange(e);
                setInputErrors((prevErrors) => ({
                  ...prevErrors,
                  Judul: "",
                }));
              }}
              onBlur={validateForm}
              placeholder="Judul video"
            />
            {inputErrors.Judul && (
              <FormErrorMessage>{inputErrors.Judul}</FormErrorMessage>
            )}{" "}
          </FormControl>
          <FormControl isInvalid={inputErrors.Link !== ""}>
            <FormLabel>Link Video</FormLabel>
            <Input
              id="link"
              onChange={(e) => {
                handleonChange(e);
                setInputErrors((prevErrors) => ({
                  ...prevErrors,
                  Link: "",
                }));
              }}
              onBlur={validateForm}
              placeholder="Link video "
            />
            {inputErrors.Link && (
              <FormErrorMessage>{inputErrors.Link}</FormErrorMessage>
            )}{" "}
          </FormControl>
          
          <FormControl isInvalid={inputErrors.Durasi !== ""}>
            <FormLabel>Durasi Video</FormLabel>
            <Input
              size="lg"
              id="durasi"
              onChange={(e) => {
                handleonChange(e);
                setInputErrors((prevErrors) => ({
                  ...prevErrors,
                  Durasi: "",
                }));
              }}
              onBlur={validateForm}
              placeholder="Durasi video dalam menit"
            />
            {inputErrors.Durasi && (
              <FormErrorMessage>{inputErrors.Durasi}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={inputErrors.Number !== ""}>
            <FormLabel>Video Number</FormLabel>
            <Input
              id="number"
              size="lg"
              onChange={(e) => {
                handleonChange(e);
                setInputErrors((prevErrors) => ({
                  ...prevErrors,
                  Number: "",
                }));
              }}
              onBlur={validateForm}
              placeholder="Urutan video contoh : 1,2..."
            />
            {inputErrors.Number && (
              <FormErrorMessage>{inputErrors.Number}</FormErrorMessage>
            )}{" "}
          </FormControl>
          <FormControl isInvalid={inputErrors.Deskripsi !== ""}>
            <FormLabel>Video Description</FormLabel>
            <Textarea
              size="lg"
              id="desc"
              onChange={(e) => {
                handleonChange(e);
                setInputErrors((prevErrors) => ({
                  ...prevErrors,
                  Deskripsi: "",
                }));
              }}
              onBlur={validateForm}
              placeholder="Deskripsi singkat tentang isi video"
            />
            {inputErrors.Deskripsi && (
              <FormErrorMessage>{inputErrors.Deskripsi}</FormErrorMessage>
            )}
          </FormControl>
        </div>
        <div className="flex gap-3 justify-end items-end w-full px-5 my-5">
          <button
            className="bg-[#6148FF] text-white rounded-lg px-5 py-3"
            type="submit"
          >
            Add
          </button>
          <button
            onClick={toggleClose}
            className="bg-gray-200 text-black rounded-lg p-3"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
