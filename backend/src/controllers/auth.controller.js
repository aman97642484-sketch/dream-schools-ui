import asyncHandler from "express-async-handler";
import Admin from "../models/Admin.js";
import { signToken } from "../utils/token.js";

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) { res.status(400); throw new Error("Email and password required"); }
  const admin = await Admin.findOne({ email: email.toLowerCase(), active: true }).select("+password");
  if (!admin || !(await admin.matchPassword(password))) {
    res.status(401); throw new Error("Invalid credentials");
  }
  res.json({
    token: signToken(admin._id),
    user: { id: admin._id, name: admin.name, email: admin.email, role: admin.role },
  });
});

export const me = asyncHandler(async (req, res) => res.json(req.user));

export const logout = (_req, res) => res.json({ message: "Logged out (discard token client-side)" });
