import Teacher from "../models/Teacher.js";
import { publicReadRouter } from "./_factory.js";
export default publicReadRouter(Teacher, { defaultSort: { order: 1, createdAt: -1 } });
