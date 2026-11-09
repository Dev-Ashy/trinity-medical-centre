import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { services } from "@/data/site";
import { SectionHeading } from "@/components/site/section-heading";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Stethoscope, Microscope, Heart, Baby, Eye, Pill, Ambulance, Building2 } from "lucide-react";
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

const serviceIcons = {
  "General Practice": Stethoscope,
  "Laboratory Services": Microscope,
  "Cardiology": Heart,
  "Paediatrics": Baby,
  "Eye Care": Eye,
  "Pharmacy": Pill,
  "Emergency Care": Ambulance,
  "Women's Health": Building2,
  "Diagnostic Imaging": Building2,
} as const;

function Services() {
  const reduce = useReducedMotion();

  return (
    <div>
      <PageHero
        title="Medical services"
        subtitle="Primary and specialist care, with honest information about what is available today and what is still being confirmed."
      />

      <section className="bg-paper py-20 sm:py-28">
        <div className="container-tmc">
          <SectionHeading
            label="Clinical directory"
            title="Care organised around what you came in for."
            description="Each service links to a short, plain-language summary. Provisional services are marked and will be updated once the clinic confirms them."
          />

          <motion.div
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerParent}
            initial={reduce ? undefined : "hidden"}
            whileInView="show"
            viewport={viewportOnce}
          >
            {services.map((s) => {
              const Icon = serviceIcons[s.navTitle as keyof typeof serviceIcons] || Stethoscope;
              return (
                <motion.article key={s.slug} variants={cascadeItem} className="h-full">
                  <Link
                    to={s.path}
                    className="group relative flex h-full flex-col gap-6 rounded-xl border border-line bg-white p-6 transition-all duration-400 hover:-translate-y-1.5 hover:border-tmc-gold/60 hover:shadow-[0_32px_64px_-40px_rgba(21,17,31,0.4)]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-mist flex items-center justify-center text-tmc-gold group-hover:bg-tmc-gold group-hover:text-white transition-all duration-300">
                        <Icon className="size-6" aria-hidden="true" />
                      </div>
                      <h3 className="font-heading text-[1.3rem] font-medium leading-snug text-ink">{s.navTitle}</h3>
                    </div>
                    <p className="text-[0.95rem] leading-relaxed text-ink/70">{s.short}</p>

                    <div className="flex items-center gap-2 pt-2 border-t border-ink/10">
                      <span className="h-px w-8 bg-tmc-gold" aria-hidden="true" />
                      <span className="label-caps text-[9px] text-ink/50">
                        {s.provisional ? "Provisional — pending confirmation" : "Available now"}
                      </span>
                      <ArrowUpRight
                        className="ml-auto size-4 text-ink/30 group-hover:text-tmc-gold transition-colors duration-300"
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </motion.div>

          <p className="mt-12 max-w-[64ch] border-l border-tmc-gold/50 pl-5 text-xs leading-relaxed text-muted-foreground">
            Service availability, pricing and clinical detail are subject to confirmation by TMC
            administration. Nothing on this page is a substitute for a consultation.
          </p>
        </div>
      </section>
    </div>
  );
}