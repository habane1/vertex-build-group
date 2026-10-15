import { COMPANY } from "@/lib/constants";

export function Hero() {
  return (
    <>
      {/* Fixed video background — stays in place while page scrolls over it */}
      <div className="fixed inset-0 -z-10 w-full h-screen overflow-hidden">
        {/* Dark background as fallback while video loads */}
        <div className="absolute inset-0 bg-navy-dark" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero content — scrolls with page */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight text-white max-w-4xl">
          {COMPANY.tagline}
        </h1>

        <a
          href="#services"
          className="mt-12 animate-bounce-down"
          aria-label="Scroll to services"
        >
          <svg
            width="40"
            height="24"
            viewBox="0 0 40 24"
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="4,4 20,20 36,4" />
          </svg>
        </a>
      </section>
    </>
  );
}
