import { useState } from "react";
import { Reveal } from "../Reveal";
import { Plus } from "lucide-react";

const faqs = [
  { q: "What is the admission process?", a: "Submit an inquiry, visit the campus, complete the application, attend an interaction, and receive your offer letter — all within 2–3 weeks." },
  { q: "Which board does the school follow?", a: "Dream Public School is affiliated to CBSE (Central Board of Secondary Education) — Affiliation No. 2730421." },
  { q: "Are transport services available?", a: "Yes — our GPS-tracked fleet of 32 buses covers 40+ routes across the city, with trained attendants on every bus." },
  { q: "What are the timings?", a: "School operates from 8:00 AM to 2:30 PM for Primary onwards, and 8:30 AM to 1:00 PM for Pre-Primary." },
  { q: "Is there a hostel facility?", a: "We do not offer residential facilities at this time, but we do support after-school care until 5:00 PM." },
  { q: "How can I download the brochure?", a: "Visit the Admissions page and click 'Download Brochure' — or contact us and we'll email you the latest copy." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-28 md:py-36">
      <div className="container-edge grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Reveal>
            <div className="text-xs font-semibold uppercase tracking-[0.22em] text-gradient-gold">FAQ</div>
            <h2 className="mt-3 font-display text-4xl md:text-5xl text-primary">Questions, <em className="text-gradient-gold not-italic">answered.</em></h2>
            <p className="mt-4 text-muted-foreground">Can't find what you're looking for? Our admissions team is happy to help.</p>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <Reveal stagger className="divide-y divide-border/70 border-y border-border/70">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="font-display text-lg text-primary">{f.q}</span>
                    <span className={`shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 transition-all ${isOpen ? "bg-primary text-primary-foreground rotate-45" : ""}`}>
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <div className={`grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-5" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="text-muted-foreground leading-relaxed pr-12">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
