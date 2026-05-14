import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { GallerySection } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Dream Public School" },
      { name: "description", content: "Glimpses of our campus, classrooms, events and student life." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title={<>Moments from <em className="text-gradient-gold not-italic">our world.</em></>}
        subtitle="A curated look at the campus, the classrooms, the celebrations — and the everyday."
      />
      <GallerySection />
      <Testimonials />
    </>
  );
}
