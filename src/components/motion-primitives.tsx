"use client";

import {
  type MouseEvent,
  type ReactNode,
  useCallback,
  useRef,
  useState,
} from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { cn } from "@/lib/utils";

export const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  className,
  delay = 0,
  when = "view",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  when?: "view" | "mount";
}) {
  const reduce = useReducedMotion();
  const hidden = reduce
    ? { opacity: 1, y: 0, filter: "blur(0px)" }
    : { opacity: 0, y: 28, filter: "blur(8px)" };
  const visible = { opacity: 1, y: 0, filter: "blur(0px)" };
  const transition = {
    duration: reduce ? 0 : 0.75,
    delay: reduce ? 0 : delay,
    ease,
  };

  if (when === "mount") {
    return (
      <motion.div
        className={className}
        initial={hidden}
        animate={visible}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -6% 0px" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -6% 0px" }}
      variants={{
        hidden: {},
        show: {
          transition: reduce
            ? { staggerChildren: 0, delayChildren: 0 }
            : { staggerChildren: 0.1, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduce
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 26, filter: "blur(6px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: reduce ? 0 : 0.65, ease },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerWords({
  text,
  as: Tag = "h1",
  className,
}: {
  text: string;
  as?: "h1" | "h2" | "p";
  className?: string;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  return (
    <Tag className={cn("flex flex-wrap gap-x-[0.28em]", className)}>
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: reduce ? 0 : 0.55,
            delay: reduce ? 0 : 0.06 + index * 0.045,
            ease,
          }}
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  );
}

export function Magnetic({
  children,
  className,
  strength = 10,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });
  const [fine, setFine] = useState(false);

  const onEnter = useCallback(() => {
    setFine(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  const onMove = useCallback(
    (event: MouseEvent<HTMLDivElement>) => {
      if (reduce || !fine || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      x.set((dx / rect.width) * strength);
      y.set((dy / rect.height) * strength);
    },
    [fine, reduce, strength, x, y]
  );

  const onLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      className={cn("inline-flex max-w-full", className)}
      style={{ x: springX, y: springY }}
      whileHover={reduce ? undefined : { scale: 1.03 }}
      transition={{ type: "spring", stiffness: 320, damping: 20 }}
      onMouseEnter={onEnter}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.div>
  );
}
