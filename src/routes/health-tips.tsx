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
      <div className="container-tmc py-16">
        <p className="text-muted-foreground">Content coming soon. Articles will be added after review by TMC clinical team.</p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3].map(i => (
            <article key={i} className="rounded-2xl border border-border bg-white p-6">
              <h3 className="font-semibold text-navy">Article Title TBC</h3>
              <p className="mt-2 text-sm text-muted-foreground">Summary placeholder – content pending clinic approval.</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
