
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import HeroSection from "./components/HeroSection";
import {ServicesSection} from "./components/ServicesSection"; 
import FAQ1 from "./components/FAQ1";
import Footer from "../../components/Footer";

export default function KubernetesPage()
{
    return(
        <>
            <Navbar />
            <HeroSection />
            <section className="py-14 md:py-16 lg:py-20">
                <div className="md:px-8 text-center">

                    <p className="text-[32px] text-white font-extrabold mx-auto mb-6">
                       What you get with Cantech Managed Kubernetes
                    </p>
                    <p className="text-[#ffffffb3]">
                        Cantech offers cloud compute solutions that focus on performance, flexibility and security that ensures reliable operations while enabling scalable and efficient growth.
                    </p>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="relative rounded-2xl overflow-hidden border border-neutral-800/60 shadow-sm transform hover:translate-y-[-8px] duration-300 hover:border-[#ffffff40] hover:shadow-[0_0_8px_#ffffff40]">
                        
                        <img
                            src="https://framerusercontent.com/images/Vy5fY5tvzYvO3kc3PMsfNrzzvDY.svg"
                            alt="Background"
                            className="absolute inset-0 w-full h-full object-cover object-right-top opacity-60"
                            loading="lazy"
                            decoding="async"
                        />

                        <div className="relative p-6 md:p-8 lg:p-10 flex flex-col gap-4">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-white/5 flex items-center justify-center">
                            {/* <img src="https://framerusercontent.com/images/3Cd1qIpK57EaM3E6bmDPd5xQ4.svg"
                                alt="icon"
                                className="w-6 h-6 md:w-7 md:h-7"
                                loading="lazy" decoding="async" /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"><path fill="#fff" d="M6.142 10.74 9.46 6.253c2.145-2.9 3.217-4.351 4.217-4.045 1 .307 1 2.086 1 5.644v.336c0 1.283 0 1.925.41 2.327l.022.021c.42.394 1.087.394 2.423.394 2.404 0 3.606 0 4.012.73l.02.036c.383.74-.313 1.681-1.705 3.565l-3.317 4.488c-2.145 2.901-3.217 4.352-4.217 4.045-1-.306-1-2.086-1-5.644v-.335c0-1.284 0-1.926-.41-2.328l-.022-.02c-.419-.395-1.087-.395-2.423-.395-2.403 0-3.605 0-4.011-.729a1.223 1.223 0 0 1-.02-.037c-.384-.74.312-1.681 1.704-3.564z"/></svg>
                            </div>

                            <h3 className="mt-2 text-white text-lg md:text-xl font-semibold">Fully Managed Kubernetes</h3>
                            <p className="text-sm md:text-base text-neutral-300 max-w-prose">
                            Cantech cloud compute manages cluster setup, control plane management, and updates, to free up your space so you can prioritize building and deploying applications.
                            </p>
                        </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden border border-neutral-800/60 shadow-sm transform hover:translate-y-[-8px] duration-300 hover:border-[#ffffff40] hover:shadow-[0_0_8px_#ffffff40]">
                        <img
                            src="https://framerusercontent.com/images/Vy5fY5tvzYvO3kc3PMsfNrzzvDY.svg"
                            alt="Background"
                            className="absolute inset-0 w-full h-full object-cover object-right-top opacity-60"
                            loading="lazy" decoding="async"
                        />

                        <div className="relative p-6 md:p-8 lg:p-10 flex flex-col gap-4">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-white/5 flex items-center justify-center">
                            {/* <img src="https://framerusercontent.com/images/FhPczbEeg5bRtLspTbQHpRUUg.svg"
                                alt="icon"
                                className="w-6 h-6 md:w-7 md:h-7"
                                loading="lazy" decoding="async" /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"><path fill="#fff" d="M6.142 10.74 9.46 6.253c2.145-2.9 3.217-4.351 4.217-4.045 1 .307 1 2.086 1 5.644v.336c0 1.283 0 1.925.41 2.327l.022.021c.42.394 1.087.394 2.423.394 2.404 0 3.606 0 4.012.73l.02.036c.383.74-.313 1.681-1.705 3.565l-3.317 4.488c-2.145 2.901-3.217 4.352-4.217 4.045-1-.306-1-2.086-1-5.644v-.335c0-1.284 0-1.926-.41-2.328l-.022-.02c-.419-.395-1.087-.395-2.423-.395-2.403 0-3.605 0-4.011-.729a1.223 1.223 0 0 1-.02-.037c-.384-.74.312-1.681 1.704-3.564z"/></svg>
                            </div>

                            <h3 className="mt-2 text-white text-lg md:text-xl font-semibold">Top Notch Performance</h3>
                            <p className="text-sm md:text-base text-neutral-300 max-w-prose">
                            Built on strong infrastructure, Cantech’s enterprise-grade managed kubernetes offers a 99.97% uptime SLA to deliver smooth uninterrupted application availability.
                            </p>
                        </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden border border-neutral-800/60 shadow-sm transform hover:translate-y-[-8px] duration-300 hover:border-[#ffffff40] hover:shadow-[0_0_8px_#ffffff40]">
                        <img
                            src="https://framerusercontent.com/images/Vy5fY5tvzYvO3kc3PMsfNrzzvDY.svg"
                            alt="Background"
                            className="absolute inset-0 w-full h-full object-cover object-right-top opacity-60"
                            loading="lazy" decoding="async"
                        />

                        <div className="relative p-6 md:p-8 lg:p-10 flex flex-col gap-4">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-white/5 flex items-center justify-center">
                            {/* <img src="https://framerusercontent.com/images/36QlWRG5xFqx3DaY9IWO4wgp98.svg"
                                alt="icon"
                                className="w-6 h-6 md:w-7 md:h-7"
                                loading="lazy" decoding="async" /> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"><path fill="#fff" d="M6.142 10.74 9.46 6.253c2.145-2.9 3.217-4.351 4.217-4.045 1 .307 1 2.086 1 5.644v.336c0 1.283 0 1.925.41 2.327l.022.021c.42.394 1.087.394 2.423.394 2.404 0 3.606 0 4.012.73l.02.036c.383.74-.313 1.681-1.705 3.565l-3.317 4.488c-2.145 2.901-3.217 4.352-4.217 4.045-1-.306-1-2.086-1-5.644v-.335c0-1.284 0-1.926-.41-2.328l-.022-.02c-.419-.395-1.087-.395-2.423-.395-2.403 0-3.605 0-4.011-.729a1.223 1.223 0 0 1-.02-.037c-.384-.74.312-1.681 1.704-3.564z"/></svg>
                            </div>

                            <h3 className="mt-2 text-white text-lg md:text-xl font-semibold">Multi-Cloud Deployment</h3>
                            <p className="text-sm md:text-base text-neutral-300 max-w-prose">
                            Deploy various workloads such as public, private and hybrid cloud environments without any kind of complexity.
                            </p>
                        </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden border border-neutral-800/60 shadow-sm transform hover:translate-y-[-8px] duration-300 hover:border-[#ffffff40] hover:shadow-[0_0_8px_#ffffff40]">
                        <img
                            src="https://framerusercontent.com/images/Vy5fY5tvzYvO3kc3PMsfNrzzvDY.svg"
                            alt="Background"
                            className="absolute inset-0 w-full h-full object-cover object-right-top opacity-60"
                            loading="lazy" decoding="async"
                        />

                        <div className="relative p-6 md:p-8 lg:p-10 flex flex-col gap-4">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-white/5 flex items-center justify-center">
                            {/* <img src="https://framerusercontent.com/images/FhPczbEeg5bRtLspTbQHpRUUg.svg"
                                alt="icon"
                                className="w-6 h-6 md:w-7 md:h-7"
                                loading="lazy" decoding="async" /> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"><path fill="#fff" d="M6.142 10.74 9.46 6.253c2.145-2.9 3.217-4.351 4.217-4.045 1 .307 1 2.086 1 5.644v.336c0 1.283 0 1.925.41 2.327l.022.021c.42.394 1.087.394 2.423.394 2.404 0 3.606 0 4.012.73l.02.036c.383.74-.313 1.681-1.705 3.565l-3.317 4.488c-2.145 2.901-3.217 4.352-4.217 4.045-1-.306-1-2.086-1-5.644v-.335c0-1.284 0-1.926-.41-2.328l-.022-.02c-.419-.395-1.087-.395-2.423-.395-2.403 0-3.605 0-4.011-.729a1.223 1.223 0 0 1-.02-.037c-.384-.74.312-1.681 1.704-3.564z"/></svg>
                            </div>

                            <h3 className="mt-2 text-white text-lg md:text-xl font-semibold">Dedicated GPU Clusters for AI and ML workloads</h3>
                            <p className="text-sm md:text-base text-neutral-300 max-w-prose">
                            Take advantage of dedicated GPU clusters optimized for AI and ML workloads to improve training and computation heavy tasks.
                            </p>
                        </div>
                        </div> 
                        <div className="relative rounded-2xl overflow-hidden border border-neutral-800/60 shadow-sm transform hover:translate-y-[-8px] duration-300 hover:border-[#ffffff40] hover:shadow-[0_0_8px_#ffffff40]">
                            <img
                                src="https://framerusercontent.com/images/Vy5fY5tvzYvO3kc3PMsfNrzzvDY.svg"
                                alt="Background"
                                className="absolute inset-0 w-full h-full object-cover object-right-top opacity-60"
                                loading="lazy" decoding="async"
                            />

                            <div className="relative p-6 md:p-8 lg:p-10 flex flex-col gap-4">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-white/5 flex items-center justify-center">
                                {/* <img src="https://framerusercontent.com/images/FhPczbEeg5bRtLspTbQHpRUUg.svg"
                                    alt="icon"
                                    className="w-6 h-6 md:w-7 md:h-7"
                                    loading="lazy" decoding="async" /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"><path fill="#fff" d="M6.142 10.74 9.46 6.253c2.145-2.9 3.217-4.351 4.217-4.045 1 .307 1 2.086 1 5.644v.336c0 1.283 0 1.925.41 2.327l.022.021c.42.394 1.087.394 2.423.394 2.404 0 3.606 0 4.012.73l.02.036c.383.74-.313 1.681-1.705 3.565l-3.317 4.488c-2.145 2.901-3.217 4.352-4.217 4.045-1-.306-1-2.086-1-5.644v-.335c0-1.284 0-1.926-.41-2.328l-.022-.02c-.419-.395-1.087-.395-2.423-.395-2.403 0-3.605 0-4.011-.729a1.223 1.223 0 0 1-.02-.037c-.384-.74.312-1.681 1.704-3.564z"/></svg>
                                </div>

                                <h3 className="mt-2 text-white text-lg md:text-xl font-semibold">High-End Security</h3>
                                <p className="text-sm md:text-base text-neutral-300 max-w-prose">
                                Get Kubernetes-native security features like Role-Based Access Control (RBAC), encrypted connections, network policies and sensitive data management.
                                </p>
                            </div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden border border-neutral-800/60 shadow-sm transform hover:translate-y-[-8px] duration-300 hover:border-[#ffffff40] hover:shadow-[0_0_8px_#ffffff40]">
                            <img
                                src="https://framerusercontent.com/images/Vy5fY5tvzYvO3kc3PMsfNrzzvDY.svg"
                                alt="Background"
                                className="absolute inset-0 w-full h-full object-cover object-right-top opacity-60"
                                loading="lazy" decoding="async"
                            />

                            <div className="relative p-6 md:p-8 lg:p-10 flex flex-col gap-4">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-white/5 flex items-center justify-center">
                                {/* <img src="https://framerusercontent.com/images/FhPczbEeg5bRtLspTbQHpRUUg.svg"
                                    alt="icon"
                                    className="w-6 h-6 md:w-7 md:h-7"
                                    loading="lazy" decoding="async" /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none"><path fill="#fff" d="M6.142 10.74 9.46 6.253c2.145-2.9 3.217-4.351 4.217-4.045 1 .307 1 2.086 1 5.644v.336c0 1.283 0 1.925.41 2.327l.022.021c.42.394 1.087.394 2.423.394 2.404 0 3.606 0 4.012.73l.02.036c.383.74-.313 1.681-1.705 3.565l-3.317 4.488c-2.145 2.901-3.217 4.352-4.217 4.045-1-.306-1-2.086-1-5.644v-.335c0-1.284 0-1.926-.41-2.328l-.022-.02c-.419-.395-1.087-.395-2.423-.395-2.403 0-3.605 0-4.011-.729a1.223 1.223 0 0 1-.02-.037c-.384-.74.312-1.681 1.704-3.564z"/></svg>
                                </div>

                                <h3 className="mt-2 text-white text-lg md:text-xl font-semibold">Auto-Scaling of Kubernetes Node Groups</h3>
                                <p className="text-sm md:text-base text-neutral-300 max-w-prose">
                                Automatically adjust your node groups based on your workload needs. In case the application traffic spikes, new nodes are added automatically to maintain high performance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 md:py-10 lg:py-12">

      {/* HEADING */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="md:px-8 text-center"
      >
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[32px] text-white font-extrabold mx-auto mb-6"
        >
          Cantech Cloud Compute Advantage for Accelerated Growth
        </motion.p>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="text-[#ffffffb3]"
        >
          Discover why leading companies across various industries trust Cantech Cloud to solve their modern challenges.
        </motion.p>
      </motion.div>

      {/* CONTENT */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">

          {/* LEFT FEATURES */}
          <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
  {[
    {
      title: "Seamless Management",
      desc: "Kubernetes clusters can automatically scale the nodes and workloads to manage surge in traffic while seamlessly maintaining performance.",
    },
    {
      title: "Cost Efficiency",
      desc: "Smart autoscaling and usage based billing ensures that you only pay for the resources your Kubernetes workloads use.",
    },
    {
      title: "Auto Upgrades",
      desc: "Enjoy automatic upgrades with latest updates. We ensure you get the latest security patches and performance improvements without the maintenance overhead.",
    },
    {
      title: "Comprehensive Management",
      desc: "Cantech cloud computing takes care of kubernetes upgrades, patching and availability. So, your teams can focus just on building and deploying applications.",
    },
  ].map((item, idx) => (
    <motion.div
      key={idx}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="rounded lg:p-5 flex flex-col gap-4 lg:transition lg:duration-300 lg:hover:bg-[#101010]"
    >
      <p className="mt-2 text-white text-lg md:text-xl font-semibold">
        {item.title}
      </p>

      <p className="text-sm md:text-base text-neutral-300 max-w-prose">
        {item.desc}
      </p>
    </motion.div>
  ))}
</div>


          {/* RIGHT IMAGE */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 40 },
              visible: { opacity: 1, x: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative md:col-span-2 lg:col-span-2"
          >
            <img
              className="inset-0 object-cover object-bottom w-full h-56 rounded shadow-lg lg:absolute lg:h-full"
              src="https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
          </motion.div>

        </div>
      </motion.div>
    </section> 
 
            <ServicesSection />
            <FAQ1 /> 
            <Footer />                   
            {/* <section className="text-white bg-black mx-auto flex flex-col p-6 px-4 py-16 items-center bg-[#09090a]"><div className="container"><footer><div className="relative mb-8 flex w-full flex-col gap-x-28 gap-y-8 md:flex-row md:justify-between md:gap-y-0"><div className="max-w-96"><div className="mb-6 flex items-center gap-3"><h3 className="text-xl font-bold">CantechCloud</h3></div><p className="text-muted-foreground text-base font-medium">Components made easy.</p></div><div className="flex flex-col items-start gap-x-20 gap-y-14 xl:flex-row"><div className="inline-grid w-fit grid-cols-1 gap-x-20 gap-y-14 sm:grid-cols-2"><div className="h-fit w-min"><h4 className="mb-6 whitespace-nowrap text-base font-semibold">Company</h4><ul className="text-muted-foreground space-y-3 text-base font-medium"><li><a href="#" className="hover:text-accent-foreground whitespace-nowrap text-base">About Us</a></li><li><a href="#" className="hover:text-accent-foreground whitespace-nowrap text-base">Careers</a></li><li><a href="#" className="hover:text-accent-foreground whitespace-nowrap text-base">Contact</a></li><li><a href="#" className="hover:text-accent-foreground whitespace-nowrap text-base">Press</a></li></ul></div><div className="h-fit w-min"><h4 className="mb-6 whitespace-nowrap text-base font-semibold">Support</h4><ul className="text-muted-foreground space-y-3 text-base font-medium"><li><a href="#" className="hover:text-accent-foreground whitespace-nowrap text-base">Help Center</a></li><li><a href="#" className="hover:text-accent-foreground whitespace-nowrap text-base">Community</a></li><li><a href="#" className="hover:text-accent-foreground whitespace-nowrap text-base">Status</a></li><li><a href="#" className="hover:text-accent-foreground whitespace-nowrap text-base">API Docs</a></li></ul></div></div></div></div><div className="border-border flex flex-col items-baseline justify-between gap-8 border-t pt-8 md:flex-row md:gap-16"><div className="text-muted-foreground text-xs sm:text-sm">© 2025 CantechCloud. All rights reserved.</div><div className="text-muted-foreground flex flex-col items-start gap-4 text-xs sm:text-sm md:flex-row lg:items-center"><a href="#" className="hover:text-accent-foreground">Terms &amp; Conditions</a><a href="#" className="hover:text-accent-foreground">Privacy Policy</a></div></div></footer></div></section> */}
        </>
    )
}

const Index = () => {
  return (
     <ServicesSection />
  );
};
// export default Index;