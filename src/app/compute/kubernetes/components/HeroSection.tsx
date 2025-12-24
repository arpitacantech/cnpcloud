// "use client";
// import Image from "next/image";

// export default function HeroSection() {
//   return (
//     <section className="bg-[#09090a] border-y border-base-900">
//         <div className="max-w-screen-xl mx-auto px-4 pt-[180px] pb-0 gap-12 md:px-8">
//             <div className="space-y-5 max-w-6xl mx-auto text-center">
//                 <h1 className="text-sm text-white font-medium rounded-[114px] opacity-100 inline-block p-[7px_15px] bg-[#121212] rounded-[26px] border border-[#383838] inline-block">
//                     Cantech Cloud Kubernetes
//                 </h1>
//                 <h2 className="text-[46px] text-white font-extrabold mx-auto">
//                     Highly Available Managed Kubernetes with Control Plane
//                 </h2>
//                 <p className="max-w-2xl mx-auto pb-4 text-[#ffffffb3]">
//                     Focus on building, scaling, and deploying applications without worrying about infrastructure management.
//                 </p>
//                 <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
//                     <a href="javascript:void(0)" className="bg-white text-black px-6 py-3 rounded-full font-medium transition-all duration-300 ease-in-out shadow-md hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] hover:scale-105">
//                         Get Started
//                     </a>
//                     {/* <a href="javascript:void(0)" className="block py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg">
//                         Get access
//                     </a> */}
//                 </div>
//             </div>
//             <div className="pt-[60px]">
//                 <img src="https://upstart-astro.netlify.app/_astro/product-demo.Dz7pFNHq_Z21TbDb.webp" className="w-full shadow-lg" alt="" />
//                 {/* /assets/images/compute/kubernetes/original-c456c48556965c725ac02caa41942938.png */}
//             </div>
//         </div>
//     </section>
//   )
// }
"use client";

import { Cloud } from 'lucide-react';
import { motion } from "framer-motion";
// import HeroBackground from "@/src/app/compute/kubernetes/components/HeroBackground";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 md:pt-40 pb-0">
    {/* <HeroBackground /> */}
      <div className="max-w-screen-xl mx-auto px-4 pb-0 md:px-8">

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="text-center"
        >

          {/* Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 z-10 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
          >
            <Cloud /><span>Cloud Compute</span>
          </motion.div>

          {/* Heading */}
          <h1 className="cc-h1 text-center">
            <span>Production-Ready Managed</span><span className='block mt-[7px]'>Kubernetes, Simplified</span>
          </h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="max-w-3xl mx-auto text-center text-gray-500 mb-10 z-10"
          >
            Deploy, scale, and operate containerized workloads with a fully managed,
            highly available Kubernetes control plane—without operational overhead.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="items-center justify-center gap-x-3 sm:flex"
          >
            <div className="gap-4 relative z-10 mb-16">
                <a href="#" className="button"><span>Get Started</span></a>
            </div>
          </motion.div>

        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          className="pt-[60px]"
        >
          <img
            src="https://upstart-astro.netlify.app/_astro/product-demo.Dz7pFNHq_Z21TbDb.webp"
            className="w-full [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]"
            alt=""
          />
        </motion.div>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600/80 to-transparent"></div>      
      </div>
    </section>
  );
}
