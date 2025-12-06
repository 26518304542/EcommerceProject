import Hero from "../components/Team/Hero";
import Team4 from "../components/Team/Team4";

export default function TeamPage(){

    return (
        <div className="flex flex-col mt-96 md:mt-0">
            <Hero />

            <Team4 />
        </div>
    );
}