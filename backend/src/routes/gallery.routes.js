import Gallery from "../models/Gallery.js";
import { publicReadRouter } from "./_factory.js";
export default publicReadRouter(Gallery, { defaultSort: { order: 1, createdAt: -1 } });
