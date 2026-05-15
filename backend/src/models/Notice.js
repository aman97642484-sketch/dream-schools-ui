import mongoose from "mongoose";
const schema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  body: { type: String, default: "" },
  category: { type: String, enum: ["news", "notice", "circular"], default: "notice" },
  fileUrl: { type: String, default: "" },
  publishedAt: { type: Date, default: Date.now },
  pinned: { type: Boolean, default: false },
}, { timestamps: true });
export default mongoose.model("Notice", schema);
