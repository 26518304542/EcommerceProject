import React from "react";
import { Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
    return (
        <section className="relative bg-white min-h-screen">
            {/* MOBILE (existing) - hidden on md+ */}
            <div className="md:hidden w-full">
                <div className="mx-auto" style={{ width: 414 }}>
                    {/* centered container */}
                    <div
                        className="mx-auto flex flex-col items-center py-[45px] gap-[60px]"
                        style={{ width: 330 }}
                    >
                        {/* Header block */}
                        <div className="w-[310px] h-[184px] flex flex-col items-center">
                            <div className="w-[301px] flex flex-col items-center gap-[10px]">
                                <h6
                                    className="font-mono font-extrabold text-[14px] leading-[24px] text-center"
                                    style={{ color: "#252B42", fontFamily: "Montserrat, sans-serif" }}
                                >
                                    VISIT OUR OFFICE
                                </h6>

                                <h2
                                    className="font-extrabold text-[40px] leading-[50px] text-center"
                                    style={{ color: "#252B42", fontFamily: "Montserrat, sans-serif" }}
                                >
                                    We help small businesses
                                    <br />
                                    with big ideas
                                </h2>
                            </div>
                        </div>

                        {/* Cards column */}
                        <div className="flex flex-col items-center gap-[30px] w-[329px]">
                            {/* Card 1 - white */}
                            <article className="w-[328px] h-[333px] bg-white flex flex-col items-center p-[50px_40px] gap-[15px] relative">
                                <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center bg-[#23A6F0]">
                                    <Phone className="text-white" size={32} />
                                </div>

                                <div className="text-center">
                                    <p className="text-[14px] font-bold leading-[24px]" style={{ color: "#252B42", fontFamily: "Montserrat, sans-serif" }}>georgia.young@example.com</p>
                                    <p className="text-[14px] font-bold leading-[24px] mt-1" style={{ color: "#252B42", fontFamily: "Montserrat, sans-serif" }}>georgia.young@plc.com</p>
                                </div>

                                <p className="text-[16px] font-bold leading-[24px] mt-2" style={{ color: "#252B42", fontFamily: "Montserrat, sans-serif" }}>Get Support</p>

                                <button className="mt-3 w-[161px] h-[44px] border border-[#23A6F0] rounded-[5px] flex items-center justify-center text-[#23A6F0] font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                    Submit Request
                                </button>
                            </article>

                            {/* Card 2 - dark */}
                            <article className="w-[328px] h-[393px] bg-[#252B42] flex flex-col items-center p-[80px_40px] gap-[15px] relative">
                                <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center bg-[#23A6F0]">
                                    <MapPin className="text-white" size={32} />
                                </div>

                                <div className="text-center">
                                    <p className="text-[14px] font-bold leading-[24px] text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>georgia.young@example.com</p>
                                    <p className="text-[14px] font-bold leading-[24px] mt-1 text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>georgia.young@plc.com</p>
                                </div>

                                <p className="text-[16px] font-bold leading-[24px] mt-2 text-white" style={{ fontFamily: "Montserrat, sans-serif" }}>Get Support</p>

                                <button className="mt-3 w-[161px] h-[44px] border border-[#23A6F0] rounded-[5px] flex items-center justify-center text-[#23A6F0] font-bold bg-transparent" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                    Submit Request
                                </button>
                            </article>

                            {/* Card 3 - white */}
                            <article className="w-[328px] h-[333px] bg-white flex flex-col items-center p-[50px_40px] gap-[15px] relative">
                                <div className="w-[72px] h-[72px] rounded-full flex items-center justify-center bg-[#23A6F0]">
                                    <Send className="text-white" size={32} />
                                </div>

                                <div className="text-center">
                                    <p className="text-[14px] font-bold leading-[24px]" style={{ color: "#252B42", fontFamily: "Montserrat, sans-serif" }}>georgia.young@example.com</p>
                                    <p className="text-[14px] font-bold leading-[24px] mt-1" style={{ color: "#252B42", fontFamily: "Montserrat, sans-serif" }}>georgia.young@plc.com</p>
                                </div>

                                <p className="text-[16px] font-bold leading-[24px] mt-2" style={{ color: "#252B42", fontFamily: "Montserrat, sans-serif" }}>Get Support</p>

                                <button className="mt-3 w-[161px] h-[44px] border border-[#23A6F0] rounded-[5px] flex items-center justify-center text-[#23A6F0] font-bold" style={{ fontFamily: "Montserrat, sans-serif" }}>
                                    Submit Request
                                </button>
                            </article>
                        </div>
                    </div>
                </div>
            </div>

            {/* DESKTOP - hidden on small screens */}
            <div className="hidden md:flex justify-center w-full">
                <div
                    style={{
                        width: 1050,
                        height: 841,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingTop: 112,
                        gap: 80,
                    }}
                >
                    {/* Header area */}
                    <div style={{ width: 633, height: 134, display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{ width: 625, height: 134, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
                            <h6 style={{ width: 132, height: 24, fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: 14, lineHeight: "24px", textAlign: "center", letterSpacing: "0.2px", color: "#252B42" }}>VISIT OUR OFFICE</h6>
                            <h2 style={{ width: 531, height: 100, fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: 40, lineHeight: "50px", textAlign: "center", color: "#252B42" }}>We help small businesses with big ideas</h2>
                        </div>
                    </div>

                    {/* Cards row */}
                    <div style={{ width: 985, height: 403, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        {/* Left card */}
                        <article style={{ width: 328, height: 343, background: "#FFFFFF", display: "flex", flexDirection: "column", alignItems: "center", padding: "50px 40px", gap: 15 }}>
                            <div style={{ width: 72, height: 72, borderRadius: 9999, display: "flex", alignItems: "center", justifyContent: "center", background: "#23A6F0" }}>
                                <Phone className="text-white" size={32} />
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: 14, lineHeight: "24px", color: "#252B42" }}>georgia.young@example.com</p>
                                <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: 14, lineHeight: "24px", marginTop: 4, color: "#252B42" }}>georgia.young@plc.com</p>
                            </div>
                            <p style={{ marginTop: 8, fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: 16, color: "#252B42" }}>Get Support</p>
                            <button style={{ marginTop: 12, width: 193, height: 54, border: "1px solid #23A6F0", borderRadius: 37, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#23A6F0" }}>Submit Request</button>
                        </article>

                        {/* Middle card - dark */}
                        <article style={{ width: 328, height: 403, background: "#252B42", display: "flex", flexDirection: "column", alignItems: "center", padding: "80px 40px", gap: 15 }}>
                            <div style={{ width: 72, height: 72, borderRadius: 9999, display: "flex", alignItems: "center", justifyContent: "center", background: "#23A6F0" }}>
                                <MapPin className="text-white" size={32} />
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: 14, lineHeight: "24px", color: "#FFFFFF" }}>georgia.young@example.com</p>
                                <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: 14, lineHeight: "24px", marginTop: 4, color: "#FFFFFF" }}>georgia.young@plc.com</p>
                            </div>
                            <p style={{ marginTop: 8, fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: 16, color: "#FFFFFF" }}>Get Support</p>
                            <button style={{ marginTop: 12, width: 193, height: 54, border: "1px solid #23A6F0", borderRadius: 37, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#23A6F0", background: "transparent" }}>Submit Request</button>
                        </article>

                        {/* Right card */}
                        <article style={{ width: 328, height: 343, background: "#FFFFFF", display: "flex", flexDirection: "column", alignItems: "center", padding: "50px 40px", gap: 15 }}>
                            <div style={{ width: 72, height: 72, borderRadius: 9999, display: "flex", alignItems: "center", justifyContent: "center", background: "#23A6F0" }}>
                                <Send className="text-white" size={32} />
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: 14, lineHeight: "24px", color: "#252B42" }}>georgia.young@example.com</p>
                                <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: 14, lineHeight: "24px", marginTop: 4, color: "#252B42" }}>georgia.young@plc.com</p>
                            </div>
                            <p style={{ marginTop: 8, fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: 16, color: "#252B42" }}>Get Support</p>
                            <button style={{ marginTop: 12, width: 193, height: 54, border: "1px solid #23A6F0", borderRadius: 37, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Montserrat, sans-serif", fontWeight: 700, color: "#23A6F0" }}>Submit Request</button>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}