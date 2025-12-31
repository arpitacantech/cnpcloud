import type { Metadata } from "next";
import PaasNavbar from "../components/PaasNavbar";
import { PricingFilter } from "./components/PricingFilter";
import ComparisonSection from "../../components/ComparisonSection";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import FAQ1 from "../../components/FAQ1";

export const metadata: Metadata = {
  title: "Cost-Effective Cloud Pricing | Cantech Cloud",
  description: "",
  keywords: [
    "Cloud Pricing",
    "Cloud service costs",
    "Cost-effectiveness cloud solutions",
  ],
   
  openGraph: {
    title: "PHP Hosting – Fast, Secure & Scalable | Cantech Cloud",
    siteName: "Cantech Cloud",
    url: "https://www.cantech.cloud/paas/pricing",
    description: "",
    type: "website",
    images: [
      {
        url: "/assets/images/og_image.png",
        width: 1200,
        height: 630,
        alt: "Cantech Cloud",
      },
    ],
  },

  alternates: {
    canonical: "https://www.cantech.cloud/paas/pricing",
  },
};

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
