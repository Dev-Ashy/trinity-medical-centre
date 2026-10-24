import { motion, useReducedMotion } from "motion/react";
import { easeOut, viewportOnce } from "@/lib/motion";

type Props = {
  title: string;
  description?: string;
  /** Short institutional label. Use sparingly, not above every heading. */
  label?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

export function SectionHeading({
  title,
  description,
  label,
  align = "left",
  tone = "dark",
  className = "",
}: Props) {
  const reduce = useReducedMotion();
  const centered = align === "center";

  return (
    <div className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      {label && (
        <motion.p
          className={`label-caps ${tone === "dark" ? "text-tmc-gold" : "text-tmc-gold"}`}
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.45, ease: easeOut }}
        >
          {label}
        </motion.p>
      )}

      <motion.h2
        className={`mt-3 ${tone === "dark" ? "text-ink" : "text-white"}`}
        initial={reduce ? undefined : { opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewportOnce}
        transition={{ duration: 0.6, ease: easeOut, delay: reduce ? 0 : 0.05 }}
      >
        {title}
      </motion.h2>

      <motion.div
        aria-hidden="true"
        className={`mt-5 h-px w-20 bg-tmc-gold ${centered ? "mx-auto" : ""}`}
        style={{ transformOrigin: centered ? "center" : "left" }}
        initial={reduce ? undefined : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.7, ease: easeOut, delay: reduce ? 0 : 0.15 }}
      />

      {description && (
        <motion.p
          className={`mt-5 text-[0.98rem] leading-relaxed ${tone === "dark" ? "text-muted-foreground" : "text-white/70"}`}
          initial={reduce ? undefined : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.55, ease: easeOut, delay: reduce ? 0 : 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
