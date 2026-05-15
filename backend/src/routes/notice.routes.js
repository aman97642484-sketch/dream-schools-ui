import Notice from "../models/Notice.js";
import { publicReadRouter } from "./_factory.js";
export default publicReadRouter(Notice, { defaultSort: { pinned: -1, publishedAt: -1 } });
