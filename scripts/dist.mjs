import fs from "node:fs";
import { execSync } from "node:child_process";
// get version
let version = JSON.parse(fs.readFileSync("package.json")).version;

const files = ["assets/", "templates/"];
console.log("Packing dist for version", version);
const filename = "notepad_theme." + version + ".dist.zip";
execSync("zip -r " + "../../../../" + filename + " " + files.join(" "), {
  cwd: "site/config/themes/notepad",
});
console.log("ready...");
