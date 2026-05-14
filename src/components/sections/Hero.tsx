import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ArrowRight, GraduationCap } from "lucide-react";
import heroImg from "@/assets/hero-campus.jpg";

export function Hero() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-eyebrow", { y: 24, opacity: 0, duration: 0.8, delay: 0.2 })
        .from(".hero-line", { y: 60, opacity: 0, duration: 1, stagger: 0.12 }, "-=0.4")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.8 }, "-=0.5")
        .from(".hero-cta", { y: 16, opacity: 0, duration: 0.6, stagger: 0.1 }, "-=0.4")
        .from(".hero-meta", { y: 16, opacity: 0, duration: 0.6, stagger: 0.08 }, "-=0.4")
        .from(".hero-img", { scale: 1.1, opacity: 0, duration: 1.4, ease: "power2.out" }, "-=1.2")
        .from(".hero-blob", { scale: 0, opacity: 0, duration: 1.2, stagger: 0.15, ease: "back.out(1.4)" }, "-=1.2");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative min-h-[100svh] overflow-hidden bg-hero text-primary-foreground">
      {/* Decorative blobs */}
      <div className="hero-blob absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      <div className="hero-blob absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-white/10 blur-3xl" />
      <div className="hero-blob absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-gold/15 blur-3xl" />

      {/* Grain pattern */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />

      <div className="container-edge relative pt-40 pb-24 lg:pt-48 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 z-10">
          <div className="hero-eyebrow inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs font-medium tracking-wider uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Admissions Open · 2026–27
          </div>
          <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl leading-[1.02] font-semibold">
            <span className="hero-line block">Where curious</span>
            <span className="hero-line block">
              minds become <span className="text-gradient-gold italic">leaders</span>
            </span>
          </h1>
          <p className="hero-sub mt-7 max-w-xl text-base md:text-lg text-primary-foreground/75 leading-relaxed">
            A CBSE co-educational institution shaping confident, compassionate
            global citizens through rigorous academics, vibrant culture, and
            modern facilities.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/admissions"
              className="hero-cta group inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold transition-all hover:-translate-y-0.5"
            >
              Begin Admission
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/about"
              className="hero-cta inline-flex items-center gap-2 rounded-full glass-dark px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-white/10 transition-colors"
            >
              <GraduationCap className="h-4 w-4" />
              Discover the School
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-3 max-w-md gap-6">
            {[
              { v: "25+", l: "Years legacy" },
              { v: "98%", l: "Board results" },
              { v: "A+", l: "CBSE rated" },
            ].map((s) => (
              <div key={s.l} className="hero-meta">
                <div className="font-display text-2xl text-gold">{s.v}</div>
                <div className="text-[11px] uppercase tracking-wider text-white/60 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="hero-img relative aspect-[4/5] md:aspect-[5/6] rounded-3xl overflow-hidden shadow-elegant ring-1 ring-white/10">
            <img
              src={heroImg}
              alt="Dream Public School campus"
              className="absolute inset-0 h-full w-full object-cover"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 glass-dark rounded-2xl p-4 flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-gold-gradient flex items-center justify-center shrink-0">
                <GraduationCap className="h-6 w-6 text-gold-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-white/60">Now welcoming</div>
                <div className="font-medium">Nursery to Grade XII · 2026–27</div>
              </div>
            </div>
          </div>
          <div className="hero-img absolute -bottom-6 -left-6 hidden md:block glass rounded-2xl p-4 shadow-elegant text-foreground">
            <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Accreditation</div>
            <div className="font-display text-lg text-primary">CBSE · ISO 9001</div>
          </div>
        </div>
      </div>
    </section>
  );
}
