"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TwoCardSection from "./components/TwoCardSection";
// import ServicesSection from "./components/ServicesSection";
import FeaturesSection from "./components/FeaturesSection";
import ComparisonSection from "./components/ComparisonSection";
import FAQ1 from "./components/FAQ1";
import FooterCTA from "./components/FooterCTA";
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
      <FooterCTA
        titleLine1="Need Some"
        titleLine2="Professional Help?"
        description="Contact our Customer Service representative to provide you with the best custom made solutions on the market."
        // buttonText="Let's Talk"
        // buttonLink="/contact"
      />
      <Footer />
    {/* </main> */}
    </>
  );
}
