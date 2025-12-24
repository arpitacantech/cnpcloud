"use client";

import { useState, useMemo, ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Card {
  id: number;
  title: string;
  description: string;
  logo: string;
  category: string;
}

const tabs = [
  "All Apps",
  "Quick Access",
  "ERP",
  "E-commerce",
  "E-Mail Hosting",
  "Database",
  "Content Management",
];

const cards: Card[] = [
  {
    id: 1,
    logo: "/assets/images/application/odoo.png",
    title: "Odoo",
    description:
      "All-in-one ERP platform for managing sales, inventory, accounting, HR, and operations from a single dashboard.",
    category: "ERP",
  },
  {
    id: 2,
    logo: "/assets/images/application/erpnext.png",
    title: "ERPNext",
    description:
      "Open-source ERP solution designed for small to mid-sized businesses with powerful customization options.",
    category: "ERP",
  },
  {
    id: 3,
    logo: "/assets/images/application/magento.png",
    title: "Magento",
    description:
      "Enterprise-grade e-commerce platform for building scalable and feature-rich online stores.",
    category: "E-commerce",
  },
  {
    id: 4,
    logo: "/assets/images/application/woocommerce.png",
    title: "WooCommerce",
    description:
      "Flexible WordPress-based e-commerce solution for quickly launching and managing online stores.",
    category: "E-commerce",
  },
  {
    id: 5,
    logo: "/assets/images/application/mailserver.png",
    title: "Mail Server",
    description:
      "Secure and reliable email hosting with advanced spam filtering and enterprise-level uptime.",
    category: "E-Mail Hosting",
  },
  {
    id: 6,
    logo: "/assets/images/application/zimbra.png",
    title: "Zimbra",
    description:
      "Enterprise collaboration suite providing email, calendar, and file sharing capabilities.",
    category: "E-Mail Hosting",
  },
  {
    id: 7,
    logo: "/assets/images/application/mysql.png",
    title: "MySQL",
    description:
      "Popular open-source relational database for high-performance and scalable applications.",
    category: "Database",
  },
  {
    id: 8,
    logo: "/assets/images/application/postgresql.png",
    title: "PostgreSQL",
    description:
      "Advanced open-source database offering reliability, extensibility, and strong performance.",
    category: "Database",
  },
  {
    id: 9,
    logo: "/assets/images/application/wordpress.png",
    title: "WordPress",
    description:
      "World’s most popular CMS for building websites, blogs, and content-driven platforms.",
    category: "Content Management",
  },
  {
    id: 10,
    logo: "/assets/images/application/drupal.png",
    title: "Drupal",
    description:
      "Powerful CMS designed for complex, high-traffic websites with advanced content workflows.",
    category: "Content Management",
  },
  {
    id: 11,
    logo: "/assets/images/application/docker.png",
    title: "Docker",
    description:
      "Container platform for packaging, deploying, and running applications consistently.",
    category: "Quick Access",
  },
  {
    id: 12,
    logo: "/assets/images/application/github.png",
    title: "GitHub",
    description:
      "Code hosting and collaboration platform for version control and CI/CD workflows.",
    category: "Quick Access",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export default function ApplicationSection() {
  const [activeTab, setActiveTab] = useState<string>("All Apps");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredCards = useMemo(() => {
    return cards.filter((card) => {
      const matchesTab =
        activeTab === "All Apps" || card.category === activeTab;

      const matchesSearch = card.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <section className="py-20 bg-black text-white">
      {/* Intro */}
      <div className="max-w-6xl mx-auto text-center mb-14">
        <p className="title-badges">Applications</p>
        <h2 className="cc-h2">
          Select the application that best fits your needs
        </h2>
        <p className="subtitle">
          Choose from our range of applications to get started quickly
        </p>
      </div>

      {/* Search */}
      <div className="max-w-2xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search Application"
          value={searchQuery}
          onChange={handleSearchChange}
          className="
            w-full
            bg-[linear-gradient(135deg,#0d0d0d,#050505)]
            border border-white/10
            shadow-[0_0_10px_rgba(0,0,0,0.5)]
            text-gray-200
            rounded-lg
            px-4 py-3
            focus:outline-none
            focus:ring-1
            focus:ring-gray-700
          "
        />
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full transition-all ${
              activeTab === tab
                ? "application-bg-tab text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <motion.div
        layout
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredCards.map((card) => (
            <motion.div
              key={card.id}
              layout
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="cn-application-bx-one"
            >
              <div className="cn-application-bx-two p-6">
                <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center">
                  <img
                    src={card.logo}
                    alt={card.title}
                    className="w-8 h-8 filter grayscale"
                  />
                </div>

                <h3 className="cc-h3">
                  {card.title}
                </h3>

                <p className="cc-p">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredCards.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-full text-center text-gray-500"
          >
            No applications found.
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}