import { Link } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";

export function PageHeader({ eyebrow, title, subtitle, children }: { eyebrow: string; title: ReactNode; subtitle?: string; children?: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".ph-eyebrow", { y: 16, opacity: 0, duration: 0.6, delay: 0.1 })
        .from(".ph-title", { y: 40, opacity: 0, duration: 0.9 }, "-=0.3")
        .from(".ph-sub", { y: 20, opacity: 0, duration: 0.7 }, "-=0.4");
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="relative bg-hero text-primary-foreground overflow-hidden pt-40 pb-24 md:pt-48 md:pb-28">
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
      <div className="container-edge relative max-w-4xl">
        <div className="ph-eyebrow inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.18em]">
          <span className="h-1.5 w-1.5 rounded-full bg-gold" /> {eyebrow}
        </div>
        <h1 className="ph-title mt-6 font-display text-5xl md:text-7xl leading-[1.05]">{title}</h1>
        {subtitle && <p className="ph-sub mt-6 max-w-2xl text-base md:text-lg text-primary-foreground/75 leading-relaxed">{subtitle}</p>}
        {children && <div className="ph-sub mt-8">{children}</div>}
        <nav aria-label="Breadcrumb" className="ph-sub mt-10 text-xs uppercase tracking-wider text-white/50">
          <Link to="/" className="hover:text-gold">Home</Link> <span className="mx-2 text-white/30">/</span> <span className="text-white">{eyebrow}</span>
        </nav>
      </div>
    </section>
  );
}
