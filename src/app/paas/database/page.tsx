import Image from "next/image";
import Navbar from "../../components/Navbar";
import Hero from "./components/Hero";
import DifferentiationSection from "./components/DifferentiationSection";
import DBTabs from './components/DBTabs';
import FeatureSection from "./components/FeatureSection";
import ComparisonSection from "./components/ComparisonSection";
import CTASection from "./components/CTASection";
import Footer from "../../components/Footer";
import Faq from "./components/Faq";

export default function JitsiHosting() {
    return(
        <>
            <Navbar />  
            <Hero />
            <DifferentiationSection />
            <DBTabs />
            <FeatureSection />
            <ComparisonSection />
            <Faq />
            <CTASection />
            <Footer />
        </>
    );
}
