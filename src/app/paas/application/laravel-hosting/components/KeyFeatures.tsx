"use client";

import { motion } from "framer-motion";
import React from "react";

export default function KeyFeaturesSection() {
  return (
    <section className="py-12 md:py-14 lg:py-16">
      {/* Heading */}
      <motion.div
        className="md:px-8 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="cc-h2">Key Features for Laravel Hosting</h2>
        <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus</p>
      </motion.div>

      {/* ROW 1 */}
      <motion.div
        className="max-w-screen-xl mx-auto mt-12 px-4 gap-4 items-center justify-between md:px-8 lg:flex"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.15 }}
        viewport={{ once: true }}
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-100pc md-w-40pc"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            {/* YOUR ORIGINAL CONTENT (UNCHANGED) */}
            {i === 0 && (
              <div>
                <div className="flex justify-center items-center text-white w-16 h-16 rounded-full mb-5 drop-shadow-[0_23px_33px_#dedede80] bg-gradient-to-b from-[#6e6e6e80] to-[#7a5af800]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-inbox w-l5"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path></svg>
                </div>
                <h3 className="cc-h3 mb-3">Storage</h3>
                <div className="cc-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            )}

            {i === 1 && (
              <div>
                <div className="flex justify-center items-center text-white w-16 h-16 rounded-full mb-5 drop-shadow-[0_23px_33px_#dedede80] bg-gradient-to-b from-[#6e6e6e80] to-[#7a5af800]">
                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-cpu w-l5"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                </div>
                <h3 className="cc-h3 mb-3">Compute</h3>
                <div className="cc-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            )}

            {i === 2 && (
              <div>
                <div className="flex justify-center items-center text-white w-16 h-16 rounded-full mb-5 drop-shadow-[0_23px_33px_#dedede80] bg-gradient-to-b from-[#6e6e6e80] to-[#7a5af800]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-database w-l5"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                </div>
                <h3 className="cc-h3 mb-3">Database</h3>
                <div className="cc-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            )}

           
          </motion.div>
        ))}
      </motion.div>
       <motion.div
        className="max-w-screen-xl mx-auto mt-12 px-4 gap-4 items-center justify-between md:px-8 lg:flex"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.15 }}
        viewport={{ once: true }}
      >
        {[3, 4, 5].map((i) => (
          <motion.div
            key={i}
            className="w-100pc md-w-40pc"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            

            {i === 3 && (
              <div>
                <div className="flex justify-center items-center text-white w-16 h-16 rounded-full mb-5 drop-shadow-[0_23px_33px_#dedede80] bg-gradient-to-b from-[#6e6e6e80] to-[#7a5af800]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-database w-l5"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                </div>
                <h3 className="cc-h3 mb-3">Auto Scaling for Laravel</h3>
                <div className="cc-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            )}
            {i === 4 && (
              <div>
                <div className="flex justify-center items-center text-white w-16 h-16 rounded-full mb-5 drop-shadow-[0_23px_33px_#dedede80] bg-gradient-to-b from-[#6e6e6e80] to-[#7a5af800]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-database w-l5"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                </div>
                <h3 className="cc-h3 mb-3">Enterprise Security</h3>
                <div className="cc-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            )}
            {i === 5 && (
              <div>
                <div className="flex justify-center items-center text-white w-16 h-16 rounded-full mb-5 drop-shadow-[0_23px_33px_#dedede80] bg-gradient-to-b from-[#6e6e6e80] to-[#7a5af800]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-database w-l5"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                </div>
                <h3 className="cc-h3 mb-3">Full Laravel 11 Support</h3>
                <div className="cc-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            )}

          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className="max-w-screen-xl mx-auto mt-12 px-4 gap-4 items-center justify-between md:px-8 lg:flex"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ staggerChildren: 0.15 }}
        viewport={{ once: true }}
      >
        {[6, 7, 8].map((i) => (
          <motion.div
            key={i}
            className="w-100pc md-w-40pc"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >

            {i === 6 && (
              <div>
                <div className="flex justify-center items-center text-white w-16 h-16 rounded-full mb-5 drop-shadow-[0_23px_33px_#dedede80] bg-gradient-to-b from-[#6e6e6e80] to-[#7a5af800]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-database w-l5"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                </div>
                <h3 className="cc-h3 mb-3">IonCube Loader for PHP 8.x</h3>
                <div className="cc-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            )}

             {i === 7 && (
              <div>
                <div className="flex justify-center items-center text-white w-16 h-16 rounded-full mb-5 drop-shadow-[0_23px_33px_#dedede80] bg-gradient-to-b from-[#6e6e6e80] to-[#7a5af800]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-database w-l5"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                </div>
                <h3 className="cc-h3 mb-3">Easy Database Management</h3>
                <div className="cc-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            )}

            {i === 8 && (
              <div>
                <div className="flex justify-center items-center text-white w-16 h-16 rounded-full mb-5 drop-shadow-[0_23px_33px_#dedede80] bg-gradient-to-b from-[#6e6e6e80] to-[#7a5af800]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-database w-l5"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                </div>
                <h3 className="cc-h3 mb-3">Let's Encrypt SSL</h3>
                <div className="cc-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div> 
    </section>
  );
}
