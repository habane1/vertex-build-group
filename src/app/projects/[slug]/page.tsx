import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/lib/site-data";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/ui/ChatWidget";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <>
      <Header />
      <main>
        {/* Title banner */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold uppercase text-gray-900">
              {project.title}
            </h1>
            <div className="mt-4 w-20 h-1 bg-yellow" />
          </div>
        </section>

        {/* Content: text left, image right */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
            <div className="md:w-[45%]">
              <p className="text-text-body leading-relaxed text-base">
                {project.description}
              </p>
              <Link
                href="/#projects"
                className="inline-block mt-8 px-6 py-3 bg-yellow font-heading text-sm font-bold uppercase tracking-wider text-navy-dark hover:bg-yellow-hover transition-colors duration-200"
              >
                Back to Projects
              </Link>
            </div>

            <div className="md:w-[55%] relative aspect-[4/3]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
