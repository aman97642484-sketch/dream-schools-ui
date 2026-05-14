import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { About } from "@/components/sections/About";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Faculty } from "@/components/sections/Faculty";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dream Public School" },
      { name: "description", content: "Discover our mission, vision, leadership and the story behind Dream Public School." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={<>Built on values. <em className="text-gradient-gold not-italic">Driven by purpose.</em></>}
        subtitle="For 25+ years, Dream Public School has been shaping young minds with rigour, warmth and a sense of belonging."
      />
      <About />
      <WhyChoose />
      <Faculty />
    </>
  );
}
