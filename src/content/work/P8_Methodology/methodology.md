---
title: "Methodology: Fast Value, Low Effort"
description: |
  A design and development methodology based on inference, convention,
  interoperability and minimizing both user effort and system complexity.
publishDate: "2026-09-01 00:00:00"
tags:
  - Methodology
  - Design
  - Systems
  - AI
tileFilter: "#e7eeba"
# tileImage: "A1T.jpg"  
tileL1: "P8 How to Onboard"
tileL2: "Fast, low overhead, low data volume, wash, rinse repeat"
---

# Fast Value, Low Effort

The central objective is simple:

> Create the greatest useful value with the least unnecessary user effort.

This is not the same as minimizing clicks.

A system can save one interaction while introducing an entire interface, database or maintenance problem.

The more useful measure is closer to:

```text
value created
-------------------------------
user effort + system complexity
```

The denominator matters.

## Convention before configuration

If structure can be expressed reliably through a convention, avoid asking the user to configure it again.

For example:

```text
A1.png
A2.png
A3.png
B1.png
```

already contains grouping and order.

Adding separate fields for gallery, position and sequence would duplicate information the filesystem already knows.

## Infer what can be inferred

Only ask for information that cannot be derived reliably.

Useful sources of implicit information include:

- filenames
- folders
- image dimensions
- ordering
- existing content
- context
- established conventions

Metadata is valuable when it adds meaning, not when it restates structure.

## Use existing interfaces

A new interface should earn its existence.

The operating system already provides file management.

Creative applications already provide image production.

Text editors already provide text editing.

Git already provides history and checkpoints.

AI already provides a flexible interface for changing code and content.

The system should connect these capabilities rather than unnecessarily reproduce them.

## Permissive edges, strict center

The edges of the workflow should remain open.

Files can be copied, renamed, replaced or edited with external tools.

The center should remain predictable.

A filename means something specific.

A Markdown marker means something specific.

A renderer behaves deterministically.

This combination provides freedom without ambiguity.

## Progressive authorship

Do not require a project to be fully specified before it becomes useful.

A project can begin with:

- a folder
- some images
- a title
- a small amount of text

Additional authorship can appear only when needed:

- gallery titles
- alternate tile artwork
- captions
- custom composition
- richer metadata

The cost of starting remains low.

## Keep escape hatches

A useful system should not punish expert intervention.

Direct Markdown editing should remain possible.

Files should remain ordinary files.

CSS should remain editable.

Components should remain inspectable.

Automation should augment these capabilities rather than make them inaccessible.

## Build against real work

Abstractions should be tested with real projects as early as possible.

Real material exposes assumptions that demonstrations often hide:

- awkward aspect ratios
- missing assets
- unusual sequencing
- inconsistent amounts of text
- repeated components
- exceptions

The work itself becomes the test fixture.

## A feature rule

Before adding another modifier, field, control or interface, ask:

> Does this remove more complexity than it introduces?

If not, leave the system smaller.
