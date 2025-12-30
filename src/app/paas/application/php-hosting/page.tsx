import PaasNavbar from "../../components/PaasNavbar";
import HeroInside from "./components/HeroInside";
import DifferentiationSection from "./components/DifferentiationSection";
import ScrollCards from "./components/ScrollCards";
import KeyFeatures from "./components/KeyFeatures";
import ComparisonSection from "@/src/app/components/ComparisonSection";
import CTASection from "./components/CTASection";
import Faq from "./components/Faq";
import Footer from "@/src/app/components/Footer";

export default function paas() {
  return (
    <>
      <PaasNavbar  />
      <HeroInside />
      <DifferentiationSection />
      <ScrollCards />
      <ComparisonSection />
      <KeyFeatures />
      <Faq />
      <CTASection />   
      <Footer />
    </>
  );
}
