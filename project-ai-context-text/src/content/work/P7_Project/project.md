---
title: "Project: A File-Based Portfolio CMS"
description: |
  Building StdPort around project folders, filenames, Markdown and reusable
  presentation behaviours, with enough structure to work immediately and enough
  openness to be redesigned through ordinary tools.
publishDate: "2026-09-01 00:00:00"
tags:
  - Project
  - CMS
  - Astro
  - AI
tileFilter: "#e3a1db"
# tileImage: "A1T.jpg"
tileL1: "P7 Astro to CMS"
tileL2: "Making projects emerge from varied media themselves"
---

# A File-Based Portfolio CMS

StdPort explores how little infrastructure is actually required to make a useful portfolio CMS.

The working unit is deliberately simple:

> A project is a folder containing Markdown and assets.

The system supplies a coherent starting structure. The author supplies the work, writing, images, colour and eventually the design language.

The aim is not to reproduce the controls of a conventional CMS. It is to make the portfolio immediately useful while keeping the underlying material legible to ordinary tools.

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
    +-- A1T.png
    +-- PHero.png
```

The filesystem already provides useful information.

`A1`, `A2` and `A3` belong together.

The number provides sequence.

A filename variant such as `A1T` can provide an explicitly authored crop for a particular use without changing the original image.

`PHero` can provide a project hero.

The Markdown file supplies project information, editorial composition and authored choices that should not be guessed from filenames.

The system should infer what is safely inferable and ask the author for what is genuinely a decision.

## Markdown as composition

A project page can place reusable presentation behaviours directly inside ordinary Markdown.

```text
[gallery:A]

[gallery:A,B]

[gallery:B /tile]

[gallery:A /row:1,2,1,2]
```

The content says **what goes where**.

The renderer decides **how that instruction behaves**.

This keeps editorial composition readable without embedding Astro components or layout code into each project.

The author can remain in Markdown while the implementation remains reusable.

## Different views of the same material

The same project can participate in several contexts without requiring separate CMS records for each one.

A project may have:

- a Markdown title and description;
- a project-page hero;
- galleries assembled from image groups;
- a square homepage tile image;
- homepage-specific line 1 and line 2 text;
- an authored homepage colour.

For example:

```yaml
tileImage: "A1T.png"
tileFilter: "#5e7bb0"
tileL1: "Project title"
tileL2: "Project subtitle"
```

These fields exist because they represent authored decisions rather than information the system can reliably infer.

When they are absent, useful defaults and fallbacks should keep the project working.

## A coherent default that invites design

StdPort needs a default design because a new project should work before the author has designed everything.

But the default should not feel so complete that changing it feels like damage.

The homepage therefore acts as a first design proposition rather than a finished identity.

Current author controls make it possible to inspect the same content as cards or square tiles, change tile density and compare colour with monochrome. Those controls are for authoring and experimentation; they do not need to become permanent visitor preferences.

The deeper principle is:

> Make complexity available, not compulsory.

A beginner should be able to add a project before understanding the entire system. Deeper decisions should become available when the desire to change something makes them relevant.

## Behaviour before decoration

Much of StdPort's character comes from behaviour rather than imposed visual styling.

Examples include:

- contextual navigation that appears when it becomes useful;
- expandable code windows built from ordinary fenced Markdown;
- gallery syntax that turns filenames into composition;
- row galleries that preserve natural image proportions;
- homepage tiles whose authored colour interacts with the image;
- restrained contrast correction when a colour choice threatens readability.

This leaves more visual territory available to the author.

The system can be opinionated about how information works without dictating the final visual identity.

## External tools remain useful

StdPort does not need to own every stage of production.

Images can be prepared in Photoshop or Illustrator.

Files can be arranged and renamed in Finder or Explorer.

Markdown can be edited directly.

An editor's native colour picker can edit ordinary hex values.

Git can establish known-good states.

Batch tools can modify assets.

AI can inspect and alter the underlying implementation.

This interoperability is part of the design, not an accidental lack of features.

A dedicated CMS control should earn its existence by doing something meaningfully better than the ordinary tool already available.

## AI as an editing layer

Many changes that would traditionally require an administration interface can instead be made directly to the underlying system with GPT or another capable model.

Examples include:

- typography;
- widths and spacing;
- homepage behaviour;
- gallery rules;
- responsive behaviour;
- component structure;
- authoring conventions;
- documentation.

This changes the role of the CMS.

The project does not need to anticipate every future decision with a permanent settings panel. Decisions can remain explicit in files and code where they are inspectable, testable and replaceable.

AI is therefore not the CMS itself. It is a flexible editing and development layer around an open file-based system.

## Human judgement remains part of the architecture

Not every design decision can be reduced to a generic technical rule.

The homepage colour work made this particularly visible.

A conventional implementation might ask only:

```text
Is there enough contrast?
→ choose black or white
```

But the actual design judgement was richer:

```text
preserve the author's chosen colour
→ preserve the image
→ intervene only when readability is threatened
→ change as little as necessary
→ allow the consequence of a weak colour choice to remain visible
→ recalculate when hover changes the visual evidence
```

The important human contribution was not supplying code line by line.

It was supplying enough disciplinary judgement to define the acceptable solution space from which the implementation could be derived.

## The constraint

Every feature has a cost in complexity, explanation and maintenance.

A useful test remains:

> Does this feature remove more complexity than it introduces?

A filename change may be preferable to building a sequencing interface.

A small convention may be preferable to another metadata field.

A reusable Markdown marker may be preferable to a page builder.

A temporary author control may be preferable to a permanent visitor setting.

An ordinary hex value may be preferable to a custom colour-management interface.

The project succeeds when useful creative decisions remain easy while the machinery supporting them stays small.

## The intended experience

StdPort should support two modes at once:

```text
SCAN
→ understand enough to begin

DEEP
→ discover more control when it becomes useful
```

The shorthand that has emerged is:

> Deep and scan — but don't get in the way.

That applies to the website, the authoring system and the way the project teaches itself.

The portfolio should be usable before the author understands all of Astro, CSS, Git or AI-assisted development.

The need to change something can then pull them further into the technology.

The default is not the destination.

It is the first useful place to stand.
