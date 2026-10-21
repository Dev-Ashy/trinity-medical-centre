import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { stock } from "@/data/images";

export const Route = createFileRoute("/health-tips")({
  head: () => ({
    meta: [
      { title: "Health Tips & Articles | Trinity Medical Centre" },
      { name: "description", content: "Evidence-based health tips and articles from Trinity Medical Centre." },
    ],
  }),
  component: HealthTips,
});

function HealthTips() {
  return (
    <div>
      <PageHero
        title="Health Tips & Articles"
        subtitle="Practical advice for everyday wellbeing."
        image={stock.compassionateCare}
        imageAlt="Health tips"
      />
      <div className="container-tmc py-20">
        <p className="max-w-2xl text-muted-foreground">Content coming soon. Articles will be added after review by TMC clinical team.</p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3,4,5,6].map(i => (
            <article key={i} className="reveal rounded-2xl border border-border bg-white p-8 shadow-sm transition hover:shadow-md">
              <h3 className="font-semibold text-navy text-lg">Article Title TBC</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Summary placeholder – content pending clinic approval. Practical, evidence-based guidance for everyday wellbeing.</p>
              <div className="mt-6 h-px w-12 bg-tmc-gold" />
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
