import React, { useState } from "react";
import Filter from "../../assets/svg/filter.svg";
import Tambah from "../../assets/svg/add-admin.svg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import SearhIcon from "../../assets/svg/search-admin.svg";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  useDisclosure,
  Spinner,
  useToast,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
} from "@chakra-ui/react";
import { useGetCourse } from "../../services/Admin/courses/get-data-courses";
import { useDeleteCourse } from "../../services/Admin/courses/delete-data-courses";
import { AddPopup } from "./AddPopup";
import { EditPopup } from "./EditPopup";
import { IoChevronDownCircleOutline } from "react-icons/io5";

export const TableKelas = () => {
  const [AddPopupForm, setAddPopupForm] = useState(false);
  const [PopupEdit, setPopupEdit] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [selectedCourseData, setSelectedCourseData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [Search, setSearch] = useState("");
  const [SearchBtn, setSearchBtn] = useState("");
  const [CategoryFilter, setCategoryFilter] = useState("");
  const [levelFilter, setlevelFilter] = useState("");
  const toast = useToast();

  const {
    data: Kelas,
    refetch: refetchData,
    isLoading,
  } = useGetCourse({
    page: currentPage,
    limit: 4,
    se: Search,
    category: CategoryFilter,
    level: levelFilter,
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEdit = (courseId) => {
    const selectedCourse = Kelas?.data?.courses.find(
      (course) => course.id === courseId
    );

    setSelectedCourseData(selectedCourse);
    setPopupEdit(true);
  };

  const { mutate: deleteCourse } = useDeleteCourse({
    onSuccess: () => {
      refetchData();
      onClose();
      toast({
        title: "Course Deleted",
        status: "success",
        position: "bottom-left",
      });
    },
  });

  const handleFilterByLevel = (selectedLevel) => {
    setlevelFilter(selectedLevel);
    setCurrentPage(1);
  };

  const handleFilterByCategory = (selectedCategory) => {
    setCategoryFilter(selectedCategory);
    setCurrentPage(1);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleToggleSearch = (e) => {
    setSearchBtn(setSearch(e.target.value));
  };

  const handleOpen = () => {
    setAddPopupForm(true);
  };

  const handleClose = () => {
    setAddPopupForm(false);
    setPopupEdit(false);
  };
  console.log(Kelas, "KELASSSSSSS N");
  const cancelRef = React.useRef();
  return (
    <div className="relative">
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete Course
            </AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              Are you sure you want to delete this course?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={() => deleteCourse(selectedCourseId)}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
      <div className="fixed top-0 left-0 z-50">
        {AddPopupForm && (
          <AddPopup
            handleClose={handleClose}
            refetchData={refetchData}
            selectedCourseData={selectedCourseData}
          />
        )}
        {PopupEdit && (
          <EditPopup
            handleClose={handleClose}
            refetchData={refetchData}
            selectedCourseData={selectedCourseData}
            setSelectedCourseData={setSelectedCourseData}
          />
        )}
      </div>
      <div className="mx-[2rem] md:mx-[2rem] flex justify-between ">
        <h1 className="font-bold text-normal sm:text-xl">Kelola Kelas</h1>
        <div className="flex gap-2 sm:gap-3">
          <h4
            onClick={handleOpen}
            className="flex items-center gap-2 border-2 px-4 py-1 font-bold text-base rounded-2xl bg-[#6148FF] border-[#6148FF] text-white"
          >
            <img src={Tambah} alt="" />
            Add
          </h4>
          <div>
            <Menu>
              <MenuButton
                border="1px"
                borderRadius="16px"
                color="#6148FF"
                borderColor="6148FF"
                colorScheme="white"
                as={Button}
                leftIcon={<IoChevronDownCircleOutline />}
              >
                Filter
              </MenuButton>
              <MenuList>
                <MenuOptionGroup color="#6148FF" title="Level" type="radio">
                  <MenuItemOption _hover={{ bg: '#73CA5C' }}
                    onClick={() => handleFilterByLevel("BEGINNER")}
                  >
                    Beginner
                  </MenuItemOption>
                  <MenuItemOption _hover={{ bg: 'orange' }}
                    onClick={() => handleFilterByLevel("INTERMEDIATE")}
                  >
                    Intermediate
                  </MenuItemOption>
                  <MenuItemOption _hover={{ bg: '#FF0000' }}
                    onClick={() => handleFilterByLevel("ADVANCED")}
                  >
                    Advanced
                  </MenuItemOption>
                </MenuOptionGroup>
                <MenuDivider />
                <MenuOptionGroup color="#6148FF" title="Category">
                  {Kelas?.data?.courses?.courseCategory?.map(
                    (filterCategory, index) => (
                      <MenuItemOption
                        key={index}
                        onClick={() =>
                          handleFilterByCategory(filterCategory.category.name)
                        }
                      >
                        tesss
                      </MenuItemOption>
                    )
                  )}
                </MenuOptionGroup>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleToggleSearch}
        action=""
        className="mx-[2rem]  md:mx-[2rem] relative mt-5"
      >
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
            setSearchBtn(true);
          }}
          placeholder="Search Nama Kelas"
          className="sm pl-5 pr-10 border border-[#6148FF] w-full rounded-md py-2 flex items-center"
        />
        <button
          type="submit"
          onClick={handleToggleSearch}
          className="flex justify-end items-center"
        >
          <img className=" p-2 absolute right-2 top-0" src={SearhIcon} alt="" />
        </button>
      </form>
      <div
        className={
          isLoading
            ? "overflow-hidden"
            : "table-kelas mx-[2rem] md:mx-[2rem] overflow-x-auto"
        }
      >
        {isLoading ? (
          <div className="flex justify-center mt-[5rem]">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="#6148FF"
              size="xl"
            />
          </div>
        ) : (
          <table className="w-full mt-5">
            <thead className="bg-[#EBF3FC] font-normal text-md text-left">
              <tr>
                <th>Kode Kelas</th>
                <th>Kategori</th>
                <th>Nama Kelas</th>
                <th>Tipe Kelas</th>
                <th>Level</th>
                <th>Mentor</th>
                <th>Harga Kelas</th>
                <th>Image</th>
                <th>Description</th>
                <th>Link Group</th>
                <th className="text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="font-bold text-sm">
              {Kelas?.data?.courses
                .filter((kelas) =>
                  kelas.title.toLowerCase().includes(Search.toLowerCase())
                )
                .map((kelas, index) => (
                  <tr key={index}>
                    <td>{kelas.code}</td>
                    <td>
                      {kelas.courseCategory.map((kat, index) => (
                        <span key={index}>{kat.category.name} </span>
                      ))}
                    </td>
                    <td>{kelas.title}</td>
                    <td>
                      <span
                        style={{
                          color:
                            kelas.isPremium === false ? "#73CA5C" : "#6148FF",
                        }}
                      >
                        {kelas.isPremium === false ? "GRATIS" : "PREMIUM"}
                      </span>
                    </td>
                    <td>
                      <span
                        className={`rounded-[50px] p-2  text-white ${
                          kelas.level === "BEGINNER"
                            ? " bg-[#73CA5C] "
                            : kelas.level === "INTERMEDIATE"
                            ? "bg-[orange]"
                            : "bg-[#FF0000]"
                        } `}
                      >
                        {kelas.level}
                      </span>
                    </td>
                    <td>
                      {kelas.mentor.map((mentor, index) => (
                        <span key={index}>
                          {mentor.author.profile.name + ","}{" "}
                        </span>
                      ))}
                    </td>
                    <td>Rp.{kelas.price}</td>
                    <td>
                      <img
                        src={kelas.thumbnailUrl}
                        className="w-[100px]"
                        alt=""
                      />
                    </td>
                    <td>{kelas.description}</td>
                    <td>{kelas.groupUrl}</td>
                    <td className="flex items-center mt-4 gap-2 text-white">
                      <button
                        onClick={() => handleEdit(kelas.id)}
                        className="bg-[#6148FF] rounded-xl py-1 px-4"
                      >
                        Ubah
                      </button>
                      <button
                        onClick={() => {
                          setSelectedCourseId(kelas.id);
                          onOpen();
                        }}
                        className="bg-[#FF0000] rounded-xl py-1 px-4"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
      <div
        className={
          isLoading ? "hidden " : "flex mt-2 gap-2 justify-end mx-[4rem]  "
        }
      >
        <div className="flex bg-[rgba(0,0,0,0.4)] rounded-[50px] p-3 gap-3 text-white">
          <div
            onClick={handlePrev}
            className={`p-1 rounded-[50px] bg-[#6048ff]  ${
              !Kelas?.data?.pagination?.links.prev
                ? "cursor-not-allowed opacity-50"
                : ""
            }`}
          >
            <IoIosArrowBack />
          </div>
          <p>{currentPage}</p>
          <div
            onClick={handleNext}
            className={`p-1 rounded-[50px] bg-[#6148FF] ${
              !Kelas?.data?.pagination?.links.next
                ? "cursor-not-allowed opacity-50"
                : ""
            }`}
          >
            <IoIosArrowForward />
          </div>
        </div>
      </div>
    </div>
  );
};
