import Navbar from "@/src/app/components/Navbar";
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
      <Navbar />
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
