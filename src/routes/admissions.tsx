import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Admission } from "@/components/sections/Admission";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions 2026-27 — Dream Public School" },
      { name: "description", content: "Admissions for academic year 2026-27 are now open across all grades. Apply online or schedule a visit." },
    ],
  }),
  component: AdmissionsPage,
});

function AdmissionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions"
        title={<>Applications open for <em className="text-gradient-gold not-italic">2026–27.</em></>}
        subtitle="A simple, transparent process designed around your child. Begin with a campus visit or apply online today."
      />
      <Admission />
      <FAQ />
      <Contact />
    </>
  );
}
