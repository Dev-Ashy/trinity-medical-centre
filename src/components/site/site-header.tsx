import { Link } from "@tanstack/react-router";
import { CalendarCheck, Phone, Menu } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/doctors", label: "Doctors" },
  { to: "/health-tips", label: "Health Tips" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 backdrop-blur">
      <div className="container-tmc flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src="/images/tmc-logo.svg" alt="Trinity Medical Centre" className="h-10 w-auto" />
        </Link>

        <nav className="hidden xl:flex items-center gap-5 text-sm font-medium text-white/85">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-tmc-gold transition-colors">{l.label}</Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href={site.phoneHref} className="flex items-center gap-1.5 text-sm font-medium text-white/90 hover:text-tmc-gold">
            <Phone className="size-4" /> {site.phone}
          </a>
          <Button asChild className="rounded-full bg-tmc-red hover:bg-tmc-red/90">
            <Link to="/book-appointment"><CalendarCheck className="size-4" /> Book Appointment</Link>
          </Button>
        </div>

        <button
          type="button"
          className="xl:hidden rounded-lg p-2 text-white hover:bg-white/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <Menu className="size-6" />
        </button>
      </div>

      {open && (
        <div className="xl:hidden border-t border-white/10 bg-navy px-4 py-4">
          <nav className="flex flex-col gap-3 text-white">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="py-1">{l.label}</Link>
            ))}
            <a href={site.phoneHref} className="flex items-center gap-2 pt-2"><Phone className="size-4" /> {site.phone}</a>
            <Link to="/book-appointment" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center gap-2 rounded-full bg-tmc-red px-4 py-2 font-semibold text-white">
              <CalendarCheck className="size-4" /> Book Appointment
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
