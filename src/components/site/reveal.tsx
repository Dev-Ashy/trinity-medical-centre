import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { easeOut } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Milliseconds. Prefer <Section>/stagger for groups; this is for single blocks. */
  delay?: number;
  /** Offset from the viewport edge before the reveal fires. */
  margin?: string;
};

export function Reveal({ children, className = "", delay = 0, margin = "-70px" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: margin as never });
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{ duration: 0.6, ease: easeOut, delay: delay / 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
