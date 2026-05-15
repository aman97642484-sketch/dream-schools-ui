import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import rateLimit from "express-rate-limit";

import { connectDB } from "./src/config/db.js";
import { notFound, errorHandler } from "./src/middleware/error.js";

import authRoutes from "./src/routes/auth.routes.js";
import teacherRoutes from "./src/routes/teacher.routes.js";
import eventRoutes from "./src/routes/event.routes.js";
import noticeRoutes from "./src/routes/notice.routes.js";
import galleryRoutes from "./src/routes/gallery.routes.js";
import inquiryRoutes from "./src/routes/inquiry.routes.js";
import contactRoutes from "./src/routes/contact.routes.js";
import testimonialRoutes from "./src/routes/testimonial.routes.js";
import achievementRoutes from "./src/routes/achievement.routes.js";
import faqRoutes from "./src/routes/faq.routes.js";
import homeRoutes from "./src/routes/home.routes.js";
import uploadRoutes from "./src/routes/upload.routes.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

await connectDB();

const allowed = (process.env.CLIENT_ORIGINS || "").split(",").map(s => s.trim()).filter(Boolean);
app.use(cors({
  origin: (origin, cb) => (!origin || allowed.length === 0 || allowed.includes(origin)) ? cb(null, true) : cb(new Error("CORS blocked")),
  credentials: true,
}));
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/", rateLimit({ windowMs: 15 * 60 * 1000, max: 300 }));
app.use("/api/auth/login", rateLimit({ windowMs: 15 * 60 * 1000, max: 10 }));

app.get("/api/health", (_, res) => res.json({ status: "ok", time: new Date().toISOString() }));

app.use("/api/auth", authRoutes);
app.use("/api/teachers", teacherRoutes);
app.use("/api/events", eventRoutes);
app.use("/api/notices", noticeRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/achievements", achievementRoutes);
app.use("/api/faqs", faqRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/upload", uploadRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`API ready on :${PORT}`));
