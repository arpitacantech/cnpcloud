"use client";

import { motion } from "framer-motion";
export default function Hero(){
    return(
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[120px]">
      {/* Radial gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(217 91% 60% / 0.12), transparent)",
        }}
      />

      <div className="container relative z-10 px-4 py-20">
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white border border-border text-sm text-foreground">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse text-white" />
              Database Hosting
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-semibold text-white font-display text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-foreground leading-[1.1] mb-6 tracking-[0.7px]"
          >
            Enterprise Database
            <br />
            <span className="text-foreground text-white">
              Hosting Made Simple
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed text-white"
          >
            Deploy MongoDB, PostgreSQL, MySQL, Redis & more in seconds.
            Enterprise-grade security, auto-scaling, and 24/7 expert support
            included.
          </motion.p>

          {/* Feature bullets */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-8 text-sm text-white"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>One-Click Deploy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>24/7 Expert Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Auto-Scaling</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-8 mt-12"
          >
            <a
              href="#"
              className="mt-6 sm:mt-8 md:mt-10 inline-block px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-black/70 text-white font-medium rounded-xl shadow-[0_0_12px_rgba(192,192,192,0.6)] hover:shadow-[0_0_24px_rgba(192,192,192,1)] transition-all text-[18px]"
            >
              Start 14 Days Free Trial
            </a>

            <a
              href="#"
              className="mt-6 sm:mt-8 md:mt-10 inline-block px-6 sm:px-7 md:px-8 py-2.5 sm:py-3 md:py-3.5 bg-black/70 text-white font-medium rounded-xl shadow-[0_0_12px_rgba(192,192,192,0.6)] hover:shadow-[0_0_24px_rgba(192,192,192,1)] transition-all text-[18px]"
            >
              Request Free Demo
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
    )
}