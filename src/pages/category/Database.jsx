import React from "react";
import { Navbar } from "../../assets/components/Navbar";
import database from "../../assets/img/category/database.jpeg";
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

export const Database = () => {
  const navigate = useNavigate();
  const { data: datacourses, isLoading } = useGetDataKursus({
    category: "database",
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
        <Navbar />
        {/* Section Main Beranda */}
        <div className="w-screen">
          <div className="container mx-auto px-6 sm:px-24 lg:px-32 xl:px-48">
            <div className="flex flex-col gap-6 lg:gap-10 py-8 lg:py-12">
              <div className="w-full">
                <div className="bg-gradientbutton text-white w-max px-4 py-2 rounded-md">Database</div>
              </div>
              {/* Ini Judul */}
              <div className="w-full flex flex-col">
                <div className="">
                  <p className="text-2xl sm:text-3xl xl:text-4xl font-bold tracking-wide" style={{ lineHeight: "1.5" }}>
                    Membentuk Masa Depan Digital: Pedoman Komprehensif untuk Menjadi Database Developer Profesional
                  </p>
                </div>
              </div>
              {/* Ini Gambar */}
              <div className="w-full">
                <img src={database} alt="" className="w-full" />
              </div>
              {/* Isi Blog */}
              <div className="w-full flex flex-col gap-8">
                <div className="text-sm sm:text-base leading-6 flex flex-col gap-4">
                  <p>
                    Dalam era digital yang berkembang pesat, profesi database developer menjadi semakin penting. Artikel ini akan menyajikan panduan lengkap mengenai dunia pengembangan database, melibatkan diskusi seputar tanggung jawab
                    utama, keterampilan esensial, dan sumber daya belajar yang akan membantu Anda menguasai aspek teknis dan strategis dari profesi ini.
                  </p>
                </div>
                <div className="flex flex-col gap-4 text-sm sm:text-base">
                  <h2 className="font-semibold text-xl sm:text-2xl">Menggali Peran Kunci Database Developer dalam Dunia Digital</h2>
                  <p>
                    Sebagai arsitek basis data, peran database developer sangat sentral dalam memastikan keberhasilan aplikasi dan sistem informasi. Tanggung jawab utama mereka mencakup merancang, mengelola, dan mengoptimalkan basis data
                    agar mendukung operasional yang efisien dan keamanan data yang terjamin.
                  </p>
                </div>
                {/*  */}
                <div className="flex flex-col gap-4 text-sm sm:text-base">
                  <h2 className="font-semibold text-xl sm:text-2xl">Tanggung Jawab dan Tugas Vital dalam Pengembangan Database</h2>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">1. Merancang Basis Data yang Efektif</h3>
                    <p>Menyusun struktur basis data dengan fokus pada efisiensi dan konsistensi dan Menentukan skema database, hubungan antartabel, dan indeks untuk performa yang optimal.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">2. Penguasaan Query Bahasa SQL</h3>
                    <p>Menulis query SQL kompleks untuk menyimpan, mengambil, dan memperbarui data dan Mengoptimalkan query untuk meningkatkan kinerja dan responsivitas database.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4  sm:pl-8">3. Optimisasi Kinerja Database</h3>
                    <p>Memantau dan mengelola performa database, menerapkan strategi untuk meningkatkannya dan Menggunakan indeks, partisi, dan teknik lainnya untuk optimalisasi kinerja.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">4. Keamanan Database yang Profesional</h3>
                    <p>Mengelola keamanan database melalui kontrol akses dan enkripsi data dan Melakukan pemantauan keamanan dan merespon potensi risiko dengan cepat.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">5. Pemeliharaan dan Pemulihan Database yang Efisien</h3>
                    <p>Menyusun dan melaksanakan rutinitas backup dan pemulihan data dan Tanggap terhadap masalah dan kegagalan database dengan cepat dan efektif.</p>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col gap-4 text-sm sm:text-base">
                  <h2 className="font-semibold text-xl sm:text-2xl">Keterampilan Kunci dalam Pengembangan Database</h2>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">1. Kemahiran Query SQL yang Teruji</h3>
                    <p>Menulis dan memahami query SQL yang kompleks dan Pengalaman dalam manajemen transaksi dan penyimpanan prosedur.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">2. Pemahaman Model Data yang Mendalam</h3>
                    <p>Memahami konsep desain model data dan normalisasi dan Keterampilan dalam memahami skema relasional dan non-relasional.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">3. Pemrograman dan Scripting yang Terpercaya</h3>
                    <p>Pemahaman dalam pemrograman untuk otomatisasi tugas database menggunakan bahasa seperti Python, Perl, atau PowerShell dan Keterampilan dalam mengelola skrip SQL.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">4. Keamanan Database yang Profesional</h3>
                    <p>Pemahaman tentang kebijakan keamanan dan praktik terbaik dan Kemampuan untuk menerapkan langkah-langkah keamanan secara proaktif.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">5. Penguasaan Alat Database Modern</h3>
                    <p>Pengalaman menggunakan sistem manajemen database (DBMS) seperti MySQL, PostgreSQL, SQL Server, atau Oracle. Keterampilan menggunakan alat administrasi database dan pemantauan performa.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 text-sm sm:text-base">
                  <h2 className="font-semibold text-xl sm:text-2xl">Membangun Karir Unggul sebagai Database Developer Sekarang Juga!</h2>
                  <p>
                    Ikutilah tren industri, terus tingkatkan keterampilan, dan terlibatlah dalam komunitas pengembang database untuk memastikan kesuksesan sebagai database developer yang andal dan ditempat ini saatnya Anda memulai
                    perjalanan Anda dalam merancang dan mengelola sistem basis data yang kuat dan efisien!
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
