import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Trinity Medical Centre | Our Mission & Values" },
    ],
  }),
  component: About,
});

function About() {
  const images = [
    "/images/screenshot-2026-10-21-183927.png",
    "/images/screenshot-2026-10-21-184509.png",
    "/images/hospital-about1.jpg",
    "/images/slide1.jpg",
  ];
  return (
    <div>
      <PageHero
        title="About Trinity Medical Centre"
        subtitle="Quality care rooted in compassion and community trust."
      />
      <div className="container-tmc py-16">
        <div className="prose prose-neutral max-w-none">
          <h2>Our Mission</h2>
          <p>Trinity Medical Centre exists to deliver accessible, affordable, and reliable healthcare to individuals and families.</p>
          <h2>Our Values</h2>
          <ul>
            <li><strong>Compassion:</strong> Caring for each patient with dignity.</li>
            <li><strong>Excellence:</strong> Evidence-based practice.</li>
            <li><strong>Accessibility:</strong> Timely access and clear information.</li>
            <li><strong>Integrity:</strong> Transparent communication.</li>
          </ul>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((src,i)=>(
            <img key={i} src={src} alt="Healthcare setting" loading="lazy" className="rounded-xl object-cover h-64 w-full" />
          ))}
        </div>
      </div>
    </div>
  );
}
