import React, { useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";

export const FilterMobile = ({ onClose, onApplyFilter, onClearFilter }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    sipaling: [],
    sipopular: [],
    kategori: [],
    level: [],
  });

  const handleChangePalingDisukai = (event) => {
    const { value, checked } = event.target;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      sipaling: checked ? [value] : [],
    }));
  };

  const handleChangesiPopular = (event) => {
    const { value, checked } = event.target;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      sipopular: checked ? [value] : [],
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
  const disukaiCheckboxRef = useRef(null);
  const populerCheckboxRef = useRef(null);
  // Create refs for each kategori checkbox
  const uiuxCheckboxRef = useRef(null);
  const frontendCheckboxRef = useRef(null);
  const databaseCheckboxRef = useRef(null);
  const backendCheckboxRef = useRef(null);
  const machinelearningCheckboxRef = useRef(null);
  const datascienceCheckboxRef = useRef(null);
  // Create refs for each level checkbox
  const beginnerCheckboxRef = useRef(null);
  const intermediateCheckboxRef = useRef(null);
  const advancedCheckboxRef = useRef(null);

  const handleClearFilter = () => {
    setSelectedFilters({
      sipaling: [],
      sipopular: [],
      kategori: [],
      level: [],
    });

    // Uncheck checkboxes using refs
    if (disukaiCheckboxRef.current) {
      disukaiCheckboxRef.current.checked = false;
    }
    if (populerCheckboxRef.current) {
      populerCheckboxRef.current.checked = false;
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
    if (datascienceCheckboxRef.current) {
      datascienceCheckboxRef.current.checked = false;
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
        <div className="w-full rounded-md flex flex-col pt-24 animate-slide-up">
          {/* Header Filter */}
          <div className="bg-birumuda-0 flex items-center justify-between px-9 py-2 border border-b-2 ">
            <div className="flex gap-2 items-center">
              <FaFilter />
              <h2 className="font-semibold text-lg">FILTER</h2>
            </div>
            {/* Button Close */}
            <button onClick={onClose} className=" bg-biru-0 text-white rounded-full px-2 ">
              X
            </button>
          </div>
          {/* Bagian Filter */}
          <div className="w-full h-full bg-birumuda-0">
            <div className="filter-container max-h-screen overflow-y-scroll">
              {/* Filter Untuk Mobile */}
              <div className="flex w-full flex-col gap-3 px-9 py-6">
                <h2 className="font-medium text-base">Sipaling</h2>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-2">
                      <input ref={disukaiCheckboxRef} onChange={handleChangePalingDisukai} value={"disukai"} type="checkbox" className="accent-biru-0 w-4"></input>
                      <p className="text-sm">Paling Disukai</p>
                    </div>
                    <div className="flex gap-2">
                      <input ref={populerCheckboxRef} onChange={handleChangesiPopular} value={"popularity"} type="checkbox" className="accent-biru-0 w-4"></input>
                      <p className="text-sm">Paling Populer</p>
                    </div>
                  </div>
                  {/* Berdasarkan Kategori */}
                  <div className="flex flex-col gap-2">
                    <h2 className="font-medium text-base">Kategori</h2>
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
                      <div className="flex gap-2">
                        <input ref={datascienceCheckboxRef} onChange={handleChangeKategori} value={"data science"} type="checkbox" className="accent-biru-0 w-4"></input>
                        <p className="text-sm">Data Science</p>
                      </div>
                    </div>
                  </div>
                  {/* Berdasarkan Level kesulitan */}
                  <div className="flex flex-col gap-2">
                    <h2 className="font-medium text-base">Level Kesulitan</h2>
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
      </div>
    </>
  );
};
