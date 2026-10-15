import Image from "next/image";
import { CLIENT_LOGOS } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Clients() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Clients" />

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {CLIENT_LOGOS.map((logo, i) => (
            <div key={i} className="w-32 h-12 md:w-44 md:h-14 relative">
              <Image
                src={logo}
                alt={`Client ${i + 1}`}
                fill
                className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
