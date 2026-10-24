import { useEffect, useState } from "react";
import { AdminProfile, getAdmin } from "@/lib/admin-store";
import { motion, useReducedMotion } from "motion/react";
import { easeOut, viewportOnce } from "@/lib/motion";

export function LeadershipProfile() {
  const [admin, setAdmin] = useState<AdminProfile | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    setAdmin(getAdmin());
  }, []);

  if (!admin || !admin.name) return null;

  return (
    <section className="bg-paper py-20 sm:py-24">
      <div className="container-tmc">
        <motion.p
          className="label-caps text-tmc-gold"
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.45, ease: easeOut }}
        >
          Leadership
        </motion.p>

        <div className="mt-10 grid gap-10 border-t border-ink/10 pt-10 md:grid-cols-12 md:gap-14">
          <motion.div
            className="md:col-span-4"
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            {admin.image ? (
              <img
                src={admin.image}
                alt={admin.name}
                className="aspect-[4/5] w-full max-w-[280px] rounded-sm object-cover"
              />
            ) : (
              <div className="flex aspect-[4/5] w-full max-w-[280px] items-center justify-center rounded-sm bg-navy font-heading text-6xl text-tmc-gold">
                {admin.name[0]}
              </div>
            )}
          </motion.div>

          <motion.div
            className="md:col-span-8"
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: easeOut, delay: reduce ? 0 : 0.1 }}
          >
            <h2 className="text-ink">{admin.name}</h2>
            <p className="mt-2 text-sm font-medium text-royal">{admin.role}</p>
            {admin.bio && (
              <p className="mt-5 max-w-[58ch] text-[0.98rem] leading-relaxed text-muted-foreground">{admin.bio}</p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
