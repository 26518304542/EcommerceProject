import DetailCard from "./DetailCard";

const products = [
    { image: '/images/card-1.jpg', title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', price: '$6.48' },
    { image: '/images/card-2.jpg', title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', price: '$6.48' },
    { image: '/images/card-3.jpg', title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', price: '$6.48' },
    { image: '/images/card-4.jpg', title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', price: '$6.48' },
    { image: '/images/card-5.jpg', title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', price: '$6.48' },
    { image: '/images/card-6.jpg', title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', price: '$6.48' },
    { image: '/images/card-7.jpg', title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', price: '$6.48' },
    { image: '/images/card-8.jpg', title: 'Graphic Design', category: 'English Department', oldPrice: '$16.48', price: '$6.48' },
];

export default function ProductDetailCards(){
        return (
            <section className="w-full bg-[#FAFAFA] py-12">
                <div className="mx-auto w-[332px] md:w-[1124px] px-4">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                            <h3 className="text-2xl font-bold text-[#252B42]">Bestseller Products</h3>
                            <div className="hidden md:block flex-1">
                                <hr className="border-t border-[#ECECEC]" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {products.map((p, i) => {
                                const wrapperClass = i >= 4 ? 'hidden md:flex justify-center' : 'flex justify-center';
                                return (
                                    <div key={i} className={wrapperClass}>
                                        <DetailCard {...p} />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
}