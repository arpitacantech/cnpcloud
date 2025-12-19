"use client";
import HomePage from "./hero-bg";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-black overflow-hidden py-[70px] min-h-[100vh]">
      <div className="absolute inset-0 z-0 h-full">
        <HomePage />
      </div>

      <div className="relative z-10 text-center px-4 pt-10"> 
  <h1
    className="font-sora text-[60px] line-height: normal; font-semibold mb-10 bg-gradient-to-r from-white to-gray-700 bg-clip-text text-transparent">
    Deploy Cloud Apps With
    <span className="block"> Confidence and Scale</span>
  </h1>

  {/* <p className="text-lg md:text-2xl text-gray-500 mb-10">
    One platform for all your cloud applications. Simple, secure, and infinitely scalable
  </p> */}
  <ul className="list-none mb-14 flex flex-col md:flex-row md:items-center md:justify-center md:flex-wrap lg:flex-nowrap gap-4 md:gap-9 w-fit md:mx-auto">
            <li data-ns-animate="" data-delay="0.3" className="flex items-center gap-2.5 opacity-100 blur-0 translate-x-0 translate-y-0 rotate-0 scale-100">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <rect x="0.664062" y="0.5" width="18" height="18" rx="9" fill="" className="fill-secondary dark:fill-accent/20"></rect>
                <path d="M8.98067 13.2561L14.4131 7.92144C14.7477 7.5959 14.7477 7.0697 14.4131 6.74416C14.0785 6.41861 13.5377 6.41861 13.2031 6.74416L8.37567 11.4901L6.12502 9.28807C5.79043 8.96253 5.2496 8.96253 4.91501 9.28807C4.58041 9.61362 4.58041 10.1398 4.91501 10.4654L7.77066 13.2561C7.93753 13.4184 8.1566 13.5 8.37567 13.5C8.59473 13.5 8.8138 13.4184 8.98067 13.2561Z" fill="" className="fill-white"></path>
              </svg>
              <span className="text-tagline-2 dark:text-accent/60"> Enterprise Security </span>
            </li>
            <li data-ns-animate="" data-delay="0.4" className="flex items-center gap-2.5 opacity-100 blur-0 translate-x-0 translate-y-0 rotate-0 scale-100">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <rect x="0.664062" y="0.5" width="18" height="18" rx="9" fill="" className="fill-secondary dark:fill-accent/20"></rect>
                <path d="M8.98067 13.2561L14.4131 7.92144C14.7477 7.5959 14.7477 7.0697 14.4131 6.74416C14.0785 6.41861 13.5377 6.41861 13.2031 6.74416L8.37567 11.4901L6.12502 9.28807C5.79043 8.96253 5.2496 8.96253 4.91501 9.28807C4.58041 9.61362 4.58041 10.1398 4.91501 10.4654L7.77066 13.2561C7.93753 13.4184 8.1566 13.5 8.37567 13.5C8.59473 13.5 8.8138 13.4184 8.98067 13.2561Z" fill="" className="fill-white"></path>
              </svg>
              <span className="text-tagline-2 dark:text-accent/60">
                Scalable Infrastructure
              </span>
            </li>
            <li data-ns-animate="" data-delay="0.5" className="flex items-center gap-2.5 opacity-100 blur-0 translate-x-0 translate-y-0 rotate-0 scale-100">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <rect x="0.664062" y="0.5" width="18" height="18" rx="9" fill="" className="fill-secondary dark:fill-accent/20"></rect>
                <path d="M8.98067 13.2561L14.4131 7.92144C14.7477 7.5959 14.7477 7.0697 14.4131 6.74416C14.0785 6.41861 13.5377 6.41861 13.2031 6.74416L8.37567 11.4901L6.12502 9.28807C5.79043 8.96253 5.2496 8.96253 4.91501 9.28807C4.58041 9.61362 4.58041 10.1398 4.91501 10.4654L7.77066 13.2561C7.93753 13.4184 8.1566 13.5 8.37567 13.5C8.59473 13.5 8.8138 13.4184 8.98067 13.2561Z" fill="" className="fill-white"></path>
              </svg>
              <span className="text-tagline-2 dark:text-accent/60"> 99.99% Uptime </span>
            </li>
            <li data-ns-animate="" data-delay="0.5" className="flex items-center gap-2.5 opacity-100 blur-0 translate-x-0 translate-y-0 rotate-0 scale-100">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <rect x="0.664062" y="0.5" width="18" height="18" rx="9" fill="" className="fill-secondary dark:fill-accent/20"></rect>
                <path d="M8.98067 13.2561L14.4131 7.92144C14.7477 7.5959 14.7477 7.0697 14.4131 6.74416C14.0785 6.41861 13.5377 6.41861 13.2031 6.74416L8.37567 11.4901L6.12502 9.28807C5.79043 8.96253 5.2496 8.96253 4.91501 9.28807C4.58041 9.61362 4.58041 10.1398 4.91501 10.4654L7.77066 13.2561C7.93753 13.4184 8.1566 13.5 8.37567 13.5C8.59473 13.5 8.8138 13.4184 8.98067 13.2561Z" fill="" className="fill-white"></path>
              </svg>
              <span className="text-tagline-2 dark:text-accent/60"> Secure & Reliable </span>
            </li>
          </ul> 
<div className="mt-24 flex justify-center gap-6">
  <button
    className="w-40 h-14 rounded-lg bg-black border border-white/20 text-white text-lg 
               transition shadow-none 
               hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] 
               hover:text-white hover:[text-shadow:_0_0_10px_rgba(255,255,255,0.8)]">
    Explore More
  </button>

  <button
    className="w-40 h-14 rounded-lg bg-black border border-white/20 text-white text-lg 
               transition shadow-none 
               hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] 
               hover:text-white hover:[text-shadow:_0_0_10px_rgba(255,255,255,0.8)]">
    Get Started
  </button>
</div>

</div>

    </section>
  );
}
