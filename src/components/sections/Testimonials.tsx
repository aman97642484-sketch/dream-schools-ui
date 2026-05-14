import { useEffect, useState } from "react";
import { Reveal } from "../Reveal";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Priya Sharma", role: "Parent · Grade VII", quote: "Dream Public School gave my daughter the confidence to lead her own learning. The teachers truly know each child." },
  { name: "Arjun Verma", role: "Alumnus · Class of 2022", quote: "The faculty pushed us to think, question and grow. I credit my IIT preparation entirely to my school years here." },
  { name: "Sneha Kapoor", role: "Parent · Grade III", quote: "From the front gate to the classroom, every interaction is warm, professional and intentional. We feel deeply at home." },
  { name: "Ravi Khanna", role: "Parent · Grade XI", quote: "The balance between academics, sports and values is remarkable. My son has flourished beyond what we imagined." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-28 md:py-36">
      <div className="container-edge">
        <Reveal className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gradient-gold">Voices from our community</div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">Heard from our <em className="text-gradient-gold not-italic">families.</em></h2>
        </Reveal>

        <Reveal className="mt-14 relative rounded-3xl bg-gradient-to-br from-secondary to-card border border-border/60 p-8 md:p-14 shadow-soft overflow-hidden">
          <Quote className="absolute top-8 right-8 h-24 w-24 text-primary/5" />
          <div className="relative min-h-[180px]">
            {reviews.map((r, idx) => (
              <div
                key={idx}
                className={`transition-all duration-700 ${
                  idx === i ? "opacity-100 translate-y-0 relative" : "opacity-0 translate-y-4 absolute inset-0 pointer-events-none"
                }`}
              >
                <p className="font-display text-2xl md:text-3xl text-primary leading-snug max-w-3xl">
                  "{r.quote}"
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gold-gradient flex items-center justify-center font-display text-gold-foreground">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-primary">{r.name}</div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-between">
            <div className="flex gap-1.5">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-3 bg-primary/20"}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button onClick={() => setI((v) => (v - 1 + reviews.length) % reviews.length)} aria-label="Prev" className="h-10 w-10 rounded-full bg-card border border-border/60 inline-flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button onClick={() => setI((v) => (v + 1) % reviews.length)} aria-label="Next" className="h-10 w-10 rounded-full bg-card border border-border/60 inline-flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
