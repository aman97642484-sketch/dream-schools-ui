import asyncHandler from "express-async-handler";

// Generic CRUD factory to keep controllers DRY.
// Pass options: { defaultSort, populate }
export const crud = (Model, opts = {}) => ({
  list: asyncHandler(async (req, res) => {
    const { page = 1, limit = 50, q, ...filters } = req.query;
    const query = { ...filters };
    if (q) query.$or = [{ title: new RegExp(q, "i") }, { name: new RegExp(q, "i") }];
    const skip = (Number(page) - 1) * Number(limit);
    const [items, total] = await Promise.all([
      Model.find(query).sort(opts.defaultSort || { createdAt: -1 }).skip(skip).limit(Number(limit)),
      Model.countDocuments(query),
    ]);
    res.json({ items, total, page: Number(page), pages: Math.ceil(total / Number(limit)) });
  }),
  get: asyncHandler(async (req, res) => {
    const item = await Model.findById(req.params.id);
    if (!item) { res.status(404); throw new Error("Not found"); }
    res.json(item);
  }),
  create: asyncHandler(async (req, res) => {
    const item = await Model.create(req.body);
    res.status(201).json(item);
  }),
  update: asyncHandler(async (req, res) => {
    const item = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) { res.status(404); throw new Error("Not found"); }
    res.json(item);
  }),
  remove: asyncHandler(async (req, res) => {
    const item = await Model.findByIdAndDelete(req.params.id);
    if (!item) { res.status(404); throw new Error("Not found"); }
    res.json({ message: "Deleted" });
  }),
});
