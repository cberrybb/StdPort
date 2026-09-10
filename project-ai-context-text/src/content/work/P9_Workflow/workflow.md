---
title: "Workflow: Human and GPT"
description: |
  The concrete operating loop for orienting from project anchors, exchanging
  exact current files, testing small changes and checkpointing known-good states.
publishDate: "2026-09-01 00:00:00"
tags:
  - Workflow
  - AI
  - Collaboration
  - Development
tileFilter: "#5e7bb0"
# tileImage: "A1T.jpg"
tileL1: "P9 Workflow"
tileL2: "Kontrolle, Vertrauen - a state of immediate usefulness"
---

# Human and GPT Workflow

This is the working procedure.

The project carries enough anchors to re-establish reality without requiring either the human or GPT to reconstruct the whole collaboration from memory.

The operating principle is:

> Orient → change → observe → verify → checkpoint.

## 1. Establish project awareness

When broad orientation is needed, start with the current project tree:

```text
gpt-tree.txt
```

Generate it from the project root:

```powershell
tree /F /A > gpt-tree.txt
git status
```

The tree is the map. It shows what exists and where.

It should be used before asking the human to explain the repository manually.

## 2. Build the awareness package when needed

Use the tree to select inexpensive, high-value project evidence.

The current awareness package is:

```text
gpt-context-current.zip
```

It should favour:

- Markdown and narrative
- project instructions
- current Astro / TypeScript / CSS source
- configuration
- README and agent instructions
- `gpt-tree.txt`
- useful current-state evidence such as `status.diff`

It should normally exclude:

- `node_modules`
- `.git`
- `dist`
- `.astro`
- caches
- generated output
- existing archives
- large binary asset collections
- secrets

The awareness package is for orientation, not for making every individual edit.

Before requesting another file, GPT should check whether a sufficiently current copy is already available.

## 3. Inspect before proposing changes

When an awareness ZIP or working ZIP is supplied, inspect the actual files before proposing implementation changes.

Distinguish:

```text
what the code currently does
what the documentation says
what Git / status evidence says
what is inferred
what remains uncertain
```

If these disagree, expose the disagreement.

Do not silently resolve uncertainty by choosing the version that sounds most plausible.

## 4. Define one controlled objective

Before editing, identify the current problem narrowly enough that success can be observed.

Useful questions are:

```text
What are we changing?
What should remain unchanged?
What evidence will show that it worked?
What are the likely failure points?
```

Do not let an interesting secondary problem replace the current problem.

## 5. Identify the exact current files

For an ordinary change, GPT identifies the smallest exact set of files it needs.

The human packages only those current files when necessary.

The normal exchange is:

```text
AI identifies exact files needed
→ human ZIPs only those files
→ uploads ZIP
→ AI inspects actual current files
→ AI returns complete replacement files
→ human overwrites originals
```

Do not ask the human to manually reproduce context that is already available.

Do not generate replacement source from a stale awareness copy when a file may have changed since that package was made.

## 6. Prefer complete replacement files

When practical, return complete files with:

- the original filename
- the exact destination path
- no unnecessary conversion or reformatting

For source Markdown, edit the raw text directly. Do not pass it through document-conversion tooling that may alter frontmatter, escaping or syntax.

A complete replacement is often easier to verify than a set of instructions for manually editing fragments.

## 7. Run and observe

The human overwrites the original and runs the project.

Return the cheapest useful evidence:

- screenshot
- terminal output
- browser error
- editor diagnostic
- Git status
- visible behaviour

The human does not need to diagnose the technical cause before returning the evidence.

## 8. Diagnose from evidence

GPT compares expected and observed behaviour.

If the result is wrong:

```text
evidence
→ smallest useful hypothesis
→ cheap test or bounded correction
→ run again
```

Avoid stacking speculative fixes.

If the evidence disproves the current explanation, discard the explanation rather than defending it.

## 9. Verify success

A change is not known-good merely because the replacement file was produced.

Verify the behaviour that mattered.

Where verification is cheap, verify.

Where it is not available, state the remaining uncertainty.

This is the practical route from trust toward Kontrolle: important claims become observable wherever reasonably possible.

## 10. Commit the known-good state

Once the change works:

```powershell
git status
git add .
git commit -m "Describe the known-good change"
git status
```

Push when the remote should also become the durable checkpoint:

```powershell
git push origin main
git status
```

Do not claim a commit or push succeeded until the terminal evidence confirms it.

Git is the durable state anchor.

## 11. Keep a short fragility buffer between anchors

Between commits, a working diff can preserve evidence of what has changed.

For this project:

```text
status.diff
```

The distinction is useful:

```text
Git commit   = durable known-good anchor
working diff = live evidence since that anchor
```

A stale diff is dangerous if it is presented as current state, so refresh it before using it as awareness evidence.

## 12. Refresh orientation when confidence drops

If the conversation and project state begin to diverge, stop trying to remember harder.

Refresh the relevant anchor:

```text
exact current file
gpt-tree.txt
gpt-context-current.zip
status.diff
git status
running site
screenshot / terminal evidence
```

Use the cheapest authoritative source for the uncertainty at hand.

Do not document information merely because GPT needs it if GPT can cheaply retrieve the authoritative source itself.

## The normal development loop

```text
OBJECTIVE
   ↓
ORIENT FROM ANCHORS
   ↓
IDENTIFY EXACT FILES
   ↓
INSPECT CURRENT FILES
   ↓
MAKE ONE BOUNDED CHANGE
   ↓
RUN
   ↓
OBSERVE
   ↓
VERIFY / CORRECT
   ↓
COMMIT KNOWN-GOOD STATE
   ↓
UPDATE USEFUL ANCHORS
   ↓
repeat
```

## Two scales of context

The workflow deliberately uses two different scales.

### Project awareness

```text
gpt-tree.txt
+
gpt-context-current.zip
```

Use these when GPT needs to understand the project broadly: purpose, structure, narrative, implementation, conventions, accomplishments and TODOs.

### Working exchange

```text
only the exact current files needed for the change
```

Use this for implementation.

This prevents the awareness package from becoming a substitute for checking current source, while also preventing every small change from requiring the whole project to be uploaded again.

## Division of effort

The human supplies what is cheap and authoritative for the human:

- intent
- priorities
- disciplinary judgement
- visual judgement
- acceptance or rejection
- current files
- observed evidence

GPT handles what is cheap for the model:

- reading structure
- tracing dependencies
- comparing files
- identifying the required context
- generating replacements
- diagnosing failures
- proposing verification
- articulating implications

The human does not need to become the model's context manager.

The model does not get to substitute confidence for evidence.

## Working rule

> When explaining the state of the project becomes harder than showing it, show it.

Then:

> When confidence drops, reorient from the cheapest trustworthy anchor.

This keeps the workflow fast because each cycle can begin from what previous cycles left behind rather than from an attempted reconstruction of everything that happened.
