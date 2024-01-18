import React, { useState } from "react";
import Logo from "../../../assets/img/Logo-kata.png";
import Logo2 from "../../../assets/img/Logo (Gradient).png";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogoutAdmin } from "../../../services/Admin/auth/post-logout-admin";
import { LuLogOut } from "react-icons/lu";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaHouse, FaXmark } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { useMediaQuery } from "react-responsive";
import { FaClipboardList } from "react-icons/fa6";
import { useToast } from "@chakra-ui/react";
import { FaAddressCard } from "react-icons/fa6";

export const Sidebar = ({ setOpen, Open }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const handleMenuClick = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const isDesktop = useMediaQuery({
    query: "(min-width: 1280px)",
  });
  const examplePromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve(200), 5000);
  });

  const { mutate: logoutAdmin } = useLogoutAdmin();
  const logoutbtn = () => {
    logoutAdmin();
    toast.promise(examplePromise, {
      success: {
        title: "Berhasil Keluar",
        duration: 4000,
        isClosable: true,
        position: "top",
      },
      error: { title: 'Promise rejected', description: 'Something wrong' },
      loading: {
        title: "Tunggu Proses...",
        duration: 4000,
        isClosable: true,
        position: "top",
      },
    });
    setTimeout(() => {
      navigate("/admin/login");
    }, 4000);
  };

  return (
      <div
        className={`h-screen  shadow-xl bg-white  ${
          Open ? "block z-50 bg-white fixed top-0 left-0" : "relative hidden"
        } xl:block  ${
          sidebarVisible ? "xl:w-[300px]" : "xl:w-28"
        } w-1/2 duration-300 `}
      >
        <div className="h-[100px]  flex justify-center items-center">
          <img
            src={isDesktop ? (!sidebarVisible ? Logo2 : Logo) : Logo}
            className={` ${
              sidebarVisible
                ? "xl:w-[80%] xl:mr-[1rem]"
                : "xl:w-[100%] xl:mr-[0.5rem]"
            } w-[70%]  `}
            alt=""
          />
          <span
            onClick={() => setOpen(false)}
            className="md:block xl:hidden absolute top-2 text-2xl right-3"
          >
            <FaXmark />
          </span>
          <span
            onClick={handleMenuClick}
            className={`${
              !sidebarVisible && "rotate-180"
            } hidden xl:block absolute -right-6 top-20 rounded-full bg-gradientkanan p-3 text-lg cursor-pointer text-white border border-black`}
          >
            <FaArrowLeft />
          </span>
        </div>
        <hr className="border-2 border-[#D0D0D0] w-full mb-[3rem]" />
        <div className="flex h-[60%] text-[#6148FF]">
          <div className="w-full justify-between ">
            <div className="flex items-center flex-col w-full text-[1.2rem] h-full gap-2">
              <NavLink
                to="/admin/dashboard/transaksi"
                className={({ isActive }) =>
                  isActive
                    ? ` ${
                        !sidebarVisible && "xl:w-[50%] xl:mx-0.5rem"
                      } bg-gradientkanan text-white text-xl flex items-center gap-2 w-[90%] mx-[1rem] rounded-lg px-[1rem] h-[50px] text-left`
                    : `${
                        !sidebarVisible && "xl:w-[50%] xl:mx-0.5rem"
                      } flex items-center gap-2 w-[90%] mx-[1rem] rounded-lg px-[1rem] h-[50px] text-left`
                }
              >
                <p>
                  <FaHouse />
                </p>
                <span className={`${!sidebarVisible && "xl:hidden"}`}>
                  Dashboard
                </span>
              </NavLink>
              <NavLink
                to="/admin/dashboard/users"
                className={({ isActive }) =>
                  isActive
                    ? ` ${
                        !sidebarVisible && "xl:w-[50%] xl:mx-0.5rem"
                      } bg-gradientkanan text-white text-xl flex items-center gap-2 w-[90%] mx-[1rem] rounded-lg px-[1rem] h-[50px] text-left`
                    : `${
                        !sidebarVisible && "xl:w-[50%] xl:mx-0.5rem"
                      } flex items-center gap-2 w-[90%] mx-[1rem] rounded-lg px-[1rem] h-[50px] text-left`
                }
              >
                <p>
                  <FaUsers />
                </p>
                <span className={`${!sidebarVisible && "xl:hidden"}`}>
                  Users
                </span>
              </NavLink>
              <NavLink
                to="/admin/dashboard/course"
                className={({ isActive }) =>
                  isActive
                    ? ` ${
                        !sidebarVisible && "xl:w-[50%] xl:mx-0.5rem"
                      } bg-gradientkanan text-white text-xl flex items-center gap-2 w-[90%] mx-[1rem] rounded-lg px-[1rem] h-[50px] text-left`
                    : `${
                        !sidebarVisible && "xl:w-[50%] xl:mx-0.5rem"
                      } flex items-center  gap-2 w-[90%] mx-[1rem] rounded-lg px-[1rem] h-[50px] text-left`
                }
              >
                <div className="flex items-center gap-2 w-full">
                  <div>
                    <FaChalkboardTeacher />
                  </div>
                  <div className={`${!sidebarVisible && "xl:hidden"}`}>
                    Course
                  </div>
                </div>
              </NavLink>
              <NavLink
                to="/admin/dashboard/category"
                className={({ isActive }) =>
                  isActive
                    ? ` ${
                        !sidebarVisible && "xl:w-[50%] xl:mx-0.5rem"
                      } bg-gradientkanan text-white text-xl flex items-center gap-2 w-[90%] mx-[1rem] rounded-lg px-[1rem] h-[50px] text-left`
                    : `${
                        !sidebarVisible && "xl:w-[50%] xl:mx-0.5rem"
                      } flex items-center  gap-2 w-[90%] mx-[1rem] rounded-lg px-[1rem] h-[50px] text-left`
                }
              >
                <div className="flex items-center gap-2 w-full">
                  <div>
                    <FaClipboardList />
                  </div>
                  <div className={`${!sidebarVisible && "xl:hidden"}`}>
                    Kategori
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="flex flex-col w-full items-center text-[1.2rem] gap-2 ">
              <NavLink
                to="/admin/profile"
                className={({ isActive }) =>
                  isActive
                    ? ` ${
                        !sidebarVisible && "xl:w-[50%] xl:mx-0.5rem"
                      } bg-gradientkanan text-white text-xl flex items-center gap-2 w-[90%] mx-[1rem] rounded-lg px-[1rem] h-[50px] text-left`
                    : `${
                        !sidebarVisible && "xl:w-[50%] xl:mx-0.5rem"
                      } flex items-center  gap-2 w-[90%] mx-[1rem] rounded-lg px-[1rem] h-[50px] text-left`
                }
              >
                <p>
                  <FaAddressCard />
                </p>
                <span className={`${!sidebarVisible && "xl:hidden"}`}>
                  {" "}
                  Profile 
                </span>
              </NavLink>
              <NavLink
                onClick={logoutbtn}
                className={({ isActive }) =>
                isActive
                  ? ` ${
                      !sidebarVisible && "xl:w-[50%] xl:mx-0.5rem"
                    }  text-xl flex items-center gap-2 w-[90%] mx-[1rem] rounded-lg px-[1rem] h-[50px] text-left`
                  : `${
                      !sidebarVisible && "xl:w-[50%] xl:mx-0.5rem"
                    } flex items-center gap-2 w-[90%] mx-[1rem] rounded-lg px-[1rem] h-[50px] text-left`
              }
              >
                <p>
                  <LuLogOut />
                </p>
                <span className={`${!sidebarVisible && "xl:hidden"}`}>
                  {" "}
                  Keluar
                </span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
  );
};
