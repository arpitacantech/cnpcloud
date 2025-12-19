"use client";

import Link from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-full z-50 px-4 sm:px-6 md:px-8">
    //   {/* <div
    //     className={`
    //       mx-auto
    //       bg-black/80
    //       backdrop-blur-xl
    //       border border-white/20
    //       rounded-full
    //       shadow-lg
    //       px-6 md:px-8
    //       h-[55px]
    //       flex items-center
    //       transition-all duration-300 ease-out
    //       ${scrolled ? "max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl" : "max-w-xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl"}
    //     `}
    //     style={{
    //       background: "rgba(0,0,0,0.85)",
    //       backdropFilter: "blur(30px)",
    //       WebkitBackdropFilter: "blur(30px)",
    //     }}
    //   > */}
    //   <div className={clsx(
    //     "mx-auto bg-black/80 backdrop-blur-xl border border-white/20 rounded-full shadow-lg px-6 md:px-8 h-[55px] flex items-center transition-all duration-300 ease-out",
    //     scrolled
    //       ? "max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl"
    //       : "max-w-xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl"
    //   )}>
    //     {/* LEFT LOGO */}
    //     <div className="flex-1 flex items-center">
    //       <span className="text-white font-semibold text-base sm:text-lg whitespace-nowrap">
    //         Cantech Cloud
    //       </span>
    //     </div>

    //     {/* DESKTOP MENU */}
    //     <ul className="hidden md:flex flex-1 justify-center items-center space-x-10 font-medium text-white/80 whitespace-nowrap font-sora">
    //       <li><Link href="#" className="hover:text-white transition">Application</Link></li>
    //       <li><Link href="#" className="hover:text-white transition">Database</Link></li>
    //       <li><Link href="#" className="hover:text-white transition">Storage</Link></li>
    //       <li><Link href="#" className="hover:text-white transition">Pricing</Link></li>
    //     </ul>

    //     {/* RIGHT CTA - DESKTOP */}
    //     <div className="hidden md:flex flex-1 justify-end font-sora">
    //       <Link
    //         href="#"
    //         className="bg-black/70 text-white font-medium rounded-full px-6 py-2 flex items-center gap-2 whitespace-nowrap transition hover:shadow-lg">
    //         Get Started <ArrowRight className="w-4 h-4" />
    //       </Link>
    //     </div>

    //     {/* MOBILE MENU BUTTON */}
    //     <button
    //       className="md:hidden text-white"
    //       onClick={() => setOpen(!open)}
    //     >
    //       {open ? <X size={26} /> : <Menu size={26} />}
    //     </button>
    //   </div>

    //   {/* MOBILE SLIDE MENU */}
    //   {open && (
    //     <div className="md:hidden mt-3 bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl p-6 text-white shadow-lg
    //                     transition-all duration-300">
    //       <ul className="flex flex-col space-y-4 text-lg font-medium">
    //         <li><Link href="#" className="hover:text-gray-300">Application</Link></li>
    //         <li><Link href="#" className="hover:text-gray-300">Database</Link></li>
    //         <li><Link href="#" className="hover:text-gray-300">Storage</Link></li>
    //         <li><Link href="#" className="hover:text-gray-300">Pricing</Link></li>
    //       </ul>

    //       <Link
    //         href="#"
    //         className="
    //           mt-6 block text-center
    //           bg-black/70 
    //           rounded-full 
    //           py-3 
    //           font-medium 
    //           shadow-[0_0_12px_rgba(192,192,192,0.6)]
    //           hover:shadow-[0_0_24px_rgba(192,192,192,1)]
    //         "
    //       >
    //         Get Started →
    //       </Link>
    //     </div>
    //   )}
    // </nav>
    <nav className="fixed top-6 left-1/2 z-50 w-full -translate-x-1/2 px-4 sm:px-6 md:px-8">
      <div
        className={clsx(
          "mx-auto flex h-[55px] items-center rounded-full border border-white/20 bg-black/80 px-6 shadow-lg backdrop-blur-xl transition-all duration-300 ease-out md:px-8",
          scrolled
            ? "max-w-xl sm:max-w-2xl md:max-w-4xl lg:max-w-5xl"
            : "max-w-xl sm:max-w-3xl md:max-w-5xl lg:max-w-7xl"
        )}
      >
        <div className="flex flex-1 items-center">
          <span className="whitespace-nowrap text-base font-semibold text-white sm:text-lg">
            Cantech Cloud
          </span>
        </div>

        <ul className="hidden flex-1 items-center justify-center space-x-10 whitespace-nowrap font-sora font-medium text-white/80 md:flex">
          <li><Link href="#" className="transition hover:text-white">Application</Link></li>
          <li><Link href="#" className="transition hover:text-white">Database</Link></li>
          <li><Link href="#" className="transition hover:text-white">Storage</Link></li>
          <li><Link href="#" className="transition hover:text-white">Pricing</Link></li>
        </ul>

        <div className="hidden flex-1 justify-end font-sora md:flex">
          <Link
            href="#"
            className="flex items-center gap-2 whitespace-nowrap rounded-full bg-black/70 px-6 py-2 font-medium text-white transition hover:shadow-lg"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="mt-3 rounded-2xl border border-white/20 bg-black/80 p-6 text-white shadow-lg backdrop-blur-xl transition-all duration-300 md:hidden">
          <ul className="flex flex-col space-y-4 text-lg font-medium">
            <li><Link href="#" className="hover:text-gray-300">Application</Link></li>
            <li><Link href="#" className="hover:text-gray-300">Database</Link></li>
            <li><Link href="#" className="hover:text-gray-300">Storage</Link></li>
            <li><Link href="#" className="hover:text-gray-300">Pricing</Link></li>
          </ul>

          <Link
            href="#"
            className="mt-6 block rounded-full bg-black/70 py-3 text-center font-medium shadow-[0_0_12px_rgba(192,192,192,0.6)] transition hover:shadow-[0_0_24px_rgba(192,192,192,1)]"
          >
            Get Started →
          </Link>
        </div>
      )}
    </nav>

  );
}
