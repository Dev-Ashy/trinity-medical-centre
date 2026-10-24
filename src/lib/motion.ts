import type { Variants } from "motion/react";

/** Shared easing: confident deceleration, no bounce. */
export const easeOut = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: easeOut } },
};

export const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

export const cascadeItem: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: easeOut },
  },
};

/** Viewport config used everywhere so sections reveal once, slightly early. */
export const viewportOnce = { once: true, margin: "-70px 0px -70px 0px" } as const;
