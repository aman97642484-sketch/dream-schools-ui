import { Reveal } from "../Reveal";
import { Award, Medal, Star, Trophy } from "lucide-react";
import achievement from "@/assets/achievement.jpg";

const timeline = [
  { year: "2025", title: "National Olympiad — Gold Medal", desc: "12 students ranked in the top 100 across India in IMO & NSO." },
  { year: "2024", title: "CBSE Topper — Region East", desc: "Ananya R. scored 99.4% in Grade XII, ranked #2 regionally." },
  { year: "2023", title: "Best School in Innovation", desc: "Honoured by the Education Excellence Council." },
  { year: "2022", title: "Champion · Inter-School Sports", desc: "Won the District Trophy across 6 disciplines." },
];

const stats = [
  { icon: Trophy, v: "40+", l: "National awards" },
  { icon: Medal, v: "120+", l: "Olympiad medalists" },
  { icon: Star, v: "12", l: "CBSE toppers" },
  { icon: Award, v: "A+", l: "Accreditation grade" },
];

export function Achievements() {
  return (
    <section className="py-28 md:py-36 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-gold/15 blur-3xl" />
      <div className="absolute bottom-0 -left-32 h-80 w-80 rounded-full bg-white/5 blur-3xl" />

      <div className="container-edge relative">
        <Reveal className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Achievements</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">A legacy of <em className="text-gradient-gold not-italic">distinction.</em></h2>
        </Reveal>

        <Reveal stagger className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div key={s.l} className="rounded-2xl glass-dark p-6">
              <s.icon className="h-6 w-6 text-gold" />
              <div className="mt-4 font-display text-3xl">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-white/60">{s.l}</div>
            </div>
          ))}
        </Reveal>

        <div className="mt-20 grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-white/10">
              <img src={achievement} alt="Achievement" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass-dark rounded-2xl p-4">
                <div className="text-xs uppercase tracking-wider text-white/60">Class of 2025</div>
                <div className="font-display text-lg">Toppers' wall of fame</div>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <ol className="relative border-l border-white/15 pl-8 space-y-10">
              {timeline.map((t, i) => (
                <Reveal as="div" delay={i * 0.05} key={t.year}>
                  <li className="relative">
                    <span className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-gold ring-4 ring-primary" />
                    <div className="text-xs uppercase tracking-wider text-gold">{t.year}</div>
                    <h3 className="mt-1 font-display text-2xl">{t.title}</h3>
                    <p className="mt-2 text-primary-foreground/70 leading-relaxed">{t.desc}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
