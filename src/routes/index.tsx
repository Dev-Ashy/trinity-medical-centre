import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, ArrowRight } from "lucide-react";
import { services } from "@/data/site";
import { Reveal } from "@/components/site/reveal";
import { motion, useReducedMotion } from "framer-motion";
import { facilityImages } from "@/data/images";
import { useEffect, useState } from "react";
import { EmployeeOfMonthSection } from "@/components/admin/employee-of-month";
import { LeadershipProfile } from "@/components/admin/leadership-profile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Trinity Medical Centre – Home | Accessible Affordable Reliable Healthcare" },
      { name: "description", content: "Welcome to Trinity Medical Centre. Quality care with outpatient, laboratory, eye care, women's health, paediatrics and more." },
    ],
  }),
  component: Home,
});

const heroImages = ["/images/slide1.jpg", "/images/slide2.jpg", "/images/slide3.jpg", "/images/slide4.jpg"];

function Home() {
  const shouldReduceMotion = useReducedMotion();
  const heroLines = ["Accessible. Affordable. Reliable Healthcare"];
  const [galleryImgs, setGalleryImgs] = useState(facilityImages);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("tmc_gallery");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.length > 0) {
          const merged = [...parsed.map((p: any) => ({ src: p.src, alt: p.caption, caption: p.caption })), ...facilityImages];
          setGalleryImgs(merged.slice(0, 8));
        }
      }
    } catch {}
  }, []);

  return (
    <div>
      <section className="relative h-[70vh] min-h-[520px] overflow-hidden bg-navy">
        <div className="absolute inset-0">
          {heroImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-0 animate-[slideshow_20s_infinite]"
              style={{ animationDelay: `${i * 5}s` }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/55 to-navy/75" />
        </div>
        <div className="container-tmc relative z-10 flex h-full items-center">
          <div className="max-w-2xl">
            <h1 className="text-balance-tight text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              {shouldReduceMotion ? (
                heroLines[0]
              ) : (
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="block"
                >
                  {heroLines[0]}
                </motion.span>
              )}
            </h1>
            <motion.p
              className="mt-4 text-lg text-white/90"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.15 }}
            >
              Compassionate, gold-standard care for every patient and family.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.3 }}
            >
              <Link to="/book-appointment" className="inline-flex items-center gap-2 rounded-full bg-tmc-red px-6 py-3 text-sm font-semibold text-white shadow-lg hover:scale-[1.03] hover:brightness-110 transition">
                <CalendarCheck className="size-4" /> Book an Appointment <ArrowRight className="size-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
                Our Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="bg-[#f0f3fb] py-14">
          <div className="container-tmc grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl font-bold text-navy">Welcome to Trinity Medical Centre</h2>
              <p className="mt-4 max-w-[65ch] text-charcoal/80">
                At TMC we combine clinical excellence with warmth and respect. Our multidisciplinary team provides first-contact care, diagnostics, and specialist support under one roof — with clear communication and dignified treatment for every patient.
              </p>
            </div>
            <motion.div
              className="rounded-2xl border border-royal/20 bg-navy p-6 text-white"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 30 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h3 className="font-heading text-xl font-semibold">Quick Appointment</h3>
              <p className="mt-2 text-sm text-white/70">Online requests are not confirmed until the clinic responds.</p>
              <Link to="/book-appointment" className="mt-4 inline-flex items-center gap-2 rounded-full bg-tmc-red px-4 py-2 text-sm font-semibold text-white hover:brightness-110 transition">
                <CalendarCheck className="size-4" /> Book Now <ArrowRight className="size-4" />
              </Link>
            </motion.div>
          </div>
        </section>
      </Reveal>

      <section className="bg-[#e8eefc] py-16">
        <div className="container-tmc">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-heading text-2xl font-bold text-navy">Our Core Services</h2>
              <Link to="/services" className="text-sm font-medium text-royal hover:underline">View all services →</Link>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.slug} delay={i * 100}>
                <Link
                  to={s.path}
                  className={`group block rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl ${
                    i % 3 === 0 ? "bg-navy text-white border-navy" :
                    i % 3 === 1 ? "bg-royal text-white border-royal" :
                    "bg-tmc-gold text-navy border-tmc-gold"
                  }`}
                >
                  <h3 className="font-semibold group-hover:underline">{s.navTitle}</h3>
                  <p className={`mt-2 text-sm line-clamp-3 ${i % 3 === 2 ? "text-navy/80" : "text-white/80"}`}>{s.short}</p>
                  {s.provisional && <span className="mt-3 inline-block rounded bg-white/20 px-2 py-0.5 text-[10px] font-semibold uppercase">Provisional</span>}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Reveal>
        <section className="bg-[#faf7e6] py-16">
          <div className="container-tmc grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy">Why Choose Trinity Medical Centre</h2>
              <p className="mt-4 max-w-[55ch] text-charcoal/80">
                A patient-centred approach focused on dignity, clarity, and access to quality care.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-navy/90">
                <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-tmc-gold"></span><span>Compassionate care delivered with respect</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-tmc-gold"></span><span>Accessible consultations and diagnostics</span></li>
                <li className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-tmc-gold"></span><span>Clear communication and patient education</span></li>
              </ul>
            </div>
            <div className="rounded-2xl border border-tmc-gold/30 bg-white p-6 shadow-sm">
              <h3 className="font-heading text-xl font-semibold text-navy">Quality Without Compromise</h3>
              <p className="mt-2 text-sm text-charcoal/80">We focus on practical, evidence-based care with attention to every detail.</p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="bg-[#f0f3fb] py-16">
          <div className="container-tmc">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="font-heading text-2xl font-bold text-navy">Facility & Experience</h2>
                <p className="mt-2 text-charcoal/80">Illustrative clinical environments and equipment.</p>
              </div>
              <Link to="/gallery" className="text-sm font-medium text-royal hover:underline">View full gallery →</Link>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {galleryImgs.map((img: any, i) => (
                <Reveal key={i} delay={i * 80}>
                  <figure className="overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="overflow-hidden">
                      <img src={img.src} alt={img.alt || img.caption} width={1200} height={800} loading="lazy" className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105" />
                    </div>
                    <figcaption className="p-3 text-xs text-muted-foreground">{img.caption || img.alt}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
      <LeadershipProfile />
      <EmployeeOfMonthSection />
    </div>
  );
}
