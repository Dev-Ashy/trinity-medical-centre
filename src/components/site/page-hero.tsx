import { motion, useReducedMotion } from "motion/react";
import { easeOut } from "@/lib/motion";

type Props = {
  title: string;
  subtitle?: string;
  image?: string;
  imageAlt?: string;
};

/**
 * Inner-page masthead. Deliberately quieter than the home hero: plum ground,
 * a fine gold rule, and a light photographic wash.
 */
export function PageHero({ title, subtitle, image, imageAlt = "" }: Props) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {image && (
        <>
          <img src={image} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-navy/60" />
        </>
      )}
      {!image && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(201,162,39,0.16),transparent_55%)]" />
      )}

      <div className="container-tmc relative z-10 py-16 sm:py-20">
        <motion.h1
          className="max-w-3xl text-balance-tight text-white"
          initial={reduce ? undefined : { opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: easeOut }}
        >
          {title}
        </motion.h1>

        <motion.div
          aria-hidden="true"
          className="mt-6 h-px w-24 origin-left bg-tmc-gold"
          initial={reduce ? undefined : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: easeOut, delay: reduce ? 0 : 0.15 }}
        />

        {subtitle && (
          <motion.p
            className="mt-5 max-w-[58ch] text-[1.02rem] leading-relaxed text-white/75"
            initial={reduce ? undefined : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: reduce ? 0 : 0.25 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
