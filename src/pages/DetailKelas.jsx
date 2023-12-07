import React, { useState } from "react";
import { Navbar } from "../assets/components/Navbar";

// png kategori belajar

// svg card
import star from "../assets/svg/star.svg";
import level from "../assets/svg/kategori-level.svg";
import modul from "../assets/svg/book.svg";
import clock from "../assets/svg/clock.svg";
import complete from "../assets/svg/progress.svg";
// svg detail kelas
import arrow from "../assets/svg/arrow-left-black.svg";
import tele from "../assets/svg/chat.svg";
import playhijau from "../assets/svg/play-hijau.svg";
import playungu from "../assets/svg/play-ungu.svg";
import gembok from "../assets/svg/gembok.svg";
import { KelasPremium } from "../assets/components/KelasPremium";
import { Onboarding } from "../assets/components/Onboarding";
import { useNavigate } from "react-router-dom";

export const DetailKelas = () => {
  const navigate = useNavigate();
  const [activeKelas, setActiveKelas] = useState("all");
  const [toggleKelas, setToggleKelas] = useState("tentang");
  const [progress, setProgress] = useState(60);

  const handleActivePopular = (item) => {
    setActiveKelas(item);
  };
  const handleToggleKelas = (item) => {
    setToggleKelas(item);
  };
  return (
    <>
      <div className="overflow-x-hidden ">
        <Navbar />
        {/* Button arrow kelas lainnnya */}
        <div className="w-screen px-6 sm:px-12 pt-4 sm:pt-8">
          <div className="container mx-auto">
            <div className="">
              <button onClick={() => navigate("/kursus")} className="flex gap-2 font-semibold items-center">
                <img src={arrow} alt="" />
                Kelas Lainnya
              </button>
            </div>
          </div>
        </div>
        {/* Detail kelas */}
        <div className="w-screen px-4 sm:px-12 py-4 sm:py-8">
          <div className="container mx-auto">
            <div className="flex flex-col gap-4">
              <div className="flex gap-8">
                {/* Kelas*/}
                <div className="w-full sm:w-4/6 xl:w-8/12 flex flex-col gap-4">
                  {/* Video Belajar Ukuran Mobile */}
                  <div className="block sm:hidden w-full rounded-md bg-biru-0">
                    <iframe
                      width="100%"
                      className="h-[240px] sm:h-[280px] lg:h-[350px] xl:h-[500px]"
                      src="https://www.youtube.com/embed/tsgy7OsDARU?si=8AZQOvGgD0cFoxmC"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </div>
                  <div className="flex flex-col gap-2 ">
                    {/* Header detail per kelas */}
                    <div className="flex flex-col gap-1 w-full bg-birumuda-0 rounded-md px-4 py-2">
                      <div className="flex justify-between">
                        <h6 className="text-ungu-0 font-bold">UI/UX Design</h6>
                        <span className="flex items-center">
                          <img src={star} alt="" className="w-6" />
                          4.7
                        </span>
                      </div>
                      <div>
                        <h2 className="font-bold cursor-pointer">Belajar Web Designer dengan Figma</h2>
                        <span className="opacity-50 text-sm">by Angela Doe</span>
                      </div>
                      <div className="flex flex-wrap w-full gap-2 text-xs xl:text-sm">
                        <span className="flex gap-2 items-center">
                          <img src={level} alt="" className="w-5" />
                          Intermediate Level
                        </span>
                        <span className="flex gap-2 items-center">
                          <img src={modul} alt="" className="w-5" />
                          10 Modul
                        </span>
                        <span className="flex gap-2 items-center">
                          <img src={clock} alt="" className="w-5" />
                          120 Menit
                        </span>
                      </div>
                    </div>
                    {/* Button Join Kelas */}
                    <div className="w-full flex justify-center sm:justify-start">
                      <button className="bg-hijau-0 rounded-md px-4 py-1 text-white flex gap-2 items-center">
                        <a href="https://t.me/+lWAndrPmRvdlZWY1" target="_blank" rel="noopener noreferrer" className="flex items-center">
                          Join Grup Telegram
                          <img src={tele} alt="" />
                        </a>
                      </button>
                    </div>
                  </div>
                  {/*/////////////////////////// Toggle Tentang & Materi Kelas Pada Mobile ////////////////////////////////*/}
                  <div className="block sm:hidden w-full ">
                    <div className="flex w-full">
                      <button onClick={() => handleToggleKelas("tentang")} className={`w-1/2 py-4 ${toggleKelas === "tentang" ? "bg-biru-0 text-white" : "bg-birumuda-0"}`}>
                        Tentang
                      </button>
                      <button onClick={() => handleToggleKelas("materi")} className={`w-1/2  py-4 ${toggleKelas === "materi" ? "bg-biru-0 text-white" : "bg-birumuda-0"}`}>
                        Materi Kelas
                      </button>
                    </div>
                  </div>
                  {/* Section Kelas */}
                  <div className="flex flex-col gap-4 w-full">
                    {/* Video Belajar */}
                    <div className="hidden sm:block w-full rounded-md bg-biru-0">
                      <iframe
                        width="100%"
                        className="h-[240px] sm:h-[280px] lg:h-[350px] xl:h-[500px]"
                        src="https://www.youtube.com/embed/tsgy7OsDARU?si=8AZQOvGgD0cFoxmC"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                    </div>
                    {/* Detail Belajar */}
                    <div className="hidden sm:flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <h2 className="font-bold">Tentang Kelas</h2>
                        <div>
                          <p className="text-xs xl:text-sm text-justify indent-12">
                            Design system adalah kumpulan komponen design, code, ataupun dokumentasi yang dapat digunakan sebagai panduan utama yang memunginkan designer serta developer memiliki lebih banyak kontrol atas berbagai platform.
                            Dengan hadirnya design system, dapat menjaga konsistensi tampilan user interface dan meningkatkan user experience menjadi lebih baik.
                          </p>
                          <p className="text-xs xl:text-sm text-justify indent-12">
                            Design system adalah kumpulan komponen design, code, ataupun dokumentasi yang dapat digunakan sebagai panduan utama yang memunginkan designer serta developer memiliki lebih banyak kontrol atas berbagai platform.
                            Dengan hadirnya design system, dapat menjaga konsistensi tampilan user interface dan meningkatkan user experience menjadi lebih baik.
                          </p>
                          <p className="text-xs xl:text-sm text-justify indent-12">
                            Design system adalah kumpulan komponen design, code, ataupun dokumentasi yang dapat digunakan sebagai panduan utama yang memunginkan designer serta developer memiliki lebih banyak kontrol atas berbagai platform.
                            Dengan hadirnya design system, dapat menjaga konsistensi tampilan user interface dan meningkatkan user experience menjadi lebih baik.
                          </p>
                          <p className="text-xs xl:text-sm text-justify indent-12">
                            Design system adalah kumpulan komponen design, code, ataupun dokumentasi yang dapat digunakan sebagai panduan utama yang memunginkan designer serta developer memiliki lebih banyak kontrol atas berbagai platform.
                            Dengan hadirnya design system, dapat menjaga konsistensi tampilan user interface dan meningkatkan user experience menjadi lebih baik.
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <h2 className="font-bold">Kelas Ini Ditujukan Untuk</h2>
                        <div>
                          <p className="text-xs xl:text-sm">1. Design system adalah kumpulan komponen design, code</p>
                          <p className="text-xs xl:text-sm">2. Design system adalah kumpulan komponen design, code</p>
                          <p className="text-xs xl:text-sm">3. Design system adalah kumpulan komponen design, code</p>
                        </div>
                      </div>
                    </div>
                    {toggleKelas === "tentang" ? (
                      /*///////////////////////////////  Tentang Untuk Mobile ////////////////////////////////////////////// */
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                          <h2 className="font-bold">Tentang Kelas</h2>
                          <div>
                            <p className="text-xs xl:text-sm text-justify indent-12">
                              Design system adalah kumpulan komponen design, code, ataupun dokumentasi yang dapat digunakan sebagai panduan utama yang memunginkan designer serta developer memiliki lebih banyak kontrol atas berbagai
                              platform. Dengan hadirnya design system, dapat menjaga konsistensi tampilan user interface dan meningkatkan user experience menjadi lebih baik.
                            </p>
                            <p className="text-xs xl:text-sm text-justify indent-12">
                              Design system adalah kumpulan komponen design, code, ataupun dokumentasi yang dapat digunakan sebagai panduan utama yang memunginkan designer serta developer memiliki lebih banyak kontrol atas berbagai
                              platform. Dengan hadirnya design system, dapat menjaga konsistensi tampilan user interface dan meningkatkan user experience menjadi lebih baik.
                            </p>
                            <p className="text-xs xl:text-sm text-justify indent-12">
                              Design system adalah kumpulan komponen design, code, ataupun dokumentasi yang dapat digunakan sebagai panduan utama yang memunginkan designer serta developer memiliki lebih banyak kontrol atas berbagai
                              platform. Dengan hadirnya design system, dapat menjaga konsistensi tampilan user interface dan meningkatkan user experience menjadi lebih baik.
                            </p>
                            <p className="text-xs xl:text-sm text-justify indent-12">
                              Design system adalah kumpulan komponen design, code, ataupun dokumentasi yang dapat digunakan sebagai panduan utama yang memunginkan designer serta developer memiliki lebih banyak kontrol atas berbagai
                              platform. Dengan hadirnya design system, dapat menjaga konsistensi tampilan user interface dan meningkatkan user experience menjadi lebih baik.
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <h2 className="font-bold">Kelas Ini Ditujukan Untuk</h2>
                          <div>
                            <p className="text-xs xl:text-sm">1. Design system adalah kumpulan komponen design, code</p>
                            <p className="text-xs xl:text-sm">2. Design system adalah kumpulan komponen design, code</p>
                            <p className="text-xs xl:text-sm">3. Design system adalah kumpulan komponen design, code</p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /*///////////////////////////////////////// Materi Kelas Versi Mobile Phone ///////////////////////////////////////////////////////*/
                      <div className="flex sm:hidden flex-col gap-2 px-4 py-2 pb-6 shadow-sm-button rounded-md">
                        {/* Header & Progress */}
                        <div className="lg:flex gap-2">
                          <h2 className="w-full lg:w-1/2 xl:w-1/3 font-bold">Materi Belajar</h2>
                          <div className="text-sm flex gap-1 w-full lg:w-2/3 xl:w-2/3">
                            <img src={complete} alt="" className="w-6" />
                            <div className="w-full bg-birumuda-0 rounded-md">
                              <div className="flex text-white text-center bg-biru-0 rounded-md text-sm py-1 px-2 max-w-full" style={{ width: `${progress}%` }}>
                                {progress}%<span className="pl-1">Complete</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Materi Per chapter */}
                        <div className="flex flex-col gap-4">
                          {/* Chapter 1 */}
                          <div className="w-full">
                            <div className="flex flex-col gap-2">
                              <div className="text-xs flex justify-between text-biru-0 font-semibold">
                                <h3>Chapter 1 - Pendahuluan</h3>
                                <span>60 Menit</span>
                              </div>
                              {/* Materi 1 */}
                              <div className="text-xs flex flex-col gap-1">
                                <div className="flex items-center justify-between py-2">
                                  1. Tujuan Mengikuti Kelas Design System
                                  <img src={playhijau} alt="" />
                                </div>
                                <div className="bg-biru-0 h-[0.1rem] w-full"></div>
                              </div>
                              {/* Materi 2 */}
                              <div className="text-xs flex flex-col gap-1">
                                <div className="flex items-center justify-between py-2">
                                  2. Tujuan Mengikuti Kelas Design System
                                  <img src={playungu} alt="" />
                                </div>
                                <div className="bg-biru-0 h-[0.1rem] w-full"></div>
                              </div>
                            </div>
                            <div></div>
                          </div>
                          {/* Chapter 2 */}
                          <div className="w-full">
                            <div className="flex flex-col gap-2">
                              <div className="text-xs flex justify-between text-biru-0 font-semibold">
                                <h3>Chapter 2 - Memulai Desain</h3>
                                <span>160 Menit</span>
                              </div>
                              {/* Materi 1 */}
                              <div className="text-xs flex flex-col gap-1">
                                <div className="flex items-center justify-between py-2">
                                  3. Tujuan Mengikuti Kelas Design System
                                  <img src={gembok} alt="" />
                                </div>
                                <div className="bg-biru-0 h-[0.1rem] w-full"></div>
                              </div>
                              {/* Materi 2 */}
                              <div className="text-xs flex flex-col gap-1">
                                <div className="flex items-center justify-between py-2">
                                  4. Tujuan Mengikuti Kelas Design System
                                  <img src={gembok} alt="" />
                                </div>
                                <div className="bg-biru-0 h-[0.1rem] w-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                {/*Materi Belajar*/}
                <div className="hidden sm:block w-2/6 xl:w-4/12 ">
                  <div className="flex flex-col gap-2 px-4 py-2 pb-6 shadow-sm-button rounded-md">
                    {/* Header & Progress */}
                    <div className="lg:flex gap-2">
                      <h2 className="w-full lg:w-1/2 xl:w-1/3 font-bold">Materi Belajar</h2>
                      <div className="text-sm flex gap-1 w-full lg:w-2/3 xl:w-2/3">
                        <img src={complete} alt="" className="w-6" />
                        <div className="w-full bg-birumuda-0 rounded-md">
                          <div className="flex text-white text-center bg-biru-0 rounded-md text-sm py-1 px-2 max-w-full" style={{ width: `${progress}%` }}>
                            {progress}%<span className="pl-1">Complete</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Materi Per chapter */}
                    <div className="flex flex-col gap-4">
                      {/* Chapter 1 */}
                      <div className="w-full">
                        <div className="flex flex-col gap-2">
                          <div className="text-xs flex justify-between text-biru-0 font-semibold">
                            <h3>Chapter 1 - Pendahuluan</h3>
                            <span>60 Menit</span>
                          </div>
                          {/* Materi 1 */}
                          <div className="text-xs flex flex-col gap-1">
                            <div className="flex items-center justify-between py-2">
                              1. Tujuan Mengikuti Kelas Design System
                              <img src={playhijau} alt="" />
                            </div>
                            <div className="bg-biru-0 h-[0.1rem] w-full"></div>
                          </div>
                          {/* Materi 2 */}
                          <div className="text-xs flex flex-col gap-1">
                            <div className="flex items-center justify-between py-2">
                              2. Tujuan Mengikuti Kelas Design System
                              <img src={playungu} alt="" />
                            </div>
                            <div className="bg-biru-0 h-[0.1rem] w-full"></div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                      {/* Chapter 2 */}
                      <div className="w-full">
                        <div className="flex flex-col gap-2">
                          <div className="text-xs flex justify-between text-biru-0 font-semibold">
                            <h3>Chapter 2 - Memulai Desain</h3>
                            <span>160 Menit</span>
                          </div>
                          {/* Materi 1 */}
                          <div className="text-xs flex flex-col gap-1">
                            <div className="flex items-center justify-between py-2">
                              3. Tujuan Mengikuti Kelas Design System
                              <img src={gembok} alt="" />
                            </div>
                            <div className="bg-biru-0 h-[0.1rem] w-full"></div>
                          </div>
                          {/* Materi 2 */}
                          <div className="text-xs flex flex-col gap-1">
                            <div className="flex items-center justify-between py-2">
                              4. Tujuan Mengikuti Kelas Design System
                              <img src={gembok} alt="" />
                            </div>
                            <div className="bg-biru-0 h-[0.1rem] w-full"></div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <KelasPremium /> */}
        {/* <Onboarding /> */}
      </div>
    </>
  );
};
