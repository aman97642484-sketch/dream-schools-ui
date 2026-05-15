import "dotenv/config";
import { connectDB } from "../config/db.js";
import Admin from "../models/Admin.js";
import Teacher from "../models/Teacher.js";
import Event from "../models/Event.js";
import Notice from "../models/Notice.js";
import Gallery from "../models/Gallery.js";
import Testimonial from "../models/Testimonial.js";
import Achievement from "../models/Achievement.js";
import FAQ from "../models/FAQ.js";
import HomeContent from "../models/HomeContent.js";

await connectDB();

console.log("Seeding…");

// Admin
const adminEmail = (process.env.ADMIN_EMAIL || "admin@dreampublicschool.edu.in").toLowerCase();
if (!(await Admin.findOne({ email: adminEmail }))) {
  await Admin.create({
    name: process.env.ADMIN_NAME || "Super Admin",
    email: adminEmail,
    password: process.env.ADMIN_PASSWORD || "ChangeMe!2026",
    role: "superadmin",
  });
  console.log("Admin created:", adminEmail);
}

// Home
if (!(await HomeContent.findOne())) {
  await HomeContent.create({
    stats: [
      { label: "Students", value: 1800, suffix: "+" },
      { label: "Faculty", value: 120, suffix: "+" },
      { label: "Years of excellence", value: 27, suffix: "" },
      { label: "Awards", value: 80, suffix: "+" },
    ],
    whyChoose: [
      { title: "Holistic Curriculum", body: "CBSE excellence blended with global perspectives.", icon: "BookOpen" },
      { title: "Modern Facilities", body: "Smart classrooms, labs, sports complex, library.", icon: "Building2" },
      { title: "Caring Mentors", body: "Low student-teacher ratio with attentive care.", icon: "Users" },
    ],
  });
}

// Teachers
if (await Teacher.countDocuments() === 0) {
  await Teacher.insertMany([
    { name: "Dr. Anjali Mehra", designation: "Principal", subject: "English Literature", qualification: "PhD English", experienceYears: 22, order: 1 },
    { name: "Mr. Rohit Shah", designation: "HOD", subject: "Mathematics", qualification: "M.Sc Maths", experienceYears: 18, order: 2 },
    { name: "Ms. Kavita Rao", designation: "HOD", subject: "Sciences", qualification: "M.Sc Physics", experienceYears: 15, order: 3 },
    { name: "Mr. Devansh Patel", designation: "HOD", subject: "Sports", qualification: "MPEd", experienceYears: 12, order: 4 },
  ]);
}

// Events
if (await Event.countDocuments() === 0) {
  await Event.insertMany([
    { title: "Annual Sports Day", date: new Date(Date.now() + 7 * 86400000), category: "sports", featured: true, location: "Sports Complex", description: "Inter-house athletics & team championships." },
    { title: "Science Exhibition", date: new Date(Date.now() + 21 * 86400000), category: "academic", location: "Science Block", description: "Student research projects across grades 6–12." },
    { title: "Cultural Fest 'Spectra'", date: new Date(Date.now() + 45 * 86400000), category: "cultural", location: "Auditorium", description: "Music, drama and dance performances." },
  ]);
}

// Notices
if (await Notice.countDocuments() === 0) {
  await Notice.insertMany([
    { title: "Admissions Open for 2026-27", category: "notice", pinned: true, body: "Limited seats available across all grades. Apply early." },
    { title: "Mid-term Holiday Schedule", category: "circular", body: "School closed Oct 20–28 for autumn break." },
    { title: "Topper celebrated at National Olympiad", category: "news", body: "Aanya Sharma (Grade XI) wins gold." },
  ]);
}

// Testimonials
if (await Testimonial.countDocuments() === 0) {
  await Testimonial.insertMany([
    { name: "Priya Khanna", role: "Parent — Grade VI", quote: "The mentors here treat every child as their own.", rating: 5, order: 1 },
    { name: "Aarav Mehta", role: "Alumni '22", quote: "I left as a confident, curious learner ready for the world.", rating: 5, order: 2 },
    { name: "Dr. Singh", role: "Parent — Grade X", quote: "Academic rigor balanced beautifully with co-curriculars.", rating: 5, order: 3 },
  ]);
}

// Achievements
if (await Achievement.countDocuments() === 0) {
  await Achievement.insertMany([
    { title: "100% Board Pass Rate", category: "award", year: 2025, description: "CBSE Class XII results for the 7th consecutive year." },
    { title: "National Chess Champion", category: "competition", year: 2025, description: "Vihaan Kapoor — U17 division." },
    { title: "Topper Aanya Sharma — 99.2%", category: "topper", year: 2025 },
  ]);
}

// FAQs
if (await FAQ.countDocuments() === 0) {
  await FAQ.insertMany([
    { question: "What is the admission process?", answer: "Inquiry → campus visit → application → interaction → confirmation.", order: 1 },
    { question: "What is the student-teacher ratio?", answer: "Approximately 18:1 across grades.", order: 2 },
    { question: "Do you provide transport?", answer: "Yes, GPS-tracked buses across major routes.", order: 3 },
  ]);
}

console.log("Seed complete.");
process.exit(0);
