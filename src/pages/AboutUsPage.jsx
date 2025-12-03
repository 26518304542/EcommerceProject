import Team from "../components/AbourUs/Team";
import Clients from "../components/AbourUs/Clients";

export default function AboutUsPage(){

    return (
        <div className="flex flex-col">
            <Team />

            <Clients />
        </div>
    );
}