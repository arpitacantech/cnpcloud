"use client";

import {
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  ArrowUpRight,
} from "lucide-react";
import { motion } from "framer-motion";

/* =====================
   Animation Variants
===================== */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Footer = () => {
  const productLinks = [
    { title: "PaaS Solutions", href: "/paas" },
    { title: "Compute Solutions", href: "/compute" },
    { title: "Storage", href: "/paas/storage" },
    { title: "Database", href: "/paas/database" },
    { title: "Kubernetes", href: "/compute/kubernetes" },
  ];

  const pricingLinks = [
    { title: "PaaS Pricing", href: "/paas/pricing" },
    { title: "Compute Pricing", href: "/compute/pricing" },
  ];

  const companyLinks = [
    { title: "About Us", href: "/about" },
    { title: "Contact Us", href: "/contact-us" },
  ];

  const legalLinks = [
    { title: "SLA", href: "/sal" },
    { title: "Privacy Policy", href: "/privacy-policy" },
    { title: "Terms of Service", href: "/terms-of-service" },
    { title: "Acceptable Use Policy", href: "/acceptable-policy" },
    { title: "eKYC Verification", href: "/ekyc-verification" },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/cantechnetworks/",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://x.com/CantechHosting",
      label: "Twitter",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/cantechhosting/",
      label: "Instagram",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/user/CantechIndia",
      label: "YouTube",
    },
  ];

  const startYear = 2019;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-footer-bg gradient-border">
      <motion.div
        className="container max-w-6xl mx-auto px-6 pt-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Logo */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
          <img
            src="/cloud.svg"
            alt="Cantech Cloud"
            className="h-4 w-auto sm:h-5"
          />
        </motion.div>

        {/* Footer Columns */}
        <motion.div
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16"
        >
          {/* Products */}
          <motion.div variants={fadeUp}>
            <div className="text-lg font-semibold mb-4 text-gray-300">
              Products
            </div>
            <ul className="space-y-3 text-gray-400">
              {productLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-[16px] flex items-center gap-1 group hover:text-white transition-colors"
                  >
                    {link.title}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Pricing */}
          <motion.div variants={fadeUp}>
            <div className="text-lg font-semibold mb-4 text-gray-300">
              Pricing
            </div>
            <ul className="space-y-3 text-gray-400">
              {pricingLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-[16px] flex items-center gap-1 group hover:text-white transition-colors"
                  >
                    {link.title}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeUp}>
            <div className="text-lg font-semibold mb-4 text-gray-300">
              Company
            </div>
            <ul className="space-y-3 text-gray-400">
              {companyLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-[16px] flex items-center gap-1 group hover:text-white transition-colors"
                  >
                    {link.title}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={fadeUp} className="w-52">
            <div className="text-lg font-semibold mb-4 text-gray-300">
              Legal
            </div>
            <ul className="space-y-3 text-gray-400">
              {legalLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.href}
                    className="text-[16px] flex items-center gap-1 group hover:text-white transition-colors"
                  >
                    {link.title}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={fadeUp}>
            <div className="text-lg font-semibold mb-4 text-gray-300">
              Follow Us
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.08 }}
                  className="w-10 h-10 inline-flex items-center justify-center rounded-[10px] bg-white/10 transition-all hover:bg-white/20 hover:shadow-[0_0_10px_rgba(255,255,255,0.14)]"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        {/* Copyright */}
        <motion.p
          variants={fadeUp}
          className="text-base text-gray-400 text-center mb-6"
        >
          © Copyright {startYear}
          {currentYear > startYear && ` – ${currentYear}`} CantechCloud. All
          rights reserved.
        </motion.p>
      </motion.div>

      <div className="h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
    </footer>
  );
};

export default Footer;
