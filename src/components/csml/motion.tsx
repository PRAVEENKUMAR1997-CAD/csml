"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

const easeOut = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function Reveal({ children, className, delay = 0, y = 28 }: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}

type MotionArticleProps = HTMLMotionProps<"article"> & { children: ReactNode };

export function MotionCard({ children, className, ...rest }: MotionArticleProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <article className={className} {...(rest as React.ComponentProps<"article">)}>
        {children}
      </article>
    );
  }

  return (
    <motion.article
      className={className}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      {...rest}
    >
      {children}
    </motion.article>
  );
}
