import Navbar from "@/src/app/components/Navbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import CardSection from "./components/CardSection";
import KeyFeatures from "./components/KeyFeatures";
import ComparisonSection from "@/src/app/components/ComparisonSection";
import CTASection from "@/src/app/components/CTASection";
import FAQ1 from "@/src/app/components/FAQ1";
import Footer from "@/src/app/components/Footer";


export default function LaravelHosting() {
  return (
  <>
  <Navbar />
  <HeroSection />
  <Features/>
  <CardSection />
  <ComparisonSection />
    <KeyFeatures />
    <CTASection />
  <FAQ1 />
  
  <Footer />
  </>


  );
}