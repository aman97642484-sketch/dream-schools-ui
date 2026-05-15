import asyncHandler from "express-async-handler";
import AdmissionInquiry from "../models/AdmissionInquiry.js";
import { sendMail } from "../utils/mailer.js";

export const createInquiry = asyncHandler(async (req, res) => {
  const { studentName, parentName, email, phone, grade, message } = req.body;
  if (!studentName || !parentName || !email || !phone || !grade) {
    res.status(400); throw new Error("Missing required fields");
  }
  const inquiry = await AdmissionInquiry.create({ studentName, parentName, email, phone, grade, message });
  if (process.env.MAIL_TO_ADMIN) {
    sendMail({
      to: process.env.MAIL_TO_ADMIN,
      subject: `New Admission Inquiry — ${studentName} (${grade})`,
      html: `<h3>New inquiry</h3><p><b>Student:</b> ${studentName}</p><p><b>Parent:</b> ${parentName}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> ${phone}</p><p><b>Grade:</b> ${grade}</p><p>${message || ""}</p>`,
    }).catch(err => console.error("Mail err:", err.message));
  }
  res.status(201).json({ message: "Inquiry received. Our team will contact you shortly.", id: inquiry._id });
});
