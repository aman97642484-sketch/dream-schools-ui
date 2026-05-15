import mongoose from "mongoose";
const schema = new mongoose.Schema({
  // Singleton document — only one row should exist
  hero: {
    eyebrow: { type: String, default: "Excellence · Integrity · Vision" },
    title: { type: String, default: "Where dreams become bright futures." },
    subtitle: { type: String, default: "A CBSE co-educational school nurturing curious minds and confident hearts." },
    ctaPrimary: { type: String, default: "Apply for 2026-27" },
    ctaSecondary: { type: String, default: "Explore Campus" },
    image: { type: String, default: "" },
  },
  stats: [{
    label: String,
    value: Number,
    suffix: { type: String, default: "+" },
  }],
  about: {
    eyebrow: { type: String, default: "About us" },
    heading: { type: String, default: "Rooted in tradition, designed for the future." },
    body: { type: String, default: "" },
  },
  whyChoose: [{ title: String, body: String, icon: String }],
}, { timestamps: true });
export default mongoose.model("HomeContent", schema);
