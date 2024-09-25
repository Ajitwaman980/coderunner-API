import { execute } from "../utils/index.js";
// import bodyParser from 'body-parser';
export const executeCPP = async (req, res) => {
  console.log(...req.body);
  const { code } = req.body;
  if (!code) {
    return res.status(400).json({ error: "Cpp code is required" });
  }
  try {
    const { status, output } = await execute("g++", code, "cpp");
    console.log(output);
    res.status(status).send(output);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
