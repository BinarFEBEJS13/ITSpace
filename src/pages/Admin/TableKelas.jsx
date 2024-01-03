import React, { useState } from "react";
import Tambah from "../../assets/svg/add-admin.svg";
import SearhIcon from "../../assets/svg/search-admin.svg";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaTrash } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
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
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
} from "@chakra-ui/react";
import { useGetCourse } from "../../services/Admin/courses/get-data-courses";
import { useDeleteCourse } from "../../services/Admin/courses/delete-data-courses";

import { IoChevronDownCircleOutline } from "react-icons/io5";
import { useGetCategory } from "../../services/Admin/category/get-data-category";
import { Header } from "../../assets/components/Admin/Header";
import { DataDashboard } from "../../assets/components/Admin/DataDashboard";
import { Sidebar } from "../../assets/components/Admin/Sidebar";
import { useNavigate } from "react-router-dom";
import { EditCourse } from "../../assets/components/Admin/course/EditCourse";
import { AddCourse } from "../../assets/components/Admin/course/AddCourse";

export const TableKelas = () => {
  const [AddPopupForm, setAddPopupForm] = useState(false);
  const [PopupEdit, setPopupEdit] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState(null);
  const [selectedCourseData, setSelectedCourseData] = useState(null);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [Search, setSearch] = useState("");
  const [CategoryFilter, setCategoryFilter] = useState("");
  const [levelFilter, setlevelFilter] = useState("");
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [tipeKelasFilter, settipeKelasFilter] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

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
    ispremium: tipeKelasFilter,
  });

  const { data: categoryCourse } = useGetCategory();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEdit = (courseId) => {
    const selectedCourse = Kelas?.data?.courses.find(
      (course) => course.id === courseId
    );

    setSelectedCourseData(selectedCourse);
    setPopupEdit(true);
  };

  const handleChapter = (courseId) => {
    const selectedChapters = Kelas?.data?.courses.find(
      (course) => course.id === courseId
    );

    setSelectedChapter(selectedChapters);
    navigate(`/admin/dashboard/course/${courseId}/chapters`);
  };

  const examplePromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(200), 5000);
  });

  const { mutate: deleteCourse } = useDeleteCourse({
    onSuccess: () => {
      refetchData();
      toast({
        title: "Berhasil Menghapus Course",
        status: "success",
        duration: 5000,
        isClosable: true,
        size: "lg",
        position: "top",
      });

      onClose();
    },
  });

  const handleFilterByLevel = (selectedLevel) => {
    setlevelFilter(selectedLevel);
    setCurrentPage(1);
  };

  const handleFilterByTipeKelas = (selectedLevel) => {
    settipeKelasFilter(selectedLevel);
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

  const handleInputChange = (e) => {
    // Update the input value in the state on every change
    setSearch(e.target.value);
  };

  const handleToggleSearch = async (e) => {
    e.preventDefault(); // Prevent automatic form submission

    // Perform search when the button is clicked
    await refetchData();
    // Add any other logic related to search results or messages
  };

  const handleOpen = () => {
    setAddPopupForm(true);
  };

  const handleClose = () => {
    setAddPopupForm(false);
    setPopupEdit(false);
  };
  const cancelRef = React.useRef();
  return (
    <div className="flex h-screen flex-col bg-[rgba(169,167,167,0.11)] sm:flex-row md:flex-col lg:flex-row lg:overflow-x-hidden">
      <Sidebar setSidebarVisible={setSidebarVisible} />

      <div className=" w-full lg:overflow-x-hidden">
        {/* ========================= Header =========================  */}
        <Header />
        <DataDashboard />

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
                  ml={1}
                >
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
        <div className="fixed top-0 left-0 z-50">
          {AddPopupForm && (
            <AddCourse
              handleClose={handleClose}
              refetchData={refetchData}
              selectedCourseData={selectedCourseData}
            />
          )}
          {PopupEdit && (
            <EditCourse
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
              className="flex items-center gap-2 border-2 p-2  sm:px-4 sm:py-1 font-bold text-base rounded-2xl bg-[#6148FF] border-[#6148FF] text-white"
            >
              <img src={Tambah} alt="" />
              Add
            </h4>
            <div>
              <Menu flip preventOverflow placement="auto">
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
                  <MenuOptionGroup
                    color="#6148FF"
                    title="Tipe Kelas"
                    type="checkbox"
                  >
                    <MenuItemOption
                      onClick={() => handleFilterByTipeKelas("1")}
                      value="PREMIUM"
                    >
                      PREMIUM
                    </MenuItemOption>
                    <MenuItemOption
                      onClick={() => handleFilterByTipeKelas("0")}
                      value="GRATIS"
                    >
                      GRATIS
                    </MenuItemOption>
                  </MenuOptionGroup>
                  <MenuOptionGroup color="#6148FF" title="Level" type="checkbox">
                    <MenuItemOption
                      onClick={() => handleFilterByLevel("BEGINNER")}
                      value="BEGINNER"
                    >
                      Beginner
                    </MenuItemOption>
                    <MenuItemOption
                      onClick={() => handleFilterByLevel("INTERMEDIATE")}
                      value="INTERMEDIATE"
                    >
                      Intermediate
                    </MenuItemOption>
                    <MenuItemOption
                      onClick={() => handleFilterByLevel("ADVANCED")}
                      value="ADVANCED"
                    >
                      Advanced
                    </MenuItemOption>
                  </MenuOptionGroup>
                  <MenuDivider />
                  <MenuOptionGroup
                    color="#6148FF"
                    type="checkbox"
                    title="Category"
                  >
                    {categoryCourse?.data?.map((filterCategory, index) => (
                      <MenuItemOption
                        key={index}
                        value={filterCategory.name}
                        onClick={() =>
                          handleFilterByCategory(filterCategory.name)
                        }
                      >
                        {filterCategory.name}
                      </MenuItemOption>
                    ))}
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleToggleSearch}
          action=""
          className="mx-[2rem] md:mx-[2rem] relative mt-5"
        >
          <input
            type="text"
            placeholder="Search Nama Kelas"
            onChange={handleInputChange}
            className="sm pl-5 pr-10 border border-[#6148FF] w-full rounded-md py-2 flex items-center"
          />
          <button type="submit" className="flex justify-end items-center">
            <img
              className=" p-2 absolute right-2 top-0"
              src={SearhIcon}
              alt=""
            />
          </button>
        </form>
        <div
          className={isLoading ? "overflow-hidden" : " mx-[2rem] md:mx-[2rem] "}
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
          ) : Kelas?.data?.courses.filter((kelas) =>
              kelas.title.toLowerCase().includes(Search.toLowerCase())
            ).length === 0 ? (
            <div className="mt-5 text-center text-gray-500">
              No results found.
            </div>
          ) : (
            <div className="table-kelas bg-white my-[2rem] px-[3rem] py-[1rem] rounded-[20px] overflow-x-auto">
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
                    <th className="text-center">EDIT</th>
                    <th className="text-center">DELETE</th>
                    <th className="text-center">Chapters</th>
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
                                kelas.isPremium === false
                                  ? "#73CA5C"
                                  : "#6148FF",
                            }}
                          >
                            {kelas.isPremium === false ? "GRATIS" : "PREMIUM"}
                            {console.log(
                              typeof kelas.isPremium,
                              "CEK DATA PREMIUM"
                            )}
                          </span>
                        </td>
                        <td>
                          <span
                            className={`rounded-[50px] p-1 text-white ${
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
                        <td>
                          Rp.
                          {new Intl.NumberFormat("id-ID").format(kelas.price)}
                        </td>
                        <td>
                          <img
                            src={kelas.thumbnailUrl}
                            className="w-[100px]"
                            alt=""
                          />
                        </td>
                        <td>
                          <button
                            onClick={() => handleEdit(kelas.id)}
                            className="bg-[orange] text-xl text-white rounded-xl p-4"
                          >
                            <FaEdit />
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => {
                              setSelectedCourseId(kelas.id);
                              onOpen();
                            }}
                            className="bg-[#FF0000] text-xl text-white rounded-xl p-4"
                          >
                            <FaTrash />
                          </button>
                        </td>
                        <td className="">
                          <button
                            onClick={() => {
                              handleChapter(kelas.id);
                            }}
                            className="bg-[#6148FF] text-xl text-white rounded-xl p-4"
                          >
                            <FaBook />
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        {Kelas?.data?.courses.length >= 0 && (
          <div className="flex mt-2 gap-2 justify-end mx-[4rem]">
            <div className="flex bg-gray-300 shadow-xl rounded-lg p-3 gap-3 text-white">
              <div
                onClick={handlePrev}
                className={`p-1 rounded-[50px] bg-[#6048ff] ${
                  !Kelas?.data?.pagination?.links?.prev
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
              >
                <IoIosArrowBack />
              </div>
              <p className="text-black">{currentPage}</p>
              <div
                onClick={handleNext}
                className={`p-1 rounded-[50px] bg-[#6148FF] ${
                  !Kelas?.data?.pagination?.links?.next
                    ? "cursor-not-allowed opacity-50"
                    : ""
                }`}
              >
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
