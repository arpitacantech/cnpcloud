"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import AnimatedLogo from "../components/AnimatedLogo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-full z-50 px-4 sm:px-6 md:px-8">
        <div
          className={`
            mx-auto border border-white/20 bg-black/80 rounded-full backdrop-blur-xl px-6 md:px-8 h-[55px] flex items-center transition-all duration-300 ease-out
            ${
              scrolled
                ? "max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl"
                : "max-w-xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl"
            }
          `}
          style={{ backdropFilter: "blur(40px)" }}
        >
          {/* LOGO */}
          {/* <div className="flex flex-1 items-center">
            <span className="whitespace-nowrap text-base font-semibold text-white sm:text-lg">Cantech Cloud</span>
          </div> */}
          {/* LOGO */}
<div className="flex flex-1 items-center gap-2">
  <div className="w-10 h-10 md:w-10 md:h-10">
    <AnimatedLogo className="w-full h-full scale-125" />
  </div>
  <span className="whitespace-nowrap text-base font-semibold text-white sm:text-lg">
    Cantech Cloud
  </span>
</div>


          {/* DESKTOP MENU */}
          <ul className="hidden md:flex flex-1 justify-center items-center space-x-10 text-white/80">
            {/* PRODUCT DROPDOWN */}
            <li className="relative group">
              <button className="flex items-center gap-1 hover:text-white font-sora font-normal">
                Products
                <ChevronDown className="w-4 h-4 transition group-hover:rotate-180" />
              </button>

              <div
                className="
                  absolute top-full left-1/2 -translate-x-1/2 mt-4 w-44
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-200
                "
              >
                <div className="bg-black backdrop-blur-xl border border-white/15 rounded-xl p-3 shadow-xl">
                  <Link href="/paas" className="block px-4 py-2 rounded-lg hover:bg-white/10 font-sora">
                    PaaS
                  </Link>
                  <Link href="/compute" className="block px-4 py-2 rounded-lg hover:bg-white/10 font-sora">
                    Compute
                  </Link>
                </div>
              </div>
            </li>

            <li><Link href="#" className="hover:text-white font-sora font-normal">About</Link></li>
            <li><Link href="#" className="hover:text-white font-sora font-normal">Contact</Link></li>
            <li><Link href="#" className="hover:text-white font-sora font-normal">Blog</Link></li>
          </ul>

          {/* CTA */}
          <div className="hidden md:flex flex-1 justify-end">
            <Link
              href="#"
              className="px-6 py-2 rounded-full text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,1)]"
            >
              Get Started →
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(true)}
          >
            <Menu size={26} />
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
        onClick={() => setOpen(false)}
      />

      {/* RIGHT SIDEBAR */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-[85%] max-w-sm
          bg-black/80 backdrop-blur-xl border-l border-white/20
          transform transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <span className="text-white font-semibold">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X className="text-white" />
          </button>
        </div>

        {/* MENU */}
        <div className="p-6 text-white space-y-6">
          {/* PRODUCT */}
          <div>
            <p className="text-white/70 mb-2">Product</p>
            <div className="pl-4 space-y-2">
              <Link href="#" className="block hover:text-gray-300">PaaS</Link>
              <Link href="#" className="block hover:text-gray-300">Compute</Link>
            </div>
          </div>

          <Link href="#" className="block hover:text-gray-300">Blog</Link>
          <Link href="#" className="block hover:text-gray-300">About</Link>
          <Link href="#" className="block hover:text-gray-300">Contact</Link>

          <Link
            href="#"
            className="mt-6 block text-center py-3 rounded-full bg-black/70
                       shadow-[0_0_12px_rgba(192,192,192,0.6)]
                       hover:shadow-[0_0_24px_rgba(192,192,192,1)]"
          >
            Get Started →
          </Link>
        </div>
      </aside>
    </>
  );
}