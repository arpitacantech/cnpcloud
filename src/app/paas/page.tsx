
import PaasNavbar from "./components/PaasNavbar";
import HeroSection from "@/src/app/paas/components/HeroSection";
import DifferentiationSection from "./components/DifferentiationSection";
import ScrollCards from "./components/ScrollCards";
import Integration from "./components/Integration";
import FooterCTA from "../components/FooterCTA";
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
  <FooterCTA
    titleLine1="Need Some"
    titleLine2="Professional Help?"
    description="Contact our Customer Service representative to provide you with the best custom made solutions on the market."
    // buttonText="Let's Talk"
    // buttonLink="/contact"
  />
  <Footer />
  </>
  );
}
