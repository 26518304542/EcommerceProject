import Pricing from "../components/Price/Pricing";
import SwitchRow from "../components/Price/SwitchRow";
import Row from "../components/Price/Row";
import Clients from "../components/Price/Clients";
import Faq from "../components/Price/Faq";
import Cta from "../components/Price/Cta";

export default function PricingPage(){
    return(
        <div className="flex flex-col mt-24 h-full">
            <div className="flex flex-col max-w-[330] items-center gap-10" >
                <Pricing />
                <SwitchRow />
                <Row />
                <Clients />
                <Faq />
                <Cta />
            </div>
        </div>

    );
}