import React from "react";

export default function ShopPageContainer() {
  return (
    <section className="flex w-full mx-auto items-center h-[150px] md:h-[50px] md:mt-0 mt-32">
      <div className="flex w-full flex-row shadow-sm p-4 sm:p-6 lg:p-10 lg:px-10 items-center justify-center">
        <div className="flex flex-col md:flex-row  items-center md:items-end md:justify-between justify-between bg-white lg:px-6 w-full sm:mb-20 md:mb-0">

          {/* Title */}
          <h1 className="sm:text-2xl font-bold mb-16 md:mb-0 md:ml-44 ">
            Shop
          </h1>

          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-6 md:mb-0 md:mr-44">
            Home <span className="mx-3 text-3xl opacity-35">›</span>
            <span className="text-gray-900">Shop</span>
          </nav>

        </div>
      </div>
    </section>
  );
}
