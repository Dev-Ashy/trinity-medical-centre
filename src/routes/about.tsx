import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { facilityImages } from "@/data/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [{ title: "About Trinity Medical Centre | Our Mission & Values" }],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <PageHero title="About Trinity Medical Centre" subtitle="Quality care rooted in compassion and community trust." />
      <div className="container-tmc py-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-royal">Serving our community since 17 August 2023</p>
        <div className="prose prose-neutral mt-6 max-w-none">
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
          {facilityImages.slice(0, 3).map((img, i) => (
            <figure key={i} className="overflow-hidden rounded-xl border border-border bg-white">
              <img src={img.src} alt={img.alt} loading="lazy" className="h-56 w-full object-cover" />
              <figcaption className="p-3 text-xs text-muted-foreground">{img.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
