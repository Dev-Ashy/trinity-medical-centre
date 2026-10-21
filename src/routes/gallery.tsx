import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { tmcPhotos } from "@/data/images";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Facility Gallery | Trinity Medical Centre" },
      { name: "description", content: "Photos of Trinity Medical Centre facilities – reception, waiting lounge, ward and grounds." },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  const images = [
    { src: tmcPhotos.grounds, alt: "TMC grounds" },
    { src: tmcPhotos.entrance, alt: "TMC entrance" },
    { src: tmcPhotos.receptionHall, alt: "Reception hall" },
    { src: tmcPhotos.waitingLounge, alt: "Waiting lounge" },
    { src: tmcPhotos.ward, alt: "Ward" },
  ];
  return (
    <div>
      <PageHero title="Facility Gallery" subtitle="Genuine photographs of our centre." image={tmcPhotos.grounds} imageAlt="Gallery" />
      <div className="container-tmc py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <img key={i} src={img.src} alt={img.alt} loading="lazy" className="aspect-square w-full rounded-xl object-cover" />
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">All facility images are genuine TMC photographs supplied by the clinic.</p>
      </div>
    </div>
  );
}
