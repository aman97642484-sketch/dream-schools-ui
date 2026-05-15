import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import Admin from "../models/Admin.js";

export const protect = asyncHandler(async (req, res, next) => {
  const header = req.headers.authorization || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) { res.status(401); throw new Error("Not authorized, no token"); }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await Admin.findById(decoded.id).select("-password");
    if (!req.user) { res.status(401); throw new Error("Token user no longer exists"); }
    next();
  } catch {
    res.status(401); throw new Error("Not authorized, token failed");
  }
});

export const requireRole = (...roles) => (req, res, next) => {
  if (!req.user || !roles.includes(req.user.role)) {
    res.status(403);
    return next(new Error("Forbidden: insufficient role"));
  }
  next();
};
