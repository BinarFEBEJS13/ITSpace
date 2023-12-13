import React, { useRef, useState } from "react";

export const FilterMobile = ({ onClose, onApplyFilter, onClearFilter }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    sipaling: [],
    kategori: [],
    level: [],
  });

  const handleChangeSipaling = (event) => {
    const { value, checked } = event.target;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      sipaling: checked ? [value] : [],
    }));
  };

  const handleChangeKategori = (event) => {
    const { value, checked } = event.target;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      kategori: checked ? [...prevFilters.kategori, value] : prevFilters.kategori.filter((kat) => kat !== value),
    }));
  };

  const handleChangeLevel = (event) => {
    const { value, checked } = event.target;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      level: checked ? [...prevFilters.level, value] : prevFilters.level.filter((lev) => lev !== value),
    }));
  };

  // Create refs for each checkbox
  const baruCheckboxRef = useRef(null);
  const populerCheckboxRef = useRef(null);
  const promoCheckboxRef = useRef(null);
  // Create refs for each kategori checkbox
  const uiuxCheckboxRef = useRef(null);
  const frontendCheckboxRef = useRef(null);
  const databaseCheckboxRef = useRef(null);
  const backendCheckboxRef = useRef(null);
  const machinelearningCheckboxRef = useRef(null);
  // Create refs for each level checkbox
  const beginnerCheckboxRef = useRef(null);
  const intermediateCheckboxRef = useRef(null);
  const advancedCheckboxRef = useRef(null);

  const handleClearFilter = () => {
    setSelectedFilters({
      sipaling: [],
      kategori: [],
      level: [],
    });

    // Uncheck checkboxes using refs
    if (baruCheckboxRef.current) {
      baruCheckboxRef.current.checked = false;
    }
    if (populerCheckboxRef.current) {
      populerCheckboxRef.current.checked = false;
    }
    if (promoCheckboxRef.current) {
      promoCheckboxRef.current.checked = false;
    }

    // Uncheck Kategori Checkboxes
    if (uiuxCheckboxRef.current) {
      uiuxCheckboxRef.current.checked = false;
    }
    if (frontendCheckboxRef.current) {
      frontendCheckboxRef.current.checked = false;
    }
    if (databaseCheckboxRef.current) {
      databaseCheckboxRef.current.checked = false;
    }
    if (backendCheckboxRef.current) {
      backendCheckboxRef.current.checked = false;
    }
    if (machinelearningCheckboxRef.current) {
      machinelearningCheckboxRef.current.checked = false;
    }

    // Uncheck level checkboxes
    if (beginnerCheckboxRef.current) {
      beginnerCheckboxRef.current.checked = false;
    }
    if (intermediateCheckboxRef.current) {
      intermediateCheckboxRef.current.checked = false;
    }
    if (advancedCheckboxRef.current) {
      advancedCheckboxRef.current.checked = false;
    }

    onClearFilter();
  };

  const handleApplyFilter = () => {
    onApplyFilter(selectedFilters);
    onClose();
  };

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
                    <input ref={baruCheckboxRef} onChange={handleChangeSipaling} value={"baru"} type="checkbox" className="accent-biru-0 w-4"></input>
                    <p className="text-sm">Paling Baru</p>
                  </div>
                  <div className="flex gap-2">
                    <input ref={populerCheckboxRef} onChange={handleChangeSipaling} value={"populer"} type="checkbox" className="accent-biru-0 w-4"></input>
                    <p className="text-sm">Paling Populer</p>
                  </div>
                  <div className="flex gap-2">
                    <input ref={promoCheckboxRef} onChange={handleChangeSipaling} value={"promo"} type="checkbox" className="accent-biru-0 w-4"></input>
                    <p className="text-sm">Promo</p>
                  </div>
                </div>
                {/* Berdasarkan Kategori */}
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-lg">Kategori</h2>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-2">
                      <input ref={uiuxCheckboxRef} onChange={handleChangeKategori} value={"ui/ux"} type="checkbox" className="accent-biru-0 w-4"></input>
                      <p className="text-sm">UI/UX Design</p>
                    </div>
                    <div className="flex gap-2">
                      <input ref={frontendCheckboxRef} onChange={handleChangeKategori} value={"frontend"} type="checkbox" className="accent-biru-0 w-4"></input>
                      <p className="text-sm">Frontend</p>
                    </div>
                    <div className="flex gap-2">
                      <input ref={databaseCheckboxRef} onChange={handleChangeKategori} value={"database"} type="checkbox" className="accent-biru-0 w-4"></input>
                      <p className="text-sm">Database</p>
                    </div>
                    <div className="flex gap-2">
                      <input ref={backendCheckboxRef} onChange={handleChangeKategori} value={"backend"} type="checkbox" className="accent-biru-0 w-4"></input>
                      <p className="text-sm">Backend</p>
                    </div>
                    <div className="flex gap-2">
                      <input ref={machinelearningCheckboxRef} onChange={handleChangeKategori} value={"machine learning"} type="checkbox" className="accent-biru-0 w-4"></input>
                      <p className="text-sm">Machine Learning</p>
                    </div>
                  </div>
                </div>
                {/* Berdasarkan Level kesulitan */}
                <div className="flex flex-col gap-2">
                  <h2 className="font-bold text-lg">Level Kesulitan</h2>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-2">
                      <input ref={beginnerCheckboxRef} onChange={handleChangeLevel} value={"BEGINNER"} type="checkbox" className="accent-biru-0 w-4"></input>
                      <p className="text-sm">Beginner Level</p>
                    </div>
                    <div className="flex gap-2">
                      <input ref={intermediateCheckboxRef} onChange={handleChangeLevel} value={"INTERMEDIATE"} type="checkbox" className="accent-biru-0 w-4"></input>
                      <p className="text-sm">Intermediate Level</p>
                    </div>
                    <div className="flex gap-2">
                      <input ref={advancedCheckboxRef} onChange={handleChangeLevel} value={"ADVANCED"} type="checkbox" className="accent-biru-0 w-4"></input>
                      <p className="text-sm">Advanced Level</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-center">
                <button onClick={handleApplyFilter} className="bg-biru-0 text-white rounded-md px-4 py-1 shadow-sm-button">
                  Terapkan Filter
                </button>
                <button onClick={handleClearFilter} className="bg-merah-0 text-white rounded-md px-4 py-1 shadow-sm-button">
                  Hapus Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
