import React from 'react';

export default function TeamCard({ name, role, img }) {
  return (
    <article className="w-[316px] h-[403px] bg-white flex flex-col items-center relative">
      {/* media */}
      <div
        className="w-[316px] h-[231px] bg-center bg-cover"
        style={{ backgroundImage: `url(${img})` }}
        role="img"
        aria-label={name}
      />

      {/* card content */}
      <div className="w-[316px] flex flex-col items-center p-6 gap-2">
        <h5 className="text-[16px] font-bold text-[#252B42]" style={{ fontFamily: 'Montserrat, sans-serif' }}>{name}</h5>
        <h6 className="text-[14px] font-bold text-[#737373]" style={{ fontFamily: 'Montserrat, sans-serif' }}>{role}</h6>

        <div className="flex flex-row items-center justify-center gap-5 mt-3" style={{ width: 112 }}>
          {/* Facebook */}
          <a href="#" aria-label="facebook" className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: '#335BF5' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.888h-2.33v6.99C18.343 21.128 22 16.991 22 12z" fill="#fff"/>
            </svg>
          </a>

          {/* Instagram */}
          <a href="#" aria-label="instagram" className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: '#E61F5A' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.5 6.5h.01" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Twitter */}
          <a href="#" aria-label="twitter" className="w-6 h-6 rounded-full flex items-center justify-center" style={{ background: '#21A6DF' }}>
            <svg width="12" height="10" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 2.999c-.8.356-1.66.597-2.56.704a4.48 4.48 0 0 0-7.64 4.08A12.7 12.7 0 0 1 3 2.67a4.48 4.48 0 0 0 1.39 5.98c-.68-.02-1.33-.21-1.9-.52v.05c0 2.15 1.53 3.95 3.56 4.36a4.5 4.5 0 0 1-2.02.08c.57 1.78 2.22 3.08 4.18 3.12A9.01 9.01 0 0 1 1.8 17.6a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78l-.01-.58A9.2 9.2 0 0 0 23 2.999z" fill="#fff"/>
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}
