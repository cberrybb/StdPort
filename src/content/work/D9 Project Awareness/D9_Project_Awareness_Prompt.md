---
title: "D9: Project Awareness Prompt"
description: |
  A reusable prompt for bringing an AI into an existing project at any stage,
  establishing current reality from evidence, and creating a compact context package.
publishDate: "2026-09-01 00:00:00"
tags:
  - AI
  - Commands
  - Context
  - Workflow
---

# Project Awareness Prompt

Use this when bringing an AI into an existing project, whether the project is new, half-built, mature, messy, documented, undocumented, working or broken.

Assumption: the project is already open in VS Code and you can run commands in its terminal.

The purpose is not to explain the project manually.

The purpose is to let the AI **discover enough evidence to establish the current reality of the project for itself**.

Copy the entire prompt below into the AI.

```text
PROJECT AWARENESS MODE

I have an existing project open in VS Code.

Your immediate job is NOT to modify it, redesign it, refactor it, fix it,
recommend features, or start implementing anything.

Your first job is to establish an accurate working understanding of the
project as it exists RIGHT NOW.

Assume:

- the project may be at any stage of development;
- it may contain abandoned experiments, backups, obsolete files or duplicate implementations;
- documentation may be incomplete, stale, aspirational or contradictory;
- filenames may not reliably indicate which implementation is live;
- the current working state may differ from what documentation claims;
- Git may contain committed and uncommitted work;
- some files may contain narrative or design reasoning that is important even
  if they are not executable source;
- the project may contain real examples, fixtures or content that reveal the
  system more accurately than abstract documentation;
- generated folders, dependencies and caches may be large but useless for
  understanding the project;
- I should not have to manually reconstruct the architecture for you.

Treat PROJECT REALITY as something to discover from evidence, not something
to infer confidently from filenames or from this prompt.

Our objective is to create a compact but high-value representation of the
project that gives you enough awareness to collaborate competently.

EFFICIENCY IS A PRIMARY CONSTRAINT.

Optimize for:

    project understanding gained
    -----------------------------
    context size + human effort

Prefer cheap, high-information text before expensive bulk context.

In particular, Markdown and other small text documentation should normally be
included broadly because it is inexpensive and may contain the project's
purpose, history, decisions, conventions, current state or intended direction.

Do not spend excessive effort deciding which `.md` files might matter when
including them all is cheap.

Conversely, be selective with large files and binary assets. A few megabytes
of images, videos, archives, generated output or duplicated assets can consume
far more context-transfer cost while adding less project awareness than a
directory listing and the surrounding text/source files.

Default bias:

- INCLUDE broadly: `.md`, `.txt`, source code, configuration, schemas, scripts
  and other reasonably small human-readable files;
- SELECT carefully: images and other binaries when their actual contents are
  needed to understand behaviour;
- REPRESENT BY NAME/LISTING where possible: large asset collections whose
  filenames and structure are informative but whose bytes are not;
- EXCLUDE: dependencies, generated output, caches, archives, Git internals and
  other high-volume/low-information material.

Do not optimize for the smallest ZIP as an end in itself.

Optimize for the smallest practical package that avoids losing inexpensive,
high-value project knowledge.

--------------------------------------------------
PHASE 1 — DISCOVER THE ENVIRONMENT
--------------------------------------------------

Start by giving me ONE copy-and-paste terminal command appropriate for the
terminal/environment I appear to be using.

Its purpose is to produce a useful project tree.

The tree should:

- show files and directories;
- preserve enough structure to understand the project;
- exclude obvious dependency directories;
- exclude build output;
- exclude caches;
- exclude Git internals;
- exclude other obvious generated noise where appropriate;
- NOT alter the project.

If you cannot know my shell from the available context, give me the shortest
safe command to identify it first.

Do not give me commands for later phases yet.

Give me only the command needed for this phase and a very short statement of
what I should return to you.

WAIT for my result.

--------------------------------------------------
PHASE 2 — READ THE SHAPE OF THE PROJECT
--------------------------------------------------

When I return the tree, inspect it before asking for more information.

From the tree, determine:

- likely framework/language/tooling;
- important root configuration;
- likely entry points;
- source directories;
- content/data directories;
- documentation;
- tests;
- scripts;
- styles;
- assets;
- examples or fixtures;
- possible duplicate/legacy implementations;
- files whose names suggest project instructions or AI instructions;
- areas where the live implementation is ambiguous.

Do NOT assume that every apparently important file needs to be uploaded.

Select context based on information value.

Prefer the smallest set of files that can establish the project accurately.

--------------------------------------------------
PHASE 3 — PRESERVE THE NARRATIVE
--------------------------------------------------

Treat human-readable documentation as first-class project context.

Look for Markdown, text or similar files that may contain:

- project purpose;
- origin or narrative;
- requirements;
- design reasoning;
- methodology;
- workflow;
- conventions;
- instructions;
- plans;
- progress;
- TODOs;
- decisions;
- known problems;
- experiments;
- changelogs;
- AI collaboration instructions;
- notes explaining WHY the project works the way it does.

Unless there is a strong reason not to, include these files in the context
package.

For Markdown specifically, default to including ALL `.md` files that belong to
the project, excluding obvious dependency/generated/cache directories.

Markdown is normally cheap context. Missing one important design note,
instruction, progress record or piece of project narrative is usually a worse
trade than including several irrelevant small Markdown files.

Apply the same principle to other small text documentation where practical.

Do not dismiss them as website copy merely because they live inside a content
directory.

At the same time, distinguish between:

1. evidence of CURRENT implementation;
2. documentation of INTENT;
3. historical narrative;
4. speculative/future plans.

Do not silently treat those categories as equivalent.

--------------------------------------------------
PHASE 4 — FIND THE IMPLEMENTATION
--------------------------------------------------

Select the source files required to understand how the project actually works.

Prioritize files that establish:

- application entry points;
- routing;
- content/data models;
- schemas;
- configuration;
- core components/modules;
- important utilities;
- global styling or presentation rules where relevant;
- build/runtime scripts;
- package dependencies;
- conventions that are implemented in code.

Trace important imports or references where necessary.

If the tree suggests multiple implementations of the same feature, include
enough evidence to determine which is live.

Do not decide that the newest-looking filename is automatically current.

Where possible, use imports, routes, configuration, Git state or other direct
evidence to identify the active path.

--------------------------------------------------
PHASE 5 — INCLUDE REAL EXAMPLES
--------------------------------------------------

Include representative real content, fixtures, examples or test cases when
they reveal how the system is actually used.

A real working example can be more valuable than several explanatory files.

Prefer examples that exercise important conventions or features.

Do not include a huge asset library merely because it exists.

Treat large/binary material differently from text.

Before including images, video, audio, archives, datasets or other potentially
large files, ask whether their BYTES are necessary for project awareness.

If filenames, dimensions, relationships or presence are enough, preserve that
information through the tree or a lightweight listing instead.

Include representative binaries only when seeing the actual asset materially
improves understanding of the implementation or a real example.

A context package should not become tens or hundreds of megabytes merely to
prove that an asset folder exists.

--------------------------------------------------
PHASE 6 — CAPTURE CURRENT STATE
--------------------------------------------------

Where available and useful, include lightweight evidence of current project
state such as:

- Git status;
- current branch;
- recent commit summary;
- package manifest;
- lockfile only if dependency resolution matters;
- project tree;
- relevant configuration.

Uncommitted changes matter.

Do not assume the committed repository is identical to the working project.

If Git is available, the context should make it possible to distinguish a
known committed state from current local changes.

Do not modify, commit, reset, clean or stage anything.

--------------------------------------------------
PHASE 7 — EXCLUDE LOW-VALUE MATERIAL
--------------------------------------------------

Normally exclude:

- node_modules or equivalent dependencies;
- build output;
- caches;
- framework-generated directories;
- Git internals;
- temporary files;
- large binary collections that do not aid understanding;
- redundant copies when one canonical file is clearly sufficient;
- secrets;
- credentials;
- environment values containing private keys, tokens or passwords.

Do not package secrets even if they are technically part of the project.

If configuration depends on environment variables, include a safe example or
the variable NAMES where available, not secret values.

--------------------------------------------------
PHASE 8 — IDENTIFY UNCERTAINTY
--------------------------------------------------

Before creating the package, notice contradictions and ambiguity.

Examples:

- documentation describes something the code does not appear to implement;
- two components appear to implement the same feature;
- a backup may be confused with the live file;
- a TODO claims something is unfinished although the code appears to contain it;
- the working tree contains changes not reflected in documentation;
- examples use conventions that differ from written instructions.

Do not try to resolve uncertainty by inventing a story.

Preserve enough evidence in the package to investigate it later.

If one small additional command or file would resolve an important ambiguity,
ask for that evidence before packaging.

Otherwise record the uncertainty for the orientation stage.

--------------------------------------------------
PHASE 9 — BUILD THE CONTEXT PACKAGE
--------------------------------------------------

Once you have inspected the tree and have enough evidence to select useful
context, give me ONE copy-and-paste terminal command, or one compact
copy-and-paste command block if the shell requires it, that creates a ZIP
containing the selected project context.

Generate the command yourself from the project structure you discovered.

The package should contain, where relevant:

- the project tree;
- important root configuration;
- selected live source;
- relevant documentation and narrative;
- representative examples;
- safe current-state information;
- anything else you judge necessary for rapid project awareness.

Preserve relative paths where practical so project structure remains legible.

Name the archive something obvious, for example:

project-ai-context.zip

Do not modify the actual project files while creating the package.

Temporary packaging files may be created if necessary, but keep the process
simple and tell me what was created.

After giving me the command, tell me only:

1. what the command will create;
2. the ZIP filename to upload;
3. whether any temporary folder can be deleted afterward.

Then WAIT for me to upload the ZIP.

--------------------------------------------------
PHASE 10 — ORIENT FROM THE PACKAGE
--------------------------------------------------

When I upload the ZIP, READ IT before proposing work.

Reconstruct the project from the supplied evidence.

Produce a concise PROJECT AWARENESS REPORT containing:

CURRENT PURPOSE
What the project appears to be trying to achieve now.

CURRENT STATE
What is actually implemented or present now.

ARCHITECTURE
The important structure and execution/content flow.

WORKING CONVENTIONS
Naming, folders, syntax, schemas, authoring patterns or other conventions I
need to preserve.

LIVE VS HISTORICAL
Anything that appears to be old, duplicated, experimental, backup material or
documentation of previous states.

CURRENT CHANGES
Relevant uncommitted or recently changed work if that information is present.

DOCUMENTED DIRECTION
Important intended next steps or principles, clearly distinguished from
implemented reality.

UNCERTAINTIES
Anything you cannot establish confidently from the evidence.

HIGH-VALUE FILES
A short list of the files you consider most important to understanding future
changes.

Do not produce a large generic code review.

Do not suggest a redesign.

Do not generate a roadmap unless the project documentation explicitly makes
one necessary to understanding current state.

The goal is for me to be able to look at your report and say:

"Yes. You understand the project we actually have."

--------------------------------------------------
PHASE 11 — VERIFY YOUR AWARENESS
--------------------------------------------------

Treat my correction of your awareness report as authoritative evidence about
the current working state.

If I correct something:

- update your model of the project;
- do not defend an inference that contradicted my direct observation;
- distinguish the corrected fact from older documentation;
- carry the corrected state forward.

If an important claim can be cheaply checked from a file, terminal command,
browser result or screenshot, prefer verification over extended discussion.

Once I confirm that your project awareness is good enough, STOP awareness mode.

Only then should we choose a small implementation objective.

--------------------------------------------------
OPERATING PRINCIPLES
--------------------------------------------------

Throughout this process:

Optimize for accurate shared state, not engagement.

Do not overwhelm me with branches we may never take.

Do not pursue interesting rabbit holes unless they are necessary to establish
the current project state.

Prefer evidence over inference.

Prefer a real example over an imagined one.

Prefer efficient context over indiscriminate bulk upload.

Be generous with inexpensive, high-information text—especially project
Markdown—and conservative with high-volume binary material.

Preserve narrative and reasoning when they explain why the project exists or
why it works the way it does.

Distinguish current reality from historical documentation and future intent.

Expose uncertainty rather than hiding it behind confident prose.

Do not change the project while learning the project.

Do not assume success without verification.

Make me do as little manual context curation as reasonably possible.

You should do the reasoning about what context you need.

I should mainly have to:

run a command;
return the result;
upload the package;
correct anything you misunderstood.

START NOW WITH PHASE 1 ONLY.
```

## What this prompt is for

This is a **bootstrap prompt**.

It does not describe a particular project. It describes how the AI should learn a project.

That distinction matters because the project may be:

```text
10 minutes old
6 months old
working
broken
well documented
barely documented
Astro
something else entirely
```

The AI's first task is to establish reality.

Only after that should it help change reality.

## Refreshing awareness

The same prompt can be used later when the project has moved significantly beyond the AI's reliable context.

You do not need to reconstruct the whole journey.

Return to the evidence:

```text
current project
      ↓
discover structure
      ↓
select high-value context
      ↓
package
      ↓
orient
      ↓
verify understanding
      ↓
continue
```

The package is a snapshot.

The project remains the source of truth.
