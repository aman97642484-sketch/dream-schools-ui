import asyncHandler from "express-async-handler";
import ContactMessage from "../models/ContactMessage.js";
import { sendMail } from "../utils/mailer.js";

export const createMessage = asyncHandler(async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  if (!name || !email || !message) { res.status(400); throw new Error("Name, email, and message required"); }
  const doc = await ContactMessage.create({ name, email, phone, subject, message });
  if (process.env.MAIL_TO_ADMIN) {
    sendMail({
      to: process.env.MAIL_TO_ADMIN,
      subject: `Contact form — ${subject || name}`,
      html: `<p><b>${name}</b> &lt;${email}&gt; ${phone || ""}</p><p>${message}</p>`,
    }).catch(err => console.error("Mail err:", err.message));
  }
  res.status(201).json({ message: "Message sent. We'll respond within one working day.", id: doc._id });
});
