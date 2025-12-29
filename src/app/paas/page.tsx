
import PaasNavbar from "./components/PaasNavbar";
import HeroSection from "@/src/app/paas/components/HeroSection";
import DifferentiationSection from "./components/DifferentiationSection";
import ScrollCards from "./components/ScrollCards";
import Integration from "./components/Integration";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import FAQ1 from "./components/FAQ1";

export default function paas() {
  return (
  <>
  <PaasNavbar />
  <HeroSection />
  <DifferentiationSection />
  <ScrollCards />
  <Integration />
  <FAQ1 />
  <CTASection />
  <Footer />
  </>
  );
}
