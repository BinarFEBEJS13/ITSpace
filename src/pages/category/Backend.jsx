import React from "react";
import { Navbar } from "../../assets/components/Navbar";
import backend from "../../assets/img/category/backend.jpeg";
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

export const Backend = () => {
  const navigate = useNavigate();
  const { data: datacourses, isLoading } = useGetDataKursus({
    category: "backend",
    order: "popularity",
    page: 1,
    limit: 4,
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
        <Navbar />
        {/* Section Main Beranda */}
        <div className="w-screen ">
          <div className="container mx-auto px-6 sm:px-24 lg:px-32 xl:px-48">
            <div className="flex flex-col gap-6 lg:gap-10 py-8 lg:py-12">
              <div className="w-full">
                <div className="bg-gradientbutton text-white w-max px-4 py-2 rounded-md">Backend</div>
              </div>
              {/* Ini Judul */}
              <div className="w-full flex flex-col">
                <div className="">
                  <p className="text-2xl sm:text-3xl xl:text-4xl font-bold tracking-wide" style={{ lineHeight: "1.5" }}>
                    Menyusuri Dunia Pengembangan Backend: Explorasi Keahlian dan Tugas Inti!
                  </p>
                </div>
              </div>
              {/* Ini Gambar */}
              <div className="w-full">
                <img src={backend} alt="" className="w-full" />
              </div>
              {/* Isi Blog */}
              <div className="w-full flex flex-col gap-8">
                <div className="text-sm sm:text-base leading-6 flex flex-col gap-4">
                  <p>
                    Dalam era kebutuhan digital yang berkembang pesat, peran backend developer semakin menjadi fokus utama. Artikel ini akan mengupas tuntas dunia pengembangan backend, mencakup tanggung jawab, keterampilan yang diperlukan,
                    dan sumber daya belajar untuk memahami aspek teknis dan strategis dari profesi ini.
                  </p>
                </div>
                <div className="flex flex-col gap-4 text-sm sm:text-base">
                  <h2 className="font-semibold text-xl sm:text-2xl">Peran Penting Backend dalam Dunia Digital</h2>
                  <p>
                    Pengembangan Backend adalah fondasi yang mendukung kinerja keseluruhan sebuah aplikasi atau situs web. Sementara frontend menangani tampilan yang dilihat oleh pengguna, backend berperan dalam pemrosesan data, manajemen
                    database, dan menyediakan layanan yang mendukung fungsionalitas keseluruhan.
                  </p>
                </div>
                {/*  */}
                <div className="flex flex-col gap-4 text-sm sm:text-base">
                  <h2 className="font-semibold text-xl sm:text-2xl">Tanggung Jawab dan Tugas Utama dalam Pengembangan Backend</h2>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">1. Pengelolaan Database</h3>
                    <p>Merancang dan mengelola struktur database untuk mendukung kebutuhan aplikasi dan Menjalankan query untuk menyimpan, mengambil, dan memperbarui data.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">2. Pemrosesan Server-Side</h3>
                    <p>Membuat dan mengelola logika server-side untuk menangani permintaan dari frontend dan Menyediakan API (Application Programming Interface) untuk komunikasi antara frontend dan backend.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4  sm:pl-8">3. Keamanan Sistem</h3>
                    <p>Mengimplementasikan langkah-langkah keamanan seperti enkripsi data dan otentikasi pengguna dan Melakukan pemantauan keamanan dan pembaruan rutin untuk melindungi aplikasi dari potensi ancaman.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">4. Optimisasi Kinerja</h3>
                    <p>Memastikan performa aplikasi dengan mengoptimalkan kode dan konfigurasi server dan Mengelola cache untuk meningkatkan waktu respon dan mengurangi beban server.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">5.Manajemen Perangkat Lunak</h3>
                    <p>Menangani integrasi dengan perangkat lunak eksternal dan layanan pihak ketiga dan Mengelola versi perangkat lunak dengan sistem kontrol versi seperti Git.</p>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col gap-4 text-sm sm:text-base">
                  <h2 className="font-semibold text-xl sm:text-2xl">Skillset Kunci dalam Pengembangan Backend</h2>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">1. Bahasa Pemrograman</h3>
                    <p>Behasil dalam bahasa pemrograman seperti Java, Python, Node.js, atau PHP dan Menguasai framework backend seperti Django, Flask, Spring, atau Express.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">2. Pengelolaan Database</h3>
                    <p>Keterampilan dalam merancang dan mengelola database menggunakan SQL atau NoSQL dan Pengalaman dengan sistem manajemen database seperti MySQL, PostgreSQL, MongoDB, atau Redis.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">3. Keamanan Aplikasi</h3>
                    <p>Pemahaman mendalam tentang praktik keamanan seperti enkripsi, otentikasi, dan kontrol akses dan Keterampilan dalam menerapkan pembaruan keamanan secara berkala.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">4. Pemahaman Jaringan</h3>
                    <p>Memahami konsep jaringan dan protokol seperti HTTP, HTTPS, dan TCP/IP dan Mampu mengatasi masalah koneksi dan mengoptimalkan komunikasi antara frontend dan backend.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">5. Keterampilan Debugging dan Monitoring</h3>
                    <p>Kemampuan untuk menganalisis dan memperbaiki bug dalam kode backend dan Pemahaman tentang alat-alat pemantauan performa seperti New Relic, Grafana, atau Prometheus.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 text-sm sm:text-base">
                  <h2 className="font-semibold text-xl sm:text-2xl">Belajar Pengembangan Backend Sekarang Juga!</h2>
                  <p>
                    Jelajahi aspek-aspek teknis dalam pengembangan backend tanpa terlibat dalam aspek tampilan pengguna dan ditempat ini saatnya Anda memulai perjalanan dalam merancang dan mengelola bagian inti dari suatu aplikasi atau
                    situs web!
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center font-semibold text-2xl sm:text-3xl">Kursus Rekomendasi</div>
              <div className="flex w-full">
                {isLoading ? (
                  // Display a loading indicator while the search is in progress
                  <div className="w-full flex justify-center items-center">
                    <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
                  </div>
                ) : dataKursus?.length > 0 ? (
                  <div className=" w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
                                <h2 onClick={() => navigate(`/detail-kelas/${value.id}`)} className="font-bold truncate-3-lines cursor-pointer text-xs sm:text-sm">
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
