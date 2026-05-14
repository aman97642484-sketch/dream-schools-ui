import { Reveal } from "../Reveal";
import { Counter } from "../Counter";
import { Compass, Sparkles, Quote } from "lucide-react";
import principal from "@/assets/principal.jpg";

const stats = [
  { v: 2400, suffix: "+", l: "Bright students" },
  { v: 140, suffix: "+", l: "Expert teachers" },
  { v: 98, suffix: "%", l: "Board results" },
  { v: 25, suffix: "+", l: "Years of excellence" },
];

export function About() {
  return (
    <section className="py-28 md:py-36">
      <div className="container-edge">
        <Reveal className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-foreground/80">
            <span className="text-gradient-gold">About the school</span>
          </div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">
            A school built on <em className="text-gradient-gold not-italic">timeless values</em> and modern thinking.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Founded in 1998, Dream Public School has grown into one of the region's most
            trusted CBSE institutions — combining academic rigor with creative inquiry,
            sport, and service to community.
          </p>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          <Reveal className="rounded-3xl bg-card p-8 md:p-10 shadow-soft border border-border/60">
            <div className="h-12 w-12 rounded-2xl bg-primary-soft flex items-center justify-center text-primary mb-5">
              <Compass className="h-6 w-6" />
            </div>
            <h3 className="font-display text-2xl text-primary">Our Mission</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              To nurture every child's intellectual, emotional and ethical potential
              through a balanced curriculum, inspired teaching, and a culture of
              respect, curiosity and joy.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-10 shadow-elegant relative overflow-hidden">
            <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-gold/20 blur-2xl" />
            <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center text-gold mb-5">
              <Sparkles className="h-6 w-6" />
            </div>
            <h3 className="font-display text-2xl">Our Vision</h3>
            <p className="mt-3 text-primary-foreground/80 leading-relaxed">
              To be a centre of educational excellence that empowers learners to think
              independently, lead with empathy, and contribute meaningfully to a
              changing world.
            </p>
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal stagger className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.l} className="rounded-2xl bg-gradient-to-b from-secondary to-card p-6 border border-border/60">
              <div className="font-display text-4xl md:text-5xl text-primary">
                <Counter to={s.v} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </Reveal>

        {/* Principal */}
        <Reveal className="mt-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elegant">
              <img src={principal} alt="Principal" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4">
                <div className="font-display text-lg text-primary">Dr. Anjali Mehra</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Principal · Ph.D. Education</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gradient-gold">Principal's message</div>
            <h3 className="mt-3 font-display text-3xl md:text-4xl text-primary">
              "Every child here is known, heard, and challenged."
            </h3>
            <Quote className="h-8 w-8 text-gold mt-6" />
            <p className="mt-4 text-muted-foreground leading-relaxed">
              At Dream Public School we believe education is not the filling of a vessel,
              but the lighting of a fire. Our teachers, classrooms and traditions are
              designed to bring out the very best in every learner — academically,
              creatively and humanly. I warmly invite you to walk our corridors and
              feel the difference for yourself.
            </p>
            <div className="mt-6 font-display italic text-primary/80">— Dr. Anjali Mehra</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
