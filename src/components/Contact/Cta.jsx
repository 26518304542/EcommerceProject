import React from "react";

export default function Cta() {
    return (
                <>
                    {/* MOBILE CTA (visible on small screens) */}
                    <section className="md:hidden bg-white relative" style={{ width: 414, height: 440 }}>
                        <div
                            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
                            style={{ width: 321, paddingTop: 112, gap: 96 }}
                        >
                            <div className="flex flex-col items-center" style={{ width: 321 }}>
                                <div className="flex flex-col items-center" style={{ width: 321 }}>
                                    <h6
                                        className="text-[16px] font-bold text-[#252B42] text-center"
                                        style={{ fontFamily: "Montserrat, sans-serif" }}
                                    >
                                        WE Can’t WAIT TO MEET YOU
                                    </h6>

                                    <h2
                                        className="text-[58px] leading-[80px] font-extrabold text-center"
                                        style={{ color: "#252B42", fontFamily: "Montserrat, sans-serif", width: 272 }}
                                    >
                                        Let’s Talk
                                    </h2>
                                </div>

                                <div className="relative flex items-start mt-6" style={{ width: 186, height: 52 }}>
                                    <button
                                        className="w-[186px] h-[52px] bg-[#23A6F0] rounded-[5px] flex items-center justify-center text-white font-bold"
                                        style={{ fontFamily: "Montserrat, sans-serif" }}
                                    >
                                        Try it free now
                                    </button>

                                    <div
                                        aria-hidden
                                        className="absolute"
                                        style={{
                                            width: 72.56,
                                            height: 21.84,
                                            left: 160.41,
                                            top: 33.9,
                                            border: "4px solid #23A6F0",
                                            transform: "rotate(45.56deg)",
                                            boxSizing: "border-box",
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* DESKTOP CTA (visible at md+) */}
                    <section className="hidden md:flex justify-center bg-white" style={{ width: "100%" }}>
                        <div
                            style={{
                                width: 1050,
                                height: 348,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                paddingTop: 80,
                                gap: 96,
                                position: "relative",
                            }}
                        >
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 36, width: 607, height: 188 }}>
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16, width: 272, height: 188 }}>
                                    <h6 style={{ width: 239, height: 24, fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: 16, lineHeight: "24px", textAlign: "center", letterSpacing: "0.1px", color: "#252B42" }}>WE Can’t WAIT TO MEET YOU</h6>
                                    <h2 style={{ width: 272, height: 80, fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: 58, lineHeight: "80px", textAlign: "center", letterSpacing: "0.2px", color: "#252B42" }}>Let’s Talk</h2>
                                </div>

                                <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", gap: 10, width: 186, height: 52 }}>
                                    <button style={{ width: 186, height: 52, background: "#23A6F0", borderRadius: 5, padding: "15px 40px", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#FFFFFF" }}>Try it free now</button>
                                </div>
                            </div>

                            {/* Arrow 2 (positioned according to desktop spec). arrow_left_in_container = 670.69 - (1440-1050)/2 = 475.69 */}
                            <div
                                aria-hidden
                                style={{
                                    position: "absolute",
                                    width: 72.56,
                                    height: 21.84,
                                    left: 475.69,
                                    top: -6.1,
                                    border: "4px solid #23A6F0",
                                    transform: "rotate(45.56deg)",
                                    boxSizing: "border-box",
                                }}
                            />
                        </div>
                    </section>
                </>
    );
}