import asyncHandler from "express-async-handler";
import HomeContent from "../models/HomeContent.js";

export const getHome = asyncHandler(async (_req, res) => {
  let doc = await HomeContent.findOne();
  if (!doc) doc = await HomeContent.create({});
  res.json(doc);
});

export const updateHome = asyncHandler(async (req, res) => {
  let doc = await HomeContent.findOne();
  if (!doc) doc = await HomeContent.create(req.body);
  else { Object.assign(doc, req.body); await doc.save(); }
  res.json(doc);
});
