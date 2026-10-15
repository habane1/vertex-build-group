"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "@/lib/site-data";
import { SectionHeading } from "@/components/ui/SectionHeading";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      aria-label={liked ? "Unlike" : "Like"}
      onClick={(e) => {
        e.preventDefault();
        setLiked(!liked);
      }}
      className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill={liked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </button>
  );
}

function ShareButton({ slug, title }: { slug: string; title: string }) {
  async function handleShare(e: React.MouseEvent) {
    e.preventDefault();
    const url = `${window.location.origin}/projects/${slug}`;

    if (navigator.share) {
      await navigator.share({ title, url });
    } else {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    }
  }

  return (
    <button
      aria-label="Share"
      onClick={handleShare}
      className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <polyline points="16,6 12,2 8,6" />
        <line x1="12" y1="2" x2="12" y2="15" />
      </svg>
    </button>
  );
}

function GalleryItem({
  project,
}: {
  project: { title: string; image: string; slug: string };
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentScrollY = window.scrollY;
        const scrollingDown = currentScrollY > lastScrollY.current;
        lastScrollY.current = currentScrollY;

        if (entry.isIntersecting && scrollingDown) {
          setIsVisible(true);
        } else if (!entry.isIntersecting) {
          setIsVisible(false);
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Link href={`/projects/${project.slug}`} ref={ref} className="block group relative aspect-square overflow-hidden cursor-pointer">
      <div
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(60px)",
          transition: "transform 2.2s cubic-bezier(0.14, 0.4, 0.09, 0.99)",
          width: "100%",
          height: "100%",
          position: "relative",
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center">
          <p className="font-heading text-lg font-semibold text-gray-900">
            {project.title}
          </p>

          {/* Icons row */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between">
            <LikeButton />
            <ShareButton slug={project.slug} title={project.title} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function Projects() {
  return (
    <section className="relative bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Projects" id="projects" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <GalleryItem key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
