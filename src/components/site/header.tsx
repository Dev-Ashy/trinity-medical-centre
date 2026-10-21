import { Link, useMatchRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, MessageCircle, Phone, X, CalendarCheck } from "lucide-react";
import { site, services, mainNav } from "@/data/site";
import { tmcPhotos } from "@/data/images";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const matchRoute = useMatchRoute();
  const servicesRef = useRef<HTMLDivElement>(null);

  // Close dropdowns/menus on route change
  useEffect(() => {
    const unsub = () => {};
    return unsub;
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const isActive = (to: string) => Boolean(matchRoute({ to, fuzzy: to !== "/" }));

  const linkCls = (to: string) =>
    cn(
      "border-b-2 py-5 text-sm font-medium transition-colors",
      isActive(to) ? "border-royal font-semibold text-royal" : "border-transparent text-charcoal hover:text-royal",
    );

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="bg-navy text-white">
        <div className="container-tmc flex h-9 items-center justify-between gap-3 text-xs">
          <p className="hidden min-w-0 truncate text-white/80 sm:block">
            Serving our community since {site.established}
          </p>
          <div className="flex min-w-0 items-center gap-4">
            <a href={site.phoneHref} className="flex items-center gap-1.5 hover:text-tmc-gold">
              <Phone className="size-3.5" aria-hidden="true" />
              <span className="truncate">{site.phone}</span>
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-tmc-gold"
            >
              <MessageCircle className="size-3.5" aria-hidden="true" />
              <span className="truncate">{site.whatsappDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-border bg-white/95 shadow-[0_1px_8px_rgba(0,0,0,0.06)] backdrop-blur-md">
        <div className="container-tmc flex h-16 items-center justify-between gap-4 lg:h-20">
          <Link to="/" className="flex min-w-0 items-center gap-2.5" aria-label="Trinity Medical Centre home">
            <img src={tmcPhotos.logo} alt="Trinity Medical Centre logo" className="h-11 w-auto shrink-0 lg:h-12" />
            <span className="hidden min-w-0 flex-col leading-tight xs:flex sm:flex">
              <span className="truncate text-sm font-bold uppercase tracking-wide text-navy sm:text-base">
                Trinity Medical Centre
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-tmc-gold">
                Quality · Affordable · Reliable
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-5 xl:flex">
            {mainNav.map((item) =>
              item.to === "/services" ? (
                <div key={item.to} ref={servicesRef} className="relative">
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    onClick={() => setServicesOpen((v) => !v)}
                    className={cn(linkCls(item.to), "flex items-center gap-1")}
                  >
                    Services
                    <ChevronDown className="size-4" aria-hidden="true" />
                  </button>
                  {servicesOpen && (
                    <div className="absolute left-0 top-full w-72 rounded-xl border border-border bg-white p-2 shadow-xl">
                      {services.map((s) => (
                        <Link
                          key={s.slug}
                          to={s.path}
                          className="flex items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm text-charcoal hover:bg-muted hover:text-royal"
                        >
                          <span className="min-w-0 truncate">{s.navTitle}</span>
                          {s.provisional && (
                            <span className="shrink-0 rounded bg-muted px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                              Provisional
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.to} to={item.to} className={linkCls(item.to)}>
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <a
              href={site.phoneHref}
              className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-royal transition-colors hover:bg-accent lg:flex"
            >
              <Phone className="size-4" aria-hidden="true" />
              {site.phone}
            </a>
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 rounded-full bg-tmc-red px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-tmc-red/90 sm:px-5"
            >
              <CalendarCheck className="size-4" aria-hidden="true" />
              Book Appointment
            </Link>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="rounded-lg p-2 text-charcoal hover:bg-muted xl:hidden"
            >
              {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="border-b border-border bg-white shadow-lg xl:hidden">
          <nav aria-label="Mobile" className="container-tmc flex flex-col py-3">
            {mainNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm font-medium",
                  isActive(item.to) ? "bg-accent text-royal" : "text-charcoal hover:bg-muted",
                )}
              >
                {item.label}
              </Link>
            ))}
            <details className="group rounded-lg px-3 py-1">
              <summary className="cursor-pointer list-none py-1.5 text-sm font-medium text-charcoal marker:hidden">
                <span className="flex items-center justify-between">
                  Services
                  <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden="true" />
                </span>
              </summary>
              <div className="flex flex-col border-l border-border pl-3">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={s.path}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-2 py-2 text-sm text-charcoal hover:bg-muted hover:text-royal"
                  >
                    {s.navTitle}
                    {s.provisional && <span className="ml-2 text-[10px] text-muted-foreground">(provisional)</span>}
                  </Link>
                ))}
              </div>
            </details>
            <a
              href={site.phoneHref}
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-muted px-3 py-2.5 text-sm font-semibold text-royal"
            >
              <Phone className="size-4" aria-hidden="true" /> Call {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
