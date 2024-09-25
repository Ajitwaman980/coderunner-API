import { writeFile } from "fs/promises";
import { exec } from "child_process";
import { promisify } from "util";

const execPromise = promisify(exec);

export const execute = async (command, code, extension) => {
  // Basic validation: only allow code execution if it's a string
  if (typeof code !== "string" || code.trim() === "") {
    // return res.status(400).send();
    return { status: 400, output: "Invalid or empty code." };
  }
  const tmpFile = "temp." + extension;
  await writeFile(tmpFile, code, "utf8");
  try {
    // Execute the JavaScript code using node
    console.log(`${command} ${tmpFile}\r`);
    const { error, stdout, stderr } = await execPromise(
      `${command} ${tmpFile}`,
    );
    // Respond with the output or error
    if (stderr || error) {
      // return res.status(500).send(`Error: ${stderr}`);
      return { status: 500, output: `Error: ${stderr || error}` };
    }
    return { status: 200, output: stdout };
  } catch (err) {
    // Handle any other execution errors (e.g., syntax errors in the code)
    console.log({ command });
    console.error("Execution error\r");
    let stderr = err.stderr;
    if (stderr) {
      stderr = err.stderr.split("\n");
      stderr[0] = "";
      stderr = stderr.join("\n");
    }
    return { status: 500, output: stderr || "Unable to execute code." };
  }
};
