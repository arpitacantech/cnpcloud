"use client";

interface ClientLogosProps {
  transparent?: boolean;
}

export default function ClientLogos({ transparent }: ClientLogosProps) {
  const logos = [
    "/assets/images/clients/logo1.png",
    "/assets/images/clients/logo2.png",
    "/assets/images/clients/logo3.png",
    "/assets/images/clients/logo4.png",
    "/assets/images/clients/logo5.png",
    "/assets/images/clients/logo6.png",
  ];

  return (
    <div
      className={`pt-14 pb-16 w-full flex flex-col items-center ${
        transparent ? "" : "bg-gray-900"
      }`}
    >
      <h2
        className={`text-xl md:text-2xl font-medium mb-6 ${
          transparent ? "text-white/80" : "text-white"
        }`}
      >
        Trusted By
      </h2>

      {/* LOGO MARQUEE */}
      <div className="relative w-full max-w-5xl overflow-hidden">
        <div className="flex w-max animate-logo-scroll gap-12">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="w-28 h-12 md:w-32 md:h-14 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
            >
              <img
                src={logo}
                alt={`Client ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
