import Event from "../models/Event.js";
import { publicReadRouter } from "./_factory.js";
export default publicReadRouter(Event, { defaultSort: { date: -1 } });
