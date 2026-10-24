import { Link } from "@tanstack/react-router";
import { CalendarCheck, Phone, Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { easeOut } from "@/lib/motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/doctors", label: "Doctors" },
  { to: "/health-tips", label: "Health tips" },
  { to: "/gallery", label: "Gallery" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-white/15 bg-ink/92 shadow-[0_10px_30px_-24px_rgba(0,0,0,0.9)] backdrop-blur-xl"
          : "border-white/10 bg-ink/80 backdrop-blur-md"
      }`}
    >
      <div
        className={`container-tmc flex items-center justify-between gap-6 transition-[height] duration-300 ${
          scrolled ? "h-[62px]" : "h-[78px]"
        }`}
      >
        <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Trinity Medical Centre home">
          <img src="/images/tmc-mark.svg" alt="" className="h-9 w-9" />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-[1.2rem] font-medium tracking-[-0.01em] text-white">Trinity</span>
            <span className="label-caps mt-1 text-[9px] text-tmc-gold/90">Medical Centre</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden xl:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="group relative py-1 text-[0.84rem] font-medium text-white/75 transition-colors hover:text-white"
              activeProps={{ className: "text-white" }}
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-tmc-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-2 text-[0.82rem] font-medium text-white/70 transition-colors hover:text-tmc-gold"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            {site.phone}
          </a>
          <motion.div whileHover={reduce ? undefined : { scale: 1.03 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 rounded-sm bg-tmc-red px-4 py-2.5 text-[0.82rem] font-semibold text-white shadow-[0_8px_24px_-14px_rgba(179,22,58,0.9)] transition-colors hover:bg-[#9d1333]"
            >
              <CalendarCheck className="size-4" aria-hidden="true" />
              Book appointment
            </Link>
          </motion.div>
        </div>

        <button
          type="button"
          className="rounded-sm p-2 text-white transition-colors hover:bg-white/10 xl:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-nav"
            initial={reduce ? undefined : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: easeOut }}
            className="overflow-hidden border-t border-white/10 bg-ink xl:hidden"
          >
            <nav aria-label="Mobile" className="container-tmc flex flex-col py-4">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={reduce ? undefined : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: reduce ? 0 : i * 0.035, ease: easeOut }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block border-b border-white/8 py-3 text-[0.95rem] text-white/85"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-5 flex flex-col gap-3">
                <a href={site.phoneHref} className="flex items-center gap-2 text-sm text-white/75">
                  <Phone className="size-4" aria-hidden="true" /> {site.phone}
                </a>
                <Link
                  to="/book-appointment"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center gap-2 rounded-sm bg-tmc-red px-4 py-3 text-sm font-semibold text-white"
                >
                  <CalendarCheck className="size-4" aria-hidden="true" /> Book appointment
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
