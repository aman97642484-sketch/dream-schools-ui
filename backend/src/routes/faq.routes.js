import FAQ from "../models/FAQ.js";
import { publicReadRouter } from "./_factory.js";
export default publicReadRouter(FAQ, { defaultSort: { order: 1 } });
