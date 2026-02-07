import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import workData from "@/lib/workData.json";

export const metadata: Metadata = {
  title: "Work | Signal & Form",
  description:
    "Project showcase: vehicle wraps, signage, ads, and client work from Signal & Form.",
};

type Project = { name: string; slug: string; images: string[] };

export default function WorkPage() {
  const { projects } = workData as {
    projects: Project[];
  };

  return (
    <>
      <div className="relative z-10 min-h-screen">
        {/* Hero */}
        <section className="relative py-28 px-4 bg-base overflow-hidden">
          <div className="max-w-4xl mx-auto text-center scroll-reveal">
            <h1 className="font-display font-semibold text-display-lg text-contrast mb-6">
              Work
            </h1>
            <p className="text-contrast-midtone text-lg max-w-2xl mx-auto">
              A selection of design work, ads, and client projects from Signal &
              Form.
            </p>
          </div>
        </section>

        {/* Client list */}
        <section className="py-28 px-4 backdrop-blur-md shadow-lg shadow-black/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display font-semibold text-display-md text-white mb-16 scroll-reveal">
              Client Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.filter((p) => p.images?.length > 0).map((project) => (
                <Link
                  key={project.slug}
                  href={`/work/${project.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/30 bg-base-midtone transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent-3/10">
                    <Image
                      src={`/brand/work/projects/${project.slug}/${project.images[0]}`}
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-base/90 via-base/20 to-transparent flex items-end p-5">
                      <span className="text-white font-medium text-lg drop-shadow-lg">
                        {project.name}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
