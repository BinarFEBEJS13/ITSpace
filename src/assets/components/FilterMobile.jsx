import React from "react";

export const FilterMobile = ({ onClose }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 bg-black bg-opacity-90 sm:hidden">
        <div className="w-full relative rounded-md flex flex-col gap-4 pt-16 animate-slide-up">
          <div className="relative w-full bg-birumuda-0 h-screen px-3">
            {/* Button Close */}
            <button onClick={onClose} className=" bg-biru-0 text-white rounded-full px-2 absolute top-3 right-3">
              X
            </button>
            {/* Filter Untuk Mobile */}
            <div className="flex flex-col gap-3 px-6 py-8 rounded-md">
              <h2 className="font-semibold text-lg">Filter</h2>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-2">
                    <input type="checkbox" className="accent-biru-0 w-4"></input>
                    <p className="text-sm">Paling Baru</p>
                  </div>
                  <div className="flex gap-2">
                    <input type="checkbox" className="accent-biru-0 w-4"></input>
                    <p className="text-sm">Paling Populer</p>
                  </div>
                  <div className="flex gap-2">
                    <input type="checkbox" className="accent-biru-0 w-4"></input>
                    <p className="text-sm">Promo</p>
                  </div>
                </div>
                {/* Berdasarkan Kategori */}
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-lg">Kategori</h2>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-2">
                      <input type="checkbox" className="accent-biru-0 w-4"></input>
                      <p className="text-sm">UI/UX Design</p>
                    </div>
                    <div className="flex gap-2">
                      <input type="checkbox" className="accent-biru-0 w-4"></input>
                      <p className="text-sm">Product Management</p>
                    </div>
                    <div className="flex gap-2">
                      <input type="checkbox" className="accent-biru-0 w-4"></input>
                      <p className="text-sm">Web Development</p>
                    </div>
                    <div className="flex gap-2">
                      <input type="checkbox" className="accent-biru-0 w-4"></input>
                      <p className="text-sm">Android Development</p>
                    </div>
                    <div className="flex gap-2">
                      <input type="checkbox" className="accent-biru-0 w-4"></input>
                      <p className="text-sm">IOS Development</p>
                    </div>
                    <div className="flex gap-2">
                      <input type="checkbox" className="accent-biru-0 w-4"></input>
                      <p className="text-sm">Data Science</p>
                    </div>
                  </div>
                </div>
                {/* Berdasarkan Level kesulitan */}
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-lg">Level Kesulitan</h2>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-2">
                      <input type="checkbox" className="accent-biru-0 w-4"></input>
                      <p className="text-sm">Semua Level</p>
                    </div>
                    <div className="flex gap-2">
                      <input type="checkbox" className="accent-biru-0 w-4"></input>
                      <p className="text-sm">Beginner Level</p>
                    </div>
                    <div className="flex gap-2">
                      <input type="checkbox" className="accent-biru-0 w-4"></input>
                      <p className="text-sm">Intermediate Level</p>
                    </div>
                    <div className="flex gap-2">
                      <input type="checkbox" className="accent-biru-0 w-4"></input>
                      <p className="text-sm">Advanced Level</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <button className="bg-biru-0 text-white rounded-md px-4 py-1 shadow-sm-button">Terapkan Filter</button>
                <button className="bg-merah-0 text-white rounded-md px-4 py-1 shadow-sm-button">Hapus Filter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
