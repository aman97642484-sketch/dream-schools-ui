import { Reveal } from "../Reveal";
import { Calendar, Megaphone } from "lucide-react";

const events = [
  { date: "12 May", tag: "Annual Day", title: "Sankalp 2026 — A celebration of student talent.", time: "5:00 PM · Auditorium" },
  { date: "24 May", tag: "Workshop", title: "Parenting in the digital age — by Dr. K. Iyer.", time: "11:00 AM · Hall B" },
  { date: "02 Jun", tag: "Sports", title: "Inter-house athletic championship begins.", time: "8:00 AM · Sports Ground" },
];

const news = [
  "Admissions for academic year 2026–27 are now open across all grades.",
  "12 students qualify for the National Science Olympiad finals.",
  "New STEM innovation lab inaugurated by Dr. R. Krishnan.",
];

export function Events() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-edge grid lg:grid-cols-2 gap-10">
        <div>
          <Reveal>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gradient-gold">
              <Calendar className="h-4 w-4 text-gold" /> Upcoming events
            </div>
            <h2 className="mt-3 font-display text-4xl text-primary">What's <em className="text-gradient-gold not-italic">coming up.</em></h2>
          </Reveal>
          <div className="mt-8 space-y-4">
            {events.map((e, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <a href="#" className="group flex gap-5 rounded-2xl bg-card border border-border/60 p-5 hover:shadow-soft transition-shadow">
                  <div className="shrink-0 w-20 rounded-xl bg-primary text-primary-foreground flex flex-col items-center justify-center py-3">
                    <span className="font-display text-2xl text-gold">{e.date.split(" ")[0]}</span>
                    <span className="text-[10px] uppercase tracking-wider mt-0.5">{e.date.split(" ")[1]}</span>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-gold-foreground/80">{e.tag}</div>
                    <h3 className="mt-1 font-display text-lg text-primary group-hover:text-gold-foreground transition-colors">{e.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{e.time}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <Reveal>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-gradient-gold">
              <Megaphone className="h-4 w-4 text-gold" /> Latest announcements
            </div>
            <h2 className="mt-3 font-display text-4xl text-primary">News from the <em className="text-gradient-gold not-italic">campus.</em></h2>
          </Reveal>
          <Reveal className="mt-8 rounded-3xl bg-primary text-primary-foreground p-8 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gold/15 blur-3xl" />
            <ul className="relative divide-y divide-white/10">
              {news.map((n, i) => (
                <li key={i} className="py-4 first:pt-0 last:pb-0 flex gap-4">
                  <span className="text-xs uppercase tracking-wider text-gold mt-1">0{i + 1}</span>
                  <p className="text-primary-foreground/85 leading-relaxed">{n}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
