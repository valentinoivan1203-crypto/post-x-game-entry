// main.ts — post-x-the-agent-builds-a-game-from-20261122-1709
//
// This program hands in the entry's POST.json: it copies the POST.json
// file from the repository root (MAKEFUN_BOT_DIR, default /bot) to the
// output directory (MAKEFUN_OUTPUT_DIR, default /output) as POST.json,
// byte for byte — the file is never rewritten or re-serialised, so the
// post URL the judges read is exactly the one in the repository.
// POST.json names the X post that carries this entry's video, so the
// judges can find the post and read its engagement (views, likes,
// reposts, quotes, replies) to rank the entry.
//
// Node 22, standard library only. No network access. The program exits
// non-zero if POST.json is missing, so a bad submission fails loudly
// instead of handing in an empty output.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(botDir, "POST.json"), join(outDir, "POST.json"));
console.log("POST.json copied to", join(outDir, "POST.json"));
