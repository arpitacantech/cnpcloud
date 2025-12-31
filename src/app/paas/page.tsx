
import type { Metadata } from "next";
import PaasNavbar from "./components/PaasNavbar";
import HeroSection from "@/src/app/paas/components/HeroSection";
import DifferentiationSection from "./components/DifferentiationSection";
import ScrollCards from "./components/ScrollCards";
import Integration from "./components/Integration";
import FooterCTA from "../components/FooterCTA";
import Footer from "../components/Footer";
import FAQ1 from "./components/FAQ1";

export const metadata: Metadata = {
  title: "scalable PaaS & cloud Compute with Cantech Cloud",
  description: "Cantech Cloud is a scalable cloud platform offering compute, PaaS, Kubernetes, storage and secure high-performance infrastructure for modern applications & enterprises.",
  keywords: [
    "PaaS",
    "Platform As a Service",
    "PaaS Cloud Platform",
  ],
   
  openGraph: {
    title: "scalable PaaS & cloud Compute with Cantech Cloud",
    siteName: "Cantech Cloud",
    url: "https://www.cantech.cloud/paas",
    description: "Cantech Cloud is a scalable cloud platform offering compute, PaaS, Kubernetes, storage and secure high-performance infrastructure for modern applications & enterprises.",
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
    canonical: "https://www.cantech.cloud/paas",
  },
};

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
