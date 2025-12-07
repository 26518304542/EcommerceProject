import React from 'react';
import { Check } from 'lucide-react';

function PriceCard({ plan }){
    const { title, subtitle, price, per = 'Per Month', features = [], variant = 'light' } = plan;
    const isDark = variant === 'dark';

    return (
        <div className={`w-full max-w-[328px] ${isDark ? 'bg-[#252B42] text-white' : 'bg-white text-[#252B42]'} border border-[#23A6F0] box-border flex flex-col items-center p-[50px_40px] gap-[35px]`}>
            <h3 className={`font-[Montserrat] font-bold text-[24px] leading-[32px] ${isDark ? 'text-white' : 'text-[#252B42]'}`}>{title}</h3>
            <h5 className={`font-[Montserrat] font-bold text-[16px] leading-[24px] ${isDark ? 'text-white' : 'text-[#737373]'}`}>{subtitle}</h5>

            <div className="flex items-center gap-2">
                <div className={`flex flex-col items-start ${isDark ? 'text-[#23A6F0]' : 'text-[#23A6F0]'}`}>
                    <h2 className="font-[Montserrat] font-bold text-[40px] leading-[50px]">{price}</h2>
                </div>
                <div className="flex flex-col text-sm text-[#8EC2F2]">
                    <div className={`${isDark ? 'text-[#8EC2F2]' : 'text-[#8EC2F2]'}`}></div>
                    <div className={`text-[14px] ${isDark ? 'text-[#8EC2F2]' : 'text-[#8EC2F2]'}`}>{per}</div>
                </div>
            </div>

            <div className="w-[247px] flex flex-col gap-4">
                {features.map((f, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${f.available ? 'bg-[#2DC071]' : 'bg-[#BDBDBD]'}`}>
                            <Check size={14} color="#fff" />
                        </div>
                        <div className={`font-[Montserrat] font-bold text-[14px] ${isDark ? 'text-white' : 'text-[#252B42]'}`}>{f.label}</div>
                    </div>
                ))}
            </div>

            <div className="mt-4">
                <button className="px-10 py-3 bg-[#23A6F0] text-white font-[Montserrat] font-bold rounded">Try for free</button>
            </div>
        </div>
    );
}

export default function Row({ plans }){
    const defaultPlans = [
        {
            title: 'FREE',
            subtitle: 'Organize across all apps by hand',
            price: '0',
            per: '$ Per Month',
            variant: 'light',
            features: [
                { label: 'Unlimited product updates', available: true },
                { label: 'Unlimited product updates', available: true },
                { label: 'Unlimited product updates', available: true },
                { label: '10GB Cloud storage', available: true },
                { label: 'Email and community support', available: false },
            ],
        },
        {
            title: 'STANDARD',
            subtitle: 'Organize across all apps by hand',
            price: '9.99',
            per: '$ Per Month',
            variant: 'dark',
            features: [
                { label: 'Unlimited product updates', available: true },
                { label: 'Unlimited product updates', available: true },
                { label: 'Unlimited product updates', available: true },
                { label: '10GB Cloud storage', available: true },
                { label: 'Email and community support', available: true },
            ],
        },
        {
            title: 'PREMIUM',
            subtitle: 'Organize across all apps by hand',
            price: '19.99',
            per: '$ Per Month',
            variant: 'light',
            features: [
                { label: 'Unlimited product updates', available: true },
                { label: 'Unlimited product updates', available: true },
                { label: 'Unlimited product updates', available: true },
                { label: '10GB Cloud storage', available: true },
                { label: 'Email and community support', available: true },
            ],
        },
    ];

    const list = plans && plans.length ? plans : defaultPlans;

    return (
        <section className="w-full flex justify-center py-8">
            <div className="w-full max-w-[1200px] px-4 grid grid-cols-1 md:grid-cols-3 gap-6 items-start justify-items-center">
                {list.map((p, i) => (
                    <PriceCard key={i} plan={p} />
                ))}
            </div>
        </section>
    );
}