import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { facilityImages } from "@/data/images";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { easeOut, viewportOnce } from "@/lib/motion";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Facility Gallery | Trinity Medical Centre" },
      { name: "description", content: "Photographs of the rooms and facilities at Trinity Medical Centre." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const reduce = useReducedMotion();

  // Curated gallery images - 16 unique, representative images
  const galleryImages = facilityImages;

  return (
    <div>
      <PageHero
        title="Facility Gallery"
        subtitle="Explore the spaces where we deliver care — every room designed for patient comfort and clinical excellence."
      />

      <section className="bg-paper py-20 sm:py-28">
        <div className="container-tmc">
          <SectionHeading
            label="Our facilities"
            title="A look inside the centre."
            description="From the welcome desk to the operating theatre, see the environments where our team cares for patients every day."
          />

          {/* Category filter */}
          <motion.div
            className="mt-10 flex flex-wrap gap-2"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut, delay: 0.1 }}
            role="group"
            aria-label="Filter by category"
          >
            {["All", "Patient Areas", "Clinical Spaces", "Diagnostics", "Surgical", "Inpatient", "Specialist", "Emergency", "Support Services", "Exterior"].map((cat) => (
              <button
                key={cat}
                type="button"
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  cat === "All"
                    ? "bg-ink text-white shadow-[0_4px_16px_-8px_rgba(21,17,31,0.4)]"
                    : "bg-white text-ink/70 border border-line hover:border-tmc-gold hover:text-tmc-gold hover:bg-mist"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Masonry-style grid with scroll animations */}
          <motion.div
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            initial={reduce ? undefined : "hidden"}
            whileInView="show"
            viewport={viewportOnce}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
            }}
          >
            {galleryImages.map((img, i) => (
              <GalleryCard key={img.src} img={img} index={i} reduce={reduce} />
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-16 text-center"
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: easeOut, delay: reduce ? 0 : 0.3 }}
          >
            <p className="text-ink/60 max-w-2xl mx-auto">
              Want to see more? Visit us in person or <a href="/contact" className="text-tmc-gold underline hover:text-tmc-gold/80">contact our team</a> to arrange a tour.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

interface GalleryCardProps {
  img: (typeof facilityImages)[0];
  index: number;
  reduce: boolean;
}

function GalleryCard({ img, index, reduce }: GalleryCardProps) {
  const { scrollYProgress } = useScroll({ target: window, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 1, 1]);

  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 40, scale: 0.98 },
        show: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.6, ease: easeOut, delay: reduce ? 0 : index * 0.06 },
        },
      }}
      initial={reduce ? undefined : "hidden"}
      whileInView="show"
      viewport={viewportOnce}
      className="group"
    >
      <div className="relative overflow-hidden rounded-xl bg-ink/5">
        {/* Image with WebP source */}
        <picture>
          <source srcSet={img.srcWebp} type="image/webp" />
          <motion.img
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            loading="lazy"
            className="h-64 w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.06]"
            style={{ willChange: "transform" }}
            style={reduce ? undefined : { y, opacity }}
          />
        </picture>

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[0.68rem] font-semibold text-ink/80 shadow-sm">
            {img.category}
          </span>
        </div>

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />

        {/* Hover action */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
          <button
            type="button"
            className="p-2 rounded-full bg-white/95 backdrop-blur-sm text-ink shadow-lg hover:bg-white hover:shadow-xl transition-all duration-200"
            aria-label={`View ${img.caption} details`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Caption */}
      <figcaption className="mt-4">
        <h3 className="font-heading text-[1.1rem] font-medium text-ink group-hover:text-tmc-gold transition-colors duration-200">
          {img.caption}
        </h3>
        <p className="mt-1 text-[0.82rem] text-ink/50">{img.alt}</p>
      </figcaption>
    </motion.article>
  );
}