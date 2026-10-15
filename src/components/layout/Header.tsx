"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { NAV_LINKS } from "@/lib/constants";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [activeSection, setActiveSection] = useState("#home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 flex">
        {/* Yellow logo section */}
        <a href="#home" className="flex items-center gap-4 bg-yellow px-8 py-5 shrink-0">
          <Image
            src="/logo-icon.svg"
            alt="Vertex Build Group"
            width={44}
            height={49}
            className="w-11 h-12"
          />
          <span className="font-heading text-base font-bold uppercase leading-tight text-navy-dark">
            <span className="block">Vertex</span>
            <span className="block">Build Group</span>
          </span>
        </a>

        {/* Navy nav section — desktop */}
        <nav className="hidden md:flex flex-1 items-center justify-end bg-navy px-10 gap-14">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-heading text-base font-semibold uppercase tracking-widest transition-colors duration-75 ${
                activeSection === link.href
                  ? "text-yellow"
                  : "text-white hover:text-yellow"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Navy section — mobile hamburger */}
        <div className="flex md:hidden flex-1 items-center justify-end bg-navy px-4">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-white p-2"
            aria-label="Open navigation menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
