import React, { useState } from 'react';

export default function SwitchRow(){
    const [yearly, setYearly] = useState(false);

    return (
        <section className="flex items-center gap-4 w-[310px] h-[44px]">
            {/* switch group */}
            <div className="relative w-[186px] h-[28px] flex items-center">
                <div className="absolute left-0 top-0">
                    <h5 className="font-[Montserrat] font-bold text-[16px] text-[#252B42]">Monthly</h5>
                </div>

                <button
                    aria-pressed={yearly}
                    onClick={() => setYearly(!yearly)}
                    className="absolute left-[80px] top-[1px] w-[45px] h-[25px] rounded-full border"
                    style={{ borderColor: '#23A6F0', background: '#FFFFFF' }}
                >
                    <span
                        className={`block w-[19px] h-[19px] rounded-full bg-[#EBEBEB] border`}
                        style={{ borderColor: '#D0D0D0', transform: yearly ? 'translateX(20px)' : 'translateX(4px)', transition: 'transform 160ms ease' }}
                    />
                </button>

                <div className="absolute left-[135px] top-0">
                    <h5 className="font-[Montserrat] font-bold text-[16px] text-[#252B42]">Yearly</h5>
                </div>
            </div>

            {/* Save pill */}
            <div className="ml-auto">
                <button className="px-4 py-2 rounded-[37px] bg-[#B3E3FF] font-[Montserrat] font-bold text-[14px] text-[#23A6F0]">
                    Save 25%
                </button>
            </div>
        </section>
    );
}

