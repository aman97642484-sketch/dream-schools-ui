import mongoose from "mongoose";
const schema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  designation: { type: String, default: "Teacher" },
  subject: { type: String, required: true },
  qualification: { type: String, default: "" },
  experienceYears: { type: Number, default: 0 },
  email: { type: String, default: "" },
  image: { type: String, default: "" },
  bio: { type: String, default: "" },
  order: { type: Number, default: 0 },
  active: { type: Boolean, default: true },
}, { timestamps: true });
export default mongoose.model("Teacher", schema);
