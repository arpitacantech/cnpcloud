"use client";

import dynamic from "next/dynamic";
import { Cloud } from 'lucide-react';
import { ContainerScroll } from "../../components/ui/container-scroll-animation";
import Image from "next/image";
import ClientLogos from "@/src/app/components/Clients";

const BeamsBackground = dynamic(
  () => import("./BeamsBackground"),
  { ssr: false }
);

export default function HeroCompute() {
  return (
    <section className="relative w-full bg-black overflow-hidden px-6 pt-32 md:pt-40 pb-24">
      <div className="container px-4 mx-auto max-w-6xl">
      <div className="absolute inset-0 w-full h-11 z-0 pointer-events-none">
        <BeamsBackground />
      </div>

      <div className="relative z-20 max-w-5xl mx-auto text-center px-6 mb-20">
        <div className="inline-flex items-center gap-2 z-10 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"><Cloud /><span>Cloud Compute</span>
        </div>

        <h1 className="cc-h1">
        <span>High-performance cloud</span>
        <span className="block mt-[7px]">made simple</span>
        </h1>
        <p className="max-w-3xl mx-auto text-center text-white mb-10 z-10 text-[18px]">accessing computing resources instead of owning physical hardware, offering scalability, cost savings, and flexibility for individuals and businesses.</p>

        <div className="gap-4 relative z-10 mb-16">
          <a href="#" className="button"><span>Get Started</span></a>
        </div>
      </div>

      <div className="-mt-80 relative z-10">
        <ContainerScroll titleComponent={<></>}>
          <div className="relative w-full max-w-[1200px] mx-auto">
            <img
              src="/assets/images/compute/dashboard.png"
              alt="Dashboard preview"
              width={1200}
              height={700}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </ContainerScroll>
      </div>

      <div className="-mt-72 relative z-10">
        <ClientLogos transparent />
      </div>
      </div>
    </section>
  );
}
