---
title: "Project: A File-Based Portfolio CMS"
description: |
  Building a portfolio system around folders, filenames, Markdown and reusable
  presentation components, with AI acting as an editing layer rather than a closed CMS.
publishDate: "2026-09-01 00:00:00"
tags:
  - Project
  - CMS
  - Astro
  - AI
---

# A File-Based Portfolio CMS

This project explores how little infrastructure is actually required to make a useful portfolio CMS.

The working unit is deliberately simple:

> A project is a folder containing Markdown and assets.

Images live beside the project content. Filenames provide grouping and sequence. Frontmatter stores information that cannot be inferred. Markdown controls editorial placement. Reusable components determine how that material is presented.

The objective is not to reproduce the controls of a conventional CMS. It is to create a stable structure that works with the tools already used to make the work.

## The basic model

```text
PROJECT FOLDER
    |
    +-- project.md
    +-- A1.png
    +-- A2.png
    +-- A3.png
    +-- B1.png
    +-- B2.png
    +-- PHero.png
```

The filesystem already provides useful information.

`A1`, `A2` and `A3` belong together.

The number provides sequence.

A suffix can provide a deliberate variant.

The Markdown file supplies the information and composition that filenames cannot.

## Composition

A project page can place reusable presentation behaviours directly inside ordinary Markdown.

```text
[gallery:A]

[gallery:B /tile]
```

The content says **what goes where**.

The renderer decides **how it behaves**.

This keeps editorial composition readable without embedding presentation implementation into every project.

## External tools remain useful

The CMS does not need to own every stage of production.

Images can be prepared in Photoshop or Illustrator.

Files can be arranged and renamed in Finder or Explorer.

Batch tools can modify assets.

Markdown can be edited directly.

Git can establish known-good states.

AI can modify the underlying system.

The project is therefore closer to an open format than a closed application.

## AI as an editing layer

Many changes that would traditionally require an administration interface can instead be made directly to the underlying system with GPT.

Examples include:

- typography
- widths
- spacing
- gallery behaviour
- responsive rules
- component structure
- editorial composition

This changes the role of the CMS.

Instead of building controls for every possible future decision, the system keeps those decisions explicit in files and code where they can be inspected and changed.

## The constraint

Every feature has a cost.

A useful test is:

> Does this feature remove more complexity than it introduces?

A manual filename change may be preferable to building a sequencing interface.

A small convention may be preferable to another metadata field.

A reusable Markdown marker may be preferable to a page builder.

The project succeeds when useful creative decisions remain easy while the machinery required to support them stays small.
