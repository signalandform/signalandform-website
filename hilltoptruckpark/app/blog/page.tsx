import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Hilltop Truck Park",
  description: "News, updates, and announcements from Hilltop Truck Park in Justin, TX.",
};

const posts = [
  {
    slug: "2025-up-coming",
    title: "2025 Up & Coming!",
    excerpt:
      "A peek into what to expect for 2025 at Hilltop Truck Park — infrared heaters, new lighting, enclosures, and so many events.",
    date: "2025-01-17",
  },
];

export default function BlogPage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-semibold text-contrast mb-8">Blog</h1>
        <p className="text-contrast-midtone mb-12">
          News, updates, and announcements from Hilltop Truck Park.
        </p>
        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="border-b border-base-midtone pb-8">
              <h2 className="text-2xl font-medium text-contrast mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-accent-2 transition-colors">
                  {post.title}
                </Link>
              </h2>
              <time
                dateTime={post.date}
                className="text-sm text-contrast-midtone block mb-4"
              >
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <p className="text-contrast-midtone">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block mt-4 text-accent-2 hover:underline font-medium"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
