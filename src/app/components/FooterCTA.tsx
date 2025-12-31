"use client";

import { motion, easeOut } from "framer-motion";
import Image from "next/image";

interface CTASectionProps {
  titleLine1: string;
  titleLine2: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
}

export default function CTASection({
  titleLine1 = "Let’s Build Your Cloud",
  titleLine2 = "the Right Way",
  description = "Our team is here to help you choose, deploy, and manage the right cloud solution with complete peace of mind.",
  buttonText = "Let's Talk",
  buttonLink = "#",
  backgroundImage = "/assets/images/cta/cta-img.jpg",
}: CTASectionProps) {

/* Parent container */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

/* Box animation */
const boxVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

/* Text + button animation */
const zoomInVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: easeOut },
  },
};

return (
  <motion.section
    className="relative max-w-7xl mx-auto py-20 w-full overflow-hidden"
    variants={containerVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}>

    <motion.div
      className="relative rounded-[32px] pb-20 pt-16 px-6 text-center overflow-hidden" variants={boxVariants}>
      <Image
        src={backgroundImage}
        alt="CTA Background"
        fill
        priority
        className="object-cover z-[1]" />

      <div className="absolute inset-0 bg-black/70 z-[2]" />

      <div className="relative z-[3]">
        <motion.h2
          variants={zoomInVariants}
          className="text-[2.2rem] md:text-[3.5rem] font-bold leading-[3rem] md:leading-[4rem]">
          <span className="block bg-gradient-to-b from-white via-gray-300 to-black/50 bg-clip-text text-transparent">
            {titleLine1}
          </span>
          <span className="block bg-gradient-to-b from-white via-gray-300 to-black/50 bg-clip-text text-transparent">
            {titleLine2}
          </span>
        </motion.h2>

        <motion.p
          variants={zoomInVariants}
          className="text-neutral-300 mt-6 text-lg max-w-4xl mx-auto">
          {description}
        </motion.p>

        <motion.a
          href={buttonLink}
          variants={zoomInVariants}
          className="mt-8 md:mt-10 inline-block px-7 py-3 bg-black/70 text-white font-medium text-lg rounded-full shadow-[0_0_12px_rgba(192,192,192,0.6)] hover:shadow-[0_0_24px_rgba(192,192,192,1)] transition-all">
          {buttonText}
        </motion.a>
      </div>
    </motion.div>
  </motion.section>
);

}

