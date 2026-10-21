import { Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { site, services } from "@/data/site";
import { tmcPhotos } from "@/data/images";

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
];

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-tmc grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={tmcPhotos.logo} alt="Trinity Medical Centre logo" className="h-14 w-auto" />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            Providing dedicated, compassionate, and gold-standard healthcare to our community since {site.established}.
          </p>
          <div className="mt-5 flex flex-col gap-2 text-sm">
            <a href={site.phoneHref} className="flex items-center gap-2 hover:text-tmc-gold">
              <Phone className="size-4 shrink-0 text-tmc-gold" aria-hidden="true" /> {site.phone}
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-tmc-gold"
            >
              <MessageCircle className="size-4 shrink-0 text-tmc-gold" aria-hidden="true" /> {site.whatsappDisplay}{" "}
              (WhatsApp)
            </a>
          </div>
        </div>

        <nav aria-label="Footer quick links">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-tmc-gold">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-tmc-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer services">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-tmc-gold">Medical Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={s.path} className="hover:text-tmc-gold">
                  {s.navTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-tmc-gold">Visit Us</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>
              <span className="block font-semibold text-white">Clinic address</span>
              <span className="text-white/70">To be confirmed by TMC administration</span>
            </li>
            <li>
              <span className="block font-semibold text-white">Operating hours</span>
              <span className="text-white/70">Pending clinic confirmation</span>
            </li>
            <li>
              <span className="block font-semibold text-white">Telephone triage</span>
              <span className="text-white/70">Available around the clock via the main line</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-tmc flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/60 sm:flex-row">
          <p>{site.credit}</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-tmc-gold">
              Privacy Policy
            </Link>
            <span aria-hidden="true">·</span>
            <Link to="/terms-of-use" className="hover:text-tmc-gold">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
