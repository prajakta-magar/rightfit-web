import React from "react";

const FilterDisplay = ({ filters, clearFilter }) => {
  return (
    <div className="flex gap-2">
      {Object.keys(filters).map(
        (key) =>
          filters[key] !== "All" && (
            <div key={key} className="">
              {/* <span className="text-gray-700"></span> */}
              <button
                onClick={() => clearFilter(key)}
                className="font-bold px-3 py-2 bg-slate-300"
              >
                {filters[key]}
                &nbsp; &times;
              </button>
            </div>
          )
      )}
    </div>
  );
};

export default FilterDisplay;
