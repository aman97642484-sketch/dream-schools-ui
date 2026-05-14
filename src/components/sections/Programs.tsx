import { Reveal } from "../Reveal";
import { ArrowUpRight } from "lucide-react";

const programs = [
  { tag: "Ages 3–5", title: "Pre-Primary", desc: "Play-based learning that builds confidence, language and curiosity through structured exploration.", years: "Nursery · LKG · UKG" },
  { tag: "Ages 6–10", title: "Primary", desc: "Strong foundations in literacy, numeracy and inquiry with thematic projects across subjects.", years: "Grade I – V" },
  { tag: "Ages 11–14", title: "Middle School", desc: "Deeper subject specialisation, critical thinking labs, ethics, sports and leadership programs.", years: "Grade VI – VIII" },
  { tag: "Ages 15–18", title: "Senior Secondary", desc: "Science, Commerce and Humanities streams with career mentoring and competitive prep.", years: "Grade IX – XII · CBSE" },
];

export function Programs() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-edge">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gradient-gold">Academic programs</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">A continuum from <em className="text-gradient-gold not-italic">first steps</em> to graduation.</h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">CBSE-aligned, internationally informed. Every stage is purposefully designed for the developmental needs of the learner.</p>
        </Reveal>

        <Reveal stagger className="mt-14 grid md:grid-cols-2 gap-6">
          {programs.map((p, i) => (
            <a
              key={p.title}
              href="#"
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-card to-secondary/40 p-8 md:p-10 transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="absolute right-6 top-6 text-[120px] font-display font-semibold text-primary/[0.04] leading-none select-none">
                0{i + 1}
              </div>
              <div className="relative">
                <span className="inline-block text-[11px] font-medium uppercase tracking-wider text-gold-foreground bg-gold/15 rounded-full px-3 py-1">
                  {p.tag}
                </span>
                <h3 className="mt-5 font-display text-3xl text-primary">{p.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed max-w-md">{p.desc}</p>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">{p.years}</span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
