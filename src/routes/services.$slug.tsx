import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/page-hero";
import { services, site } from "@/data/site";
import { stock } from "@/data/images";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const svc = services.find(s => s.slug === params.slug);
    return {
      meta: [
        { title: svc ? `${svc.title} | Trinity Medical Centre` : "Service | Trinity Medical Centre" },
        { name: "description", content: svc ? svc.short : "Medical service information." },
      ],
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const { slug } = Route.useParams();
  const svc = services.find(s => s.slug === slug);

  if (!svc) {
    return (
      <div className="container-tmc py-16">
        <h1 className="text-2xl font-bold text-navy">Service not found</h1>
        <p className="mt-2 text-muted-foreground">The requested service could not be located.</p>
        <Link to="/services" className="mt-4 inline-block text-royal hover:underline">Back to services</Link>
      </div>
    );
  }

  const image = stock.doctorConsult; // generic fallback

  return (
    <div>
      <PageHero
        title={svc.title}
        subtitle={svc.short}
        image={image}
        imageAlt={svc.navTitle}
      />
      <div className="container-tmc py-16">
        <div className="prose prose-neutral max-w-none">
          <h2>Overview</h2>
          <p>{svc.short}</p>
          {svc.provisional && (
            <p className="text-amber-700 bg-amber-50 border border-amber-200 rounded p-3">
              This service is provisional and pending confirmation by Trinity Medical Centre. Details will be updated once confirmed.
            </p>
          )}
          <h2>What to expect</h2>
          <p>
            Appointments are by request. An online request does not confirm your booking until the clinic responds. Please bring valid identification and any relevant medical records.
          </p>
          <h2>Contact</h2>
          <p>
            Call <a href={site.phoneHref}>{site.phone}</a> or WhatsApp <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">{site.whatsappDisplay}</a> to discuss suitability.
          </p>
        </div>
        <div className="mt-8">
          <Link to="/book-appointment" className="inline-flex items-center rounded-full bg-tmc-red px-5 py-2.5 text-sm font-semibold text-white hover:bg-tmc-red/90">
            Request an appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
