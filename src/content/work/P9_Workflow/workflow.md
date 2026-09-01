---
title: "Workflow: Human and GPT"
description: |
  A repeatable collaboration loop for giving GPT accurate project state with
  minimal explanation, then testing and committing small changes.
publishDate: "2026-09-01 00:00:00"
tags:
  - Workflow
  - AI
  - Collaboration
  - Development
---

# Human and GPT Workflow

Effective AI collaboration depends on shared state.

The objective is not to keep the entire project permanently inside a conversation. It is to make restoring accurate context cheap.

> When explaining the state of the project becomes harder than showing it, show it.

## 1. Generate the tree

Start with a machine-readable view of the project.

```text
project-tree.txt
```

The tree lets GPT see the actual structure rather than relying on a verbal reconstruction.

It can identify:

- live source files
- architecture
- content projects
- experiments
- duplicates
- likely dependencies
- files relevant to the next task

## 2. Let GPT select context

Do not guess which twenty files might matter.

Provide the tree first.

GPT can then identify the smallest useful set of files required to understand the current problem.

## 3. Create a curated snapshot

Package that selection into one archive.

```text
gpt-working-project.zip
```

This becomes a temporary canonical snapshot:

> This is what exists now.

It is broad enough to expose relationships between files without requiring the entire repository.

## 4. Use a real project as the fixture

Keep at least one real piece of content exercising the system.

A change is not finished because the code looks plausible.

It needs to survive actual content.

## 5. Make one meaningful change

Keep changes small enough that their effects remain understandable.

Change.

Run.

Look.

Report the result.

## 6. Feed back reality

Useful feedback includes:

- screenshots
- terminal output
- browser errors
- Git status
- the changed file
- visual judgement

Source code describes intended behaviour.

The running project reveals actual behaviour.

## 7. Commit known-good states

Once a meaningful step works, commit it.

```text
KNOWN GOOD
```

A Git checkpoint reduces dependence on conversational memory and makes experimentation safer.

## 8. Refresh context when confidence drops

Do not spend excessive time reconstructing project state from chat history.

If confidence drops:

```text
TREE
  |
  v
CURATED SNAPSHOT
  |
  v
ESTABLISH REALITY AGAIN
```

Refreshing reality can be cheaper than debugging an assumption.

## The loop

```text
PROJECT
   |
   v
TREE
   |
   v
GPT SELECTS CONTEXT
   |
   v
CURATED SNAPSHOT
   |
   v
SMALL CHANGE
   |
   v
RUN + TEST
   |
   v
SCREENSHOT / TERMINAL
   |
   v
DIAGNOSE
   |
   v
COMMIT
   |
   +------> repeat
```

## Division of effort

The human supplies things that are cheap for the human to provide:

- intent
- files
- screenshots
- visual judgement
- terminal results

GPT handles things that are cheap for the model to perform:

- reading structure
- tracing dependencies
- comparing implementations
- identifying relevant context
- generating changes
- diagnosing failures

The goal is not for either side to imitate the other.

The goal is to exchange the smallest amount of information required for each side to do what it does well.

## The result

High-quality shared state with low human effort.

That makes context recovery inexpensive, experimentation safer and the collaboration increasingly useful as the project becomes more complex.
