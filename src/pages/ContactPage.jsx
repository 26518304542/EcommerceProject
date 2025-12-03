import Contact from "../components/Contact/Contact";
import Cta from "../components/Contact/Cta"

export default function ContactPage() {
    return (
        <div className="flex flex-col gap-3 mb-12">
            <Contact />

            <Cta />
        </div>

    );
}