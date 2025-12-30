import type { Metadata } from "next";

import ComputeNavbar from "../components/ComputeNavbar";
import { HeroSection } from "./components/HeroSection";
import { OSAccordion } from "./components/OSAccordion";
import { osCategories } from "@/data/serverPlans";

export const metadata: Metadata = {
  title: "Cloud Compute Pricing",
  description: "Explore flexible and transparent cloud compute pricing at Cantech Cloud. Pay only for what you use with scalable, high-performance compute resources built for modern workloads.",
  keywords: [
    "Cantech Cloud Compute Pricing",
    "Cloud Compute Pricing India",
    "Pay as you go cloud pricing",
    "Virtual Machine Pricing",
    "Cloud CPU Pricing",
    "Cloud RAM Pricing",
    "Scalable Cloud Compute",
    "Enterprise Cloud Pricing",
  ],
  alternates: {
    canonical: "/compute/pricing",
  },
  openGraph: {
    title: "Cloud Compute Pricing",
    description: "Explore flexible and transparent cloud compute pricing at Cantech Cloud. Pay only for what you use with scalable, high-performance compute resources built for modern workloads.",
    url: "https://www.cantech.in/compute/pricing",
    siteName: "Cantech Cloud",
    type: "website",
  },
};

export default function ComputePricing() {
  return (
  <main >
    <ComputeNavbar />
    <div className="min-h-screen bg-background">
      <HeroSection />
      <section className="animate-fade-in pb-36" style={{ animationDelay: "200ms" }}>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-foreground mb-3">Choose Your Plan</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Flexible pricing options to match your workload. All plans include DDoS protection, automated backups, and 24/7 support.</p>
        </div>
        <OSAccordion osCategories={osCategories} defaultOpen="linux"/>
      </section>
    </div>
  </main>
  );
}