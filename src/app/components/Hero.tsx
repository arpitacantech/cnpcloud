"use client";
import ClientLogos from "./Clients";
import { Check } from 'lucide-react';

export default function Hero() {
  return (
      <section className="relative h-screen w-full overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover grayscale">
          <source src="/assets/hero-vid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6 md:px-10 lg:px-20 -translate-y-4 md:-translate-y-10">
          <h1 className="cc-h1">
            <span className="block bg-gradient-to-b from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Power Your Future With Scalable
            </span>
            <span className="block bg-gradient-to-b from-white via-gray-300 to-gray-400 bg-clip-text text-transparent md:mt-3">
              Cloud Solution
            </span>
          </h1>
          <ul className="list-none mb-14 flex flex-col md:flex-row md:items-center md:justify-center md:flex-wrap lg:flex-nowrap gap-4 md:gap-9 w-fit md:mx-auto">
            <li data-ns-animate="" data-delay="0.3" className="flex items-center gap-2.5 opacity-100 blur-0 translate-x-0 translate-y-0 rotate-0 scale-100">
              <span className="bg-secondary rounded-full p-1"><Check size={16} /></span>
              <span className="text-tagline-2 dark:text-accent/60"> Fast Deployment </span>
            </li>
            <li data-ns-animate="" data-delay="0.4" className="flex items-center gap-2.5 opacity-100 blur-0 translate-x-0 translate-y-0 rotate-0 scale-100">
              <span className="bg-secondary rounded-full p-1"><Check size={16} /></span>
              <span className="text-tagline-2 dark:text-accent/60">
                Scalable Infrastructure
              </span>
            </li>
            <li data-ns-animate="" data-delay="0.5" className="flex items-center gap-2.5 opacity-100 blur-0 translate-x-0 translate-y-0 rotate-0 scale-100">
              <span className="bg-secondary rounded-full p-1"><Check size={16} /></span>
              <span className="text-tagline-2 dark:text-accent/60"> 99.99% Uptime </span>
            </li>
            <li data-ns-animate="" data-delay="0.5" className="flex items-center gap-2.5 opacity-100 blur-0 translate-x-0 translate-y-0 rotate-0 scale-100">
              <span className="bg-secondary rounded-full p-1"><Check size={16} /></span>
              <span className="text-tagline-2 dark:text-accent/60"> Secure & Reliable </span>
            </li>
          </ul>
        </div>
        <a href="#" className="mt-6 inline-flex items-center justify-center rounded-full bg-black/70 px-6 py-2.5 text-base font-medium text-white shadow-[0_0_12px_rgba(192,192,192,0.6)] transition-all hover:shadow-[0_0_24px_rgba(192,192,192,1)] animate-zoom-in-delay2 sm:mt-8 sm:px-7 sm:py-3 sm:text-lg md:mt-10 md:px-8 md:py-3.5 md:text-xl"> Get Started </a>
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 w-full z-20 animate-zoom-in">
          <ClientLogos transparent />
        </div>
      </section>
  );
}
