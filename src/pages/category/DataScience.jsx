import React from "react";
import { Navbar } from "../../assets/components/Navbar";
import datascience from "../../assets/img/category/datascience.jpeg";
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

export const DataScience = () => {
  const navigate = useNavigate();
  const { data: datacourses, isLoading } = useGetDataKursus({
    category: "data science",
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
                <div className="bg-gradientbutton text-white w-max px-4 py-2 rounded-md">Data Science</div>
              </div>
              {/* Ini Judul */}
              <div className="w-full flex flex-col">
                <div className="">
                  <p className="text-2xl sm:text-3xl xl:text-4xl font-bold tracking-wide" style={{ lineHeight: "1.5" }}>
                    Menapaki Jalan Data Science: Panduan Meraih Puncak Keahlian
                  </p>
                </div>
              </div>

              {/* Ini Gambar */}
              <div className="w-full">
                <img src={datascience} alt="" className="w-full" />
              </div>
              {/* Isi Blog */}
              <div className="w-full flex flex-col gap-8">
                <div className="text-sm sm:text-base leading-6 flex flex-col gap-4">
                  <p>
                    Dalam era digital yang dipenuhi dengan data, profesi Data Science semakin menjadi pusat perhatian. Artikel ini akan membahas secara holistik tentang dunia Data Science, melibatkan tanggung jawab inti, keterampilan kunci
                    yang dibutuhkan, dan sumber daya belajar untuk membimbing Anda meraih puncak keahlian dalam bidang ini.
                  </p>
                </div>
                <div className="flex flex-col gap-4 text-sm sm:text-base">
                  <h2 className="font-semibold text-xl sm:text-2xl">Meresapi Peran Strategis Data Science dalam Bisnis dan Teknologi</h2>
                  <p>
                    Data Science menjadi tulang punggung dalam menggali pengetahuan berharga dari data untuk mendukung pengambilan keputusan. Dalam artikel ini, kita akan menjelaskan tanggung jawab pokok, keterampilan yang esensial, dan
                    langkah-langkah penting untuk membangun karir sukses sebagai seorang Data Scientist.
                  </p>
                </div>
                {/*  */}
                <div className="flex flex-col gap-4 text-sm sm:text-base">
                  <h2 className="font-semibold text-xl sm:text-2xl">Tanggung Jawab dan Tugas Inti dalam Dunia Data Science</h2>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">1. Pemahaman Bisnis dan Penyelidikan Data</h3>
                    <p>Menganalisis kebutuhan bisnis dan merumuskan pertanyaan data yang relevan. Melakukan penyelidikan mendalam terhadap dataset untuk mengidentifikasi tren dan pola.</p>
                    <p>Data Scientist perlu memiliki pemahaman mendalam tentang operasi bisnis dan kemampuan untuk merumuskan pertanyaan yang dapat dijawab dengan data.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">2. Eksplorasi dan Persiapan Data</h3>
                    <p>Membersihkan dan mengorganisir data untuk analisis. Mengidentifikasi dan mengatasi masalah kualitas data.</p>
                    <p>Tanggung jawab ini melibatkan pemahaman yang kuat tentang manipulasi data dan kemampuan untuk menghadapi tantangan yang muncul dalam kualitas data.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4  sm:pl-8">3. Pemodelan Statistik dan Machine Learning</h3>
                    <p>Menerapkan model statistik untuk menjelaskan fenomena atau membuat prediksi. Menggunakan teknik machine learning untuk mengembangkan model prediktif.</p>
                    <p>Data Scientist perlu memiliki pengetahuan mendalam tentang statistik dan machine learning untuk membangun model yang dapat memberikan wawasan bernilai.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">4. Evaluasi Model dan Interpretasi Hasil</h3>
                    <p>Mengukur kinerja model dan mengidentifikasi area perbaikan. Mengomunikasikan hasil analisis dengan cara yang dapat dimengerti oleh pemangku kepentingan non-teknis.</p>
                    <p>Sebagai pemangku kepentingan utama, Data Scientist harus memiliki kemampuan untuk menyajikan hasil analisis dengan cara yang relevan untuk pemangku kepentingan bisnis.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">5. Implementasi dan Integrasi Solusi Data Science</h3>
                    <p>Menerapkan hasil analisis ke dalam lingkungan produksi. Mengintegrasikan solusi data science ke dalam proses bisnis.</p>
                    <p>Data Scientist perlu bekerja sama dengan tim teknologi informasi untuk memastikan implementasi yang sukses dan integrasi yang mulus.</p>
                  </div>
                </div>
                {/*  */}
                <div className="flex flex-col gap-4 text-sm sm:text-base">
                  <h2 className="font-semibold text-xl sm:text-2xl">Keterampilan Kunci dalam Data Science</h2>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">1. Penguasaan Bahasa Pemrograman (Python/R)</h3>
                    <p>Kemahiran dalam menggunakan Python atau R untuk analisis dan pengolahan data.</p>
                    <p>Python dan R menjadi bahasa utama dalam ekosistem Data Science, memungkinkan Data Scientist untuk menjalankan analisis dan membangun model dengan efisien.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">2. Pengalaman dengan Alat Analisis Data</h3>
                    <p>Penggunaan alat seperti Pandas, NumPy, atau SQL untuk manipulasi data. Kemahiran dalam menggunakan alat visualisasi data seperti Matplotlib atau Seaborn.</p>
                    <p>Data Scientist perlu menguasai alat-alat analisis data yang umum digunakan untuk memproses dan memvisualisasikan data dengan efektif.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">3. Pemahaman Model Machine Learning</h3>
                    <p>Pengetahuan tentang berbagai algoritma machine learning dan teknik statistik. Pemahaman tentang bagaimana dan kapan menggunakan model yang tepat..</p>
                    <p>Kemampuan untuk memilih dan mengkonfigurasi model machine learning yang sesuai dengan tujuan analisis adalah keterampilan utama.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">4. Keterampilan Komunikasi</h3>
                    <p>Kemampuan untuk menjelaskan hasil analisis dengan jelas dan persuasif. Keterampilan berkomunikasi dengan pemangku kepentingan non-teknis.</p>
                    <p>Data Scientist perlu menjadi narator cerdas, mampu menyampaikan temuan mereka dengan cara yang dimengerti oleh semua pemangku kepentingan.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold pl-4 sm:pl-8">5. Pemahaman Bisnis</h3>
                    <p>Kemampuan untuk merangkul konteks bisnis dan menyusun pertanyaan data yang relevan. Pemahaman mendalam tentang dampak analisis terhadap pengambilan keputusan bisnis.</p>
                    <p>Sebagai mitra strategis, Data Scientist harus dapat mengartikulasikan dampak analisis data terhadap tujuan bisnis.</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 text-sm sm:text-base">
                  <h2 className="font-semibold text-xl sm:text-2xl">Membangun Karir Sebagai Profesional Data Science Sekarang Juga!</h2>
                  <p>
                    Teruslah meningkatkan keahlian Anda melalui pembelajaran terus-menerus, terlibat dalam proyek-proyek yang menantang. Ditempat ini saatnya Anda memulai perjalanan untuk menguasai keterampilan sebagai seorang Data Science!
                  </p>
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
