import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { useEffect, useState } from "react";
import { facilityImages } from "@/data/images";
import { getGalleryItems } from "@/lib/gallery-store";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Facility Gallery | Trinity Medical Centre" },
      { name: "description", content: "Illustrative clinical environments and medical equipment." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
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
        title="Facility Gallery"
        subtitle="Illustrative clinical environments and medical equipment — not photographs of TMC premises."
      />
      <section className="bg-[#F8F7FC] py-16">
        <div className="container-tmc">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {images.map((img, i) => (
              <Reveal key={i} delay={i * 60}>
                <figure className="group overflow-hidden rounded-xl border border-border bg-white shadow-sm">
                  <div className="overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.alt || img.caption}
                      width={1200}
                      height={800}
                      loading="lazy"
                      className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="p-3 text-xs text-muted-foreground">{img.caption}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            Images are illustrative clinical environments and equipment. They are not photographs of Trinity Medical Centre premises.
          </p>
        </div>
      </section>
    </div>
  );
}
