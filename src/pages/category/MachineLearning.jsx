import React from "react";
import { Navbar } from "../../assets/components/Navbar";
import machinelearning from "../../assets/img/category/machinelearning.jpeg";
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

export const MachineLearning = () => {
  const navigate = useNavigate();
  const { data: datacourses, isLoading } = useGetDataKursus({
    category: "machine learning",
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
                <div className="bg-gradientbutton text-white w-max px-4 py-2 rounded-md">Machine Learning</div>
              </div>
              {/* Ini Judul */}
              <div className="w-full flex flex-col">
                <div className="">
                  <p className="text-2xl sm:text-3xl xl:text-4xl font-bold tracking-wide" style={{ lineHeight: "1.5" }}>
                    Menyelami Dunia Machine Learning: Panduan Menjadi Profesional Machine Learning
                  </p>
                </div>
              </div>

              {/* Ini Gambar */}
              <div className="w-full">
                <img src={machinelearning} alt="" className="w-full" />
              </div>
              {/* Isi Blog */}
              <div className="w-full flex flex-col gap-8">
                <div className="text-sm sm:text-base leading-6 flex flex-col gap-4">
                  <p>
                    Dalam era revolusi teknologi, keberadaan machine learning (ML) semakin krusial. Artikel ini akan membahas secara komprehensif tentang dunia machine learning, termasuk tanggung jawab pokok, keterampilan esensial, dan
                    sumber daya belajar untuk membantu Anda menguasai aspek teknis dan strategis dari profesi ini.
                  </p>
                </div>
                <div className="flex flex-col gap-4 text-sm sm:text-base">
                  <h2 className="font-semibold text-xl sm:text-2xl">Meresapi Peran Strategis Machine Learning dalam Era Digital</h2>
                  <p>
                    Sebagai bagian integral dari kecerdasan buatan (AI), machine learning bertanggung jawab untuk mengembangkan model prediktif dan algoritma cerdas. Dalam artikel ini, kami akan menjelaskan tanggung jawab utama,
                    keterampilan kunci, dan langkah-langkah penting untuk membangun karir sukses sebagai profesional machine learning.
                  </p>
                </div>
                {/*  */}
                <div className="flex flex-col gap-4 text-sm sm:text-base">
                  <h2 className="font-semibold text-xl sm:text-2xl">Tanggung Jawab dan Tugas Inti dalam Dunia Machine Learning</h2>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">1. Penyelidikan dan Pemahaman Data</h3>
                    <p>Melakukan analisis mendalam terhadap dataset untuk memahami karakteristik dan potensinya. Mengidentifikasi pola, tren, dan anomali dalam data yang menjadi dasar model.</p>
                    <p>
                      Tanggung jawab ini membutuhkan keahlian dalam melakukan eksplorasi data yang mendalam, memanfaatkan berbagai teknik statistik dan visualisasi untuk mengekspos wawasan berharga yang dapat membimbing pengembangan model.
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">2. Pemilihan Model dan Pengembangan Algoritma</h3>
                    <p>Memilih model machine learning yang sesuai untuk tujuan tertentu. Mengembangkan, melatih, dan mengoptimalkan algoritma untuk memastikan kinerja yang optimal.</p>
                    <p>Sebagai seorang professional ML, Anda akan diharapkan memiliki pengetahuan mendalam tentang berbagai jenis model dan algoritma, serta kemampuan untuk merancang dan mengimplementasikan solusi yang tepat.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4  sm:pl-8">3. Validasi dan Pengujian Model</h3>
                    <p>Melakukan validasi silang dan pengujian model untuk mengevaluasi kualitas prediksi. Mengidentifikasi dan memperbaiki overfitting atau underfitting.</p>
                    <p>Tanggung jawab ini mencakup penggunaan metode evaluasi model yang canggih, serta kemampuan untuk mengoptimalkan parameter agar model memberikan hasil yang konsisten dan dapat diandalkan.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">4. Implementasi dan Integrasi Model</h3>
                    <p>Menerapkan model machine learning dalam lingkungan produksi. Mengintegrasikan model ke dalam sistem atau aplikasi yang ada.</p>
                    <p>Selain keahlian teknis, seorang profesional ML juga harus memahami cara mengintegrasikan solusi ML ke dalam infrastruktur yang ada, memastikan implementasi yang mulus.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">5. Pemeliharaan dan Peningkatan Model</h3>
                    <p>Memantau performa model secara berkala dan melakukan pemeliharaan. Mengembangkan strategi untuk meningkatkan model seiring waktu.</p>
                    <p>Tanggung jawab ini mencakup pemahaman terhadap siklus hidup model, pemantauan performa, dan kemampuan untuk membuat penyesuaian guna meningkatkan keakuratan dan efektivitas model.</p>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col gap-4 text-sm sm:text-base">
                  <h2 className="font-semibold text-xl sm:text-2xl">Keterampilan Kunci dalam Machine Learning</h2>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">1. Penguasaan Bahasa Pemrograman (Python/R)</h3>
                    <p>Kemahiran dalam menggunakan Python atau R untuk mengimplementasikan dan mengelola model machine learning.</p>
                    <p>Sebagai bahasa pemrograman utama dalam dunia ML, keahlian Python atau R sangat penting. Kemampuan scripting dan pemrograman memungkinkan Anda membuat solusi ML yang efektif.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">2. Pemahaman Algoritma Machine Learning</h3>
                    <p>Pemahaman mendalam tentang berbagai algoritma machine learning seperti regresi, klasifikasi, dan clustering.</p>
                    <p>Seorang profesional ML harus memahami kelebihan dan kelemahan berbagai algoritma, serta mampu memilih dan mengonfigurasi algoritma yang paling sesuai dengan kasus penggunaan.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">3. Keterampilan Pengolahan Data</h3>
                    <p>Pemahaman dalam manipulasi dan pembersihan data menggunakan alat seperti Pandas atau NumPy.</p>
                    <p>Sebelum mengembangkan model, seorang professional ML harus memiliki kemampuan untuk menyiapkan data yang bersih dan relevan, memahami struktur data, dan mengatasi anomali.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">4. Pemahaman Model Deep Learning</h3>
                    <p>Keterampilan dalam mengimplementasikan dan mengelola model deep learning menggunakan framework seperti TensorFlow atau PyTorch.</p>
                    <p>Dengan kemajuan model deep learning, pemahaman tentang konsep dan implementasinya dalam framework populer seperti TensorFlow atau PyTorch menjadi keterampilan yang sangat dihargai.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">5. Kemampuan Visualisasi Data</h3>
                    <p>Keterampilan dalam membuat visualisasi data yang efektif untuk memahami dan menjelaskan hasil model.</p>
                    <p>Pemahaman tentang cara menyajikan hasil model secara visual dapat membantu dalam mengomunikasikan temuan dengan pemangku kepentingan non-teknis.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 text-sm sm:text-base">
                  <h2 className="font-semibold text-xl sm:text-2xl">Membangun Karir Sebagai Profesional Machine Learning Sekarang Juga!</h2>
                  <p>
                    Teruslah memperdalam pemahaman Anda tentang teknologi baru, ikuti perkembangan tren machine learning, dan ambil bagian dalam proyek-proyek yang relevan untuk memastikan kesuksesan sebagai profesional machine learning
                    yang berkinerja tinggi. Ditempat ini saatnya Anda memulai perjalanan dalam menguasai kecerdasan buatan yang sedang berkembang pesat!
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
