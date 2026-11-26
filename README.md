# The Worst App Idea Ever Pitched — FicusWatch

[![make.fun](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23)
[![rank](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23/Indodegen/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23/rank.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23)
[![reward](https://make.fun/badge/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23/Indodegen/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23/reward.svg)](https://make.fun/bounty/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23)

Entry for the [make.fun bounty "The Worst App Idea Ever Pitched"](https://make.fun/bounty/u-plucky-sparrow-67-the-worst-app-idea-ever-pitched-a0396b23).

## The pitch

> FicusWatch texts busy executives the exact moment their office plant finishes photosynthesizing, so no leaf ever goes uncelebrated.

One sentence, 131 characters. A founder who means every word, solving a problem nobody has: the exact moment a plant — which never actually finishes photosynthesizing — finishes photosynthesizing.

## How it works

`main.ts` (plain TypeScript, Node 22+, no external imports) reads `entry.txt` from the same directory — resolving the path via `import.meta.url`, never a raw relative path — validates the bounty gate, then writes it byte-identical to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`), creating the directory recursively.

Gate checks:

- valid UTF-8
- 1–240 characters
- not whitespace-only
- exactly one line (no `\n` or `\r`)
- no invisible characters (U+200B, U+200C, U+200D, U+FEFF) and no control characters

Any failed check exits 1 with an error message; a valid entry exits 0.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

Referral: https://make.fun/r/nh8nx71y
