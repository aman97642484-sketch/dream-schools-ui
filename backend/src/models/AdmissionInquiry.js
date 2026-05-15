import mongoose from "mongoose";
const schema = new mongoose.Schema({
  studentName: { type: String, required: true, trim: true },
  parentName: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  phone: { type: String, required: true, trim: true },
  grade: { type: String, required: true },
  message: { type: String, default: "" },
  status: { type: String, enum: ["new", "contacted", "enrolled", "closed"], default: "new" },
}, { timestamps: true });
export default mongoose.model("AdmissionInquiry", schema);
