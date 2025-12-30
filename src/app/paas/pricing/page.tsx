import PaasNavbar from "../components/PaasNavbar";
import { PricingFilter } from "./components/PricingFilter";
import ComparisonSection from "../../components/ComparisonSection";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import FAQ1 from "../../components/FAQ1";

export default function PassPricing() {
  return (
  <>
    <PaasNavbar />
    <PricingFilter />
    <ComparisonSection />
      <FAQ1 />
      <CTASection />
      <Footer />
  </>
  );
}