---
title: "Methodology: Fast Value, Low Effort"
description: |
  A design and development methodology based on inference, convention,
  interoperability, anchors, verification and recoverable project understanding.
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

The central objective remains simple:

> Create the greatest useful value with the least unnecessary user effort.

This is not the same as minimizing clicks.

A system can save one interaction while introducing an entire interface, database, maintenance burden or new thing the user must understand.

A rough test is:

```text
value created
-------------------------------
user effort + system complexity
```

The denominator matters.

But the project has revealed another requirement.

Fast value only remains useful if the work can be understood, checked and continued.

The methodology therefore has two connected concerns:

```text
MAKE USEFUL ACTION EASY
+
MAKE USEFUL UNDERSTANDING RECOVERABLE
```

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

A convention is useful when it removes decisions without hiding important meaning.

## Infer what can be inferred

Only ask for information that cannot be derived reliably.

Useful sources of implicit information include:

- filenames
- folders
- image dimensions
- ordering
- existing content
- current source
- established conventions

Metadata is valuable when it adds meaning, not when it restates structure.

The same principle applies to AI collaboration.

Do not ask a human to describe information that can be cheaply recovered from the authoritative project evidence.

## Use existing interfaces

A new interface should earn its existence.

The operating system already provides file management.

Creative applications already provide image production.

Text editors already provide text editing.

Git already provides history and checkpoints.

AI provides a flexible interface for inspecting and changing code and content.

The system should connect these capabilities rather than unnecessarily reproduce them.

Interoperability is therefore not merely convenience. It keeps the project legible and recoverable outside any single interface.

## Permissive edges, strict center

The edges of the workflow should remain open.

Files can be copied, renamed, replaced or edited with external tools.

The center should remain predictable.

A filename means something specific.

A Markdown marker means something specific.

A renderer behaves deterministically.

A Git commit means a known project state.

An evidence artifact should mean what it claims to mean.

This combination provides freedom without ambiguity.

## Progressive authorship

Do not require a project to be fully specified before it becomes useful.

A project can begin with:

- a folder
- some images
- a title
- a small amount of text

Additional authorship can appear only when needed:

- gallery composition
- alternate tile artwork
- homepage text
- authored colour
- richer metadata
- custom presentation

The cost of starting remains low.

Complexity is available rather than compulsory.

## Keep escape hatches

A useful system should not punish expert intervention.

Direct Markdown editing should remain possible.

Files should remain ordinary files.

CSS should remain editable.

Components should remain inspectable.

Git should remain usable directly.

Automation and AI should augment these capabilities rather than make them inaccessible.

An escape hatch is also a recoverability mechanism: the work remains accessible when a particular abstraction, tool or collaborator is removed.

## Build against real work

Abstractions should be tested with real projects as early as possible.

Real material exposes assumptions that demonstrations often hide:

- awkward aspect ratios
- missing assets
- unusual sequencing
- inconsistent amounts of text
- repeated components
- exceptions
- colour combinations that challenge generic rules

The work itself becomes the test fixture.

This matters because implementation quality cannot be established by plausible code alone.

It must survive the material it claims to support.

## Human judgement defines acceptable solutions

Some problems are technical but cannot be solved well by technical rules alone.

A designer may not know the exact implementation needed.

A coder or model may not possess enough disciplinary judgement to choose the right behaviour from every technically valid possibility.

The useful exchange is therefore not always:

```text
human specifies algorithm
→ machine implements algorithm
```

It can instead be:

```text
human supplies intent, constraints and disciplinary judgement
→ acceptable solution space becomes clearer
→ machine derives an implementation
→ real evidence tests it
→ human judges the result
```

This was visible in the homepage contrast work.

The objective was not simply to maximize numerical contrast. The implementation needed to preserve the author's colour choice, preserve the image, intervene only when readability was threatened, and keep the consequence of the design decision visible.

The human contribution was the judgement that made a useful decision structure possible.

## Anchors rather than memory

As AI became part of the development process, a recurring problem changed shape.

The important question was no longer:

> How do we make the conversation remember everything?

It became:

> What does the project need to preserve so that useful orientation can be recovered?

The answer is **anchors**.

Examples include:

```text
current source files
Git commits
gpt-tree.txt
project documentation
status.diff
screenshots
terminal output
running behaviour
```

These are not all equally authoritative and they do not all serve the same purpose.

