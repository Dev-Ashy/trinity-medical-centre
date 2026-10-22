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

const styles = [
  { card: "bg-navy text-white border-navy", text: "text-white/80", badge: "bg-white/20", link: "text-tmc-gold" },
  { card: "bg-royal text-white border-royal", text: "text-white/80", badge: "bg-white/20", link: "text-tmc-gold" },
  { card: "bg-tmc-gold text-navy border-tmc-gold", text: "text-navy/80", badge: "bg-navy/10 text-navy", link: "text-navy" },
  { card: "bg-white text-navy border-tmc-gold/40 border-l-4 border-l-tmc-gold", text: "text-navy/80", badge: "bg-tmc-gold/20 text-navy", link: "text-royal" },
];

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
            {services.map((s, i) => {
              const st = styles[i % styles.length];
              return (
                <Reveal key={s.slug} delay={i * 80}>
                  <Link
                    to={s.path}
                    className={`group block rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${st.card}`}
                  >
                    <h3 className="text-lg font-semibold group-hover:underline">{s.navTitle}</h3>
                    <p className={`mt-2 text-sm ${st.text}`}>{s.short}</p>
                    {s.provisional && (
                      <span className={`mt-3 inline-block rounded px-2 py-0.5 text-[10px] font-semibold uppercase ${st.badge}`}>Provisional – pending clinic confirmation</span>
                    )}
                    <div className={`mt-4 text-sm font-medium ${st.link}`}>Learn more →</div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <p className="mt-8 max-w-[65ch] text-xs text-muted-foreground">
            Service availability, pricing, and clinical details are subject to confirmation by TMC. Provisional services are listed for planning and will be updated when confirmed.
          </p>
        </div>
      </section>
    </div>
  );
}
