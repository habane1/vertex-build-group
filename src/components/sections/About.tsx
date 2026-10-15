import { ABOUT_TEXT } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function About() {
  return (
    <section className="relative bg-white">
      <div className="flex flex-col md:flex-row">
        {/* Text column */}
        <div className="md:w-[45%] py-20 px-6 md:px-12">
          <SectionHeading title="About" id="about" />
          <ScrollReveal>
            <p className="text-text-body leading-relaxed text-base">
              {ABOUT_TEXT}
            </p>
          </ScrollReveal>
        </div>

        {/* Image column — parallax via background-attachment: fixed */}
        <div
          className="md:w-[55%] min-h-[400px] bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: "url(/images/about-bg.jpeg)" }}
        />
      </div>
    </section>
  );
}
