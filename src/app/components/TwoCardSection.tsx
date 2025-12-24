"use client";

import Cards from './Cards';
import Image from "next/image";
import { motion, Variants, easeOut } from "framer-motion";

interface FeatureCardProps {
  iconSrc?: string;
  title: string;
  description: string;
}

// Motion variants
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function TwoCardSection() {
  return (
    <section className="max-w-screen-xl mx-auto px-4 relative w-full py-[70px] md:px-8">
      {/* Section Intro */}
      <motion.div
        className="max-w-6xl mx-auto text-center mb-16"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p
          className="title-badges"
          variants={fadeUp}
        >
          Services
        </motion.p>

        <motion.h2
          className="cc-h2"
          variants={fadeUp}
        >
          Select the service that best fits your needs
        </motion.h2>

        <motion.p
          className="subtitle font-lexend"
          variants={fadeUp}
        >
          Choose from our range of services to get started quickly and easily
        </motion.p>
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeUp}>
          <Cards
            imageSrc="/assets/images/home/card1.png"
            title="PaaS"
            description="Enjoy instant access to pre-configured cloud environments, ready to deploy"
            buttonHref="/paas"
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <Cards
            imageSrc="/assets/images/home/card2.png"
            title="Cloud Compute"
            description="Full control over computing resources for advanced workloads"
            buttonHref="/compute"
          />
        </motion.div>
      </motion.div>

      {/* Glowing Divider */}
<motion.div
  className="w-full h-px my-16 bg-gradient-to-r from-transparent via-gray-600/80 to-transparent"
  variants={fadeUp}
/>
    </section>
  );
}
