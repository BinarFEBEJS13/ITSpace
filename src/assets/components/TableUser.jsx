import React from "react";
import Filter from "../../assets/svg/filter.svg";
import SearhIcon from "../../assets/svg/search-admin.svg";
import { Spinner } from "@chakra-ui/react";
import { useGetUsers } from "../../services/Admin/user/get-user";

export const TableUser = () => {
  const { data: getUsers, isPending } = useGetUsers();
  return (
    <div>
      <div className="mx-[2rem] md:mx-[2rem] flex justify-between">
        <h1 className="sm:w-full font-bold text-normal sm:text-xl">
          Data Pengguna
        </h1>
        <div className="flex items-center justify-center gap-2 sm:gap-3">
          <h4 className="flex gap-1 border-2 pl-3 pr-4 py-1 font-bold text-base rounded-2xl border-[#6148FF] text-[#6148FF]">
            <img src={Filter} alt="" />
            Filter
          </h4>
        </div>
      </div>
      <form action="" className="mx-[2rem] z-10 md:mx-[2rem] relative mt-5">
        <input
          type="text"
          placeholder="Search By Name"
          className="sm pl-5 pr-10 border border-[#6148FF] w-full rounded-md py-2 flex items-center"
        />
        <button className="flex justify-end items-center">
          <img className=" p-2 absolute right-2 top-0" src={SearhIcon} alt="" />
        </button>
      </form>
      <div
        className={
          isPending
            ? "overflow-hidden"
            : "table-kelas mx-[2rem] md:mx-[2rem] overflow-x-auto"
        }
      >
        {isPending ? (
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
            <thead className="bg-[#EBF3FC] font-light md:font-normal text-md text-center">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody className="font-bold text-sm">
              {getUsers?.data?.users.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.profile.name}</td>
                  <td>{user.email}</td>
                  <td
                    style={{
                      color: user.verified === true ? "#73CA5C" : "#FF0000",
                    }}
                  >
                    {user.verified === true ? "VERIFIED" : "NOT VERIFIED"}
                  </td>
                  <td>{user.profile.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};
