import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { services } from "@/data/site";
import { SectionHeading } from "@/components/site/section-heading";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cascadeItem, staggerParent, viewportOnce } from "@/lib/motion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Medical Services | Trinity Medical Centre" },
      {
        name: "description",
        content:
          "Outpatient care, diagnostic laboratory, eye care, women's health, paediatrics, pharmacy and emergency triage at Trinity Medical Centre.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  const reduce = useReducedMotion();

  return (
    <div>
      <PageHero
        title="Medical services"
        subtitle="Primary and specialist care, with honest information about what is available today and what is still being confirmed."
      />

      <section className="bg-paper py-20 sm:py-24">
        <div className="container-tmc">
          <SectionHeading
            label="Clinical directory"
            title="Care organised around what you came in for."
            description="Each service links to a short, plain-language summary. Provisional services are marked and will be updated once the clinic confirms them."
          />

          <motion.div
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerParent}
            initial={reduce ? undefined : "hidden"}
            whileInView="show"
            viewport={viewportOnce}
          >
            {services.map((s) => (
              <motion.div key={s.slug} variants={cascadeItem} className="h-full">
                <Link
                  to={s.path}
                  className="group relative flex h-full flex-col justify-between gap-8 rounded-sm border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-tmc-gold/60 hover:shadow-[0_24px_45px_-32px_rgba(21,17,31,0.5)]"
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-heading text-[1.3rem] font-medium leading-snug text-ink">{s.navTitle}</h3>
                      <ArrowUpRight
                        className="mt-1 size-4 shrink-0 text-ink/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-tmc-gold"
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-3 text-[0.9rem] leading-relaxed text-muted-foreground">{s.short}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-px w-6 bg-tmc-gold/70" aria-hidden="true" />
                    <span className="label-caps text-[9px] text-ink/45">
                      {s.provisional ? "Provisional — pending confirmation" : "Available"}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <p className="mt-10 max-w-[64ch] border-l border-tmc-gold/50 pl-5 text-xs leading-relaxed text-muted-foreground">
            Service availability, pricing and clinical detail are subject to confirmation by TMC
            administration. Nothing on this page is a substitute for a consultation.
          </p>
        </div>
      </section>
    </div>
  );
}
