import { ChevronRight } from 'lucide-react';

export default function ProductDescription(){
    return (
        <section className="w-full bg-white">
            <div className="mx-auto w-[332px] md:w-[1056px] py-6 px-0" style={{fontFamily: 'Montserrat, sans-serif'}}>

                {/* Tabs (desktop: centered row) */}
                <nav className="w-full mb-6">
                    <ul className="flex justify-center md:justify-start items-center gap-6 md:gap-12">
                        <li>
                            <button className="text-sm font-semibold text-[#737373] underline decoration-[#737373]">Description</button>
                        </li>
                        <li>
                            <button className="text-sm font-bold text-[#737373]">Additional Information</button>
                        </li>
                        <li>
                            <button className="text-sm font-bold text-[#737373]">Reviews <span className="text-[#23A6F0]">(0)</span></button>
                        </li>
                    </ul>
                </nav>

                {/* Content layout: mobile stacked, desktop 3-column */}
                <div className="flex flex-col md:flex-row md:gap-8">
                    {/* Left - Image */}
                    <div className="md:w-[332px] w-full mb-6 md:mb-0">
                        <div className="w-[337px] h-[392px] rounded-md overflow-hidden relative">
                            <div className="absolute inset-0 bg-[#c4c4c4]/20 rounded-md" />
                            <img src="/images/desc-1.jpg" alt="desc" className="w-[316px] h-[372px] object-cover rounded-md m-2" />
                        </div>
                    </div>

                    {/* Center - Main paragraphs */}
                    <div className="flex-1 md:px-4">
                        <h3 className="text-[20px] font-extrabold text-[#252B42] mb-4">the quick fox jumps over</h3>
                        <p className="text-sm text-[#737373] leading-6 mb-4">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        <p className="text-sm text-[#737373] leading-6 mb-4">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                        <p className="text-sm text-[#737373] leading-6 mb-4">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                    </div>

                    {/* Right - lists */}
                    <div className="md:w-[332px] w-full mt-6 md:mt-0">
                        <div className="mb-6">
                            <h3 className="text-[20px] font-extrabold text-[#252B42] mb-3">the quick fox jumps over</h3>
                            <ul className="flex flex-col gap-3">
                                {Array.from({length:4}).map((_,i)=> (
                                    <li key={i} className="flex items-start gap-4">
                                        <ChevronRight className="w-4 h-4 text-[#737373] mt-1" />
                                        <div className="text-sm font-semibold text-[#737373]">the quick fox jumps over the lazy dog</div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-[20px] font-extrabold text-[#252B42] mb-3">the quick fox jumps over</h3>
                            <ul className="flex flex-col gap-3">
                                {Array.from({length:4}).map((_,i)=> (
                                    <li key={`b-${i}`} className="flex items-start gap-4">
                                        <ChevronRight className="w-4 h-4 text-[#737373] mt-1" />
                                        <div className="text-sm font-semibold text-[#737373]">the quick fox jumps over the lazy dog</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}