export default function Content() {
    return (
        <>
            {/* Mobile layout per mobile-content-9 */}
            <section className="md:hidden relative w-full bg-white" style={{ height: '500px' }}>
                <div className="absolute w-[381px] left-1/2 -translate-x-1/2" style={{ top: 0 }}>
                    <div className="flex flex-col items-start pt-[80px] w-[381px] h-[500px]">
                        <div className="flex flex-col items-center gap-[60px] w-[381px] h-[340px]">
                            <div className="flex flex-col items-center gap-6 w-[381px] h-[220px]">
                                <p className="text-[14px] leading-[20px]" style={{ color: '#E74040', fontFamily: "Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto" }}>
                                    Problems trying
                                </p>

                                <h3 className="text-[24px] leading-[32px] font-bold text-center" style={{ color: '#252B42', fontFamily: "Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto", width: '269px' }}>
                                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                                </h3>
                            </div>

                            <div className="flex flex-col items-start gap-[38px] w-[306px]">
                                <p className="text-[14px] leading-[20px] text-[#737373]" style={{ fontFamily: "Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto", width: '353px' }}>
                                    Problems trying to resolve the conflict bet the two major realms of Classical physics: Newtonian mechanics
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Desktop layout (kept) */}
            <section className="hidden md:block relative w-full bg-white" style={{ height: '236px' }}>
                <div
                    className="mx-auto flex flex-col items-center py-6"
                    style={{ width: '1440px', maxWidth: '100%' }}
                >
                    <div
                        className="flex flex-col md:flex-row items-center justify-center"
                        style={{ width: '1018px', gap: '60px' }}
                    >
                        {/* Left frame */}
                        <div style={{ width: '394px' }} className="flex flex-col items-start gap-6">
                            <p
                                className="text-[14px] leading-[20px]"
                                style={{ color: '#E74040', fontFamily: "Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto" }}
                            >
                                Problems trying
                            </p>

                            <h3
                                className="text-[24px] leading-[32px] font-bold"
                                style={{ color: '#252B42', fontFamily: "Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto" }}
                            >
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
                            </h3>
                        </div>

                        {/* Right column */}
                        <div style={{ width: '529px' }} className="flex items-start">
                            <p
                                className="text-[14px] leading-[20px]"
                                style={{ color: '#737373', fontFamily: "Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto" }}
                            >
                                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}