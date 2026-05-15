import { Router } from "express";
import ContactMessage from "../models/ContactMessage.js";
import { createMessage } from "../controllers/contact.controller.js";
import { protect, requireRole } from "../middleware/auth.js";
import { crud } from "../controllers/crud.factory.js";

const r = Router();
const c = crud(ContactMessage);

r.post("/", createMessage); // public
r.get("/", protect, requireRole("admin", "superadmin", "editor"), c.list);
r.get("/:id", protect, requireRole("admin", "superadmin", "editor"), c.get);
r.put("/:id", protect, requireRole("admin", "superadmin", "editor"), c.update);
r.delete("/:id", protect, requireRole("admin", "superadmin"), c.remove);
export default r;
