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
        <section className="flex flex-col gap-6 items-center mx-8 mb-72">
            <div className="items-center text-center">
                <h2>Pricing FAQs</h2>
                <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
            </div>
            <div className="flex flex-wrap md:items-center md:justify-center ">
                {list.slice(0, 6).map((item, index) =>
                    (
                        <div key={index} className="mb-4 items-center text-center md:flex md:w-1/2 md:flex-col md:items-start md:my-10 md:max-w-lg md:mx-10">
                            <div className="flex flex-row">
                            <ChevronRight className={`hidden md:block md:text-[#23A6F0]`} />
                            <h4 className="font-semibold mb-2">{item.title}</h4>
                            </div>
                            <p className="text-gray-600 text-start">{item.content}</p>
                        </div>
                    ))}
            </div>
            <div className="flex flex-wrap">
                <p>
                    {list[6]?.textUnder}
                </p>
            </div>
        </section>
    );
}


