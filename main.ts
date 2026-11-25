// One Line, Big Laugh — make.fun bounty u-coral-404-one-line-big-laugh-328fb857
// Writes a single original funny line (<=200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My smart fridge broke up with me — apparently I only open up at 3 a.m. and never commit to anything inside.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
