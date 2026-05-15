import mongoose from "mongoose";
const schema = new mongoose.Schema({
  title: { type: String, default: "" },
  category: { type: String, enum: ["campus", "events", "sports", "academics", "cultural", "other"], default: "other" },
  image: { type: String, required: true },
  order: { type: Number, default: 0 },
}, { timestamps: true });
export default mongoose.model("Gallery", schema);
