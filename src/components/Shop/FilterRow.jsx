import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FilterRow({ resultsCount = 12 }) {
  const [view, setView] = useState("grid");
  const [sortLabel, setSortLabel] = useState("Popularity");
  const [open, setOpen] = useState(false);

  return (
    <section className="flex w-full justify-center items-center h-[98px]">
      <div className="flex md:flex-row w-3/4 md:w-[1050px] h-full justify-between items-center flex-col flex-wrap">

        {/* LEFT: Results Count */}
        <div className="text-sm text-gray-600 font-semibold">
          Showing all <span>{resultsCount}</span> results
        </div>

        {/* CENTER: Views */}
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600 font-semibold">Views:</span>

          {/* GRID VIEW BUTTON (Custom SVG) */}
          <button
            onClick={() => setView("grid")}
            className={`w-[46px] h-[46px] border rounded flex items-center justify-center
              ${
                view === "grid"
                  ? "border-gray-300 bg-gray-100"
                  : "border-gray-200 hover:bg-gray-100"
              }`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className={`${
                view === "grid" ? "fill-[#252B42]" : "fill-[#737373]"
              }`}
            >
              <rect x="3" y="3" width="8" height="8" rx="2" />
              <rect x="13" y="3" width="8" height="8" rx="2" />
              <rect x="3" y="13" width="8" height="8" rx="2" />
              <rect x="13" y="13" width="8" height="8" rx="2" />
            </svg>
          </button>

          {/* LIST VIEW BUTTON (Custom SVG with Checkmarks) */}
          <button
            onClick={() => setView("list")}
            className={`w-[46px] h-[46px] border rounded flex items-center justify-center
              ${
                view === "list"
                  ? "border-gray-300 bg-gray-100"
                  : "border-gray-200 hover:bg-gray-100"
              }`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              className={`${
                view === "list" ? "stroke-[#252B42]" : "stroke-[#737373]"
              }`}
              fill="none"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Checkmarks */}
              <path d="M4 6 L6 8 L10 4" />
              <path d="M4 12 L6 14 L10 10" />
              <path d="M4 18 L6 20 L10 16" />

              {/* List lines */}
              <line x1="12" y1="6" x2="20" y2="6" />
              <line x1="12" y1="12" x2="20" y2="12" />
              <line x1="12" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>

        {/* RIGHT: Sort Dropdown + Filter Button */}
        <div className="flex items-center gap-3">

          {/* SORT DROPDOWN */}
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
