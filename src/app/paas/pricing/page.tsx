import Navbar from "../../components/Navbar";
import { PricingFilter } from "./components/PricingFilter";
import ComparisonSection from "../../components/ComparisonSection";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import Faq from "./components/Faq";

export default function PassPricing() {
  return (
  <>
    <Navbar />
    <PricingFilter />
    <ComparisonSection />
    <Faq />
    <CTASection />
    <Footer />
  </>
  );
}
