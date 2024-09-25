import { Router } from "express";
export const healthRouter = Router();
healthRouter.get("/health", (_, res) => {
  res.send("Everything is running up and well.");
});
