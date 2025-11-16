import React from "react";

const EditorPicks = () => {
  return (
    <section className="w-full py-16 bg-white flex flex-col items-center">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold tracking-widest mb-2">
          EDITOR’S PICK
        </h2>
        <p className="text-gray-500 text-sm">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Görseller alanı */}
      <div
        className="
          flex
          md:flex-row
          flex-col
          justify-center
          gap-4
          w-[90%]
          md:w-[70%]
          max-w-5xl
        "
      >
        {/* 1. MEN */}
        <div className="relative flex-[1.0]">
          <img
            src="/images/editorspic/media bg-cover.png"
            alt="Men"
            className="w-full h-full object-cover rounded-lg"
          />
          <span className="absolute bottom-4 left-4 bg-white px-4 py-2 font-semibold text-sm">
            MEN
          </span>
        </div>

        {/* 2. WOMEN */}
        <div className="relative flex-[0.5]">
          <img
            src="/images/editorspic/media bg-cover (1).png"
            alt="Women"
            className="w-full h-full object-cover rounded-lg"
          />
          <span className="absolute bottom-4 left-4 bg-white px-4 py-2 font-semibold text-sm">
            WOMEN
          </span>
        </div>

        {/* Sağ taraf (ACCESSORIES + KIDS) */}
        <div className="flex flex-col gap-4 flex-[0.5]">
          <div className="relative">
            <img
              src="/images/editorspic/media bg-cover (2).png"
              alt="Accessories"
              className="w-full h-full object-cover rounded-lg"
            />
            <span className="absolute bottom-4 left-4 bg-white px-4 py-2 font-semibold text-sm">
              ACCESSORIES
            </span>
          </div>

          <div className="relative">
            <img
              src="/images/editorspic/media bg-cover (3).png"
              alt="Kids"
              className="w-full h-full object-cover rounded-lg"
            />
            <span className="absolute bottom-4 left-4 bg-white px-4 py-2 font-semibold text-sm">
              KIDS
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorPicks;
