import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, ArrowRight, ArrowUpRight, Pause, Play } from "lucide-react";
import { services } from "@/data/site";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { motion, useReducedMotion } from "motion/react";
import { facilityImages, tmcPhotos } from "@/data/images";
import { useEffect, useRef, useState } from "react";
import { EmployeeOfMonthSection } from "@/components/admin/employee-of-month";
import { LeadershipProfile } from "@/components/admin/leadership-profile";
import { getGalleryItems } from "@/lib/gallery-store";
import { cascadeItem, easeOut, staggerParent, viewportOnce } from "@/lib/motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trinity Medical Centre – Accessible, affordable, reliable healthcare" },
      {
        name: "description",
        content:
          "Trinity Medical Centre provides outpatient care, diagnostics, eye care, women's health and paediatrics for families in our community.",
      },
    ],
  }),
  component: Home,
});

const headline = ["Care that is", "accessible, affordable", "and reliable."];

const points = [
  {
    title: "One team, one roof",
    body: "First-contact consultations, diagnostics and specialist support coordinated in a single visit.",
  },
  {
    title: "Clear, unhurried conversation",
    body: "We explain what we found, what happens next, and what it costs before anything proceeds.",
  },
  {
    title: "Care that respects dignity",
    body: "Private consultation spaces, confidential records and a team that listens without judgement.",
  },
];

