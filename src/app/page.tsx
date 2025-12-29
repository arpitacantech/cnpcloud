"use client";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TwoCardSection from "./components/TwoCardSection";
// import ServicesSection from "./components/ServicesSection";
import FeaturesSection from "./components/FeaturesSection";
import ComparisonSection from "./components/ComparisonSection";
import FAQ1 from "./components/FAQ1";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Cloud Compute & PaaS Solutions in India | Cantech Cloud",
  description: "Run modern workloads on Cantech Cloud with reliable cloud compute and PaaS services. Flexible infrastructure, optimized performance, and cost control.",
  keywords: [
    "Cloud Compute",
    "PaaS Solutions",
  ],
  openGraph: {
    title: "Cloud Compute & PaaS Solutions in India | Cantech Cloud",
    url: "https://www.cantech.cloud/",
    description: "Run modern workloads on Cantech Cloud with reliable cloud compute and PaaS services. Flexible infrastructure, optimized performance, and cost control.",
  },

  alternates: {
    canonical: "https://www.cantech.cloud/",
  },
};

export default function Home() {
  return (
    // <main className="overflow-hidden">
      <>
      <Navbar />
      <Hero />
      <TwoCardSection />
      {/* <ServicesSection /> */}
      <FeaturesSection />
      <ComparisonSection />
      <FAQ1 />
      <CTASection />
      <Footer />
    {/* </main> */}
    </>
  );
}
