import { Link } from "@tanstack/react-router";
import { CalendarCheck, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { site } from "@/data/site";
import { tmcPhotos } from "@/data/images";
import { Button } from "@/components/ui/button";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  image?: string;
  imageAlt?: string;
  breadcrumb?: { label: string; to?: string }[];
  children?: React.ReactNode;
};

export function PageHero({ title, subtitle, eyebrow, image, imageAlt, breadcrumb, children }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {image && (
        <>
          <img
            src={image}
            alt={imageAlt ?? ""}
            className="absolute inset-0 h-full w-full object-cover opacity-30"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40" aria-hidden="true" />
        </>
      )}
      <div className="container-tmc relative py-14 sm:py-20">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-4 flex flex-wrap items-center gap-2 text-sm text-white/70">
            {breadcrumb.map((c, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {c.to ? (
                  <Link to={c.to} className="hover:text-tmc-gold">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-tmc-gold">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && (
          <p className="mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-tmc-gold">
            <span className="inline-block h-0.5 w-8 bg-tmc-gold" aria-hidden="true" />
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-balance-tight text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">{subtitle}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}

export function HeroActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild size="lg" className="bg-tmc-red text-white hover:bg-tmc-red/90">
        <Link to="/book-appointment">
          <CalendarCheck className="size-5" aria-hidden="true" />
          Book an Appointment
        </Link>
      </Button>
      <Button
        asChild
        size="lg"
        variant="outline"
        className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
      >
        <a href={site.phoneHref}>
          <Phone className="size-5" aria-hidden="true" />
          Call the Centre
        </a>
      </Button>
      <Button asChild size="lg" variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white">
        <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="size-5" aria-hidden="true" />
          WhatsApp Us
        </a>
      </Button>
    </div>
  );
}

export function ContactStrip({ className = "" }: { className?: string }) {
  return (
    <div className={`grid gap-3 sm:grid-cols-2 lg:grid-cols-3 ${className}`}>
      <a
        href={site.phoneHref}
        className="flex items-center gap-3 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white transition-colors hover:bg-white/10"
      >
        <Phone className="size-5 shrink-0 text-tmc-gold" aria-hidden="true" />
        <span className="min-w-0">
          <span className="block text-xs text-white/70">Call the centre</span>
          <span className="block truncate text-sm font-semibold">{site.phone}</span>
        </span>
      </a>
      <a
        href={site.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white transition-colors hover:bg-white/10"
      >
        <MessageCircle className="size-5 shrink-0 text-tmc-gold" aria-hidden="true" />
        <span className="min-w-0">
          <span className="block text-xs text-white/70">Chat on WhatsApp</span>
          <span className="block truncate text-sm font-semibold">{site.whatsappDisplay}</span>
        </span>
      </a>
      <div className="flex items-center gap-3 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white">
        <MapPin className="size-5 shrink-0 text-tmc-gold" aria-hidden="true" />
        <span className="min-w-0">
          <span className="block text-xs text-white/70">Clinic address</span>
          <span className="block truncate text-sm font-semibold">To be confirmed by TMC</span>
        </span>
      </div>
    </div>
  );
}

export function HoursNotice() {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white">
      <Clock className="size-5 shrink-0 text-tmc-gold" aria-hidden="true" />
      <span className="min-w-0">
        <span className="block text-xs text-white/70">Operating hours</span>
        <span className="block truncate text-sm font-semibold">Pending clinic confirmation</span>
      </span>
    </div>
  );
}
