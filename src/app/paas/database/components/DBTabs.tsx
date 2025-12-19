"use client"; 
import { motion, AnimatePresence } from "framer-motion"
import React, { useState } from "react";

export type Item = {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: "product" | "db" | "addon";
  price?: string;
};

const TEST_DATA: Item[] = [
  {
    id: "p1",
    title: "Crypto VPS",
    subtitle: "vCPU optimized",
    description:
      "Low-latency VPS for trading & bots. 4 vCPU, 8GB RAM, NVMe. Low-latency VPS for trading & bots. 4 vCPU, 8GB RAM, NVMe.",
    category: "product",
    price: "₹799/mo",
  },
  {
    id: "p2",
    title: "Managed Kubernetes",
    subtitle: "Scale with ease",
    description:
      "Low-latency VPS for trading & bots. 4 vCPU, 8GB RAM, NVMe. Low-latency VPS for trading & bots. 4 vCPU, 8GB RAM, NVMe.",
    category: "product",
    price: "Contact Sales",
  },
  {
    id: "d1",
    title: "MySQL Cluster",
    subtitle: "Highly available",
    description:
      "Low-latency VPS for trading & bots. 4 vCPU, 8GB RAM, NVMe. Low-latency VPS for trading & bots. 4 vCPU, 8GB RAM, NVMe.",
    category: "db",
    price: "From ₹2,499/mo",
  },
  {
    id: "d2",
    title: "Redis Cluster",
    subtitle: "In-memory caching",
    description:
      "Low-latency VPS for trading & bots. 4 vCPU, 8GB RAM, NVMe. Low-latency VPS for trading & bots. 4 vCPU, 8GB RAM, NVMe.",
    category: "db",
    price: "From ₹999/mo",
  },
  {
    id: "a1",
    title: "Managed Backups",
    subtitle: "Daily snapshots",
    description:
      "Low-latency VPS for trading & bots. 4 vCPU, 8GB RAM, NVMe. Low-latency VPS for trading & bots. 4 vCPU, 8GB RAM, NVMe.",
    category: "addon",
    price: "₹199/mo",
  },
  {
    id: "a2",
    title: "DDoS Protection",
    subtitle: "Network shielding",
    description:
      "Low-latency VPS for trading & bots. 4 vCPU, 8GB RAM, NVMe. Low-latency VPS for trading & bots. 4 vCPU, 8GB RAM, NVMe.",
    category: "addon",
    price: "₹499/mo",
  },
];

const Icon = ({ name }: { name: string }) => {
  switch (name) {
    case "vps":
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7 20h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "k8s":
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M12 7v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "db":
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="7" rx="7" ry="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M5 7v6c0 1.657 3.134 3 7 3s7-1.343 7-3V7" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "redis":
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M4 12s4-5 8-5 8 5 8 5-4 5-8 5-8-5-8-5z" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      );
    default:
      return (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
  }
};

export default function ProductTabs() {
  const [tab, setTab] = useState<"all" | "db" | "addon">("all");

  const filtered =
    tab === "all"
      ? TEST_DATA
      : TEST_DATA.filter((item) => item.category === tab);

  return (
    <section className="py-20 ">
  <div className="max-w-6xl mx-auto">
    
    {/* Header */}
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold mb-4">
        Database Products & Services
      </h2>
      <p className="text-white opacity-80 max-w-2xl mx-auto">
        Choose from individual databases, high-availability clusters, or powerful add-ons.
      </p>
    </motion.div>

    {/* Tabs */}
    <motion.div
      className="flex gap-2 mb-8 justify-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
    >
      {[
        { id: "all", label: "All Products" },
        { id: "db", label: "Database Clusters" },
        { id: "addon", label: "Add Ons" },
      ].map((t) => (
        <button
          key={t.id}
          onClick={() => setTab(t.id as any)}
          className={`database-tab px-4 py-2 rounded-md font-medium ring-1 transition-all ${
            tab === t.id
              ? "bg-white text-black shadow"
              : "bg-transparent text-white"
          }`}
        >
          {t.label}
        </button>
      ))}
    </motion.div>

    {/* Cards */}
    <AnimatePresence mode="wait">
      <motion.div
        key={tab}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {filtered.map((item, index) => (
          <motion.div
            key={item.id}
            className="box1"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: "easeOut",
            }}
          >
            <div className="box2 p-5 bg-white rounded-2xl shadow hover:shadow-lg transition">
              <div className="flex gap-4">
                <div className="text-white">
                  {item.category === "product" ? (
                    item.title.toLowerCase().includes("kubernetes") ? (
                      <Icon name="k8s" />
                    ) : (
                      <Icon name="vps" />
                    )
                  ) : item.title.toLowerCase().includes("redis") ? (
                    <Icon name="redis" />
                  ) : (
                    <Icon name="db" />
                  )}
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>

  </div>
</section>
  );
}
