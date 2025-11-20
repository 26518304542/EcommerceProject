import React from 'react';
import ClientSymbol from './ClientSymbol';

const clients = [
  { id: 1, src: '/assets/clients/client-1.png', alt: 'Client 1' },
  { id: 2, src: '/assets/clients/client-2.png', alt: 'Client 2' },
  { id: 3, src: '/assets/clients/client-3.png', alt: 'Client 3' },
  { id: 4, src: '/assets/clients/client-4.png', alt: 'Client 4' },
  { id: 5, src: '/assets/clients/client-5.png', alt: 'Client 5' },
  { id: 6, src: '/assets/clients/client-6.png', alt: 'Client 6' },
];

export default function DesktopClients({ items = clients }) {
  return (
    <section className="w-full bg-[#FAFAFA]">
      <div className="max-w-[1050px] mx-auto flex flex-row justify-center items-center py-[50px] gap-[30px]">
        {items.map((c) => (
          <div key={c.id} className="flex flex-col items-center justify-center">
            <ClientSymbol src={c.src} alt={c.alt} className="" />
          </div>
        ))}
      </div>
    </section>
  );
}
