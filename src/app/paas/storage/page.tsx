import PaasNavbar from "../components/PaasNavbar";
import HeroStorage from "./components/HeroStorage";
import FeatureSection from "./components/FeaturesSection";
import Storagetypes from "./components/Storagetypes";
import DifferentiationSection from "./components/DifferentiationSection";
import Faq from "./components/Faq";
import CTASection from "./components/CTASection";
import Footer from "../../components/Footer";

export default function paas() {
  return (
  <>
    <PaasNavbar />
    <HeroStorage />
    <FeatureSection />
    <Storagetypes />
    <DifferentiationSection />
    <Faq/>
    <CTASection />
    <Footer />
  </>
  );
}
