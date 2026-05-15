import mongoose from "mongoose";
const schema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, default: "" },
  category: { type: String, enum: ["topper", "award", "competition", "other"], default: "other" },
  year: { type: Number, default: () => new Date().getFullYear() },
  image: { type: String, default: "" },
  order: { type: Number, default: 0 },
}, { timestamps: true });
export default mongoose.model("Achievement", schema);
