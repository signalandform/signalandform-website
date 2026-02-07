import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import workData from "@/lib/workData.json";

type Project = { name: string; slug: string; images: string[] };

const projects = (workData as { projects: Project[] }).projects;

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Work | Signal & Form" };
  return {
    title: `${project.name} | Work | Signal & Form`,
    description: `Design work for ${project.name} — vehicle wraps, signage, and branding from Signal & Form.`,
  };
}

export default async function ClientWorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <>
      <div className="relative z-10 min-h-screen">
        {/* Hero */}
        <section className="relative py-20 px-4 bg-base overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-contrast-midtone hover:text-accent-2 transition-colors mb-8 text-sm font-medium"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Work
            </Link>
            <h1 className="font-display font-semibold text-display-lg text-contrast scroll-reveal">
              {project.name}
            </h1>
          </div>
        </section>

        {/* Project images */}
        <section className="py-16 px-4 backdrop-blur-md shadow-lg shadow-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {project.images.map((src, idx) => (
              <div
                key={`${project.slug}-${idx}`}
                className="group relative aspect-square overflow-hidden rounded-xl border border-base-midtone bg-base-midtone transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-accent-3/10"
              >
                <Image
                  src={`/brand/work/projects/${project.slug}/${src}`}
                  alt={`${project.name} — image ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
        </section>
      </div>
    </>
  );
}
