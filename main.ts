// news-image-20261120: copies the entry image to the output directory.
// The grader runs this twice and both runs must write identical bytes, so the
// program only copies a fixed file and never generates anything at run time.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const src = fileURLToPath(new URL('./entry.png', import.meta.url));
// Fail loudly instead of silently copying a broken entry: the source must be
// a real, non-empty file, otherwise the graded output would be invalid.
const srcStat = statSync(src, { throwIfNoEntry: false });
if (!srcStat?.isFile() || srcStat.size === 0) {
  throw new Error(`entry image missing or empty: ${src}`);
}

const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? '/output');
mkdirSync(outDir, { recursive: true });
// A plain byte-for-byte copy: no timestamps or randomness are involved,
// so the two graded runs always produce the same file.
copyFileSync(src, join(outDir, 'entry.png'));
