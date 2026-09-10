---
title: "Descartes: Notes on a Recursive Project"
description: |
  Working notes on a portfolio, CMS, AI collaboration and documentation process
  that has started to document the conditions and methods of its own creation.
publishDate: "2026-09-01 00:00:00"
tags:
  - Descartes
  - AI
  - Documentation
  - Process
tileFilter: "#5e7bb0"
# tileImage: "A1T.jpg"  
tileL1: "P1 Descartes: "
tileL2: "Notes on a Recursive Project"
---

# Descartes

This page is deliberately unfinished.

Descartes is a working name for an idea that emerged while building a portfolio CMS with Astro and AI.

It did not begin as a theory.

The original objective was practical: make a portfolio that is easy to author, flexible enough for real design work, based on ordinary files, and not dependent on a closed CMS interface.

Then the process of building it started becoming part of the project.

We began documenting how the CMS works.

Then how the human and AI work together.

Then how to give an AI enough accurate project context to enter the work quickly.

Then how another person might establish the same development environment.

Then how to get that person in control of the AI before asking the AI to help them with Astro.

At some point the documentation stopped being something sitting outside the project.

It became part of the project.

That is the rabbit hole this page is here to record.

## The first loop

The portfolio is built using the portfolio.

Pages describing the CMS are ordinary projects inside the CMS.

The documentation therefore exercises the same content model, Markdown, components, galleries and conventions as the design work it is intended to publish.

```text
build the CMS
     ↓
use the CMS to document the CMS
     ↓
documentation exposes problems and possibilities
     ↓
change the CMS
     ↓
document the change
     ↺
```

The documentation is not only a retrospective account of development.

It participates in development.

## Then AI entered the loop

AI is not simply being used to generate code.

A large part of the collaboration has become the problem of establishing good shared state.

The human has the actual environment: files, browser, terminal, screenshots, visual judgement and intent.

The AI can inspect structure, trace dependencies, propose implementation, compare alternatives and diagnose evidence.

The quality of the collaboration depends on the interface between those two forms of knowledge.

So we started documenting that interface too.

```text
HUMAN
intent
taste
actual environment
visual judgement
        ↓
shared evidence
        ↓
AI
structure
implementation
diagnosis
comparison
        ↓
change
        ↓
REAL PROJECT
        ↓
human verifies
        ↺
```

Now the method used to build the project is being documented using the same human–AI method.

Another loop.

## The context package

Conversation history is not a reliable project architecture.

Eventually an AI session loses context, a different model enters the project, or the actual files move beyond what the conversation remembers.

The solution we arrived at was surprisingly ordinary:

- generate a project tree;
- select the files that explain the important architecture;
- include representative real content;
- include conventions and instructions;
- package the useful state into a ZIP.

The ZIP is not intended to contain everything.

It is intended to contain enough.

Its purpose is to let an AI establish reality quickly rather than reconstructing the project from conversational archaeology.

```text
PROJECT
   ↓
project tree
   ↓
curated source + examples + documentation
   ↓
AI context package
   ↓
new AI session
   ↓
understand → work → verify → continue
```

This suggests that portability might mean more than exporting data.

A project could be portable because another human can open its files.

It could also be portable because another AI can establish a competent working understanding of it without needing the conversation that created it.

That feels worth exploring.

## Human-readable and AI-readable

The same qualities appear useful to both.

Clear folders help humans and AI.

Predictable filenames help humans and AI.

Markdown helps humans and AI.

Small conventions help humans and AI.

Examples help humans and AI.

Explicit project structure helps humans and AI.

Documentation close to the implementation helps humans and AI.

This raises a question:

> What does software look like when legibility to both humans and AI is treated as a design requirement?

Not an AI product necessarily.

Not a chatbot embedded in everything.

Just software whose structure makes productive collaboration easier.

## The enabling chain

There is also a personal causal chain behind the project.

Astro made building this kind of website approachable.

AI made engineering it approachable.

Together they lowered the threshold enough to move from using an abstraction to designing new abstractions on top of it.

The emerging chain looks something like:

