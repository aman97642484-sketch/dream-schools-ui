import Achievement from "../models/Achievement.js";
import { publicReadRouter } from "./_factory.js";
export default publicReadRouter(Achievement, { defaultSort: { year: -1, order: 1 } });
