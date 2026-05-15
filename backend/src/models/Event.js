import mongoose from "mongoose";
const schema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, default: "" },
  date: { type: Date, required: true },
  location: { type: String, default: "Campus" },
  image: { type: String, default: "" },
  category: { type: String, enum: ["academic", "cultural", "sports", "other"], default: "other" },
  featured: { type: Boolean, default: false },
}, { timestamps: true });
export default mongoose.model("Event", schema);
