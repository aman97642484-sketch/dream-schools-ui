import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dream Public School" },
      { name: "description", content: "Reach out to our admissions and information desk. We'd love to hear from you." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>Let's <em className="text-gradient-gold not-italic">talk.</em></>}
        subtitle="Visit the campus, call our team, or drop a message — we respond within one working day."
      />
      <Contact />
    </>
  );
}
