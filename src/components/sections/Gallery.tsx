import { Reveal } from "../Reveal";
import campus from "@/assets/hero-campus.jpg";
import classroom from "@/assets/classroom.jpg";
import library from "@/assets/library.jpg";
import lab from "@/assets/science-lab.jpg";
import sports from "@/assets/sports.jpg";
import achievement from "@/assets/achievement.jpg";
import activity from "@/assets/activity.jpg";
import comp from "@/assets/computer-lab.jpg";

const imgs = [
  { src: campus, h: "tall" },
  { src: classroom, h: "short" },
  { src: library, h: "med" },
  { src: lab, h: "tall" },
  { src: comp, h: "short" },
  { src: sports, h: "med" },
  { src: achievement, h: "tall" },
  { src: activity, h: "med" },
];

const heightMap = { tall: "row-span-2", med: "row-span-1", short: "row-span-1" } as const;

export function GallerySection() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-edge">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gradient-gold">Gallery</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">Glimpses of our <em className="text-gradient-gold not-italic">everyday.</em></h2>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">A look at the moments, people and spaces that make Dream Public School unmistakably ours.</p>
        </Reveal>

        <Reveal stagger className="mt-14 grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-4">
          {imgs.map((it, i) => (
            <div key={i} className={`relative overflow-hidden rounded-2xl group ${heightMap[it.h as keyof typeof heightMap]}`}>
              <img src={it.src} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
