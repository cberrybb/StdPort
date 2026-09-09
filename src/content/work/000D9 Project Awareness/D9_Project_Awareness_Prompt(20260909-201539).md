---
title: "D9: Project Awareness Prompt"
description: |
  A reusable macOS/zsh workflow for bringing an AI into an existing project,
  establishing current reality from evidence, and creating a compact textual
  context package before any project changes are attempted.
publishDate: "2030-09-01 00:00:00"
tags:
  - AI
  - Commands
  - Context
  - Workflow
tileFilter: "#5e7bb0"
tileL1: "D9 Project Awareness"
tileL2: "The prompt that tells AI how to help"
---

# Project Awareness Prompt

This is for **AI onboarding** — getting an AI to assist you with good knowledge
of the current state of the project.

Copy the **first prompt below** into an AI and follow the instructions it gives
you. The AI will guide the onboarding process from there: first creating a
project tree, then creating a compact text-context package, then reading and
classifying the project before making changes.

You should not need to explain the project manually or decide which files matter.
The AI should discover that from the project evidence.

## Project Awareness Prompt

```text
PROJECT AWARENESS MODE

I have an existing project open in VS Code.

Assume macOS + zsh unless I explicitly type:

win

If I type "win", switch to the equivalent Windows/PowerShell workflow.

Do not ask which operating system I am using before starting.

Your immediate job is NOT to modify the project, redesign it, refactor it,
fix it, recommend features or start implementing anything.

Your first job is to establish an accurate working understanding of the
project as it exists RIGHT NOW.

PROJECT REALITY must be discovered from evidence.

Do not infer confidently from filenames, folder names, documentation claims,
dates, apparent naming conventions or this prompt alone.

Assume:

- the project may be at any stage of development;
- it may contain abandoned experiments, backups, obsolete files, duplicate
  implementations or temporary tests;
- some files named "test" may actually be intentional portfolio examples,
  demonstrations or fixtures;
- documentation may be incomplete, stale, aspirational, historical or
  contradictory;
- filenames may not reliably indicate which implementation is live;
- the current working state may differ from committed Git history;
- Git may contain committed and uncommitted work;
- files may contain project history, methodology, design reasoning, workflow or
  narrative that matters even when they are not executable;
- real content, examples and fixtures may reveal the system more accurately
  than abstract documentation;
- generated folders, dependencies and caches may be large but useless for
  understanding the project;
- large asset collections may matter structurally without their binary bytes
  being necessary for initial awareness;
- I should not have to manually reconstruct or classify the architecture,
  documentation or project history for you.

Our objective is a compact, high-value representation of the project that gives
you enough awareness to collaborate competently.

EFFICIENCY IS A PRIMARY CONSTRAINT.

Optimize for:

    project understanding gained
    -----------------------------
    context size + human effort

Prefer cheap, high-information text before expensive bulk context.

For project-owned Markdown, default to INCLUDING ALL OF IT unless there is a
strong reason not to.

Default bias:

INCLUDE BROADLY:
- .md and .txt
- source code and templates
- CSS
- JavaScript / TypeScript
- configuration and schemas
- JSON / YAML / TOML
- scripts
- project instructions
- agent / AI instructions
- lightweight project-state text

REPRESENT BY TREE/LISTING WHERE POSSIBLE:
- large image collections
- video
- audio
- binary assets
- generated media

EXCLUDE:
- node_modules or equivalent dependencies
- build output
- framework-generated directories
- caches
- .git internals
- archives already present in the project
- temporary files
- secrets and credentials

--------------------------------------------------
PHASE 1 — CREATE THE PROJECT TREE
--------------------------------------------------

Start with ONE copy-and-paste macOS/zsh terminal command.

Its purpose is to create:

PROJECT_TREE.txt

INSIDE the current project.

Use:

find . \( -name node_modules -o -name .git -o -name dist -o -name .astro -o -name .cache -o -name coverage \) -prune -o -print | sort > PROJECT_TREE.txt

The command must not modify existing project files.

Do not ask me to describe the project manually.
Do not ask me to upload the whole project.
Do not give me later-phase commands yet.

Present the command with this exact lead-in:

Run this from the **project root** in the VS Code terminal (or type `win` for the Windows version):

Then show the macOS/zsh command.

After the command, tell me only to upload PROJECT_TREE.txt.

Do not give me Windows instructions unless I type `win`.

WAIT for the tree.

--------------------------------------------------
PHASE 2 — READ THE PROJECT SHAPE
--------------------------------------------------

When I upload PROJECT_TREE.txt, READ IT before asking for anything else.

Establish the likely:

- framework, language and tooling;
- root configuration;
- entry points and routes;
- source/components/modules;
- content/data and schemas;
- styles and scripts;
- documentation;
- project and AI instructions;
- tests, examples and fixtures;
- portfolio content;
- assets;
- experiments/backups/legacy material;
- duplicate implementations;
- ambiguous live paths.

Do not classify something as junk merely because its name contains test, old,
new, backup, draft or example.

A "test" may be:

1. disposable internal development work;
2. an implementation fixture;
3. a demonstration of a working convention;
4. deliberate portfolio content.

Determine that from contents and implementation relationships.

The human should NOT have to perform this classification for you.

--------------------------------------------------
PHASE 3 — CREATE THE TEXT CONTEXT PACKAGE
--------------------------------------------------

After reading the tree, give me ONE copy-and-paste macOS/zsh command that creates:

project-text-context.zip

inside the project.

Broadly include project-owned human-readable text:

- all project .md and .txt;
- Astro / HTML / templates;
- CSS;
- JavaScript / TypeScript;
- .mjs / .cjs;
- JSON / YAML / TOML;
- configuration and schemas;
- scripts;
- README files;
- agent / AI instructions;
- PROJECT_TREE.txt;
- other reasonably small human-readable project files useful for orientation.

A normal command pattern is:

find . \( -name node_modules -o -name .git -o -name dist -o -name .astro -o -name .cache -o -name coverage \) -prune -o -type f \( -name '*.md' -o -name '*.txt' -o -name '*.astro' -o -name '*.html' -o -name '*.css' -o -name '*.ts' -o -name '*.tsx' -o -name '*.js' -o -name '*.jsx' -o -name '*.mjs' -o -name '*.cjs' -o -name '*.json' -o -name '*.yaml' -o -name '*.yml' -o -name '*.toml' -o -name '.gitignore' \) -print0 | sort -z | xargs -0 zip project-text-context.zip

Adapt only if the actual tree reveals other useful text formats.

Do not make me manually enumerate files.
Do not include binary asset libraries merely because they exist.
Do not include dependencies, generated output, caches, existing archives or
secrets.

Tell me only what it broadly packages and to upload project-text-context.zip.

WAIT for the ZIP.

--------------------------------------------------
PHASE 4 — READ AND CLASSIFY THE TEXT
--------------------------------------------------

When I upload project-text-context.zip, READ THE ACTUAL FILES.

Do not ask me to classify them first.

Classify material internally from evidence:

CURRENT IMPLEMENTATION
Executable/current source that actually defines behaviour.

PROJECT DEFINITIONS
Schemas, configuration, content models and implemented conventions.

CURRENT DOCUMENTATION
Documentation that accurately describes the present project.

PROJECT HISTORY
Origin, development history and narrative explaining previous/current states.

METHODOLOGY
Reasoning, design/research method and principles explaining WHY work is
approached in a particular way.

WORKFLOW / OPERATING INSTRUCTIONS
Authoring, AI collaboration, verification and development practices.

PORTFOLIO CONTENT
Material intended to be shown as actual authored/project work.

PORTFOLIO TESTS / DEMONSTRATIONS
Material deliberately exercising or demonstrating portfolio/content conventions.

INTERNAL TESTS / EXPERIMENTS
Material created to test implementation mechanics rather than form portfolio work.

LEGACY / SUPERSEDED MATERIAL
Older material retained for history/reference but not apparently current.

UNCERTAIN
Anything whose role cannot yet be established.

Do not force every file into a category when evidence is insufficient.
Do not mistake historical truth for current implementation.
Do not mistake future intent for implemented reality.
Do not mistake schema-valid content for polished portfolio content.

--------------------------------------------------
PHASE 5 — PRESERVE THE NARRATIVE
--------------------------------------------------

Treat project-owned documentation as first-class context.

Look for:

- project purpose and inception;
- history;
- requirements;
- design reasoning;
- methodology;
- workflow;
- conventions;
- instructions;
- plans and progress;
- TODOs and decisions;
- known problems;
- experiments and changelogs;
- AI collaboration instructions;
- notes explaining WHY the project works the way it does.

Distinguish clearly between:

1. CURRENT implementation;
2. CURRENT definitions/conventions;
3. CURRENT documentation;
4. historical narrative;
5. intended/future work.

--------------------------------------------------
PHASE 6 — TRACE THE LIVE IMPLEMENTATION
--------------------------------------------------

Use source evidence to establish how the project actually works.

Prioritize:

- application entry points;
- routing;
- content/data models;
- schemas;
- configuration;
- core components;
- important utilities;
- rendering flow;
- global styling;
- build/runtime scripts;
- dependencies;
- conventions implemented in code.

Trace imports/references where necessary.

If implementations conflict, prefer direct implementation evidence over naming
or documentation assumptions.

Report disagreements rather than inventing a reconciliation.

--------------------------------------------------
PHASE 7 — USE REAL EXAMPLES
--------------------------------------------------

Use representative real content, fixtures, tests or examples where they reveal
how the system is actually used.

Do not classify every example as portfolio content.
Do not classify every test as disposable junk.

For binary material, first ask whether seeing the actual bytes materially
improves understanding.

If filenames, paths and references are enough, use the tree.

Only request selected binaries when their actual contents are necessary to
resolve an important awareness question.

--------------------------------------------------
PHASE 8 — CAPTURE CURRENT STATE
--------------------------------------------------

Where useful, establish lightweight evidence such as:

- Git status;
- current branch;
- recent commit summary;
- package manifest;
- relevant configuration;
- project tree;
- current text context;
- uncommitted changes.

Do not stage, commit, reset, clean, checkout, overwrite, delete or modify project
files during awareness mode.

--------------------------------------------------
PHASE 9 — IDENTIFY UNCERTAINTY
--------------------------------------------------

Notice contradictions rather than inventing a story.

If one small additional file, command, screenshot or browser result would resolve
an important ambiguity, ask for that evidence.

Otherwise preserve the uncertainty explicitly.

--------------------------------------------------
PHASE 10 — PROJECT AWARENESS REPORT
--------------------------------------------------

Produce a concise PROJECT AWARENESS REPORT using:

CURRENT PURPOSE
CURRENT STATE
ARCHITECTURE
PROJECT DEFINITIONS
DOCUMENTATION / METHODOLOGY / HISTORY
WORKING CONVENTIONS
PORTFOLIO VS TEST MATERIAL
LIVE VS HISTORICAL
CURRENT CHANGES
DOCUMENTED DIRECTION
UNCERTAINTIES
HIGH-VALUE FILES

Do not produce a generic code review.
Do not suggest redesigns.
Do not generate a roadmap merely because you can.
Do not start fixing things.

The goal is for me to be able to say:

"Yes. You understand the project we actually have."

--------------------------------------------------
PHASE 11 — VERIFY AWARENESS
--------------------------------------------------

Treat my correction of the awareness report as authoritative evidence about the
current working state.

Prefer cheap verification over extended argument.

Once I confirm awareness is sufficient:

STOP PROJECT AWARENESS MODE.

Only then choose a bounded implementation objective.

For later bounded modifications, prefer complete replacement files when that is
safer than fragment edits.

For Markdown/content files, return the COMPLETE `.md` file including its full
frontmatter and complete body unless I explicitly request a patch. State the
exact destination path and preserve the exact filename.

--------------------------------------------------
OPERATING PRINCIPLES
--------------------------------------------------

Prefer evidence over inference.
Prefer real examples over imagined examples.
Prefer efficient context over indiscriminate bulk transfer.
Be generous with inexpensive, high-information project text.
Be conservative with high-volume binary material.
Preserve project history and methodology.
Expose uncertainty.
Do not modify the project while learning it.
Do not assume success without verification.
Make me do as little manual context curation as reasonably possible.

I should mainly have to:

run the tree command;
upload PROJECT_TREE.txt;
run the text-context command;
upload project-text-context.zip;
correct anything you misunderstood.

START NOW WITH PHASE 1 ONLY.
```

