"use client";

import { motion } from "framer-motion";
import React from "react";

/* ===============================
   Feature Card Component
================================ */
interface FeatureCardProps {
  title: string;
  icon: React.ReactNode;
  delay?: number;
  children: React.ReactNode;
}

const FeatureCard = ({
  title,
  icon,
  delay = 0,
  children,
}: FeatureCardProps) => {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-crypto-purple/5 group animate-on-scroll"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: delay,
      }}
      viewport={{ once: true }}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 mb-4">
        {icon}
      </div>

      <h3 className="text-white text-lg font-semibold mb-2">
        {title}
      </h3>

      <p className="text-white/70 text-sm leading-relaxed font-['Lexend']">
        {children}
      </p>
    </motion.div>
  );
};

/* ===============================
   Main Section
================================ */
export default function SecurityFeatures() {
  return (
    <section className="px-[16px] py-[40px] mx-auto xl:px-[80px] xl:py-[80px] bg-[#050505]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading font-bold text-[48px] leading-[50px] tracking-[0.5px] text-white mb-8">
            Enterprise Security for Laravel Applications
          </h2>

          <p className="max-w-md xl:max-w-none mx-auto text-[16px] text-white opacity-80 tracking-[0.5px] font-['Lexend'] font-[100]">
            CryptoFlow gives you the edge with advanced tools designed for both
            beginners and professional traders.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard
            delay={0}
            title="Real-time Analytics"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
              </svg>
            }
          >
            Monitor market movements with advanced charts and indicators updated
            in real-time.
          </FeatureCard>

          <FeatureCard
            delay={0.1}
            title="Bank-level Security"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect width="18" height="11" x="3" y="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            }
          >
            Your assets are protected with military-grade encryption and
            multi-factor authentication.
          </FeatureCard>

          <FeatureCard
            delay={0.2}
            title="Instant Execution"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
              </svg>
            }
          >
            Execute trades in milliseconds with our high-performance trading
            engine.
          </FeatureCard>

          <FeatureCard
            delay={0.3}
            title="Smart Portfolio"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" />
              </svg>
            }
          >
            Optimize your crypto holdings with AI-powered portfolio suggestions.
          </FeatureCard>

          <FeatureCard
            delay={0.4}
            title="Price Alerts"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 3v16a2 2 0 0 0 2 2h16" />
                <path d="m19 9-5 5-4-4-3 3" />
              </svg>
            }
          >
            Never miss an opportunity with customizable price alerts and
            notifications.
          </FeatureCard>

          <FeatureCard
            delay={0.5}
            title="Cold Storage"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              </svg>
            }
          >
            Majority of assets stored in offline cold wallets for maximum
            security.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}
