import express from "express";
import cors from "cors";
import "dotenv/config.js";
// import { healthRouter, jsRouter, pyRouter, cpproute } from "./routes/index.js";
import { jsRouter } from "./routes/javascript.js";
import { pyRouter } from "./routes/python.js";
import { cpproute } from "./routes/cpp.js";
import { healthRouter } from "./routes/health.js";

const { PORT, HOST } = process.env;
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (_, res) => {
  res.status(200).end("ok");
});
app.use("/", healthRouter);

// app.use("/api/v1/exec", jsRouter, pyRouter, cpproute);

app.use("/api/v1/exec/js", jsRouter);
app.use("/api/v1/exec/python", pyRouter);
app.use("/api/v1/exec/cpp", cpproute);

app.listen(PORT || 4000, HOST || "localhost", () => {
  console.log(`Listening on host:${HOST || "localhost"} port:${PORT || 4000}`);
});
