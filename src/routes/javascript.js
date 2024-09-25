import { Router } from "express";
import { executeJS } from "../controllers/javascript.js";
export const jsRouter = Router();
jsRouter.post("/js", executeJS);
