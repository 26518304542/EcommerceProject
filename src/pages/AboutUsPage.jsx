import Team from "../components/AboutUs/Team";
import Clients from "../components/AboutUs/Clients";
import Testimonials from "../components/AboutUs/Testimonials";
import Stats from "../components/AboutUs/Stats";
import Video from "../components/AboutUs/Video";
import Content from "../components/AboutUs/Content";

export default function AboutUsPage(){

    return (
        <div className="flex flex-col">
            <Content />

            <Stats />

            <Video />

            <Team />

            <Clients />

            <Testimonials />
        </div>
    );
}