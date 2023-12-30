import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Admin from "../../../assets/svg/user.svg";
import { useGetUserDecode } from "../../../services/Admin/user/get-user-decode";
import { useGetUsersID } from "../../../services/Admin/user/get-user-id";
import { IoClose } from "react-icons/io5";
import { Sidebar } from "./Sidebar";

export const Header = () => {
  const [Open, setOpen] = useState(false);
  const { data: UserDecode } = useGetUserDecode();
  const { data: UsersID } = useGetUsersID({
    id: UserDecode?.data?.id,
  });

  const toggleSidebar = () => {
    setOpen(!Open);
  };

  return (
    <div className="w-full flex items-center justify-between px-[2rem]  h-[100px] bg-gradientkanan">
      {Open && (

          <div
            className="bg-[rgba(0,0,0,0.8)] "
            >
            <Sidebar Open={Open} setOpen={setOpen}/>
          </div>
      )}
      <div className="flex items-center gap-4 w-3/4">
        <FiMenu
          onClick={toggleSidebar}
          className="block cursor-pointer text-3xl text-white sm:block md:block lg:block xl:hidden"
        />
        <h1 className="uppercase text-sm font-bold sm:text-xl text-white">
          Hi {UsersID?.data?.profile?.name}
        </h1>
      </div>
      <div className="flex justify-center items-center mb-5">
        <div className="flex bg-white sm:gap-4 justify-between px-[1.5rem] sm:px-[1rem] rounded-2xl items-center w-full h-[62px] mt-5">
          <h1 className="font-bold text-sm sm:text-lg">{UsersID?.data?.profile?.name}</h1>
          <img className="bg-[#6148FF] rounded-3xl p-2 " src={Admin} alt="" />
        </div>
      </div>
    </div>
  );
};
