import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function SortBar({ options = [], onSortChange }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(options[0] || "Sort By");

  const handleSelect = (opt) => {
    setSelected(opt);
    setOpen(false);
    onSortChange && onSortChange(opt);
  };

  return (
    <div className="flex flex-row items-center px-[1px] gap-[15px] w-[252px] h-[50px] mx-auto relative">
      {/* Custom Select */}
      <div className="relative w-[141px] h-[50px]">
        {/* Background */}
        <div className="absolute inset-0 bg-[#F9F9F9] border border-[#DDDDDD] rounded-[5px]"></div>

        {/* Label */}
        <button
          onClick={() => setOpen(!open)}
          className="absolute left-[18px] top-1/2 -translate-y-1/2 text-[14px] leading-[28px] tracking-[0.2px] text-[#737373] font-montserrat flex items-center gap-2 w-full text-left"
        >
          {selected}
        </button>

        {/* Arrow */}
        <ChevronDown
          className="absolute right-[35px] top-1/2 -translate-y-1/2 text-[#737373] rotate-90"
          size={14}
        />

        {/* Dropdown */}
        {open && (
          <div className="absolute top-[55px] left-0 w-full bg-white border border-[#DDDDDD] rounded-md shadow-md py-2 z-50">
            {options.map((opt, i) => (
              <div
                key={i}
                className={`px-4 py-2 text-[15px] leading-[16px] tracking-[0.1px] font-roboto cursor-pointer hover:bg-gray-100 ${
                  selected === opt ? "text-[#23A6F0]" : "text-[#737373]"
                }`}
                onClick={() => handleSelect(opt)}
              >
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Button */}
      <button className="flex items-center justify-center px-[20px] py-[10px] w-[94px] h-[50px] bg-[#23A6F0] rounded-[5px]">
        <span className="text-white text-[14px] font-montserrat font-bold leading-[24px] tracking-[0.2px]">
          Sort
        </span>
      </button>
    </div>
  );
}
