"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ClientLogos from "@/src/app/components/Clients";
import { ContainerScroll } from "@/src/app/components/ui/container-scroll-animation";
import { ShaderAnimation } from "@/src/app/components/ui/shader-animation";

export default function HeroSection() {
  return (
    <section className="relative w-full  bg-black overflow-hidden pt-52 pb-0">
      {/* 1. SHADER BACKGROUND */}
      {/* <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <ShaderAnimation />
      </div> */}
      {/* 1. VIDEO BACKGROUND */}

      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full  object-top"
        >
          <source src="/paas-hero-vid.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 2. GRAYSCALE OVERLAY */}
      <div className="absolute inset-0 w-full h-full z-[1] pointer-events-none bg-black/60 backdrop-blur-[1px] mix-blend-normal grayscale"></div>

      {/* 3. CONTENT ABOVE EVERYTHING */}
      <div className="relative z-20 max-w-5xl mx-auto text-center px-6 mb-20">
        {/* Heading */}
        <h1 className="cc-h1">
          <span>Sign Up And Deploy Your</span>
          <span className="block mt-6">Application For Free</span>
        </h1>

        {/* Email input + button */}
        <form
          action="https://app.cantech.cloud/"
          method="GET"
          className="relative flex items-center max-w-md mx-auto"
        >
          {/* Email Input */}
          <input
            type="email"
            name="signup"
            required
            placeholder="Enter your email"
            className="w-full px-7 pr-36 py-3 rounded-full bg-black/70 border border-gray-700 text-white placeholder-gray-400 text-sm font-normal focus:outline-none"
          />

          {/* Button inside input */}
          <button
            type="submit"
            className="absolute right-1.5 px-6 py-2.5 bg-white text-black font-medium rounded-full text-sm hover:bg-gray-200 transition-all shadow-[0_0_12px_rgba(255,255,255,0.6)]"
          >
            Start Free Trial
          </button>
        </form>
      </div>

      {/* Dashboard */}
      <div className="-mt-80 relative z-10">
        <ContainerScroll titleComponent={<></>}>
          <div className="relative w-full max-w-[1200px] mx-auto">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/15qwtTdk2f4?si=I-o5nKwssK11moO5"
                title="Product Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </ContainerScroll>
      </div>

      {/* Clients */}
      <div className="-mt-72 relative z-10">
        <ClientLogos transparent />
      </div>
    </section>
  );
}
