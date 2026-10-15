import Image from "next/image";
import { SERVICES } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function Services() {
  return (
    <section className="relative bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Services" id="services" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 200}>
              <div>
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 font-heading text-xl font-bold uppercase text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-text-body leading-relaxed">
                  {service.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
