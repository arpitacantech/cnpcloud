import PaasNavbar from "../../components/PaasNavbar";
import HeroInside from "./components/HeroInside";
import DifferentiationSection from "@/src/app/paas/components/DifferentiationSection";
import ScrollCards from "@/src/app/paas/components/ScrollCards";
import KeyFeatures from "../laravel-hosting/components/KeyFeatures";
import ComparisonSection from "@/src/app/components/ComparisonSection";
import CTASection from "@/src/app/components/CTASection";
import FAQ1 from "@/src/app/components/FAQ1";
import Footer from "@/src/app/components/Footer";


export default function paas() {
  return (
    <>
      <PaasNavbar />
      <HeroInside />
      <DifferentiationSection />
      <ScrollCards />
      <ComparisonSection />
        <KeyFeatures />
        <CTASection />
        <FAQ1 />    
        <Footer />
    </>
  );
}
