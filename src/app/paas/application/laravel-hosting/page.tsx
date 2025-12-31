import type { Metadata } from "next";
import PaasNavbar from "../../components/PaasNavbar";
import HeroSection from "./components/HeroSection";
import Features from "./components/Features";
import CardSection from "./components/CardSection";
import KeyFeatures from "./components/KeyFeatures";
import ComparisonSection from "@/src/app/components/ComparisonSection";
import CTASection from "./components/CTASection";
import Faq from "./components/Faq";
import Footer from "@/src/app/components/Footer";

export const metadata: Metadata = {
  title: "Laravel Hosting on Cloud PaaS | Cantech Cloud",
  description: "Host Laravel applications on Cantech Cloud with managed PaaS, auto-scaling, high performance, built-in security and optimized infrastructure for production workloads.",
  keywords: [
    "Laravel Hosting",
    "Laravel PaaS Hosting",
    "Laravel Application Hosting",
  ],
   
  openGraph: {
    title: "Laravel Hosting on Cloud PaaS | Cantech Cloud",
    siteName: "Cantech Cloud",
    url: "https://www.cantech.cloud/paas/application/laravel-hosting",
    description: "Host Laravel applications on Cantech Cloud with managed PaaS, auto-scaling, high performance, built-in security and optimized infrastructure for production workloads.",
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
    canonical: "https://www.cantech.cloud/paas/application/laravel-hosting",
  },
};

export default function LaravelHosting() {
  return (
  <>
  <PaasNavbar />
  <HeroSection />
  <Features/>
  <CardSection />
  <ComparisonSection />
    <KeyFeatures />
    <CTASection />
  <Faq />
  
  <Footer />
  </>


  );
}
