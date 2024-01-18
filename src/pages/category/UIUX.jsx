import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { Navbar } from "../../assets/components/Navbar";
import uiux from "../../assets/img/category/uiuex.jpeg";
import { Footer } from "../../assets/components/Footer";
import { useGetDataKursus } from "../../services/get-Datas-Courses";
import { Spinner } from "@chakra-ui/react";
import star from "../../assets/svg/star.svg";
import level from "../../assets/svg/kategori-level.svg";
import modul from "../../assets/svg/book.svg";
import clock from "../../assets/svg/clock.svg";
import diamond from "../../assets/svg/diamond.svg";
import { useNavigate } from "react-router-dom";
import { NotFoundRecomendation } from "../../assets/components/HandleErrorPage/NotFoundRecomendation";

export const UIUX = () => {
  const navigate = useNavigate();
  const { data: datacourses, isLoading } = useGetDataKursus({
    category: "ui/ux",
    order: "popularity",
    page: 1,
    limit: 3,
  });

  const dataKursus = datacourses?.data?.courses;

  function capitalizeFirstLetter(str) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
  return (
    <>
      <div className="overflow-x-hidden">
        <ScrollToTop smooth viewBox="0 0 24 22" svgPath="M12 18v-12h-3l4-4 4 4h-3v12h-2z" className="bg-white text-white p-2 shadow-sm-button flex items-center rounded-md fixed bottom-3 right-3 sm:bottom-6 sm:right-6 border border-white" />
        <Navbar />
        {/* Section Main Beranda */}
        <div className="w-screen">
          <div className="container mx-auto px-6 sm:px-24 lg:px-32 xl:px-48">
            <div className="flex flex-col gap-6 lg:gap-10 py-8 lg:py-12">
              <div className="w-full">
                <div className="bg-gradientbutton text-white w-max px-4 py-2 rounded-md">UI/UX Design</div>
              </div>
              {/* Ini Judul */}
              <div className="w-full flex flex-col">
                <div className="">
                  <p className="text-2xl sm:text-3xl xl:text-4xl font-bold tracking-wide" style={{ lineHeight: "1.5" }}>
                    Merambah Desain Antarmuka Pengguna: Eksplorasi Dunia UI/UX
                  </p>
                </div>
              </div>

              {/* Ini Gambar */}
              <div className="w-full">
                <img src={uiux} alt="" className="w-full" />
              </div>
              {/* Isi Blog */}
              <div className="w-full flex flex-col gap-8">
                <div className="text-sm sm:text-base leading-6 flex flex-col gap-4">
                  <p>
                    Dalam era berkembangnya kebutuhan digital, fokus pada desain antarmuka pengguna (UI/UX) semakin menjadi sorotan utama. Artikel ini akan membahas secara mendalam dunia UI/UX, termasuk tanggung jawab, keterampilan yang
                    diperlukan, dan sumber daya belajar untuk memahami aspek kreatif dan strategis dari profesi ini.
                  </p>
                </div>
                <div className="flex flex-col gap-4 text-sm sm:text-base">
                  <h2 className="font-semibold text-xl sm:text-2xl">Posisi Penting UI/UX dalam Dunia Digital</h2>
                  <p>
                    Desain Antarmuka Pengguna (UI) dan Pengalaman Pengguna (UX) menjadi elemen kunci dalam menciptakan produk digital yang sukses. UI berkaitan dengan keaslian dan daya tarik visual, sementara UX menekankan pada kenyamanan
                    dan fungsionalitas pengguna. Dalam artikel ini, kita akan merinci aspek-aspek esensial dari UI/UX, tanpa melibatkan aspek pengembangan frontend.
                  </p>
                </div>
                {/*  */}
                <div className="flex flex-col gap-4 text-sm sm:text-base">
                  <h2 className="font-semibold text-xl sm:text-2xl">Tanggung Jawab dan Tugas Utama dalam UI/UX</h2>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">1. MPenelitian Pengguna</h3>
                    <p>
                      Mengidentifikasi kebutuhan pengguna melalui berbagai metode riset, termasuk wawancara, survei, dan analisis data pengguna dan Menciptakan pemahaman mendalam tentang kebiasaan, motivasi, dan tantangan pengguna yang
                      dapat membentuk dasar strategi desain.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">2. Pembuatan Personas dan User Flows</h3>
                    <p>
                      Membuat personas yang mendetail dan realistis untuk mewakili karakteristik beragam pengguna dan Menyusun user flows yang mencakup perjalanan pengguna dari awal hingga akhir, membimbing desain dengan fokus pada
                      pengalaman yang holistik.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4  sm:pl-8">3. Wireframing dan Prototyping</h3>
                    <p>
                      Membuat wireframes yang memberikan kerangka dasar desain tanpa distraksi visual, menekankan pada tata letak dan fungsi dan Mengembangkan prototipe interaktif untuk memberikan gambaran nyata tentang bagaimana pengguna
                      akan berinteraksi dengan antarmuka.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">4. Desain Visual (UI Design)</h3>
                    <p>
                      Mengembangkan elemen visual termasuk warna, tipografi, ikon, dan grafis untuk menciptakan identitas visual yang konsisten dan Menyesuaikan desain dengan prinsip-prinsip desain responsif untuk memastikan pengalaman
                      seragam di berbagai perangkat.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">5. Pengujian Usability</h3>
                    <p>
                      Melakukan pengujian usability untuk mengidentifikasi potensi hambatan atau masalah dalam interaksi pengguna dengan antarmuka dan Menggunakan hasil pengujian untuk melakukan iterasi desain, memperbaiki kelemahan, dan
                      meningkatkan kualitas keseluruhan pengalaman pengguna.
                    </p>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col gap-4 text-sm sm:text-base">
                  <h2 className="font-semibold text-xl sm:text-2xl">Skillset Kunci dalam UI/UX</h2>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">1. Pengetahuan Mendalam tentang Desain</h3>
                    <p>
                      Memiliki pemahaman yang mendalam tentang prinsip-prinsip desain, termasuk proporsi, warna, hierarki visual, dan estetika dan Kemampuan untuk mengaplikasikan konsep-konsep desain ini secara kreatif dalam setiap elemen
                      antarmuka yang dibuat.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">2. Keterampilan Analisis Pengguna</h3>
                    <p>
                      Mampu melakukan analisis mendalam terhadap perilaku pengguna, dengan fokus pada preferensi dan kebutuhan yang mendasari keputusan desain dan Menggunakan data dan wawasan pengguna untuk menciptakan pengalaman yang
                      sesuai dengan ekspektasi dan harapan mereka.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">3. Penguasaan Alat Desain Grafis</h3>
                    <p>
                      Menunjukkan penguasaan dalam penggunaan alat desain grafis seperti Adobe XD, Sketch, Figma, atau tools sejenis dan Menggunakan alat ini untuk membuat desain yang tidak hanya estetis, tetapi juga fungsional dan
                      responsif.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">4. Kemampuan Berkomunikasi</h3>
                    <p>
                      Mampu menjelaskan konsep desain secara jelas dan meyakinkan kepada anggota tim dan pemangku kepentingan lainnya dan Komunikasi yang efektif untuk memfasilitasi kolaborasi yang produktif dan memastikan pemahaman yang
                      sama di seluruh tim proyek.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">5. Pemahaman Interaksi Pengguna</h3>
                    <p>
                      Pemahaman mendalam tentang cara pengguna berinteraksi dengan antarmuka, melibatkan prinsip-prinsip navigasi yang intuitif dan responsivitas yang baik dan Memastikan bahwa desain tidak hanya estetis, tetapi juga dapat
                      digunakan dengan mudah oleh berbagai tipe pengguna.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 text-sm sm:text-base">
                  <h2 className="font-semibold text-xl sm:text-2xl">Belajar UI/UX Design Sekarang Juga!</h2>
                  <p>Jelajahi aspek-aspek kreatif dari UI/UX tanpa terlibat dalam pengembangan frontend. Ditempat ini saatnya Anda untuk memulai perjalanan Anda dalam merancang pengalaman pengguna yang menarik dan efektif!!</p>
                </div>
              </div>
              <div className="flex justify-center items-center font-semibold text-2xl sm:text-3xl">Kelas Rekomendasi</div>
              <div className="flex w-full">
                {isLoading ? (
                  // Display a loading indicator while the search is in progress
                  <div className="w-full flex justify-center items-center">
                    <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
                  </div>
                ) : dataKursus?.length > 0 ? (
                  <div className=" w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
                    {/* Card Beli */}
                    {dataKursus?.map((value) => {
                      return (
                        <div key={value.id} className="w-full">
                          <div className="shadow-sm-button rounded-2xl">
                            <div className="relative w-full h-32 md:h-44 lg:h-48 overflow-hidden">
                              <img src={value.thumbnailUrl} alt="" className="w-full h-full object-cover rounded-2xl hover:scale-110 transition-transform duration-300 ease-in-out" />
                            </div>
                            <div className="px-2 sm:px-4 py-4 flex flex-col gap-2 rounded-2xl">
                              <div className="flex justify-between items-center">
                                <h6 className="text-ungu-0 text-xs sm:text-sm overflow-x-hidden">{value?.courseCategory[0]?.category?.name}</h6>
                                <span className="flex items-center text-sm">
                                  <img src={star} alt="" className="w-4" />
                                  {value?.rate !== null ? value.rate?.toFixed(1) : "0.0"}
                                </span>
                              </div>
                              <div>
                                <h2 onClick={() => navigate(`/detail-kelas/${value.id}`)} className="font-semibold truncate-3-lines cursor-pointer text-xs sm:text-sm">
                                  {capitalizeFirstLetter(value.title)}
                                </h2>
                                <span className="opacity-50 text-xs sm:text-sm truncate-2-lines">by {value?.mentor[0]?.author?.profile?.name}</span>
                              </div>
                              <div className="flex flex-wrap w-full gap-2 text-xs sm:text-sm">
                                <span className="flex gap-2 items-center">
                                  <img src={level} alt="" className="w-4" />
                                  {value.level} Level
                                </span>
                                <span className="flex gap-2 items-center">
                                  <img src={modul} alt="" className="w-4" />
                                  {value._count.chapter} Modul
                                </span>
                                <span className="flex gap-2 items-center">
                                  <img src={clock} alt="" className="w-4" />
                                  {value.duration !== null ? value.duration : 0} Menit
                                </span>
                              </div>
                              <div className="text-xs sm:text-sm">
                                <div className="flex text-white items-center">
                                  {value?.isPremium === true ? (
                                    <div className="flex gap-1 sm:gap-2 bg-ungu-0 px-4 py-1 rounded-md">
                                      <img src={diamond} alt="" className="hidden sm:block w-4" />
                                      <span className="text-xs sm:text-sm">
                                        {value?.price &&
                                          Number(value.price).toLocaleString("id-ID", {
                                            style: "currency",
                                            currency: "IDR",
                                            minimumFractionDigits: 0,
                                            maximumFractionDigits: 0,
                                          })}
                                      </span>
                                    </div>
                                  ) : (
                                    <div onClick={() => (window.location.href = `/detail-kelas/${value.id}`)} className="flex gap-2 bg-hijau-0 px-4 py-1 rounded-md cursor-pointer">
                                      <span className="text-xs sm:text-sm">Mulai Kelas</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  /* Handle Error Belum Ada kursus*/
                  <div className="w-full py-4">
                    <NotFoundRecomendation />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
