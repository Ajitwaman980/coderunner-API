import { Router } from "express";
import { executePY } from "../controllers/python.js";
export const pyRouter = Router();
// pyRouter.get("/pyy", (req, res) => {
//   res.status(200).json("ok all");
// });
pyRouter.post("/py", executePY);
