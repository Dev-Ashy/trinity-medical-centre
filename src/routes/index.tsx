import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { site, services } from "@/data/site";
import { tmcPhotos, stock } from "@/data/images";
import { PageHero } from "@/components/site/page-hero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trinity Medical Centre – Home | Accessible Affordable Reliable Healthcare" },
      { name: "description", content: "Welcome to Trinity Medical Centre. Established 17 August 2023. Quality care with outpatient, laboratory, eye care, women's health, paediatrics and more." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      <PageHero
        title="Accessible. Affordable. Reliable Healthcare"
        subtitle="Trinity Medical Centre has served our community since 17 August 2023 with compassionate, gold-standard care."
        ctaPrimary={{ label: "Book an Appointment", to: "/book-appointment" }}
        ctaSecondary={{ label: "Our Services", to: "/services" }}
        image={tmcPhotos.entrance}
        imageAlt="Trinity Medical Centre entrance"
      />

      <section className="container-tmc py-16">
        <div className="grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-3xl font-bold text-navy">Welcome to Trinity Medical Centre</h2>
            <p className="mt-4 text-charcoal/80">
              At TMC we combine clinical excellence with warmth and respect. Our multidisciplinary team provides first-contact care, diagnostics, and specialist support under one roof — with clear communication and dignified treatment for every patient.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={site.phoneHref} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-muted">
                <Phone className="size-4" /> {site.phone}
              </a>
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-tmc-gold px-4 py-2 text-sm font-semibold text-navy hover:bg-tmc-gold/90">
                <MessageCircle className="size-4" /> WhatsApp {site.whatsappDisplay}
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-muted p-6">
            <h3 className="font-heading text-xl font-semibold text-navy">Quick Appointment</h3>
            <p className="mt-2 text-sm text-muted-foreground">Online requests are not confirmed until the clinic responds.</p>
            <Link to="/book-appointment" className="mt-4 inline-flex items-center gap-2 rounded-full bg-tmc-red px-4 py-2 text-sm font-semibold text-white hover:bg-tmc-red/90">
              <CalendarCheck className="size-4" /> Book Now <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-light-grey py-16">
        <div className="container-tmc">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-heading text-2xl font-bold text-navy">Our Core Services</h2>
            <Link to="/services" className="text-sm font-medium text-royal hover:underline">View all services →</Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0,6).map((s) => (
              <Link key={s.slug} to={s.path} className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:shadow-md">
                <h3 className="font-semibold text-navy group-hover:text-royal">{s.navTitle}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{s.short}</p>
                {s.provisional && <span className="mt-3 inline-block rounded bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase text-muted-foreground">Provisional</span>}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-tmc py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy">Facility & Experience</h2>
            <p className="mt-4 text-charcoal/80">Our centre is designed for comfort and privacy. Real facility photos are used throughout the site to reflect the actual TMC environment.</p>
            <ul className="mt-6 space-y-2 text-sm text-charcoal">
              <li>• Reception & waiting lounge</li>
              <li>• Consultation rooms</li>
              <li>• Diagnostic laboratory</li>
              <li>• Paediatric & women’s health areas</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={tmcPhotos.receptionHall} alt="Reception hall" className="aspect-square w-full rounded-xl object-cover" loading="lazy" />
            <img src={tmcPhotos.waitingLounge} alt="Waiting lounge" className="aspect-square w-full rounded-xl object-cover" loading="lazy" />
            <img src={tmcPhotos.ward} alt="Ward" className="aspect-square w-full rounded-xl object-cover col-span-2" loading="lazy" />
          </div>
        </div>
      </section>
    </div>
  );
}
