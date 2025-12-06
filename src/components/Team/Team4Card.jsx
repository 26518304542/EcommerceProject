import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Team4Card({ member }){
    const { name, role, img, facebook, instagram, twitter } = member || {};

    return (
        <article className="w-[316px] h-[403px] bg-white flex flex-col items-center relative">
            {/* media */}
            <div className="w-full h-[231px] overflow-hidden relative">
                <img src={img} alt={name} className="w-full h-full object-cover" />
            </div>

            {/* card-content */}
            <div className="w-full flex flex-col items-center px-8 py-6 gap-2" style={{ height: 172 }}>
                <h5 className="font-[Montserrat] font-bold text-[16px] leading-[24px] text-[#252B42]">{name}</h5>
                <h6 className="font-[Montserrat] font-semibold text-[14px] leading-[24px] text-[#737373]">{role}</h6>

                <div className="mt-2 flex items-center justify-center gap-5 w-[112px] h-[44px]">
                        <a href={facebook || '#'} aria-label="facebook" className="w-8 h-8 inline-flex items-center justify-center rounded-full" style={{ background: '#335BF5' }}>
                            <Facebook size={14} color="#ffffff" />
                        </a>
                        <a href={instagram || '#'} aria-label="instagram" className="w-8 h-8 inline-flex items-center justify-center rounded-full" style={{ background: '#E61F5A' }}>
                            <Instagram size={14} color="#ffffff" />
                        </a>
                        <a href={twitter || '#'} aria-label="twitter" className="w-8 h-8 inline-flex items-center justify-center rounded-full" style={{ background: '#21A6DF' }}>
                            <Twitter size={14} color="#ffffff" />
                        </a>
                </div>
            </div>
        </article>
    );
}