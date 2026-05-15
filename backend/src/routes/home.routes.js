import { Router } from "express";
import { getHome, updateHome } from "../controllers/home.controller.js";
import { protect, requireRole } from "../middleware/auth.js";

const r = Router();
r.get("/", getHome);
r.put("/", protect, requireRole("admin", "superadmin", "editor"), updateHome);
export default r;
