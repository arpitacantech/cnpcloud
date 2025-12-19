import Navbar from "../../components/Navbar";
import HeroSection from "./components/HeroSection";
import ApplicationSection from "./components/ApplicationSection";
import DifferentiationSection from "./components/DifferentiationSection";
import ComparisonSection from "./components/ComparisonSection";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import FAQ1 from "../../components/FAQ1";

export default function paas() {
  return (
  <>
  <Navbar />
  <HeroSection />
  <ApplicationSection />
  <DifferentiationSection />
  <ComparisonSection />
  <FAQ1 />
  <CTASection />
  <Footer />
  </>
  );
}