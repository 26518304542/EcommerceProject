import Team4Card from './Team4Card';

export default function Team4({ members }){
    const defaultMembers = [
        { name: 'Alexandra', role: 'Designer', img: 'https://source.unsplash.com/collection/895539/600x600?sig=1' },
        { name: 'Michael', role: 'Developer', img: 'https://source.unsplash.com/collection/895539/600x600?sig=2' },
        { name: 'Sofia', role: 'Product', img: 'https://source.unsplash.com/collection/895539/600x600?sig=3' },
        { name: 'Daniel', role: 'Marketing', img: 'https://source.unsplash.com/collection/895539/600x600?sig=4' },
        { name: 'Priya', role: 'Operations', img: 'https://source.unsplash.com/collection/895539/600x600?sig=5' },
        { name: 'Liam', role: 'Support', img: 'https://source.unsplash.com/collection/895539/600x600?sig=6' },
        { name: 'Nina', role: 'HR', img: 'https://source.unsplash.com/collection/895539/600x600?sig=7' },
        { name: 'Oscar', role: 'Finance', img: 'https://source.unsplash.com/collection/895539/600x600?sig=8' },
        { name: 'Maya', role: 'QA', img: 'https://source.unsplash.com/collection/895539/600x600?sig=9' },
    ];

    const list = members && members.length ? members : defaultMembers;

    return (
        <section className="w-full bg-white flex justify-center py-8">
            <div className="w-full max-w-[380px] md:max-w-[1200px] px-4">
                <div className="text-center mb-6">
                    <h2 className="font-[Montserrat] font-bold text-[28px] md:text-[40px] leading-[34px] md:leading-[50px] text-[#252B42]">Meet Our Team</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 justify-items-center">
                    {list.slice(0,9).map((m, i) => (
                        <Team4Card key={i} member={m} />
                    ))}
                </div>
            </div>
        </section>
    );
}