function Home() {
  const reduce = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const [galleryImgs, setGalleryImgs] = useState<any[]>(facilityImages.slice(0, 8));
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Deterministic hero images (first 8 facility images) - no random for SSR hydration
  const heroImgs = useRef(
    facilityImages.slice(0, 8).map((img) => img.src)
  ).current;

  // Auto-advance slideshow
  useEffect(() => {
    if (reduce || isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImgs.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [reduce, isPaused, heroImgs.length]);

  // Keyboard navigation for slideshow
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setCurrentSlide((prev) => (prev - 1 + heroImgs.length) % heroImgs.length);
        setIsPaused(true);
      } else if (e.key === "ArrowRight") {
        setCurrentSlide((prev) => (prev + 1) % heroImgs.length);
        setIsPaused(true);
      } else if (e.key === " " || e.key === "Space") {
        e.preventDefault();
        setIsPaused((p) => !p);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [heroImgs.length]);

  useEffect(() => {
    const items = getGalleryItems();
    const homepage = items.filter((i) => i.section === "homepage");
    if (homepage.length > 0) {
      setGalleryImgs([
        ...homepage.map((i) => ({ src: i.src, alt: i.caption, caption: i.caption })),
        ...facilityImages.slice(0, Math.max(0, 8 - homepage.length)),
      ]);
    }
  }, []);

  return (
    <div>
      {/* ── Hero with automatic slideshow ──────────────────────────── */}
      <section
        ref={heroRef}
        className="relative isolate min-h-[90vh] overflow-hidden bg-ink"
        aria-roledescription="slideshow"
        aria-label="Trinity Medical Centre facility photos"
      >
        {/* Slideshow background */}
        <div className="absolute inset-0" aria-hidden="true">
          {heroImgs.map((src, i) => (
            <motion.img
              key={src}
              src={src}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              initial={false}
              animate={{
                opacity: i === currentSlide ? 1 : 0,
                scale: i === currentSlide ? 1 : 1.02,
              }}
              transition={{
                duration: 1.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{ willChange: "opacity, transform" }}
            />
          ))}
          {/* Strong scrim for text readability - never raw text on image */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(201,162,39,0.08),transparent_60%)]" />
        </div>

        {/* Content */}
        <div className="container-tmc relative z-10 flex min-h-[90vh] flex-col justify-center py-24">
          <motion.p
            className="label-caps text-tmc-gold"
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            Trinity Medical Centre
          </motion.p>

          <h1 className="mt-6 max-w-[16ch] text-[2.8rem] leading-[1.02] text-white sm:text-[4rem] lg:text-[5rem]">
            {headline.map((line, li) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={reduce ? undefined : { y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: reduce ? 0 : 0.1 + li * 0.12 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="mt-7 max-w-[52ch] text-[1.05rem] leading-relaxed text-white/85"
            initial={reduce ? undefined : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: reduce ? 0 : 0.55 }}
          >
            Outpatient care, diagnostics, eye care, women's health and paediatrics — delivered with
            attention, in plain language.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: reduce ? 0 : 0.68 }}
          >
            <motion.div whileHover={reduce ? undefined : { scale: 1.02 }} whileTap={reduce ? undefined : { scale: 0.98 }}>
              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2 rounded-sm bg-tmc-red px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-20px_rgba(179,22,58,1)]"
              >
                <CalendarCheck className="size-4" aria-hidden="true" />
                Book an appointment
              </Link>
            </motion.div>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 rounded-sm border border-white/30 px-7 py-3.5 text-sm font-medium text-white transition-colors hover:border-tmc-gold hover:text-tmc-gold"
            >
              Explore our services
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        {/* Slideshow controls */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 md:flex-row md:gap-6">
          {/* Slide indicators */}
          <div className="flex items-center gap-2" role="tablist" aria-label="Slide navigation">
            {heroImgs.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === currentSlide}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => { setCurrentSlide(i); setIsPaused(true); }}
                className={`relative h-2 w-px rounded-full transition-all duration-500 ${
                  i === currentSlide
                    ? "bg-tmc-gold w-8"
                    : "bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Pause/Play toggle */}
          <button
            type="button"
            onClick={() => setIsPaused((p) => !p)}
            aria-label={isPaused ? "Resume slideshow" : "Pause slideshow"}
            aria-pressed={isPaused}
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/30 bg-ink/80 text-white backdrop-blur-sm transition-colors hover:bg-ink hover:border-tmc-gold/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tmc-gold"
          >
            {isPaused ? <Play className="size-5" aria-hidden="true" /> : <Pause className="size-5" aria-hidden="true" />}
          </button>
        </div>

        {/* Scroll indicator */}
        <motion.div
          aria-hidden="true"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
          initial={reduce ? undefined : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <span className="label-caps text-[9px] text-white/40">Scroll</span>
          <motion.span
            className="block h-8 w-px bg-gradient-to-b from-tmc-gold/80 to-transparent"
            animate={reduce ? undefined : { scaleY: [0.35, 1, 0.35] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </motion.div>
      </section>

      {/* ── Service ticker ─────────────────────────────────────── */}
      <div className="overflow-hidden border-y border-ink/10 bg-paper py-3.5">
        <div className="flex w-max animate-[ticker_38s_linear_infinite] items-center gap-10 whitespace-nowrap">
          {[0, 1].map((pass) => (
            <div key={pass} className="flex items-center gap-10" aria-hidden={pass === 1}>
              {services.map((s) => (
                <span key={s.slug} className="flex items-center gap-10 text-[0.8rem] font-medium text-ink/55">
                  {s.navTitle}
                  <span className="h-1 w-1 rounded-full bg-tmc-gold" aria-hidden="true" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Introduction ───────────────────────────────────────── */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="container-tmc grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              title="A clinic built around the person in front of us."
              description="Trinity Medical Centre brings first-contact care, diagnostics and specialist support together, so families in our community can be seen, understood and treated without being sent from place to place."
            />
          </div>

          <div className="lg:col-span-5 lg:pt-4">
            <motion.div
              className="border-l border-tmc-gold/40 pl-6"
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease: easeOut, delay: reduce ? 0 : 0.1 }}
            >
              <p className="font-heading text-[1.35rem] leading-snug text-ink/85">
                "Accessible, affordable and reliable" is not a slogan we print and forget. It is the
                standard every consultation is measured against.
              </p>
              <Link
                to="/about"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink underline-offset-4 hover:underline"
              >
                Read about the centre
                <ArrowUpRight
                  className="size-4 text-tmc-gold transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Services on ink ────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-ink py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(201,162,39,0.12),transparent_45%)]"
        />
        <div className="container-tmc relative">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              tone="light"
              title="Services, without the runaround."
              description="Nine clinical services under one roof. Availability is confirmed by the clinic before your visit."
            />
            <Link
              to="/services"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-tmc-gold"
            >
              All services
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <motion.div
            className="mt-12 grid gap-px overflow-hidden rounded-sm border border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-3"
            variants={staggerParent}
            initial={reduce ? undefined : "hidden"}
            whileInView="show"
            viewport={viewportOnce}
          >
            {services.slice(0, 6).map((s) => (
              <motion.div key={s.slug} variants={cascadeItem}>
                <Link
                  to={s.path}
                  className="group relative flex h-full flex-col justify-between gap-8 bg-ink p-6 transition-colors duration-300 hover:bg-navy"
                >
                  <div>
                    <h3 className="font-heading text-[1.35rem] font-medium text-white">{s.navTitle}</h3>
                    <p className="mt-3 text-[0.9rem] leading-relaxed text-white/60">{s.short}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="label-caps text-[9px] text-tmc-gold/80">
                      {s.provisional ? "Provisional" : "Available"}
                    </span>
                    <ArrowUpRight
                      className="size-4 text-white/40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-tmc-gold"
                      aria-hidden="true"
                    />
                  </div>
                  <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-tmc-gold transition-transform duration-500 group-hover:scale-x-100" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Why Trinity ────────────────────────────────────────── */}
      <section className="bg-paper py-20 sm:py-24">
        <div className="container-tmc grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading title="What you can expect, every visit." />
            <motion.ul
              className="mt-10 divide-y divide-ink/10 border-t border-ink/10"
              variants={staggerParent}
              initial={reduce ? undefined : "hidden"}
              whileInView="show"
              viewport={viewportOnce}
            >
              {points.map((p) => (
                <motion.li key={p.title} variants={cascadeItem} className="py-6">
                  <h3 className="text-[1.05rem] font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 max-w-[46ch] text-[0.92rem] leading-relaxed text-muted-foreground">{p.body}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div className="lg:col-span-7">
            <motion.div
              className="relative"
              variants={staggerParent}
              initial={reduce ? undefined : "hidden"}
              whileInView="show"
              viewport={viewportOnce}
            >
              <motion.figure variants={cascadeItem} className="overflow-hidden rounded-sm">
                <img
                  src={facilityImages[0].src}
                  alt={facilityImages[0].alt}
                  className="h-[290px] w-full object-cover sm:h-[380px]"
                  loading="lazy"
                />
              </motion.figure>
              <motion.div
                variants={cascadeItem}
                className="mt-4 grid grid-cols-2 gap-4"
              >
                <figure className="overflow-hidden rounded-sm">
                  <img
                    src={facilityImages[2].src}
                    alt={facilityImages[2].alt}
                    className="h-40 w-full object-cover"
                    loading="lazy"
                  />
                </figure>
                <figure className="overflow-hidden rounded-sm">
                  <img
                    src={facilityImages[3].src}
                    alt={facilityImages[3].alt}
                    className="h-40 w-full object-cover"
                    loading="lazy"
                  />
                </figure>
              </motion.div>
              <motion.div
                variants={cascadeItem}
                className="absolute -bottom-6 left-6 max-w-[260px] border border-tmc-gold/40 bg-paper px-5 py-4 shadow-[0_20px_45px_-30px_rgba(21,17,31,0.5)] sm:left-10"
              >
                <p className="font-heading text-[1.05rem] leading-snug text-ink">
                  A look inside Trinity Medical Centre.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Facility grid — all 30 unique images ─────────────────── */}
      <section className="bg-mist py-20 sm:py-24">
        <div className="container-tmc">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              title="Inside Trinity Medical Centre."
              description="A closer look at the rooms and spaces where our team welcomes and cares for patients."
            />
            <Link
              to="/gallery"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              Full gallery
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <motion.div
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            variants={staggerParent}
            initial={reduce ? undefined : "hidden"}
            whileInView="show"
            viewport={viewportOnce}
          >
            {/* Use ALL 30 facility images, no repetition */}
            {facilityImages.map((img, i) => (
              <motion.figure key={img.src} variants={cascadeItem} className="group">
                <div className="overflow-hidden rounded-sm bg-ink/5 aspect-[4/3]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <figcaption className="mt-3 flex items-center gap-2 text-[0.72rem] text-ink/55">
                  <span className="h-px w-4 bg-tmc-gold" aria-hidden="true" />
                  {img.caption}
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
      </section>

      <LeadershipProfile />
      <EmployeeOfMonthSection />

      {/* ── Closing CTA ────────────────────────────────────────── */}
      <Reveal>
        <section className="relative overflow-hidden bg-navy py-16 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(201,162,39,0.18),transparent_50%)]"
          />
          <div className="container-tmc relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="max-w-[20ch] text-white">Ready when you are.</h2>
              <p className="mt-3 max-w-[46ch] text-[0.95rem] text-white/65">
                Request an appointment online. The clinic confirms every request before your visit.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2 rounded-sm bg-tmc-red px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_-20px_rgba(179,22,58,1)] transition-transform hover:scale-[1.02]"
              >
                <CalendarCheck className="size-4" aria-hidden="true" /> Book an appointment
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-sm border border-white/30 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:border-tmc-gold hover:text-tmc-gold"
              >
                Contact the clinic
              </Link>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}