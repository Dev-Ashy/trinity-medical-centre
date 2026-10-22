import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { services } from "@/data/site";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Medical Services | Trinity Medical Centre" },
      { name: "description", content: "Explore Trinity Medical Centre's medical services including outpatient, laboratory, eye care, women's health, paediatrics and more." },
    ],
  }),
  component: Services,
});

const accent = ["border-l-navy", "border-l-royal", "border-l-tmc-gold"];

function Services() {
  return (
    <div>
      <PageHero
        title="All Medical Services"
        subtitle="Comprehensive primary and specialist care, with clear information on availability."
      />
      <section className="bg-[#F8F7FC] py-16">
        <div className="container-tmc">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 80}>
                <Link
                  to={s.path}
                  className={`group block rounded-2xl border border-border border-l-4 ${accent[i % 3]} bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                >
                  <h3 className="text-lg font-semibold text-navy group-hover:text-royal">{s.navTitle}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                  {s.provisional && (
                    <span className="mt-3 inline-block rounded bg-tmc-gold/20 px-2 py-0.5 text-[10px] font-semibold uppercase text-navy">Provisional – pending clinic confirmation</span>
                  )}
                  <div className="mt-4 text-sm font-medium text-royal">Learn more →</div>
                </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 max-w-[65ch] text-xs text-muted-foreground">
            Service availability, pricing, and clinical details are subject to confirmation by TMC. Provisional services are listed for planning and will be updated when confirmed.
          </p>
        </div>
      </section>
    </div>
  );
}
