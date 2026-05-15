import Testimonial from "../models/Testimonial.js";
import { publicReadRouter } from "./_factory.js";
export default publicReadRouter(Testimonial, { defaultSort: { order: 1 } });
