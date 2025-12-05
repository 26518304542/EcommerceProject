import React from 'react';

const logos = [
    { src: '/images/clients/hooli.png', alt: 'Hooli', cls: 'w-[149px] md:w-[103px]' },
    { src: '/images/clients/lyft.png', alt: 'Lyft', cls: 'w-[139px] md:w-[83px]' },
    { src: '/images/clients/pied-piper.png', alt: 'Pied Piper', cls: 'w-[149px] md:w-[102px]' },
    { src: '/images/clients/stripe.png', alt: 'Stripe', cls: 'w-[149px] md:w-[103px]' },
    { src: '/images/clients/aws.png', alt: 'AWS', cls: 'w-[153px] md:w-[104px]' },
    { src: '/images/clients/reddit.png', alt: 'Reddit', cls: 'w-[149px] md:w-[76px]' },
];

export default function Clients() {
    return (
        <section className="bg-[#FAFAFA] w-full">
            {/* Desktop container centered with 1050px width at md+ */}
            <div className="mx-auto w-[410px] md:w-[1050px] pt-[120px] md:pt-[80px] pb-[40px] flex flex-col items-center">
                <div className="text-center">
                    <h2
                        className="text-[40px] leading-[50px] font-extrabold text-[#252B42]"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        Big Companies
                        <br />
                        Are Here
                    </h2>

                    <p
                        className="mt-4 text-[14px] leading-[20px] text-[#737373] mx-auto text-center"
                        style={{ fontFamily: 'Montserrat, sans-serif', maxWidth: '328px' }}
                    >
                        Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>

                {/* Logos: mobile stacked, desktop inline row */}
                <div className="mt-10 w-[327px] md:w-[1054px] flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-[30px] py-6 justify-center">
                    {logos.map((l, i) => (
                        <div key={i} className={`${l.cls} flex items-center justify-center`}> 
                            <img
                                src={l.src}
                                alt={l.alt}
                                className="block max-w-full"
                                style={{ filter: 'grayscale(100%)', opacity: 0.75 }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}