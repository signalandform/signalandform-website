import type { Metadata } from "next";
import Image from "next/image";
import workData from "@/lib/workData.json";

export const metadata: Metadata = {
  title: "Work | Signal & Form",
  description:
    "Project showcase: vehicle wraps, signage, ads, and client work from Signal & Form.",
};

export default function WorkPage() {
  const { ads, projects } = workData as {
    ads: string[];
    projects: { name: string; slug: string; images: string[] }[];
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section
        className="py-28 px-4"
        style={{ background: "var(--warm-gradient)" }}
      >
        <div className="max-w-4xl mx-auto text-center scroll-reveal">
          <h1 className="font-display font-semibold text-display-lg text-base mb-6">
            Work
          </h1>
          <p className="text-base-midtone text-lg max-w-2xl mx-auto">
            A selection of design work, ads, and client projects from Signal & Form.
          </p>
        </div>
      </section>

      {/* Ads grid */}
      {ads.length > 0 && (
        <section className="py-28 px-4 bg-base">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display font-semibold text-display-md text-contrast mb-16 scroll-reveal">
              Ads &amp; Campaigns
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ads.map((src, i) => (
                <div
                  key={src}
                  className={`group relative aspect-[4/5] overflow-hidden rounded-xl border border-base-midtone bg-base-midtone transition-all duration-300 hover:scale-[1.02] hover:border-accent-3/50 ${
                    i === 0 ? "sm:col-span-2 sm:aspect-[2/1]" : ""
                  }`}
                >
                  <Image
                    src={`/brand/work/${src}`}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-accent-2 font-medium text-sm">
                      Campaign
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Client projects */}
      {projects.map((project, catIndex) => (
        <section
          key={project.slug}
          className={`py-28 px-4 ${catIndex % 2 === 0 ? "bg-warm-bg" : ""}`}
          style={
            catIndex % 2 === 1
              ? { background: "var(--warm-gradient)" }
              : undefined
          }
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display font-semibold text-display-md text-base mb-12 scroll-reveal">
              {project.name}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {project.images.map((src, idx) => (
                <div
                  key={`${project.slug}-${idx}`}
                  className="group relative aspect-square overflow-hidden rounded-xl border border-warm-border bg-white transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-accent-3/10"
                >
                  <Image
                    src={`/brand/work/projects/${project.slug}/${src}`}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-base/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <span className="text-contrast font-medium text-sm">
                      {project.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
