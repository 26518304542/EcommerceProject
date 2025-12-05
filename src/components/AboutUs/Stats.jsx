export default function Stats() {
    const metrics = [
        { value: '15K', label: 'Happy Customers' },
        { value: '150K', label: 'Monthly Visitors' },
        { value: '15', label: 'Countries Worldwide' },
        { value: '100+', label: 'Top Partners' },
    ];

    return (
        <section className="relative w-full max-w-[414px] mx-auto h-[1006px] bg-white overflow-hidden md:w-full md:min-w-[1440px] md:justify-center md:max-h-[264px]">
            {/* optional cover/background (leave src empty for now) */}
            <div className="absolute inset-0 bg-no-repeat bg-center bg-cover" style={{ backgroundImage: "url('')" }} />

            {/* dark filter overlay */}
            <div className="absolute inset-0 bg-white" />

            {/* main content */}
            <div className="relative flex flex-col items-center pt-[100px] w-full h-full md:flex-row md:w-full md:justify-center md:gap-4 md:max-h-[264px]">
                <div className="flex flex-col items-center py-[45px] w-[329px] h-[806px] md:flex-row md:w-full md:gap-5 md:justify-center md:max-h-[264px]">
                    <div className="flex flex-col items-start gap-[100px] w-[241px] h-[716px] md:flex-row md:w-full md:gap-[10px] md:justify-center md:max-h-[264px]">
                        {metrics.map((m, idx) => (
                            <div key={idx} className="flex flex-col items-center w-full">
                                <h1
                                    className="font-extrabold text-[50px] leading-[80px] text-[#252B42]"
                                    style={{ fontFamily: "Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" }}
                                >
                                    {m.value}
                                </h1>
                                <h5
                                    className="mt-2 font-bold text-[16px] leading-[24px] text-[#737373]"
                                    style={{ fontFamily: "Montserrat, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial" }}
                                >
                                    {m.label}
                                </h5>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}