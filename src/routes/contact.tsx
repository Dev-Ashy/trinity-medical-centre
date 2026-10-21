import { createFileRoute } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin } from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { site } from "@/data/site";
import { tmcPhotos } from "@/data/images";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Location | Trinity Medical Centre" },
      { name: "description", content: "Contact Trinity Medical Centre by phone or WhatsApp. Address and hours pending clinic confirmation." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div>
      <PageHero
        title="Contact & Location"
        subtitle="Get in touch with our team."
        image={tmcPhotos.entrance}
        imageAlt="Contact"
      />
      <div className="container-tmc py-16 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-heading text-2xl font-bold text-navy">Reach Us</h2>
          <div className="mt-6 space-y-4">
            <a href={site.phoneHref} className="flex items-center gap-3 rounded-xl border border-border p-4 hover:bg-muted">
              <Phone className="size-5 text-royal" /> <span>Call {site.phone}</span>
            </a>
            <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-border p-4 hover:bg-muted">
              <MessageCircle className="size-5 text-royal" /> <span>WhatsApp {site.whatsappDisplay}</span>
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-border p-4">
              <MapPin className="size-5 text-royal" />
              <span>Street address to be confirmed by TMC administration</span>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Operating hours are pending clinic confirmation. Telephone triage is available around the clock via the main line.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-muted p-6">
          <h3 className="font-semibold text-navy">Send a message</h3>
          <p className="mt-2 text-sm text-muted-foreground">No secure backend is configured. For urgent matters, please call or WhatsApp directly.</p>
          <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Name" className="w-full rounded-lg border border-input bg-background px-3 py-2" />
            <input placeholder="Phone" className="w-full rounded-lg border border-input bg-background px-3 py-2" />
            <textarea placeholder="Message" rows={4} className="w-full rounded-lg border border-input bg-background px-3 py-2" />
            <button disabled className="rounded-full bg-muted px-4 py-2 text-sm font-medium text-muted-foreground" title="Contact form disabled – no backend">Send (disabled)</button>
          </form>
        </div>
      </div>
    </div>
  );
}
