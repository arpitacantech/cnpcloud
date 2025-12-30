"use client";

import { motion } from "framer-motion";
import { Database, Check } from 'lucide-react';
import GlowingGridBackground from "./GlowingGridBackground";

export default function Hero(){
    return(
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[80px]">
        {/* Glowing Grid Background */}
        <GlowingGridBackground
          gridSize={64}
          glowRadius={200}
          glowLineColor="rgba(255, 255, 255, 1)"
          followSpeed={0.06}
        />
      <div className="container relative z-10 px-4 pt-20">
        <motion.div
          className="flex flex-col items-center text-center w-full mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-0"
          >
            <div className="inline-flex items-center gap-2 z-10 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Database /> Database Hosting
              </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="cc-h1 text-center"
          >
            <span>Enterprise Database Hosting</span>
            <span className="block mt-2">with Cantech Cloud</span>
          </motion.h1>

          {/* Subtitle */}
          {/* <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="max-w-3xl mx-auto text-center text-gray-500 mb-10 z-10">Deploy MongoDB, PostgreSQL, MySQL, Redis & more in seconds. Enterprise-grade security, auto-scaling, and 24/7 expert support included.
          </motion.p> */}

          {/* Feature bullets */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 text-sm text-white"
          >
            <ul className="list-none mb-14 flex flex-col md:flex-row md:items-center md:justify-center md:flex-wrap lg:flex-nowrap gap-4 md:gap-9 w-fit md:mx-auto">
              <li data-ns-animate="" data-delay="0.3" className="flex items-center gap-2.5 opacity-100 blur-0 translate-x-0 translate-y-0 rotate-0 scale-100">
                <span className="bg-secondary rounded-full p-1"><Check size={16} /></span>
                <span className="text-tagline-2 dark:text-accent/60">High Speed Security</span>
              </li>
              <li data-ns-animate="" data-delay="0.4" className="flex items-center gap-2.5 opacity-100 blur-0 translate-x-0 translate-y-0 rotate-0 scale-100">
                <span className="bg-secondary rounded-full p-1"><Check size={16} /></span>
                <span className="text-tagline-2 dark:text-accent/60">Secure and scalable Database Services for your apps.</span>
              </li>
              <li data-ns-animate="" data-delay="0.5" className="flex items-center gap-2.5 opacity-100 blur-0 translate-x-0 translate-y-0 rotate-0 scale-100">
                <span className="bg-secondary rounded-full p-1"><Check size={16} /></span>
                <span className="text-tagline-2 dark:text-accent/60">Fast SSD/NVMe Storage. BitNinja Protection. Easy Growth Path.</span>
              </li>
            </ul>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-8 mt-5"
          >
            <a href="#" className="button"><span>Get Started</span></a>
          </motion.div>
        </motion.div>
      </div>
    </section>
    )
}