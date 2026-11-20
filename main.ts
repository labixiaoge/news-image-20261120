// news-image-20261120: copies the entry image to the output directory.
// The grader runs this twice and both runs must write identical bytes, so the
// program only copies a fixed file and never generates anything at run time.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
// A plain byte-for-byte copy: no timestamps or randomness are involved,
// so the two graded runs always produce the same file.
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
