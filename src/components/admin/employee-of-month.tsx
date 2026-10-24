import { useEffect, useState } from "react";
import { EmployeeOfMonth, getEmployees } from "@/lib/admin-store";
import { motion, useReducedMotion } from "motion/react";
import { cascadeItem, easeOut, staggerParent, viewportOnce } from "@/lib/motion";

export function EmployeeOfMonthSection() {
  const [items, setItems] = useState<EmployeeOfMonth[]>([]);
  const reduce = useReducedMotion();

  useEffect(() => {
    setItems(getEmployees());
  }, []);

  if (items.length === 0) return null;

  return (
    <section className="bg-mist py-20 sm:py-24">
      <div className="container-tmc">
        <motion.p
          className="label-caps text-tmc-gold"
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.45, ease: easeOut }}
        >
          Recognition
        </motion.p>

        <motion.h2
          className="mt-3 text-ink"
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          Employee of the month
        </motion.h2>

        <p className="mt-4 max-w-[54ch] text-[0.95rem] leading-relaxed text-muted-foreground">
          Recognising the people who make the care possible.
        </p>

        <motion.div
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerParent}
          initial={reduce ? undefined : "hidden"}
          whileInView="show"
          viewport={viewportOnce}
        >
          {items.map((it) => (
            <motion.article
              key={it.id}
              variants={cascadeItem}
              className="rounded-sm border border-line bg-white p-6"
            >
              <div className="flex items-center gap-4">
                {it.image ? (
                  <img src={it.image} alt={it.name} className="h-16 w-16 rounded-full object-cover" />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy font-heading text-2xl text-tmc-gold">
                    {it.name[0]}
                  </div>
                )}
                <div>
                  <h3 className="font-heading text-[1.15rem] font-medium text-ink">{it.name}</h3>
                  <p className="text-sm text-royal">{it.role}</p>
                  {it.month && <p className="label-caps mt-1 text-[9px] text-ink/45">{it.month}</p>}
                </div>
              </div>
              {it.bio && (
                <p className="mt-5 border-t border-ink/10 pt-4 text-[0.9rem] leading-relaxed text-muted-foreground">
                  {it.bio}
                </p>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
