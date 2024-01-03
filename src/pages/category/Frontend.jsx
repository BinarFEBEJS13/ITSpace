import React from "react";
import { Navbar } from "../../assets/components/Navbar";
import frontend from "../../assets/img/category/FRONTEND.jpeg";
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

export const Frontend = () => {
  const navigate = useNavigate();
  const { data: datacourses, isLoading } = useGetDataKursus({
    category: "frontend",
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
                <div className="bg-gradientbutton text-white w-max px-4 py-2 rounded-md">Frontend</div>
              </div>
              {/* Ini Judul */}
              <div className="w-full flex flex-col">
                <div className="">
                  <p className="text-2xl sm:text-3xl xl:text-4xl font-bold tracking-wide" style={{ lineHeight: "1.5" }}>
                    Menembus Dunia Kode: Menggali Jobdesc, Skill untuk Menjadi Seorang Frontend Developer!
                  </p>
                </div>
              </div>

              {/* Ini Gambar */}
              <div className="w-full">
                <img src={frontend} alt="" className="w-full" />
              </div>
              {/* Isi Blog */}
              <div className="w-full flex flex-col gap-8">
                <div className="text-sm sm:text-base leading-6 flex flex-col gap-4">
                  <p>
                    Profesi dalam web development semakin diminati, seiring dengan pertumbuhan kebutuhan digital yang terus berkembang. Frontend developer dan backend developer, dua cabang profesi yang saling melengkapi, semakin menarik
                    perhatian.
                  </p>
                  <p>
                    Dalam tulisan ini, kita akan menyelami secara mendalam profesi frontend developer atau frontend engineer, meliputi tugas dan tanggung jawabnya, detail skillset yang diperlukan, dan langkah-langkah untuk menjadi seorang
                    frontend developer.
                  </p>
                </div>
                <div className="flex flex-col gap-4 text-sm sm:text-base">
                  <h2 className="font-semibold text-xl sm:text-2xl">Frontend Developer: The Artisan of User Experience</h2>
                  <p>Frontend developer adalah pemain kunci dalam web development, fokus pada pembuatan tampilan (interface) website yang berinteraksi langsung dengan pengguna.</p>
                  <p>
                    Dengan analogi restoran, frontend developer adalah pramusaji yang menyampaikan pesanan (request) pengguna kepada koki (backend engineer) untuk dihidangkan. Tugas utama adalah menciptakan antarmuka yang interaktif dan
                    memastikan responsivitas website di berbagai perangkat.
                  </p>
                </div>
                {/*  */}
                <div className="flex flex-col gap-4 text-sm sm:text-base">
                  <h2 className="font-semibold text-xl sm:text-2xl">Tugas dan Tanggung Jawab Frontend Developer</h2>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">1. Merancang Tampilan Antarmuka (User Interface)</h3>
                    <p>Frontend developer menciptakan tampilan web yang menarik, fungsional, dan ramah pengguna. Responsivitas di berbagai perangkat adalah kunci, memastikan pengalaman interaktif yang mulus.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">2. Melakukan Integrasi Data</h3>
                    <p>Bertanggung jawab dalam proses request pada backend, mengintegrasikan data dengan sistem backend untuk menyajikan hasil sesuai dengan keinginan pengguna.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4  sm:pl-8">3. Mengoptimalkan Tampilan Website Agar SEO Friendly</h3>
                    <p>Memastikan tampilan website tidak hanya interaktif, tetapi juga mudah ditemukan di mesin pencari dengan mengikuti prinsip-prinsip SEO.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">4. Mengimplementasikan Desain dari Tim UI/UX Designer</h3>
                    <p>Bekerja sama dengan tim desainer UI/UX, mengimplementasikan desain visual seperti warna, font, layout, animasi, dan elemen lainnya ke dalam kode.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">5.Testing, Debugging, dan Maintenance Website</h3>
                    <p>Menjalankan uji coba sebelum merilis website, memperbaiki bug yang muncul (debugging), dan melakukan pemeliharaan berkala untuk memastikan kinerja optimal.</p>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col gap-4 text-sm sm:text-base">
                  <h2 className="font-semibold text-xl sm:text-2xl">Skillset Esensial Frontend Developer </h2>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">1. Bahasa Pemrograman HTML, CSS, Javascript</h3>
                    <p>
                      Frontend developer harus menguasai fondasi pemrograman web. Ini melibatkan kemampuan dalam menggunakan HTML untuk merancang struktur halaman, CSS untuk mengatur style dan layout, serta Javascript untuk memberikan
                      sentuhan interaktif pada website..
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">2.Pengetahuan dan Skill Dasar UI UX Design</h3>
                    <p>Mengerti dasar-dasar desain UI/UX adalah kunci kolaborasi yang efektif dengan tim desainer. Frontend developer perlu memahami prinsip-prinsip desain untuk menerjemahkan konsep visual menjadi kode yang berfungsi.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">3. Mampu Melakukan Testing</h3>
                    <p>Keahlian dalam melakukan uji coba menjadi esensial. Frontend developer harus mampu memvalidasi fitur-fitur website agar dapat memastikan bahwa pengguna akan mendapatkan pengalaman yang mulus dan tanpa masalah.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">4. Debugging</h3>
                    <p>
                      Keterampilan mencari dan memperbaiki bug merupakan bagian integral dari pekerjaan seorang frontend developer. Kemampuan untuk menganalisis dan memahami kode serta berkolaborasi dengan backend engineer saat diperlukan
                      akan meningkatkan efisiensi dalam menangani masalah teknis.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">5. Version Control System (Git)</h3>
                    <p>
                      Memahami dasar-dasar Git merupakan kompetensi yang sangat penting. Penggunaan Git memungkinkan frontend developer untuk mengelola dan memperbaiki versi kode dengan mudah, memfasilitasi kerja tim dan meminimalkan
                      potensi konflik dalam pengembangan perangkat lunak.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 text-sm sm:text-base">
                  <h2 className="font-semibold text-xl sm:text-2xl"> Belajar Frontend Development Sekarang Juga!</h2>
                  <p>Jelajahi seluruh aspek menarik dalam profesi frontend developer, dan ditempat ini saatnya Anda memulai perjalanan dalam merambah dunia kode yang penuh kreativitas dan tantangan!</p>
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
