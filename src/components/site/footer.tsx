import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { site, services } from "@/data/site";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About TMC", to: "/about" },
  { label: "Doctors & Medical Team", to: "/doctors" },
  { label: "Book an Appointment", to: "/book-appointment" },
  { label: "Health Tips & Articles", to: "/health-tips" },
  { label: "Facility Gallery", to: "/gallery" },
  { label: "Patient Information", to: "/patient-information" },
  { label: "Frequently Asked Questions", to: "/faq" },
  { label: "Contact & Location", to: "/contact" },
  { label: "Admin Portal", to: "/admin/login" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-tmc-gold/60 to-transparent" />

      {/* Closing statement */}
      <div className="container-tmc flex flex-col gap-6 border-b border-white/10 py-12 md:flex-row md:items-center md:justify-between">
        <p className="max-w-[24ch] font-heading text-2xl font-medium leading-snug text-white sm:text-3xl">
          Care you can reach, whenever you need it.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-tmc-gold hover:text-tmc-gold"
          >
            <Phone className="size-4" aria-hidden="true" /> {site.phone}
          </a>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm border border-white/25 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-tmc-gold hover:text-tmc-gold"
          >
            <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
          </a>
          <Link
            to="/book-appointment"
            className="inline-flex items-center gap-2 rounded-sm bg-tmc-red px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#9d1333]"
          >
            Book appointment <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="container-tmc grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-3" aria-label="Trinity Medical Centre home">
            <img src="/images/tmc-mark.svg" alt="" className="h-9 w-9" />
            <span className="flex flex-col leading-none">
              <span className="font-heading text-[1.2rem] font-medium text-white">Trinity</span>
              <span className="label-caps mt-1 text-[9px] text-tmc-gold/90">Medical Centre</span>
            </span>
          </Link>
          <p className="mt-5 max-w-[34ch] text-sm leading-relaxed text-white/65">
            Accessible, affordable and reliable healthcare for our community.
          </p>
        </div>

        <nav aria-label="Footer quick links">
          <h2 className="label-caps text-tmc-gold">Quick links</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer services">
          <h2 className="label-caps text-tmc-gold">Medical services</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={s.path} className="transition-colors hover:text-white">
                  {s.navTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="label-caps text-tmc-gold">Visit us</h2>
          <ul className="mt-4 space-y-4 text-sm text-white/70">
            <li>
              <span className="block text-white">Clinic address</span>
              <span>To be confirmed by TMC administration</span>
            </li>
            <li>
              <span className="block text-white">Operating hours</span>
              <span>Pending clinic confirmation</span>
            </li>
            <li>
              <span className="block text-white">Telephone triage</span>
              <span>Available around the clock via the main line</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-tmc flex flex-col items-center justify-between gap-3 py-5 text-xs text-white/50 sm:flex-row">
          <p>{site.credit}</p>
          <div className="flex items-center gap-5">
            <Link to="/privacy-policy" className="transition-colors hover:text-tmc-gold">
              Privacy policy
            </Link>
            <Link to="/terms-of-use" className="transition-colors hover:text-tmc-gold">
              Terms of use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
