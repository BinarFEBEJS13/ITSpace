import React from "react";
import itspace from "../img/it-space-putih.png";
// ssvh sosmed
import instagram from "../svg/sosmed/instagram.svg";
import facebook from "../svg/sosmed/facebook.svg";
import linkedin from "../svg/sosmed/linkedin.svg";
import youtube from "../svg/sosmed/youtube.svg";

export const Footer = () => {
  return (
    <>
      <div className="w-screen bg-gradientkanan">
        <div className="container mx-auto">
          <div className="py-6 flex flex-col gap-4 px-6 sm:px-12">
            <div className="flex flex-col justify-center items-center">
              <img src={itspace} alt="" className="w-40 sm:w-80" />
            </div>
            <div className="gap-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5">
              <div className="flex flex-col gap-3">
                <h2 className="text-white font-bold">Tentang IT Space</h2>
                <div className="text-white opacity-80 flex flex-col gap-2 text-xs sm:text-sm">
                  <h6>Blog</h6>
                  <h6>Promo & Diskon</h6>
                  <h6>Pertanyaan</h6>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-white font-bold">Kelas IT Space</h2>
                <div className="text-white opacity-80 flex flex-col gap-2 text-xs sm:text-sm">
                  <h6>UI/UX Design</h6>
                  <h6>FrontEnd</h6>
                  <h6>Database</h6>
                  <h6>Backend</h6>
                  <h6>Machine Learning</h6>
                  <h6>Data Science</h6>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-white font-bold">Kontak Kami</h2>
                <div className="text-white opacity-80 flex flex-col gap-2 text-xs sm:text-sm">
                  <h6>+62 92 1234 56789</h6>
                  <h6>business@itspace.com</h6>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <h2 className="text-white font-bold">Ikuti Kami</h2>
                <div className="text-white opacity-80 flex flex-col gap-2 text-xs sm:text-sm">
                  <div className="flex gap-2 items-center">
                    <img src={instagram} alt="" className="w-6" />
                    <h6>Instagram</h6>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src={facebook} alt="" className="w-6" />
                    <h6>Facebook</h6>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src={linkedin} alt="" className="w-6" />
                    <h6>LinkedIn</h6>
                  </div>
                  <div className="flex gap-2 items-center">
                    <img src={youtube} alt="" className="w-6" />
                    <h6>Youtube</h6>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-48">
                <h2 className="text-white opacity-85 font-bold text-xs sm:text-sm">Jl. Nebula Harmoni No.1, Quantum City, Kosmikabul Galaxy 54321</h2>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="text-white opacity-85 text-xs sm:text-sm">© 2023 IT Space Digital Learning</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
