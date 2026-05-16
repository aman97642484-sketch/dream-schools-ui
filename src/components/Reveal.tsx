import { useEffect, useRef, createElement, type ReactNode, type ElementType } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "article" | "header";
  stagger?: boolean;
}

export function Reveal({ children, delay = 0, y = 32, className, as = "div", stagger }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = stagger ? Array.from(el.children) : el;

    const ctx = gsap.context(() => {
      // If element is already in viewport on mount, play immediately —
      // avoids "invisible forever" when ScrollTrigger misses the start.
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.95 && rect.bottom > 0;

      const anim = gsap.from(targets, {
        y,
        autoAlpha: 0,
        duration: 0.9,
        ease: "power3.out",
        delay,
        stagger: stagger ? 0.08 : 0,
        immediateRender: !inView,
        ...(inView
          ? {}
          : {
              scrollTrigger: { trigger: el, start: "top 90%", once: true },
            }),
      });

      // Safety net: ensure final visible state even if anim is interrupted.
      const safety = window.setTimeout(() => {
        gsap.set(targets, { autoAlpha: 1, y: 0, clearProps: "visibility" });
      }, 2500 + delay * 1000);

      return () => {
        window.clearTimeout(safety);
        anim.scrollTrigger?.kill();
        anim.kill();
      };
    }, el);

    // Refresh ScrollTrigger after layout settles (images, fonts, Lenis init).
    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 200);
    return () => {
      window.clearTimeout(refresh);
      ctx.revert();
    };
  }, [delay, y, stagger]);

  return createElement(as as ElementType, { ref, className }, children);
}
