import React, { useState } from "react";
import { Navbar } from "../assets/components/Navbar";
import { useNavigate } from "react-router-dom";
import { useGetMyNotifications } from "../services/notifications/get-my-notifications";

// svg
import bell_notifikasi from '../assets/svg/bell-notifikasi.svg'
import { usePutNotif } from "../services/notifications/put-my-notifications";

export const Notifikasi = () => {
  const navigate = useNavigate()

  const {data: getMyNotifications} = useGetMyNotifications()
  if (getMyNotifications?.data) {
    getMyNotifications.data.forEach((notification, index) => {
      console.log(notification.id, `ini notifikasi ke-${index}`);
    });
  }

  const getNotif = getMyNotifications?.data

  const {mutate: putNotif} = usePutNotif()
  console.log(putNotif, "notif put")

  const [clickedNotifications, setClickedNotifications] = useState([]);

  const handleNotificationClick = (id, index) => {
    // Check if the notification has already been clicked
    if (!clickedNotifications.includes(index)) {
      // Update the state to indicate that this notification has been clicked
      setClickedNotifications([...clickedNotifications, index]);

      // Call the putNotif function with the notification ID
      putNotif(id);
    }
  };

  const jumlahNotifikasi = getNotif ? getNotif.length - clickedNotifications.length : 0;

  console.log(getNotif, "fernandes")

  return (
    <div className="flex flex-col w-full h-screen overflow-x-hidden">
      <Navbar></Navbar>
      <div className="hidden sm:flex justify-start sm:justify-center" >
        <div className="flex justify-start w-[55%] px-0 mt-5">
          <div className="flex space-x-2 cursor-pointer" onClick={() => navigate("/")}>
            <div className="text-[#6148FF]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </div>
            <p className="text-[#6148FF] font-bold">Kembali ke Beranda</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-center">
        <div className="flex px-0 sm:w-[50%] mt-5">
          <div className="flex flex-col bg-transparent sm:bg-white w-full h-[550px] sm:h-[300px] rounded-xl z-10 sm:border-[1.5px] sm:border-[#6148FF]">
            <div className="hidden w-full min-h-[40px] justify-center items-center rounded-t-xl bg-gradientkanan text-white font-semibold tracking-[1px] z-0 sm:flex">Notifikasi <span className="ml-1 bg-white text-center items-center rounded-md w-5 h-6 text-[#6148FF] font-bold">{jumlahNotifikasi}</span></div>
            <div className="flex justify-center sm:hidden">
              <h1 className="flex w-[90%] sm:hidden text-[1.5rem] font-extrabold">Notifikasi</h1>
            </div>
            <hr className="flex mt-3 border-[1px] sm:hidden"></hr>
            <div className="relative flex flex-col mx-auto w-[90%] h-[100%] gap-[5.5rem] sm:gap-0 md:gap-[3rem] lg:gap-[2rem] notif sm:overflow-y-auto custom-scrollbar mt-3 mb-3">
              {getNotif && getNotif.map((notif, index) => (
                <div key={index} className={`relative min-h-[100px] p-1 rounded-lg flex w-full justify-start gap-8 sm:gap-0 ${clickedNotifications.includes(index) ? '' : 'bg-purple-100'}`}>
                  <div className="flex flex-row space-x-4 mt-4" onClick={() => handleNotificationClick(notif?.id, index)}>
                    <div className="flex justify-start items-center w-8 h-8 ml-1">
                      <img src={bell_notifikasi} alt=""/>
                    </div>
                    <div className="absolute flex text-[12px] flex-col sm:text-[10px] left-5 cursor-pointer">
                      <p className="text-[#6148FF] font-semibold ">{notif?.type}</p>
                      <p className="font-bold w-[95%]">{notif?.message}</p>
                      <div className="flex flex-row items-center">
                        <p className="text-biru-0 mt-1">{new Date(notif?.created_at).toLocaleString()}</p>
                        {/* <span className="w-2 h-2 rounded-full bg-red-500 mt-1 ml-2"></span> */}
                      </div>
                    </div>
                  </div>
                </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
