import Image from "next/image";
import PaasNavbar from "../components/PaasNavbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import DBTabs from './components/DBTabs';
import FeatureSection from "./components/FeatureSection";
import ComparisonSection from "../../components/ComparisonSection";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import FAQ1 from "../../components/FAQ1";

export default function Database() {
    return(
        <>
        <PaasNavbar />  
        <Hero />
        <Features />
        <DBTabs />
        <FeatureSection />
        <ComparisonSection />
        <CTASection />
        <FAQ1 />
        <Footer />
        </>
    );
}