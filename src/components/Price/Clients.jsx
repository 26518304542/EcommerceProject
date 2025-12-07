export default function Clients({ clients }) {

    const defaultClients = [
        { name: 'Client 1', img: '/clients/client1.png' },
        { name: 'Client 2', img: '/clients/client2.png' },
        { name: 'Client 3', img: '/clients/client3.png' },
        { name: 'Client 4', img: '/clients/client4.png' },
        { name: 'Client 5', img: '/clients/client5.png' },
        { name: 'Client 6', img: '/clients/client6.png' },
    ];

    const list = clients && clients.length ? clients : defaultClients;

    return (
        <section className="flex flex-col gap-6 items-center">
                            <h4 className="text-lg max-w-[230px] justify-center text-center">Trusted By Over 4000 <br/>
                    Big Companies</h4>
            <div className="flex flex-col gap-4 items-center justify-center md:flex-row ">
                {list.slice(0, 6).map((client, index) => (
                    <div key={index} className="flex" >
                        <img src={client.img} alt={client.name} className="max-h-12 object-contain mx-4 my-2" />
                    </div>
                ))}
            </div>
        </section>
    );
}