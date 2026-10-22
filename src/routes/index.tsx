import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarCheck, ArrowRight } from "lucide-react";
import { services } from "@/data/site";
import { Reveal } from "@/components/site/reveal";

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

const facilityImages = [
  { src: "https://images.unsplash.com/photo-1710074213379-2a9c2653046a?auto=format&fit=crop&w=1200&q=80", alt: "Clinical room" },
  { src: "https://images.unsplash.com/photo-1614101062781-09a8dfb90dce?auto=format&fit=crop&w=1200&q=80", alt: "Care setting" },
  { src: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1200&q=80", alt: "Monitoring equipment" },
  { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80", alt: "Hospital corridor" },
  { src: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=1200&q=80", alt: "Care setting" },
  { src: "https://images.pexels.com/photos/6627853/pexels-photo-6627853.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Reception area" },
  { src: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Clinical environment" },
  { src: "https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=1200", alt: "Clinical room" },
];

function Home() {
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
            <h1 className="text-balance-tight text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl animate-[fadeUp_0.8s_ease-out]">
              Accessible. Affordable. Reliable Healthcare
            </h1>
            <p className="mt-4 text-lg text-white/90 animate-[fadeUp_0.8s_0.15s_ease-out_both]">
              Compassionate, gold-standard care for every patient and family.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 animate-[fadeUp_0.8s_0.3s_ease-out_both]">
              <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-tmc-red px-6 py-3 text-sm font-semibold text-white shadow-lg hover:scale-[1.03] hover:brightness-110 transition">
                <CalendarCheck className="size-4" /> Book an Appointment <ArrowRight className="size-4" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
                Our Services
              </Link>
            </div>
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
            <div className="rounded-2xl border border-royal/20 bg-navy p-6 text-white">
              <h3 className="font-heading text-xl font-semibold">Quick Appointment</h3>
              <p className="mt-2 text-sm text-white/70">Online requests are not confirmed until the clinic responds.</p>
              <Link to="/book" className="mt-4 inline-flex items-center gap-2 rounded-full bg-tmc-red px-4 py-2 text-sm font-semibold text-white hover:brightness-110 transition">
                <CalendarCheck className="size-4" /> Book Now <ArrowRight className="size-4" />
              </Link>
            </div>
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
              <Reveal key={s.slug} delay={i * 90}>
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
        <section className="bg-[#f0f3fb] py-16">
          <div className="container-tmc">
            <h2 className="font-heading text-2xl font-bold text-navy">Facility & Experience</h2>
            <p className="mt-3 max-w-[65ch] text-charcoal/80">
              Our centre is designed for comfort and privacy. The images below are illustrative clinical environments, not photographs of TMC premises.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {facilityImages.map((img, i) => (
                <figure key={i} className="overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <img src={img.src} alt={img.alt} width={1200} height={800} loading="lazy" className="h-44 w-full object-cover transition-transform duration-500 hover:scale-105" />
                  <figcaption className="p-3 text-xs text-muted-foreground">{img.alt}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
