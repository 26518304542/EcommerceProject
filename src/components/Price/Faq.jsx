import { ChevronRight } from "lucide-react";

export default function Faq({ data }) {

    const defaultData = [
        {
            title: 'Work better together', content: 'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.RELIT official consequent door ENIM RELIT Mollie.Excitation venial consequent sent nostrum met.'
        },
        {
            title: 'Work better together', content: 'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.RELIT official consequent door ENIM RELIT Mollie.Excitation venial consequent sent nostrum met.'
        },
        {
            title: 'Work better together', content: 'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.RELIT official consequent door ENIM RELIT Mollie.Excitation venial consequent sent nostrum met.'
        },
        {
            title: 'Work better together', content: 'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.RELIT official consequent door ENIM RELIT Mollie.Excitation venial consequent sent nostrum met.'
        },
        {
            title: 'Work better together', content: 'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.RELIT official consequent door ENIM RELIT Mollie.Excitation venial consequent sent nostrum met.'
        },
        {
            title: 'Work better together', content: 'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.RELIT official consequent door ENIM RELIT Mollie.Excitation venial consequent sent nostrum met.'
        },
        {
            textUnder: 'Haven’t got your answer? Contact our support'
        }
    ];
    const list = data && data.length ? data : defaultData;

    return (
        <section className="flex flex-col gap-[80px] items-center mx-8 py-[80px]  md:gap-[50px]">
            <div className="flex flex-col items-center text-center gap-3">
                <h2 className="flex flex-col text-[40px] font-bold ">Pricing FAQs</h2>
                <h4 className="flex text-[14px] md:text-[20px] text-[#737373]">Problems trying to resolve the conflict between <br/> the two major realms of Classical physics</h4>
            </div>
            <div className="flex flex-wrap md:items-center md:justify-center gap-[10px] ">
                {list.slice(0, 6).map((item, index) =>
                    (
                        <div key={index} className="mb-4 items-center text-center md:flex md:w-1/2 md:flex-col md:items-start md:my-10 md:max-w-lg md:mx-10">
                            <div className="flex flex-row">
                            <ChevronRight className={`hidden md:block md:text-[#23A6F0]`} />
                            <h4 className="text-[14px] md:text-[16px] font-semibold mb-2">{item.title}</h4>
                            </div>
                            <p className="text-gray-600 text-start text-[14px] md:w-[408px]">{item.content}</p>
                        </div>
                    ))}
            </div>
            <div className="flex flex-wrap md:w-full items-center text-center mt-12">
                <h4 className="md:size-5 text-[20px] font-bold font-montserrat text-[#737373] md:w-full">
                    {list[6]?.textUnder.slice(0,list[6]?.textUnder.indexOf('?')+1)}<br/>{list[6].textUnder.slice((list[6].textUnder.indexOf('?')+1),list[6].textUnder.length )}
                </h4>
            </div>
        </section>
    );
}


