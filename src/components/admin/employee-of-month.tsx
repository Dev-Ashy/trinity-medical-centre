import { useEffect, useState } from "react";
import { EmployeeOfMonth, getEmployees } from "@/lib/admin-store";
import { motion, useReducedMotion } from "framer-motion";

export function EmployeeOfMonthSection() {
  const [items, setItems] = useState<EmployeeOfMonth[]>([]);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setItems(getEmployees());
  }, []);

  if (items.length === 0) return null;

  return (
    <section className="bg-white py-16">
      <div className="container-tmc">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
          whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="font-heading text-2xl font-bold text-navy">Employee of the Month</h2>
          <p className="mt-2 text-muted-foreground">Celebrating our dedicated team members</p>
        </motion.div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.id}
              className="rounded-2xl border border-tmc-gold/40 bg-white p-6 shadow-sm text-center"
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 40 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
            >
              {it.image ? (
                <img src={it.image} alt={it.name} className="mx-auto h-28 w-28 rounded-full object-cover" />
              ) : (
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-navy text-white text-xl font-bold">{it.name[0]}</div>
              )}
              <h3 className="mt-4 text-lg font-semibold text-navy">{it.name}</h3>
              <p className="text-sm text-royal">{it.role}</p>
              {it.month && <p className="mt-1 text-xs uppercase tracking-wider text-tmc-gold">{it.month}</p>}
              {it.bio && <p className="mt-3 text-sm text-muted-foreground">{it.bio}</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
