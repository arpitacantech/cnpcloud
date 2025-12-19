"use client";
import ClientLogos from "@/src/app/components/Clients";
import { motion } from "framer-motion";
export default function (){
    return(
        <>
        <section className="px-4 pt-[180px] pb-8 md:px-8 min-h-[100vh] w-full">
      <motion.div
        className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8 mb-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* LEFT CONTENT */}
        <motion.div
          className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm text-white font-medium flex items-center gap-4"
          >
            Enterprise-Grade Hosting
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl text-[#f7f8f8] font-extrabold md:text-5xl"
          >
            Dev-Friendly Managed Laravel Hosting!
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#a8a8a8] text-lg"
          >
            Launch your Laravel apps and host your Laravel project with
            Cloudways’ Laravel Web Hosting, featuring 1-click installation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0"
          >
            <a href="#" className="button bg-[#7808d0]">
                            <span className="button__icon-wrapper">
                                <svg
                                viewBox="0 0 14 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="button__icon-svg"
                                width="10"
                                >
                                <path
                                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                    fill="currentColor"
                                ></path>
                                </svg>

                                <svg
                                viewBox="0 0 14 15"
                                fill="none"
                                width="10"
                                xmlns="http://www.w3.org/2000/svg"
                                className="button__icon-svg button__icon-svg--copy"
                                >
                                <path
                                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                    fill="currentColor"
                                ></path>
                                </svg>
                            </span>
                            Explore All
                            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="flex-none mt-14 md:mt-0 md:max-w-xl"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="https://framerusercontent.com/images/fAuKhrjDP7EgvniVHypyADtGAvo.jpg?scale-down-to=2048"
            alt="Laravel Hosting"
          />
        </motion.div>
      </motion.div>

      {/* LOGOS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <ClientLogos transparent />
      </motion.div>
    </section>
        </>
    )
}


