import { useState } from "react";
import { LayoutGrid, List, ChevronDown } from "lucide-react";

export default function FilterRow({ resultsCount = 12 }) {
  const [view, setView] = useState("grid");
  const [sortLabel, setSortLabel] = useState("Popularity");
  const [open, setOpen] = useState(false);

  return (
    <section className="flex w-full justify-center items-center h-[98px]">
      <div className="flex flex-row w-3/4 md:w-[1050px] h-full justify-between items-center">

        {/* LEFT: Results Count */}
        <div className="text-sm text-gray-600 font-semibold">
          Showing all <span>{resultsCount}</span> results
        </div>

        {/* CENTER: Views */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600 font-semibold">Views:</span>

          {/* GRID VIEW */}
          <button
            onClick={() => setView("grid")}
            className={`w-9 h-9 border rounded flex items-center justify-center ${
              view === "grid"
                ? "border-gray-300 bg-gray-100"
                : "border-gray-200 hover:bg-gray-100"
            }`}
          >
            <LayoutGrid
              size={18}
              className={view === "grid" ? "text-[#252B42]" : "text-[#737373]"}
            />
          </button>

          {/* LIST VIEW */}
          <button
            onClick={() => setView("list")}
            className={`w-9 h-9 border rounded flex items-center justify-center ${
              view === "list"
                ? "border-gray-300 bg-gray-100"
                : "border-gray-200 hover:bg-gray-100"
            }`}
          >
            <List
              size={18}
              className={view === "list" ? "text-[#252B42]" : "text-[#737373]"}
            />
          </button>
        </div>

        {/* RIGHT: Sort Dropdown + Filter Button */}
        <div className="flex items-center gap-3">

          {/* POPULARITY DROPDOWN */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="px-4 py-2 h-[42px] border border-gray-300 rounded text-gray-600 text-sm flex items-center gap-2 hover:bg-gray-100"
            >
              {sortLabel}
              <ChevronDown size={16} className="text-[#737373]" />
            </button>

            {open && (
              <ul className="absolute right-0 top-[110%] bg-white border border-gray-200 rounded shadow-md w-40 z-20">
                {["Popularity", "Newest", "Price: Low to High", "Price: High to Low"].map(
                  (option) => (
                    <li
                      key={option}
                      onClick={() => {
                        setSortLabel(option);
                        setOpen(false);
                      }}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                    >
                      {option}
                    </li>
                  )
                )}
              </ul>
            )}
          </div>

          {/* FILTER BUTTON */}
          <button className="px-5 py-2 h-[42px] rounded bg-[#23A6F0] text-white font-semibold text-sm hover:bg-[#1e96d6]">
            Filter
          </button>

        </div>

      </div>
    </section>
  );
}
