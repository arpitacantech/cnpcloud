"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TwoCardSection from "./components/TwoCardSection";
// import ServicesSection from "./components/ServicesSection";
import FeaturesSection from "./components/FeaturesSection";
import ComparisonSection from "./components/ComparisonSection";
import FAQ1 from "./components/FAQ1";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";

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
