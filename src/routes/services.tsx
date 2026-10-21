import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { services } from "@/data/site";
import { tmcPhotos } from "@/data/images";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Medical Services | Trinity Medical Centre" },
      { name: "description", content: "Explore Trinity Medical Centre's medical services including outpatient, laboratory, eye care, women's health, paediatrics and more." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <div>
      <PageHero
        title="All Medical Services"
        subtitle="Comprehensive primary and specialist care, with clear information on availability."
        image={tmcPhotos.entrance}
        imageAlt="TMC services"
      />
      <div className="container-tmc py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link key={s.slug} to={s.path} className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:shadow-md">
              <h3 className="text-lg font-semibold text-navy group-hover:text-royal">{s.navTitle}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
              {s.provisional && (
                <span className="mt-3 inline-block rounded bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase text-amber-800">Provisional – pending clinic confirmation</span>
              )}
              <div className="mt-4 text-sm font-medium text-royal">Learn more →</div>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          Service availability, pricing, and clinical details are subject to confirmation by TMC. Provisional services are listed for planning and will be updated when confirmed.
        </p>
      </div>
    </div>
  );
}