```text
Astro
  ↓
makes the web more approachable
  ↓
AI + Astro
  ↓
make engineering the system more approachable
  ↓
Descartes
  ↓
makes portfolio publishing more approachable
  ↓
someone else can make something
```

This suggests a different way to think about efficiency.

Not only:

```text
same work
÷
less labour
```

But:

```text
previously impractical project
        ↓
lower complexity / higher abstraction
        ↓
practical project
```

The interesting measure may be **projects enabled**, not simply hours saved.

## Abstraction as enabling

A good abstraction removes complexity from the level at which somebody needs to operate.

The user of a portfolio should be able to think:

```text
MyProject/
  project.md
  A1.jpg
  A2.jpg
  A3.jpg
```

and:

```text
[gallery:A]
```

They should not need to think about every mechanism required to turn those files into a responsive web gallery.

The complexity still exists.

It has moved.

That leads to a principle we want to keep examining:

> **The highest-value abstraction may not be the one that removes the person. It may be the one that enables the person to operate one level higher.**

And another:

> **Efficiency is not necessarily the removal of humans from a process. It can be the removal of unnecessary complexity from the human's level of the process.**

## Open underneath

The abstraction becomes more interesting if it does not trap the user.

Folders remain folders.

Images remain images.

Markdown remains Markdown.

Git remains Git.

The editor can be replaced.

The file manager can be replaced.

The AI can be replaced.

The underlying work should retain value outside the interface that currently presents it.

This is part of why the project feels different from a conventional website builder.

The system can provide leverage without needing to claim ownership of the material being organized.

## Documentation as infrastructure

The documentation pages are beginning to form their own architecture.

There is documentation about:

- working effectively with AI;
- establishing a development environment;
- the portfolio CMS itself;
- the methodology behind its design;
- the human–AI workflow;
- packaging context so another AI can join the work.

These are not necessarily final categories.

They are evidence of the project trying to explain itself while it is still becoming itself.

That may be useful in its own right.

A finished manual tells you how a finished object works.

This documentation can record decisions, wrong turns, emerging principles and changes in understanding while they are happening.

It can preserve some of the path, not only the destination.

## Descartes

The name appeared after noticing the recursive character of the work.

The portfolio contains the process that produces the portfolio.

The collaboration is documented through the collaboration.

The system can package an explanation of itself for another AI that can then help modify the system.

There is a little of the recursive spirit of names such as GNU here, although there is no need to force Descartes into an acronym or a finished definition.

For now, the name is useful because it gives this rabbit hole somewhere to live.

A playful version is:

> **I build, therefore I document.**

A more literal one is:

> **The portfolio contains the process that produces the portfolio.**

Or, increasingly:

```text
Descartes is documented by Descartes
while Descartes is being developed
through the process Descartes documents.
```

## Things we have not resolved

This is where the page should remain open.

Questions currently worth carrying forward include:

- What belongs in the canonical AI context package?
- Can the context package generate itself?
- What is the minimum environment needed to get someone from zero to making?
- How much Astro should a beginner ever need to understand?
- Can the documentation serve humans and AI without becoming awkward for either?
- What should be convention and what should remain an escape hatch?
- How do we keep AI collaboration efficient as the project grows?
- How should useful dead ends and rabbit holes be recorded without cluttering the main path?
- Can the project teach a person to become progressively less dependent on its abstractions?
- What does genuine portability mean when AI becomes part of the working environment?
- Is Descartes the CMS, the methodology, the experiment around the CMS, or something broader?
- At what point does a personal working method become something other people can use?

There is no need to answer these yet.

## Current working thought

What started as:

> build a portfolio

has become something closer to:

```text
build a portfolio
      ↓
build a small system for building portfolios
      ↓
document how the system is built
      ↓
document how AI participates in building it
      ↓
make the project legible to another AI
      ↓
make the process approachable to another person
      ↓
give that person enough leverage to build something of their own
      ↓
see what happens next
```

That last step matters.

Descartes does not need a finished thesis yet.

This page is a marker in the process: documentation of the moment when documenting the project itself became one of the project's most interesting design problems.
