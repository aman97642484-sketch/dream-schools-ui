import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Programs } from "@/components/sections/Programs";
import { Facilities } from "@/components/sections/Facilities";
import { GallerySection } from "@/components/sections/Gallery";
import { Achievements } from "@/components/sections/Achievements";
import { Testimonials } from "@/components/sections/Testimonials";
import { Admission } from "@/components/sections/Admission";
import { Events } from "@/components/sections/Events";
import { Faculty } from "@/components/sections/Faculty";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dream Public School — Excellence · Integrity · Vision" },
      { name: "description", content: "A premier CBSE co-educational institution. Admissions for 2026-27 are now open." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <WhyChoose />
      <Programs />
      <Facilities />
      <GallerySection />
      <Achievements />
      <Testimonials />
      <Admission />
      <Events />
      <Faculty />
      <FAQ />
      <Contact />
    </>
  );
}
