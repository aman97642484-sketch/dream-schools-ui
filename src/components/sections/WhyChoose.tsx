import { Reveal } from "../Reveal";
import { MonitorSmartphone, Users, Trophy, ShieldCheck, Sparkles, Wifi } from "lucide-react";

const features = [
  { icon: MonitorSmartphone, title: "Smart Classrooms", desc: "Every classroom equipped with interactive panels, AV and digital content." },
  { icon: Users, title: "Experienced Faculty", desc: "Master-trained teachers who mentor each child individually." },
  { icon: Trophy, title: "Sports Excellence", desc: "12+ disciplines from athletics to chess, with state-level coaches." },
  { icon: ShieldCheck, title: "Discipline & Care", desc: "Strong values, gentle guidance — a culture of respect." },
  { icon: Wifi, title: "Digital Learning", desc: "1:1 device program, coding, robotics and AI integration from Grade 4." },
  { icon: Sparkles, title: "Safe Campus", desc: "100% CCTV, GPS-enabled buses, on-site clinic and trained counsellors." },
];

export function WhyChoose() {
  return (
    <section className="py-28 md:py-36 bg-secondary/40">
      <div className="container-edge">
        <Reveal className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gradient-gold">Why families choose us</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">An education designed for <em className="text-gradient-gold not-italic">tomorrow.</em></h2>
        </Reveal>

        <Reveal stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative rounded-3xl bg-card p-7 border border-border/60 shadow-soft transition-all hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="h-12 w-12 rounded-2xl bg-primary-soft text-primary flex items-center justify-center group-hover:bg-gold-gradient group-hover:text-gold-foreground transition-colors">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl text-primary">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
