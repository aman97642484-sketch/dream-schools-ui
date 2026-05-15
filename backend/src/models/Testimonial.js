import mongoose from "mongoose";
const schema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, default: "Parent" },
  quote: { type: String, required: true },
  image: { type: String, default: "" },
  rating: { type: Number, min: 1, max: 5, default: 5 },
  order: { type: Number, default: 0 },
}, { timestamps: true });
export default mongoose.model("Testimonial", schema);
