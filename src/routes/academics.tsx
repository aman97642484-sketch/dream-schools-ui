import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Programs } from "@/components/sections/Programs";
import { Facilities } from "@/components/sections/Facilities";
import { Achievements } from "@/components/sections/Achievements";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics — Dream Public School" },
      { name: "description", content: "Explore our CBSE curriculum from Pre-Primary through Senior Secondary, our facilities and achievements." },
    ],
  }),
  component: AcademicsPage,
});

function AcademicsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academics"
        title={<>A curriculum that <em className="text-gradient-gold not-italic">stretches.</em> A community that supports.</>}
        subtitle="Our programs blend the rigour of CBSE with project-based learning, the arts, sport and a mentor for every learner."
      />
      <Programs />
      <Facilities />
      <Achievements />
    </>
  );
}
