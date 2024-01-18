import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Admin from "../../../assets/svg/user.svg";
import { useGetUserDecode } from "../../../services/Admin/user/get-user-decode";
import { useGetUsersID } from "../../../services/Admin/user/get-user-id";
import { IoClose } from "react-icons/io5";
import picture from "../../img/picture.png";
import { Sidebar } from "./Sidebar";
import { Wrap, WrapItem, Avatar } from "@chakra-ui/react";

export const Header = () => {
  const [Open, setOpen] = useState(false);
  // const [showImage, setShowImage] = useState();
  const { data: UserDecode } = useGetUserDecode();
  const { data: UsersID } = useGetUsersID({
    id: UserDecode?.data?.id,
  });
  console.log(UsersID);
  const toggleSidebar = () => {
    setOpen(!Open);
  };

  return (
    <div className="w-full z-0 flex items-center justify-between px-[2rem]  h-[100px] bg-gradientkanan">
      {Open && (
        <div className="h-full bg-[rgba(0,0,0,0.8)] ">
          <Sidebar Open={Open} setOpen={setOpen} />
        </div>
      )}
      <div className="flex items-center gap-4 w-3/4">
        <FiMenu
          onClick={toggleSidebar}
          className="block cursor-pointer text-3xl text-white sm:block md:block lg:block xl:hidden"
        />
        <h1 className="capitalize text-sm font-bold sm:text-xl text-white">
          Hi {UsersID?.data?.profile?.name}
        </h1>
      </div>
      <div className="flex  justify-center mt-3 items-center mb-5">
        <Wrap>
          <WrapItem>
            <Avatar  outline="blue" size="lg" src={UsersID?.data?.profile?.profilePicture} />
          </WrapItem>
        </Wrap>
      </div>
    </div>
  );
};
