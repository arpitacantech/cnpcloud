import PaasNavbar from "../../components/PaasNavbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import CardSection from "./components/CardSection";
import KeyFeatures from "./components/KeyFeatures";
import ComparisonSection from "@/src/app/components/ComparisonSection";
import CTASection from "./components/CTASection";
import Faq from "./components/Faq";
import Footer from "@/src/app/components/Footer";


export default function LaravelHosting() {
  return (
  <>
  <PaasNavbar />
  <HeroSection />
  <Features/>
  <CardSection />
  <ComparisonSection />
    <KeyFeatures />
    <CTASection />
  <Faq />
  
  <Footer />
  </>


  );
}
