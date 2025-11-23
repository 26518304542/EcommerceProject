import React from "react";

export default function ShopPageContainer() {
  return (
    // Mobile and desktop responsive container based on Figma layouts
    <section className="flex w-full mx-auto items-center h-[150px] mt-48">
      <div className="flex w-full flex-row shadow-sm p-4 sm:p-6 lg:p-10 lg:px-10 items-center justify-center">
        <div className="flex flex-col items-center justify-between mb-4 sm:mb-6 bg-white lg:px-6">
          <h1 className="sm:text-2xl w-full font-bold h-8 mb-28">Shop</h1>
          <nav className="text-sm mb-24  flex-row text-gray-500 ">
            Home <span className="mx-3 text-3xl opacity-35">›</span> <span className="text-gray-900">Shop</span>
          </nav>
        </div>
      </div>
    </section>
  );
}
