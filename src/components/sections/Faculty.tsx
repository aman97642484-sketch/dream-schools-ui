import { Reveal } from "../Reveal";

const faculty = [
  { name: "Dr. Anjali Mehra", subj: "Principal · English Lit." },
  { name: "Mr. Rohit Shah", subj: "Head of Mathematics" },
  { name: "Ms. Kavita Rao", subj: "Head of Sciences" },
  { name: "Mr. Devansh Patel", subj: "Head of Sports" },
];

const palette = ["from-primary to-primary/70", "from-gold/80 to-gold", "from-primary/80 to-primary/60", "from-gold to-gold/70"];

export function Faculty() {
  return (
    <section className="py-28 md:py-36 bg-secondary/40">
      <div className="container-edge">
        <Reveal className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gradient-gold">Our faculty</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">Mentors who <em className="text-gradient-gold not-italic">care deeply.</em></h2>
        </Reveal>

        <Reveal stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((f, i) => (
            <div key={f.name} className="group rounded-3xl bg-card p-6 border border-border/60 transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className={`relative aspect-square rounded-2xl bg-gradient-to-br ${palette[i % palette.length]} overflow-hidden flex items-end justify-center`}>
                <div className="font-display text-7xl text-white/15 absolute top-3 left-4">{f.name.split(" ").map(n => n[0]).slice(0,2).join("")}</div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <h3 className="mt-5 font-display text-lg text-primary">{f.name}</h3>
              <p className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{f.subj}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
