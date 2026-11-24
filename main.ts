import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Everyday wonder: a small everyday moment made strange and new.
const LINE =
  "The elevator doors opened on a stranger humming my grandmother's lullaby, and for one floor the whole building smelled like her kitchen.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
