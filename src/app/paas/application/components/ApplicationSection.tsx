"use client";

import { useState, useMemo, ChangeEvent } from "react";

interface Card {
  id: number;
  title: string;
  description: string;
  logo: string;
  category: string;
}

const tabs = ["All Apps",
  "Quick Access",
  "ERP",
  "E-commerce",
  "E-Mail Hosting",
  "Database",
  "Content Management"];

const cards: Card[] = [
  {
    id: 1,
    logo: "/assets/images/application/python.png",
    title: "Odoo",
    description: "Comprehensive ERP and CRP platform for business management suite with integrated modules for CRM, ERP, inventory, HR, and e-commerce.",
    category: "ERP",
  },
  {
    id: 2,
    logo: "/assets/images/application/python.png",
    title: "Python",
    description: "Comprehensive ERP and CRP platform for business management suite with integrated modules for CRM, ERP, inventory, HR, and e-commerce.",
    category: "E-commerce",
  },
  {
    id: 3,
    logo: "/assets/images/application/python.png",
    title: "Odoo",
    description: "Comprehensive ERP and CRP platform for business management suite with integrated modules for CRM, ERP, inventory, HR, and e-commerce.",
    category: "E-Mail Hosting",
  },
  {
    id: 4,
    logo: "/assets/images/application/python.png",
    title: "Python",
    description: "Comprehensive ERP and CRP platform for business management suite with integrated modules for CRM, ERP, inventory, HR, and e-commerce.",
    category: "ERP",
  },
  {
    id: 5,
    logo: "/assets/images/application/python.png",
    title: "NodeJs",
    description: "Comprehensive ERP and CRP platform for business management suite with integrated modules for CRM, ERP, inventory, HR, and e-commerce.",
    category: "E-commerce",
  },
  {
    id: 6,
    logo: "/assets/images/application/python.png",
    title: "Odoo",
    description: "Comprehensive ERP and CRP platform for business management suite with integrated modules for CRM, ERP, inventory, HR, and e-commerce.",
    category: "E-Mail Hosting",
  },
  {
    id: 7,
    logo: "/assets/images/application/python.png",
    title: "NodeJs",
    description: "Comprehensive ERP and CRP platform for business management suite with integrated modules for CRM, ERP, inventory, HR, and e-commerce.",
    category: "Content Management",
  },
  {
    id: 8,
    logo: "/assets/images/application/python.png",
    title: "NodeJs",
    description: "Comprehensive ERP and CRP platform for business management suite with integrated modules for CRM, ERP, inventory, HR, and e-commerce.",
    category: "ERP",
  },
  {
    id: 9,
    logo: "/assets/images/application/python.png",
    title: "NodeJs",
    description: "Comprehensive ERP and CRP platform for business management suite with integrated modules for CRM, ERP, inventory, HR, and e-commerce.",
    category: "Content Management",
  },
];

export default function ApplicationSection() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredCards = useMemo(() => {
    return cards.filter((card) => {
      const matchesTab =
        activeTab === "All" || card.category === activeTab;

      const matchesSearch =
        card.title.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <section className="py-20 bg-black text-white mt-10">
      {/* Section Intro */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="inline-block border border-gray-300 text-gray-300 uppercase text-sm px-3 py-1 rounded-full mb-3 tracking-wide">
          Applications
        </p>

        <h2 className="text-[32px] font-extrabold mx-auto mb-3">
          Select the application that best fits your needs
        </h2>

        <p className="max-w-4xl mx-auto text-[#ffffffb3] font-lexend">
          Choose from our range of applications to get started quickly and easily
        </p>
      </div>

      {/* Search Field */}
      <div className="max-w-2xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search Application"
          className="w-full bg-[linear-gradient(135deg,#0d0d0d,#050505)]
          border border-white/10
          shadow-[0_0_10px_rgba(0,0,0,0.5)]
          text-gray-200 rounded-lg px-4 py-3
          focus:outline-none focus:ring-1 focus:ring-gray-700"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {tabs.map((tab, index) => (
          <button
            key={`${tab}-${index}`} // ✅ unique & safe
            className={`application-bg-tab px-6 py-2 rounded-full ${
              activeTab === tab
                ? "bg-gray-300 text-black"
                : "text-gray-200"
            } transition`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
          <div key={card.id} className="cn-application-bx-one">
            <div className="cn-application-bx-two p-6 transition">
              <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center text-gray-500 text-lg font-bold">
                <img
                  src={card.logo}
                  alt={card.title}
                  className="w-8 h-8 filter grayscale"
                />
              </div>

              <h3 className="text-2xl font-medium mb-2 text-gray-300">
                {card.title}
              </h3>

              <p className="text-gray-400 text-lg">
                {card.description}
              </p>
            </div>
          </div>
        ))}

        {filteredCards.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No applications found.
          </p>
        )}
      </div>
    </section>
  );
}