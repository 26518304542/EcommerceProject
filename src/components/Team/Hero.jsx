export default function Hero({ leftImage = '/images/team/hero-left.svg', rightImages = [
    '/images/team/hero-r1.svg',
    '/images/team/hero-r2.svg',
    '/images/team/hero-r3.svg',
    '/images/team/hero-r4.svg',
] }){
    // rightImages order: [top-left, bottom-left, top-right, bottom-right]
    return (
        <>
            {/* Mobile hero: stacked responsive layout */}
            <section className="md:hidden w-full bg-white mt-10 md:mt-0">
                <div className="w-full">
                    {/* Top large image: full width with aspect-ratio matching design (530/413) */}
                    <div className="w-full overflow-hidden" style={{ aspectRatio: '413 / 530' }}>
                        <img src={leftImage} alt="hero top" className="w-full h-full object-cover" />
                    </div>

                    {/* Grid of 2x2 images: each cell takes 50% width and keeps the 204/260 aspect ratio */}
                    <div className="w-full grid grid-cols-2 gap-0">
                        {rightImages.slice(0,4).map((src, idx) => (
                            <div key={`mobile-${idx}`} className="w-full overflow-hidden" style={{ aspectRatio: '204 / 260' }}>
                                <img src={src} alt={`hero mobile ${idx+1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Desktop hero: responsive two-column layout */}
            <section className="hidden md:block w-full bg-white">
                <div className="w-full mx-auto flex flex-col md:flex-row items-stretch">
                    {/* Left large image takes ~50% on desktop */}
                    <div className="w-full md:w-1/2 overflow-hidden" style={{ minHeight: 0 }}>
                        <div style={{ aspectRatio: '700 / 530' }} className="w-full h-full overflow-hidden">
                            <img src={leftImage} alt="hero left" className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Right side: 2x2 grid that fills remaining space */}
                    <div className="w-full md:w-1/2 grid grid-cols-2 grid-rows-2">
                        {rightImages.slice(0,4).map((src, idx) => (
                            <div key={`desk-${idx}`} className="w-full h-full overflow-hidden" style={{ aspectRatio: '361 / 260' }}>
                                <img src={src} alt={`hero split ${idx+1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}