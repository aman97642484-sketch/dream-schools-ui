import { Reveal } from "../Reveal";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Download } from "lucide-react";

const steps = [
  { n: "01", t: "Online Inquiry", d: "Submit a brief inquiry form to register your interest." },
  { n: "02", t: "Campus Visit", d: "Tour the campus and meet our admissions team." },
  { n: "03", t: "Application", d: "Complete the formal application with required documents." },
  { n: "04", t: "Interaction", d: "An age-appropriate interaction with the child & parents." },
  { n: "05", t: "Confirmation", d: "Offer letter, fee payment and onboarding support." },
];

export function Admission() {
  return (
    <section className="py-28 md:py-36 bg-secondary/40">
      <div className="container-edge">
        <Reveal className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gradient-gold">Admission process</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">Five simple steps to <em className="text-gradient-gold not-italic">join us.</em></h2>
        </Reveal>

        <Reveal stagger className="mt-14 grid md:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative rounded-2xl bg-card border border-border/60 p-6 hover:shadow-elegant transition-shadow">
              <div className="font-display text-3xl text-gradient-gold">{s.n}</div>
              <h3 className="mt-3 font-display text-lg text-primary">{s.t}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.d}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary/30" />
              )}
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-12 flex flex-wrap items-center justify-between gap-6 rounded-3xl bg-primary text-primary-foreground p-8 md:p-10 shadow-elegant relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
          <div className="relative max-w-xl">
            <h3 className="font-display text-3xl">Admissions for 2026–27 are now open.</h3>
            <p className="mt-2 text-primary-foreground/75">Limited seats across grades. Book your campus visit today.</p>
          </div>
          <div className="relative flex flex-wrap gap-3">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-semibold text-gold-foreground shadow-gold hover:-translate-y-0.5 transition-transform">
              <Download className="h-4 w-4" /> Download Brochure
            </a>
            <Link to="/admissions" className="inline-flex items-center gap-2 rounded-full glass-dark px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-white/10 transition-colors">
              Inquire Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
