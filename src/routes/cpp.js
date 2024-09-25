import { Router } from "express";

import { executeCPP } from "../controllers/cpp.js";

export const cpproute = Router();

cpproute.post("/cpp", executeCPP);
