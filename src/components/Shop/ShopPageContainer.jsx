import React from "react";

export default function ShopPageContainer({ children }) {
  return (
    // Mobile and desktop responsive container based on Figma layouts
    <section className="flex w-full mx-auto items-center h-[80px]">
      <div className="flex w-full flex-row shadow-sm p-4 sm:p-6 lg:p-10 lg:px-10 items-center justify-center">
        <div className="flex w-3/4 items-center justify-between mb-4 sm:mb-6 bg-white lg:px-6">
          <h1 className="sm:text-2xl font-bold h-8">Shop</h1>
          <nav className="text-sm text-gray-500 ">
            Home <span className="mx-1">›</span> <span className="text-gray-900">Shop</span>
          </nav>
        </div>
        {children}
      </div>
    </section>
  );
}
