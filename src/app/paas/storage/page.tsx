
import Navbar from "../../components/Navbar";
import HeroStorage from "./components/HeroStorage";
import FeatureSection from "../../components/FeaturesSection";
import Storagetypes from "./components/Storagetypes";
import DifferentiationSection from "./components/DifferentiationSection";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";

export default function paas() {
  return (
  <>
    <Navbar />
    <HeroStorage />
    <FeatureSection />
    <Storagetypes />
    <DifferentiationSection />
    <CTASection />
    <Footer />
  </>
  );
}