## Working-file exchange after awareness

Once awareness has been established, ordinary changes should use a narrow file
exchange rather than another broad project dump.

```text
AI identifies exact current files needed
        ↓
human ZIPs only those files
        ↓
AI reads the actual current files
        ↓
AI returns COMPLETE replacement files
        ↓
human overwrites originals
        ↓
run / inspect / verify
```

The AI should request the smallest practical set of CURRENT files needed for the
bounded change.

When practical, provide one macOS/zsh command that creates a ZIP containing
exactly those files while preserving relative paths.

For every replacement:

- preserve the exact filename;
- state the exact destination path;
- return the complete file contents;
- include required imports/configuration;
- preserve required headers/frontmatter;
- do not omit unchanged sections merely to shorten the response.

For Markdown/content files:

**return the complete `.md` file including its full frontmatter.**

This is especially important for:

- AI onboarding documents;
- methodology;
- workflow;
- project instructions;
- schema-dependent content.

A replacement should be safe to overwrite directly without requiring the human
to merge fragments.

The working loop is:

**select → transfer → replace → verify**

## Operational prompt — refresh project awareness

When the AI's project map is stale, return to:

```text
current project
      ↓
PROJECT_TREE.txt
      ↓
project-text-context.zip
      ↓
classify and reconstruct
      ↓
verify understanding
      ↓
continue
```

If using macOS/zsh, follow the normal workflow above.

If using Windows, type:

**win**

and use the equivalent Windows/PowerShell workflow instead.

## Optional live delta tracker

During active Git-based development, a lightweight uncommitted diff can provide
a temporary view of work since the current committed state.

It is separate from project awareness and is not a checkpoint or project memory.

```text
known-good Git state
        ↓
active work
        ↓
status.diff
        ↓
inspect / verify / correct
        ↓
next known-good Git state
```

Git remains the authority for committed history.

## Awareness tools

```text
PROJECT_TREE.txt
→ what exists and where

project-text-context.zip
→ inexpensive textual evidence used to reconstruct awareness

working-file ZIP
→ exact current files needed for one bounded change

status.diff
→ optional view of current uncommitted Git delta
```

The tree is the map.

The text context is the orientation evidence.

Working-file ZIPs support bounded modifications.

Git provides recoverable checkpoints.

The project itself remains the source of truth.
