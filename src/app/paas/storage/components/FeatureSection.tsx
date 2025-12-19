// components/FeatureSection.tsx
import React from "react";

export default function FeatureSection() {
  return (
    <section className=" text-slate-100 py-20 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image Card */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              {/* Rounded dark card with inner shadow */}
              <div className="rounded-3xl p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] backdrop-blur-sm border">
                <img
                  src="https://cdn.prod.website-files.com/63e36d09413f83c58ac5d998/63f3633d48a58b6cfbcb1e25_Content%2001.svg"
                  alt="Illustration"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>

              {/* Decorative linear border (top-left rounded stroke) */}
              <span
                aria-hidden
                className="absolute -inset-1 rounded-[28px] pointer-events-none"
                style={{
                  boxShadow:
                    "0 0 0 1px rgba(255,255,255,0.02), inset 0 1px 0 rgba(255,255,255,0.01)",
                }}
              />
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="px-2 lg:px-0">
            <div className="mb-4">
              <span className="inline-block bg-slate-700/40 text-xs text-slate-300 px-3 py-1 rounded-full">
                Creative Freedom
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-300">
                BitNinja PostgreSQL Protection
              </span>
            </h2>

            <p className="text-slate-400 max-w-xl mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales
              leo id commodo ornare. Vestibulum lobortis ligula vehicula.
            </p>

            <div className="space-y-3 max-w-sm">
              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 flex-none text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-slate-300">Responsive Components</p>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="w-6 h-6 flex-none text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p className="text-slate-300">Webflow First Development</p>
              </div>
            </div>
          </div>
        </div>

      
      </div>
    </section>
  );
}
