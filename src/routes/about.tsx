import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { facilityImages } from "@/data/images";
import { motion, useReducedMotion } from "motion/react";
import { easeOut, viewportOnce } from "@/lib/motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [{ title: "About Trinity Medical Centre | Our Mission & Values" }],
  }),
  component: About,
});

function About() {
  const reduce = useReducedMotion();

  // Use curated unique images for about page
  const aboutImages = facilityImages.slice(0, 6);

  return (
    <div>
      <PageHero
        title="About Trinity Medical Centre"
        subtitle="Quality care rooted in compassion and community trust."
      />

      <section className="bg-paper py-20 sm:py-24">
        <div className="container-tmc">
          <p className="label-caps text-tmc-gold">Our story</p>
          <h2 className="mt-3 font-heading text-[2.2rem] font-semibold text-ink max-w-3xl">
            Serving our community since 17 August 2023
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-heading text-[1.5rem] font-medium text-ink">Our Mission</h3>
              <p className="mt-4 text-[1.05rem] leading-relaxed text-ink/80">
                Trinity Medical Centre exists to deliver accessible, affordable, and reliable healthcare
                to individuals and families. We believe that quality medical care should not be a privilege
                reserved for a few — it should be a standard available to all.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-[1.5rem] font-medium text-ink">Our Values</h3>
              <ul className="mt-4 space-y-4" role="list">
                {[
                  { title: "Compassion", desc: "Caring for each patient with dignity, empathy, and respect." },
                  { title: "Excellence", desc: "Evidence-based practice, continuous improvement, and clinical rigour." },
                  { title: "Accessibility", desc: "Timely access, clear information, and no hidden barriers to care." },
                  { title: "Integrity", desc: "Transparent communication, honest pricing, and accountable decisions." },
                ].map((v, i) => (
                  <motion.li
                    key={v.title}
                    initial={reduce ? undefined : { opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportOnce}
                    transition={{ duration: 0.5, ease: easeOut, delay: reduce ? 0 : i * 0.1 }}
                    className="flex gap-4 p-5 rounded-xl bg-white border border-line hover:border-tmc-gold/50 transition-colors"
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-mist flex items-center justify-center text-tmc-gold font-bold text-xl">
                      {i + 1}
                    </span>
                    <div>
                      <h4 className="font-semibold text-ink">{v.title}</h4>
                      <p className="mt-1 text-sm text-ink/60">{v.desc}</p>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Facility showcase */}
          <motion.div
            className="mt-16"
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-heading text-[1.5rem] font-medium text-ink">Our Facilities</h3>
                <p className="mt-1 text-ink/60">Purpose-built spaces for exceptional care.</p>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {aboutImages.map((img, i) => (
                <motion.article
                  key={img.src}
                  initial={reduce ? undefined : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.5, ease: easeOut, delay: reduce ? 0 : i * 0.08 }}
                  className="group overflow-hidden rounded-xl bg-white border border-line"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <picture>
                      <source srcSet={img.srcWebp} type="image/webp" />
                      <img
                        src={img.src}
                        alt={img.alt}
                        width={img.width}
                        height={img.height}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.05]"
                      />
                    </picture>
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[0.68rem] font-semibold text-ink/80 shadow-sm">
                        {img.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                  </div>
                  <figcaption className="p-4">
                    <h4 className="font-medium text-ink group-hover:text-tmc-gold transition-colors">{img.caption}</h4>
                  </figcaption>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}