import mongoose from "mongoose";
const schema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  category: { type: String, default: "general" },
  order: { type: Number, default: 0 },
}, { timestamps: true });
export default mongoose.model("FAQ", schema);
