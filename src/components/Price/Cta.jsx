import { useState } from 'react';
import * as Icons from 'lucide-react';
import * as FaIcons from "react-icons/fa";

export default function Cta({ data }) {

    const [situation, setSituation] = useState(false);

    const defaultData = {
        title2: 'Start your 14 days free trial',
        title6: 'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.',
        buttonText: 'Try it free now',
        Logos: [
            { logo: 'FaTwitter' , textLogo: 'text-[#55ACEE] fg-[#55ACEE]'},
            { logo: 'Facebook' , textLogo: 'text-white text-bg-white fg-[#3b5998] bg-[#395185]' },
            { logo: 'FaInstagram' },
            { logo: 'FaLinkedin' }
        ]
    }

    const content = data ? data : defaultData;

    if (data && !situation) {
        setSituation(true);
    }

    return (
        <section className='flex flex-row justify-center items-center h-[586px] w-[414px] ' >
            <div className='flex flex-col justify-center items-center py-[112px] gap-[96px] h-[576px] w-[332px]'>
                <div className='flex flex-col items-center justify-center gap-[36px] w-[332px] h-[100px]'>
                    <h2 className='text-[40px] md:w-[547px] md:h-[50px] items-center justify-center text-center font-montserrad font-bold text-[#252B42]'>{content.title2}</h2>
                    <h6 className='text-[14px] font-[400] w-[321px] h-[60px] font-montserrat space-[0.2px] text-center md:w-[411px] md:h-[40px] '>{content.title6.slice(0,41)} <br/> {content.title6.slice(41)} </h6>
                    <div>
                        <button className='bg-[#23A6F0] rounded-[5px] gap-[10px] px-[40px] py-[15px] text-[#FFFFFF] font-montserrat font-[700]'>
                            {content.buttonText}
                        </button>
                    </div>
                    <div className='flex flex-row gap-[34px] items-center justify-center text-center p-[10px] h-[50px] w-[242px]'>
                        {situation ? (content.map((item, index) => {
                            const IconComponent = Icons[item.logo];

                            return (
                                <div key={index}>
                                    {IconComponent ? (<IconComponent className="w-[30px] h-[24.49px]"/>) : <span></span>}
                                </div>
                            )
                        }
                        )) : (
                            content.Logos.map((item, index) => {
                                let IconComponent;
                                if (item.logo==='FaTwitter' || item.logo==='FaFacebook' || item.logo==='FaInstagram' || item.logo==='FaLinkedin'){
                                    IconComponent = FaIcons[item.logo];
                                }else{
                                    IconComponent = Icons[item.logo];
                                }


                                return (

                                    <div key={index}>
                                        {IconComponent ? (<IconComponent className={`w-[30px] h-[24.49px] ${item.textLogo}`}/>) : <span></span>}
                                    </div>
                                )
                            })
                    )}

                    </div>
                </div>
            </div>
        </section>
    );
}