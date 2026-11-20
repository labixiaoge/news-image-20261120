# news-image-20261120 — build summary

- Competition: "Sum up 20 November's world news in one image", $250 shared by top 50
  (1st $50, 2nd $30, 3rd $15, 4th–10th $5, 11th–50th $3). Entry fee $0.
  Deadline 2026-11-22 00:00 UTC (2026-11-22 08:00 CST). 480 submissions at build time.
- Status: BUILT, NOT submitted. Submission is the main chat's job.

## The image (entry.png)

Newspaper front page, navy masthead "FRIDAY 20 NOVEMBER 2026 / THE WORLD IN
ONE DAY", five illustrated rows with bold headlines. AI-generated in one
media call, resized to 1024x1024 and palette-quantized; visually inspected —
all headlines spelled correctly. Stories (all verified against real news):

1. Trump, Xi and Putin meet in Shenzhen — first-ever three-way summit of the
   US, Chinese and Russian leaders (APEC sidelines); nuclear arms, Ukraine,
   Iran and trade on the agenda, no breakthrough.
2. Cyclone Akvan hits India today — severe cyclonic storm makes landfall
   around noon Friday on the Andhra Pradesh–Odisha coast, 90–100 km/h winds,
   ~50,000 evacuated, schools shut.
3. World Court: Myanmar guilty of genocide — ICJ in The Hague ruled Myanmar's
   military intended to destroy a substantial part of the Rohingya in 2017.
4. Riyadh tower struck as Gulf war widens — Houthi strike hit Riyadh's
   tallest skyscraper (Saudi sovereign wealth fund HQ); tanker hit near Oman
   amid continued Hormuz shipping attacks.
5. Anthropic's $2 trillion debut — ANT opened at $111.50 (+34% on the $83 IPO
   price), briefly valuing the Claude maker at ~$2 trillion; largest IPO on
   record ($81.3bn raised); closed $97.17 (+17%).

## Verification

- `main.ts` run twice (MAKEFUN_OUTPUT_DIR=out1 / out2): byte-identical,
  sha256 788df808a9834264c00ba0f344e972da38dba9eff4a78d4f1886eb1a08557b9b
- entry.png: 1024x1024, 350,879 bytes (<= 1 MiB), valid PNG
- Kit check (node cli/makefun.mjs check --worktree): 4 passed
  (competition_open, snapshot, license_osi, entrypoint), 1 failed
  (transcripts_present — expected; transcripts are bundled at submission),
  14 skipped, 5 checked at submission (repo_public, repo_owner,
  repo_created_after_open, commit_in_repo, duplicate_snapshot).
- Local commit: 36410df (6 files: LICENSE, README.md, entry.png, main.ts,
  package.json, .makefun/owner.json). Never pushed.

## Recording

`makefun record` does NOT apply to this competition: the server refused it
for news-image-20261119 (HTTP 400 — entries upload transcript bundles, not
recorded transcripts). Same as the 11-19 build: all repo files were written
by hand in this session; the transcript bundle is made by the main chat at
submission time (node cli/makefun.mjs bundle ... --effort default, harness
muse-app 0.1.0, provider ipnext, model ipnext/avocado-5.17-v2).

## Still to do (main chat)

1. Browser task: create public GitHub repo labixiaoge/news-image-20261120
   (no README/.gitignore/license init), upload the 6 committed files, set
   About description + website https://make.fun/bounty/news-image-20261120 +
   topics makefun, ai-agents, bounties, growth (422 lesson from 11-19: the
   About topics must be set or the first submit is rejected).
2. Bundle transcripts from this session, then submit with the kit CLI before
   2026-11-22 08:00 CST:
   node cli/makefun.mjs submit --competition news-image-20261120 --repo-url
   https://github.com/labixiaoge/news-image-20261120 --commit <GITHUB_HEAD_SHA>
   --title "20 November 2026 — World News in One Image" --bundle <bundle.tar.gz>
   --keypair ~/.makefun/keypairs/https_make.fun.json
   (run from inside the unpacked kit at /tmp/news-kit/news-image-20261120-kit)
3. Save the claim code + submission id in submission.json (same shape as
   ~/workspace/makefun/news-image-20261119/submission.json).
