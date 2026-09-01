---
title: "Working with GPT: Establish Reality Fast"
description: |
  A lightweight collaboration practice for keeping AI-assisted development
  accurate, fast and grounded in the real state of a project.
publishDate: "2026-09-01 00:00:00"
tags:
  - Process
  - AI
  - Collaboration
  - Development
---

# Working with GPT: Establish Reality Fast

The quality of AI-assisted development depends heavily on the quality of the context shared between the human and the model.

The aim is not to give GPT everything. It is to make establishing accurate shared context cheap enough that it can be refreshed whenever necessary.

> Give the model the smallest useful representation of reality, then let it ask for the detail it needs.

This reduces explanation, guessing and stale context.

## Start with the tree

Generate a machine-readable project tree.

The tree gives GPT an overview of the actual project rather than a human description of it.

From that it can identify:

- important source files
- architecture
- content structure
- experiments and duplicates
- likely dependencies
- which files it actually needs

## Let GPT choose the context

Rather than manually deciding what to upload, give GPT the tree and ask it which files would provide a useful working snapshot.

This avoids both extremes:

- uploading an entire repository
- providing too little information and forcing GPT to guess

## Create a curated snapshot

Package the selected files into a single archive.

The archive becomes a temporary canonical representation of the project:

> This is what exists now.

It can contain implementation, configuration, styles and one or two representative pieces of real content without carrying the weight of the entire repository.

## Use real work as the test fixture

A working project is more useful than artificial test data.

It shows how the system behaves with actual content, naming conventions, assets and edge cases.

Changes can then be evaluated against something concrete:

> Does the real project still work?

## Return visual evidence

Source code shows what should happen.

Screenshots show what actually happened.

Terminal output, browser errors and screenshots provide a fast feedback loop without requiring the user to diagnose the implementation themselves.

## Make small changes

Once shared context is reliable, change one meaningful thing at a time.

Run it.

Look at it.

Feed the result back.

This keeps errors local and makes diagnosis considerably easier.

## Commit known-good states

Git provides hard checkpoints in the collaboration.

A commit means:

> We know this state worked.

That reduces the need for either the human or GPT to perfectly remember the sequence of changes that produced it.

## Refresh reality when confidence drops

Conversation is not the source of truth.

The project is.

If either side becomes uncertain about the current state, stop reconstructing history from chat.

Generate a new tree or snapshot and inspect reality again.

This is often faster than debugging assumptions.

## The loop

```text
PROJECT
   ↓
TREE
   ↓
GPT selects useful context
   ↓
CURATED SNAPSHOT
   ↓
SMALL CHANGE
   ↓
RUN + TEST
   ↓
SCREENSHOT / TERMINAL FEEDBACK
   ↓
DIAGNOSE
   ↓
COMMIT KNOWN-GOOD STATE
   ↓
repeat
```

## What this optimizes

The objective is not maximum context.

It is **high-quality shared state with minimal human effort**.

The human provides things they can provide cheaply:

- files
- screenshots
- terminal output
- visual judgement
- intent

GPT handles things it can do cheaply:

- reading structure
- tracing dependencies
- comparing implementations
- identifying relevant files
- generating changes
- diagnosing failures

Neither side needs to reproduce the other's work.

## A useful rule

> When explaining the state of the project becomes harder than showing it, show it.

A project tree, a curated zip, a screenshot or a Git status can communicate more reliable information than several paragraphs of explanation.

The result is a collaboration in which recovering context is inexpensive, experimentation is safer, and more of the user's effort can remain focused on the work itself.
