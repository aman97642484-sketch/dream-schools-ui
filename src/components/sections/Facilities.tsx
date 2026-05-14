import { Reveal } from "../Reveal";
import library from "@/assets/library.jpg";
import lab from "@/assets/science-lab.jpg";
import comp from "@/assets/computer-lab.jpg";
import sports from "@/assets/sports.jpg";
import { Bus, ShieldCheck } from "lucide-react";

const items = [
  { title: "Modern Library", desc: "30,000+ titles, digital archives and quiet study pods.", img: library, span: "md:col-span-2 md:row-span-2" },
  { title: "Computer Lab", desc: "200 workstations, coding & robotics studio.", img: comp },
  { title: "Science Labs", desc: "Three dedicated labs — Physics, Chemistry, Biology.", img: lab },
  { title: "Sports Ground", desc: "400m track, football, cricket, courts.", img: sports, span: "md:col-span-2" },
];

export function Facilities() {
  return (
    <section className="py-28 md:py-36 bg-secondary/40">
      <div className="container-edge">
        <Reveal className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gradient-gold">Facilities</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">Spaces designed to <em className="text-gradient-gold not-italic">inspire learning.</em></h2>
        </Reveal>

        <Reveal stagger className="mt-14 grid md:grid-cols-3 grid-rows-2 gap-5 auto-rows-[220px] md:auto-rows-[260px]">
          {items.map((it) => (
            <div
              key={it.title}
              className={`relative overflow-hidden rounded-3xl group cursor-pointer ${it.span ?? ""}`}
            >
              <img src={it.img} alt={it.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-primary-foreground">
                <h3 className="font-display text-2xl">{it.title}</h3>
                <p className="text-sm text-white/80 mt-1 max-w-xs">{it.desc}</p>
              </div>
            </div>
          ))}
          <div className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-7 flex flex-col justify-between">
            <Bus className="h-7 w-7 text-gold" />
            <div>
              <h3 className="font-display text-2xl">Safe Transport</h3>
              <p className="text-sm text-primary-foreground/70 mt-1">GPS-tracked fleet covering 40+ routes.</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-card border border-border/60 p-7 flex flex-col justify-between">
            <ShieldCheck className="h-7 w-7 text-primary" />
            <div>
              <h3 className="font-display text-2xl text-primary">CCTV & Security</h3>
              <p className="text-sm text-muted-foreground mt-1">24×7 monitored campus with trained personnel.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
