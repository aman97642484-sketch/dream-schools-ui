import { Router } from "express";
import { upload } from "../middleware/upload.js";
import { uploadImage } from "../controllers/upload.controller.js";
import { protect, requireRole } from "../middleware/auth.js";

const r = Router();
r.post("/image", protect, requireRole("admin", "superadmin", "editor"), upload.single("image"), uploadImage);
export default r;
