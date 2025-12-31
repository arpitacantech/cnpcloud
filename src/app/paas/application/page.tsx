import type { Metadata } from "next";
import PaasNavbar from "../components/PaasNavbar";
import HeroSection from "./components/HeroSection";
import ApplicationSection from "./components/ApplicationSection";
import DifferentiationSection from "./components/DifferentiationSection";
import ComparisonSection from "../../components/ComparisonSection";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";
import FAQ1 from "./components/FAQ1";

export const metadata: Metadata = {
  title: "Best Platform for PaaS Application Hosting | Cantech Cloud",
  description: "One platform for all your PaaS applications. Cantech PaaS makes deployment simple, secure and infinitely scalable with managed infrastructure and one-click app hosting.",
  keywords: [
    "PaaS Application",
    "Application Hosting",
  ],
   
  openGraph: {
    title: "Best Platform for PaaS Application Hosting | Cantech Cloud",
    siteName: "Cantech Cloud",
    url: "https://www.cantech.cloud/paas/application",
    description: "One platform for all your PaaS applications. Cantech PaaS makes deployment simple, secure and infinitely scalable with managed infrastructure and one-click app hosting.",
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
    canonical: "https://www.cantech.cloud/paas/application",
  },
};

export default function paas() {
  return (
  <>
  <PaasNavbar />
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
