import { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, ShoppingCart, Eye, Star } from 'lucide-react';

export default function DesktopProductDetailcards(){
    const images = [
        '/images/product-1.jpg',
        '/images/product-2.jpg',
        '/images/product-3.jpg'
    ];
    const [index, setIndex] = useState(0);

    function prev(){ setIndex((i)=> (i - 1 + images.length) % images.length); }
    function next(){ setIndex((i)=> (i + 1) % images.length); }

    return (
        <div className="w-full bg-[#FAFAFA]">
            <div className="mx-auto w-[348px] md:w-[1050px] relative py-12">
                <div className="flex flex-col md:flex-row md:gap-6">
                    {/* IMAGE COLUMN */}
                    <div className="md:w-[506px] w-full">
                        <div className="relative rounded-md overflow-hidden bg-white">
                            <div className="w-full h-[277px] md:h-[450px]">
                                <img src={images[index]} alt="product" className="w-full h-full object-cover" />
                            </div>

                            {/* chevrons */}
                            <button aria-label="prev" onClick={prev} className="absolute left-10 md:left-10 top-1/2 -translate-y-1/2 w-10 h-12 bg-white/90 rounded flex items-center justify-center shadow">
                                <ChevronLeft className="w-6 h-6 text-black" />
                            </button>
                            <button aria-label="next" onClick={next} className="absolute right-10 md:right-10 top-1/2 -translate-y-1/2 w-10 h-12 bg-white/90 rounded flex items-center justify-center shadow">
                                <ChevronRight className="w-6 h-6 text-black" />
                            </button>

                            {/* thumbnails */}
                            <div className="absolute left-4 md:left-4 bottom-4 flex items-center gap-3">
                                {images.map((src,i) => (
                                    <button key={i} onClick={() => setIndex(i)} className={`w-[100px] h-[75px] rounded overflow-hidden ${i===index? 'opacity-100 ring-2 ring-[#23A6F0]':'opacity-50'}`}>
                                        <img src={src} alt={`thumb-${i}`} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* INFO COLUMN */}
                    <div className="md:w-[510px] w-full flex flex-col justify-between mt-6 md:mt-0 md:pl-6">
                        <div>
                            <h4 className="text-[20px] text-[#252B42]">Floating Phone</h4>
                            <div className="flex items-center gap-3 mt-3">
                                <div className="flex items-center gap-1">
                                    {[0,1,2,3].map((s)=> (
                                        <Star key={s} className="w-5 h-5 text-[#F3CD03]" />
                                    ))}
                                    <Star key={'half'} className="w-5 h-5 text-[#F3CD03] opacity-60" />
                                </div>
                                <div className="text-xs text-gray-500">10 Reviews</div>
                            </div>

                            <div className="mt-4">
                                <div className="text-[20px] font-bold text-[#252B42]">$1,139.33</div>
                                <div className="text-sm text-gray-500 mt-1">Availability : <span className="text-[#23856D]">In Stock</span></div>
                            </div>

                            <p className="text-sm text-[#858585] mt-4 max-w-[464px]">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Exitation venial consequent sent nostrum met.</p>

                            <hr className="border-t mt-6 mb-4 border-gray-300 w-full max-w-[445px]" />

                            <div className="flex items-center gap-3 mt-2">
                                <span className="w-8 h-8 rounded-full bg-[#23A6F0] block" />
                                <span className="w-8 h-8 rounded-full bg-[#2DC071] block" />
                                <span className="w-8 h-8 rounded-full bg-[#E77C40] block" />
                                <span className="w-8 h-8 rounded-full bg-[#252B42] block" />
                            </div>
                        </div>

                        {/* actions */}
                        <div className="flex items-center gap-3 mt-6">
                            <button className="bg-[#23A6F0] text-white rounded-md px-4 py-2">Select Options</button>
                            <button className="w-10 h-10 bg-white border rounded-full flex items-center justify-center"><Heart className="w-5 h-5 text-[#252B42]" /></button>
                            <button className="w-10 h-10 bg-white border rounded-full flex items-center justify-center"><ShoppingCart className="w-5 h-5 text-[#252B42]" /></button>
                            <button className="w-10 h-10 bg-white border rounded-full flex items-center justify-center"><Eye className="w-5 h-5 text-[#252B42]" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}