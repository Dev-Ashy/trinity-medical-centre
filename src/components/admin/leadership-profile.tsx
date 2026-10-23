import { useEffect, useState } from "react";
import { AdminProfile, getAdmin } from "@/lib/admin-store";
import { motion, useReducedMotion } from "framer-motion";

export function LeadershipProfile() {
  const [admin, setAdmin] = useState<AdminProfile | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setAdmin(getAdmin());
  }, []);

  if (!admin || !admin.name) return null;

  return (
    <section className="bg-[#faf7e6] py-16">
      <div className="container-tmc">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-heading text-2xl font-bold text-navy">Leadership</h2>
          <p className="mt-2 text-muted-foreground">Meet our leadership team</p>
        </motion.div>
        <motion.div
          className="mt-8 flex flex-col items-center gap-6 rounded-2xl border border-tmc-gold/40 bg-white p-8 text-center shadow-sm sm:flex-row sm:text-left"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          {admin.image ? (
            <img src={admin.image} alt={admin.name} className="h-32 w-32 rounded-full object-cover" />
          ) : (
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-navy text-white text-3xl font-bold">{admin.name[0]}</div>
          )}
          <div>
            <h3 className="text-xl font-semibold text-navy">{admin.name}</h3>
            <p className="text-royal">{admin.role}</p>
            {admin.bio && <p className="mt-3 max-w-[60ch] text-muted-foreground">{admin.bio}</p>}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
