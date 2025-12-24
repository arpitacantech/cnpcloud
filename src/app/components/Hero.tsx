"use client";
import ClientLogos from "./Clients";

export default function Hero() {
  return (
      <section className="relative h-screen w-full overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover grayscale">
          <source src="/assets/hero-vid.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6 md:px-10 lg:px-20 -translate-y-4 md:-translate-y-10">
          <h1 className="cc-h1">
            <span className="block bg-gradient-to-b from-white via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Power Your Future With Scalable
            </span>
            <span className="block bg-gradient-to-b from-white via-gray-300 to-gray-400 bg-clip-text text-transparent md:mt-3">
              Cloud Solution
            </span>
          </h1>
          <ul className="list-none mb-14 flex flex-col md:flex-row md:items-center md:justify-center md:flex-wrap lg:flex-nowrap gap-4 md:gap-9 w-fit md:mx-auto">
            <li data-ns-animate="" data-delay="0.3" className="flex items-center gap-2.5 opacity-100 blur-0 translate-x-0 translate-y-0 rotate-0 scale-100">
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                <rect x="0.664062" y="0.5" width="18" height="18" rx="9" fill="" className="fill-secondary dark:fill-accent/20"></rect>
                <path d="M8.98067 13.2561L14.4131 7.92144C14.7477 7.5959 14.7477 7.0697 14.4131 6.74416C14.0785 6.41861 13.5377 6.41861 13.2031 6.74416L8.37567 11.4901L6.12502 9.28807C5.79043 8.96253 5.2496 8.96253 4.91501 9.28807C4.58041 9.61362 4.58041 10.1398 4.91501 10.4654L7.77066 13.2561C7.93753 13.4184 8.1566 13.5 8.37567 13.5C8.59473 13.5 8.8138 13.4184 8.98067 13.2561Z" fill="" className="fill-white"></path>
              </svg>
              <span className="text-tagline-2 dark:text-accent/60"> Fast Deployment </span>
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
        </div>
        <a href="#" className="mt-6 inline-flex items-center justify-center rounded-full bg-black/70 px-6 py-2.5 text-base font-medium text-white shadow-[0_0_12px_rgba(192,192,192,0.6)] transition-all hover:shadow-[0_0_24px_rgba(192,192,192,1)] animate-zoom-in-delay2 sm:mt-8 sm:px-7 sm:py-3 sm:text-lg md:mt-10 md:px-8 md:py-3.5 md:text-xl"> Get Started </a>
        <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 w-full z-20 animate-zoom-in">
          <ClientLogos transparent />
        </div>
      </section>
  );
}
