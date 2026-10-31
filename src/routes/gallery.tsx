import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { useEffect, useState } from "react";
import { facilityImages } from "@/data/images";
import { getGalleryItems } from "@/lib/gallery-store";
import { motion, useReducedMotion } from "motion/react";
import { cascadeItem, staggerParent, viewportOnce } from "@/lib/motion";

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
  const [images, setImages] = useState<any[]>(facilityImages);

  useEffect(() => {
    const items = getGalleryItems().filter((i) => i.section === "gallery");
    if (items.length > 0) {
      const custom = items.map((i) => ({ src: i.src, caption: i.caption, alt: i.caption }));
      setImages([...custom, ...facilityImages]);
    }
  }, []);

  return (
    <div>
      <PageHero
        title="Inside Trinity Medical Centre"
        subtitle="Photographs of the rooms and facilities at our centre."
      />

      <section className="bg-paper py-20 sm:py-24">
        <div className="container-tmc">
          <SectionHeading
            label="Our facilities"
            title="A look inside the centre."
            description="From ward spaces to consultation rooms, see the environments where our team cares for patients."
          />

          <motion.div
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            variants={staggerParent}
            initial={reduce ? undefined : "hidden"}
            whileInView="show"
            viewport={viewportOnce}
          >
            {images.map((img, i) => (
              <motion.figure key={`${img.src}-${i}`} variants={cascadeItem} className="group">
                <div className="overflow-hidden rounded-sm bg-ink/5">
                  <img
                    src={img.src}
                    alt={img.alt || img.caption}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-52 w-full object-cover transition-transform duration-[700ms] ease-out group-hover:scale-[1.045]"
                  />
                </div>
                <figcaption className="mt-3 flex items-center gap-2 text-[0.72rem] text-ink/55">
                  <span className="h-px w-4 bg-tmc-gold" aria-hidden="true" />
                  {img.caption}
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>

        </div>
      </section>
    </div>
  );
}
