---
title: "Working with A GPT: Establish Reality Fast"
description: |
  A lightweight collaboration practice for keeping AI-assisted development
  accurate, fast and grounded in the real state of a project.
publishDate: "2026-09-01 00:00:00"
tags:
  - Process
  - AI
  - Collaboration
  - Development
tileFilter: "#2e6875"
# tileImage: "A1T.jpg"
tileL1: "P6 Working.... "
tileL2: "With GPT"
---

# Working with GPT: Establish Reality Fast

The quality of AI-assisted development depends heavily on whether the human and the model can establish the real state of the work quickly.

The aim is not to give GPT everything or ask either side to remember everything. It is to leave enough trustworthy anchors that orientation can be recovered whenever necessary.

> Preserve what is necessary to recover orientation, not everything that occurred while reaching it.

A project tree, selected source files, documentation, Git state, terminal output and screenshots can each act as anchors. Together they reduce the amount of reconstruction that has to happen through conversation.

## Start with the tree

Generate a machine-readable project tree.

The tree gives GPT a map of the actual project rather than a human reconstruction of it.

From that it can identify:

- important source files
- architecture
- content structure
- documentation and narrative
- experiments and duplicates
- likely dependencies
- which files it actually needs

The tree is a map, not the territory. It tells the model what exists and where to look next.

## Let GPT choose the context

Rather than manually deciding what to upload, give GPT the tree and ask it which files would provide useful project awareness.

This avoids both extremes:

- uploading the entire repository indiscriminately
- providing too little information and forcing GPT to guess

Before asking for another file, GPT should also check whether a sufficiently current copy is already available in the existing context.

The human should not have to manually maintain the model's context when the model can cheaply determine what it needs.

## Create an orientation package

Package the selected files into a single archive.

For StdPort this is currently:

```text
gpt-context-current.zip
```

The package is not a backup.

> Backups preserve state. Anchors preserve orientation.

The package should favour inexpensive, informative text: Markdown, documentation, source code, configuration, the project tree and useful current-state evidence.

Narrative matters as well as implementation. Purpose, decisions, accomplishments, TODOs and working conventions may be necessary to understand why the code is the way it is.

Large binary asset collections, dependencies, generated output, caches, archives and secrets generally do not belong in the awareness package unless they are specifically needed.

The package should contain enough implementation to test the documentation against reality.

## Use exact current files for changes

The broad awareness package is for orientation.

An individual change should normally use a much smaller exchange:

```text
AI identifies exact files needed
→ human ZIPs only those files
→ AI inspects the actual current files
→ AI returns complete replacement files
→ human overwrites originals
→ run/test
→ human returns screenshot or terminal evidence
```

This separates two jobs:

- broad project orientation
- exact implementation of the current change

For ordinary source changes, complete replacement files are often safer than asking the human to find and edit fragments manually.

## Use real work as the test fixture

A working project is more useful than artificial test data.

It shows how the system behaves with actual content, naming conventions, assets and edge cases.

Changes can then be evaluated against something concrete:

> Does the real project still work?

Real content is also allowed to challenge the design. If an implementation only works with the development example, it has not yet earned much confidence.

## Return evidence

Source code shows what should happen.

Evidence shows what did happen.

Useful evidence includes:

- browser screenshots
- terminal output
- compiler or editor diagnostics
- Git status
- the actual changed files
- visible behaviour in the running site

The human does not need to diagnose the technical cause before returning evidence. GPT can inspect the evidence and propose the next cheap test.

## Make one controlled change

Once shared context is reliable, change one meaningful thing at a time.

```text
objective
→ orient from anchors
→ act
→ observe
→ verify
→ leave useful anchors
→ move on
```

Keeping the change bounded makes failure easier to locate and success easier to recognise.

An interesting side problem should not silently replace the current problem.

## Verify cheaply

AI output is a proposal until it meets reality.

Where verification is cheap, verify.

Where verification is expensive or unavailable, expose the uncertainty rather than presenting inference as fact.

This changes the trust question. The aim is not to decide whether AI should simply be trusted.

The process is designed so that confidence can be earned through observable checks.

## Commit known-good states

Git provides durable checkpoints.

A commit means something close to:

> We have enough evidence to treat this state as known-good.

That does not make the software perfect. It creates a recoverable point from which experimentation can continue.

A working diff can provide a more temporary buffer between commits by preserving evidence of what has changed since the last durable checkpoint.

## Refresh reality when confidence drops

Conversation is not the source of truth.

The project is.

If confidence in the current state drops, do not keep reconstructing history from chat. Refresh the relevant anchor:

- regenerate the tree
- rebuild the awareness package
- inspect the exact current file
- check Git state
- run the project
- return new visual or terminal evidence

Reorientation is often cheaper and more reliable than remembering.

## The loop

```text
PROJECT
   ↓
ANCHORS
tree + documentation + source + Git + evidence
   ↓
ORIENT
   ↓
SMALL CHANGE
   ↓
RUN + TEST
   ↓
OBSERVE
   ↓
VERIFY / CORRECT
   ↓
COMMIT OR UPDATE THE USEFUL ANCHORS
   ↓
repeat
```

The important property is that learning from one cycle can condition the next one.

The collaboration therefore does not depend entirely on continuity of a particular conversation, human or model.

## Division of labour

The useful division is not simply "human has the idea, AI writes the code."

The human can contribute cheaply:

- intent
- disciplinary judgement
- visual judgement
- priorities
- acceptance and rejection
- files and evidence
- knowledge of what matters

GPT can contribute cheaply:

- reading structure
- tracing dependencies
- comparing implementations
- identifying relevant files
- generating changes
- diagnosing failures
- articulating implications
- turning judgement into executable decision structures

Sometimes the human does not need to specify an algorithm.

They can instead establish the constraints and judgement that determine what an acceptable algorithm is allowed to do.

## Anchoring rather than prompting

Prompting remains useful, but the quality of the collaboration cannot depend on finding a perfect prompt.

A prompt asks the AI to do something.

An anchor gives it somewhere trustworthy to stand.

Good anchors make it easier for a different model—or a different human—to enter the project, establish what is known, identify what is uncertain and continue without pretending to remember the collaboration that came before.

## A useful rule

> When explaining the state of the project becomes harder than showing it, show it.

And when showing everything becomes unnecessary:

> Show enough to recover orientation.

The result is not perfect machine memory. It is a development process in which fallibility has less room to compound because reality can be re-established cheaply, tested repeatedly and preserved at useful points.
