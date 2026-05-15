import { Router } from "express";
import { protect, requireRole } from "../middleware/auth.js";
import { crud } from "../controllers/crud.factory.js";

// Public read + protected write
export function publicReadRouter(Model, opts) {
  const c = crud(Model, opts);
  const r = Router();
  r.get("/", c.list);
  r.get("/:id", c.get);
  r.post("/", protect, requireRole("admin", "superadmin", "editor"), c.create);
  r.put("/:id", protect, requireRole("admin", "superadmin", "editor"), c.update);
  r.delete("/:id", protect, requireRole("admin", "superadmin"), c.remove);
  return r;
}

// Fully protected (admin-only read+write — for inquiries / messages)
export function adminOnlyRouter(Model, opts) {
  const c = crud(Model, opts);
  const r = Router();
  r.use(protect, requireRole("admin", "superadmin", "editor"));
  r.get("/", c.list);
  r.get("/:id", c.get);
  r.put("/:id", c.update);
  r.delete("/:id", c.remove);
  return r;
}
