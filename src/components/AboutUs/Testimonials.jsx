import React from 'react';

export default function Testimonials() {
  return (
    <section className="w-full max-h-64 bg-[#2A7CC7] text-white relative overflow-hidden" style={{ minHeight: 520 }}>
      {/* Right-side decorative image for desktop (absolute) */}
      <div
        className="hidden md:block"
        style={{
          position: 'absolute',
          left: 850,
          right: 0,
          top: 0,
          bottom: -3,
          backgroundImage: `url('/images/testimonials/hero.svg')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
          zIndex: 0,
        }}
        aria-hidden
      />

      {/* Container: mobile-first, desktop centered with 1050px width */}
      <div className="mx-auto w-[414px] md:w-[1050px] md:pt-[112px] py-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-[225px]">

          {/* Left column (text) */}
          <div className="md:w-[438px] flex flex-col items-start gap-6 px-6 md:px-0">
            <h5 className="text-[16px] font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              WORK WITH US
            </h5>

            <h2 className="text-[40px] leading-[50px] font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Now Let’s grow Yours
            </h2>

            <p className="text-[14px] leading-[20px] text-[#FFFFFF]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
            </p>

            <button
              className="mt-4 border border-white rounded-[5px] text-[14px] font-bold px-10 py-3"
              style={{ fontFamily: 'Montserrat, sans-serif', background: 'transparent' }}
            >
              Button
            </button>
          </div>

          {/* spacer to preserve layout on mobile (image is absolute on desktop) */}
          <div className="hidden md:block md:w-[548px] h-[412px]" aria-hidden />
        </div>
      </div>

      {/* background filler to match desktop height */}
      <div className="hidden md:block" style={{ height: 636 }} />
    </section>
  );
}