Their value is that they allow a later collaboration to establish reality without reconstructing every interaction that produced it.

> Backups preserve state. Anchors preserve orientation.

The goal is not maximal memory.

It is sufficient recoverability.

## Preserve what is expensive to reconstruct

Not everything should become documentation.

If authoritative information can be cheaply retrieved from source, Git or the filesystem, retrieve it.

Document what would otherwise be difficult to recover:

- purpose
- decisions
- conventions
- methodology
- unresolved questions
- current direction
- disciplinary judgement
- why an apparently arbitrary rule exists

This creates a useful boundary:

> Preserve what is necessary to recover orientation, not everything that occurred while reaching it.

The project can maintain greater continuity by remembering less, provided what remains is well chosen.

## Verification is part of implementation

AI can produce plausible explanations and plausible code quickly.

Plausibility is not evidence.

The methodology therefore treats observation as part of the implementation loop:

```text
change
→ run
→ observe
→ compare
→ verify or correct
```

Useful evidence may be very small:

- a screenshot
- one browser behaviour
- a terminal line
- a compiler diagnostic
- `git status`
- the exact current file

The point is not exhaustive testing of everything.

The point is to verify the claim currently carrying the decision.

> Where verification is cheap, verify. Where it is expensive, expose uncertainty.

This prevents ordinary fallibility from compounding through later assumptions.

## Trust is engineered

The project does not require a binary decision to trust or distrust AI.

Trust can be produced structurally.

A model that works from current files, makes bounded changes, exposes uncertainty, receives observable feedback and leaves recoverable checkpoints is easier to trust for a specific task than one operating from an unverified reconstruction.

The human remains responsible for deciding what matters and whether the evidence is sufficient.

The useful direction is from **Vertrauen** toward **Kontrolle**:

```text
capability
→ anchors
→ bounded action
→ evidence
→ verification
→ recoverability
→ meaningful human control
```

Trust is therefore not merely granted at the end.

It is engineered through the conditions under which work is performed and checked.

## Repeatable connected development

A successful cycle should improve the starting conditions of the next one.

```text
orient
→ act
→ observe
→ verify
→ leave useful anchors
→ repeat
```

The important property is not repetition alone.

The cycles are **connected**.

Evidence, judgement and learning from one cycle survive in forms that can condition the next.

This is repeatable connected development:

> Build so that the next act of development can begin from what the previous one learned.

A known-good Git commit is one connection.

A clarified convention is another.

A screenshot proving behaviour can be another.

A rewritten methodology page can be another.

The project becomes easier to continue because useful understanding accumulates outside the transient interaction.

## Substitution as a restore test

The strongest test of recoverability is replacement.

Could another capable AI enter the project and establish enough reality to continue?

Could another human do the same?

The objective is not perfect transfer of every thought.

It is continuity of useful development despite replacement of participants.

A fresh collaborator therefore acts like a restore test for the anchors.

If important understanding disappears when the previous conversation or collaborator disappears, the project has exposed a recovery weakness.

The remedy is not necessarily more documentation.

It is a better anchor.

## Avoid rabbit holes

Fast development creates many interesting adjacent questions.

They are not all the current problem.

A useful discipline is:

> Don't let an interesting problem replace the current problem.

Keep the active objective bounded.

Record important adjacent questions when they would otherwise be lost.

Then return to the evidence required for the current decision.

This protects both speed and coherence.

## A feature rule

Before adding another modifier, field, control, interface, document or process, ask:

> Does this remove more complexity than it introduces?

If not, leave the system smaller.

The same test applies to the methodology itself.

An anchor should make recovery easier.

A verification step should protect a meaningful claim.

Documentation should preserve understanding that matters.

Process should support the work rather than become the work.

## The broader method

The project now operates through a simple connected structure:

```text
PROJECT
   ↓
ANCHORS
files + code + documentation + Git + evidence
   ↓
ORIENT
   ↓
BOUNDED CHANGE
   ↓
RUN + OBSERVE
   ↓
VERIFY / CORRECT
   ↓
KNOWN-GOOD STATE
   ↓
UPDATE USEFUL ANCHORS
   ↓
repeat
```

The objective remains fast value with low unnecessary effort.

The addition is recoverability.

Useful work should not only be easy to make.

It should leave enough trustworthy structure behind that the next person, model or development cycle can understand where to stand.
