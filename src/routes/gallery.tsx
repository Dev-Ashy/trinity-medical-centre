import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Facility Gallery | Trinity Medical Centre" },
      { name: "description", content: "Illustrative clinical environments and medical equipment." },
    ],
  }),
  component: Gallery,
});

const images = [
  { src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80", caption: "Monitoring equipment" },
  { src: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1200&q=80", caption: "Laboratory" },
  { src: "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80", caption: "Operating theatre" },
  { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80", caption: "MRI suite" },
  { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80", caption: "Clinical corridor" },
  { src: "https://images.unsplash.com/photo-1614101062781-09a8dfb90dce?auto=format&fit=crop&w=1200&q=80", caption: "Hospital bed" },
  { src: "https://images.unsplash.com/photo-1710074213379-2a9c2653046a?auto=format&fit=crop&w=1200&q=80", caption: "Hospital bed" },
  { src: "https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=1200", caption: "Clinical room" },
  { src: "https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=1200", caption: "Laboratory" },
  { src: "https://images.pexels.com/photos/7089020/pexels-photo-7089020.jpeg?auto=compress&cs=tinysrgb&w=1200", caption: "Monitoring equipment" },
  { src: "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=1200", caption: "Operating theatre" },
  { src: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200", caption: "Clinical corridor" },
];

function Gallery() {
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
              <Reveal key={i} delay={i * 80}>
                <figure className="group overflow-hidden rounded-xl border border-border bg-white shadow-sm">
                  <div className="overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.caption}
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
