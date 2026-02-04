import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const posts: Record<
  string,
  { title: string; date: string; author?: string; content: React.ReactNode }
> = {
  "2025-up-coming": {
    title: "2025 Up & Coming!",
    date: "2025-01-17",
    author: "Rebecca Williams",
    content: (
      <>
        <p className="mb-6">
          Hello friends and welcome to our first blog post! To kick off our new page, we thought a
          peek into what to expect for 2025 would be a great place to start.
        </p>
        <p className="mb-4">Here are the highlights:</p>
        <ul className="list-disc list-inside space-y-2 mb-6 text-contrast-midtone">
          <li>Mounted, infrared heaters on both sides of the seating area</li>
          <li>Adjustable, wrap-around enclosures on both sides of the seating area</li>
          <li>New overhead lighting on both sides of the seating area</li>
          <li>Jellyfish lighting around the building to add ambiance and a cozy feel</li>
          <li>EVENTS! So many events coming in 2025</li>
        </ul>
        <p>
          We&apos;re excited for the year ahead and can&apos;t wait to share it with you. Stay tuned
          for more updates!
        </p>
      </>
    ),
  },
};

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return { title: "Blog | Hilltop Truck Park" };
  return {
    title: `${post.title} | Hilltop Truck Park Blog`,
    description: `Read "${post.title}" on the Hilltop Truck Park blog.`,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="text-accent-2 hover:underline text-sm mb-8 inline-block"
        >
          ← Back to Blog
        </Link>
        <article>
          <h1 className="text-4xl font-semibold text-contrast mb-4">{post.title}</h1>
          <div className="flex gap-4 text-sm text-contrast-midtone mb-8">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.author && <span>by {post.author}</span>}
          </div>
          <div className="prose prose-invert max-w-none text-contrast-midtone">
            {post.content}
          </div>
        </article>
      </div>
    </section>
  );
}
