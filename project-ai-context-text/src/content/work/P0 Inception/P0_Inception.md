---
title: "P0: Inception"
description: |
  How a portfolio became an experiment in AI, authorship, open tools,
  enabling abstraction and leaving a path that someone else can follow.
publishDate: "2026-09-01 00:00:00"
tags:
  - Descartes
  - Inception
  - AI
  - Process
tileFilter: "#181b60"
tileL1: "P0: Inception"
tileL2: "The crude concept"
---

# Inception

The original idea was not to build a CMS, invent a methodology or investigate human–AI authorship.

It was to build my portfolio.

Even that had remained on the wrong side of a threshold for a long time. I work comfortably with images, typography, presentations, digital systems and websites as designed objects, but building and maintaining my own site from the machinery upward never seemed like a particularly good use of time. Website builders existed, but they tended to replace one problem with another: somebody else's interface, somebody else's assumptions and somebody else's idea of how the work should fit into the system.

Astro changed the calculation.

It made the web look more like things I already understood: folders, files, components, images, text and a browser. I could see where things lived. The structure was comprehensible. It felt less like entering software engineering through the front door and more like finding a side entrance through familiar territory.

But I still would not have done it without AI.

That matters.

Astro made the territory approachable. AI made it possible for me to move through parts of that territory where I did not have all the technical knowledge myself. I could work from intention, examples, visual judgement and increasingly precise questions. AI could deal with syntax, trace dependencies, propose changes and help interpret failures. I could run the result and decide whether it actually worked.

Neither was enough on its own.

Together they made a previously impractical project practical.

That may be the first important idea here. Efficiency is not only doing the same work with fewer people or in fewer hours. Sometimes the larger efficiency gain is making something possible that would otherwise never have been attempted.

The interesting measure may be projects enabled.

## The hidden brief

There was another purpose underneath the portfolio.

I have daughters who will need places for their own work.

I want them to have a better entrance than I had.

They should be able to make and own a portfolio site without first deciding to become web developers. They should not have to surrender their work to a closed platform simply because the open web asks too much of them at the beginning. They should not have to understand an entire technical stack before they can put an image and some words on a page.

The starting point should be their work.

Their images. Their words. Their folders. Their judgement.

The machinery can sit underneath.

If they become curious, it should be possible to look underneath too.

This became the hidden brief for the system.

Not to eliminate complexity, and not to pretend the web is simple, but to move unnecessary complexity away from the level at which the maker needs to operate.

## A small way in

A project might eventually be as ordinary as:

```text
MyProject/
  project.md
  A1.jpg
  A2.jpg
  A3.jpg
```

And the author might write:

```text
[gallery:A]
```

The folder already expresses grouping. The filenames already contain useful information. Markdown is readable without the CMS. The images remain ordinary images. The project can still be opened in Finder or Explorer, edited in Photoshop, searched, copied, renamed, backed up, put in Git or moved somewhere else.

The system should infer what it reasonably can and ask the author only for what it cannot know.

That principle grew from practical irritation, but it points toward something larger.

A useful abstraction does not necessarily remove the person from the process.

It lets the person operate one level higher.

## From using an abstraction to making one

Once the portfolio started working, the question changed.

I was no longer asking only how to build my portfolio.

I started asking how I thought a portfolio ought to work.

That is a subtle but important transition. Astro and AI had enabled me to enter a domain I would not otherwise have entered. Once inside it, I could begin designing abstractions of my own.

A small notation such as `[gallery:A]` could invoke a substantial amount of machinery without requiring the author to operate that machinery directly.

The same idea might apply elsewhere.

At first this looked like a portfolio system. But there is nothing particularly portfolio-like about the deeper pattern.

A person has words, images, files, structure and an intention. A small set of conventions connects those things to a publishing system. AI can help bridge the distance between what the person wants and what the underlying tools require.

That could be used to make a portfolio.

Or a story.

Or a book.

Or a website we have not imagined yet.

That is an interesting rabbit hole, but not necessarily one to enter immediately. The portfolio is a useful constraint. Build the specific thing well enough and let the more general thing reveal itself through use.

## Getting in control of AI

AI lowers one threshold while introducing another problem: it can waste time at extraordinary speed.

It can confidently solve the wrong problem. It can explain five branches that may never be taken. It can turn an interesting technical possibility into a two-hour diversion. It can produce something plausible enough to look finished before anybody has established whether it works.

So part of building the site became learning how to structure the collaboration itself.

The useful loop became smaller:

```text
small objective
      ↓
define success
      ↓
identify likely failure points
      ↓
make a controlled change
      ↓
verify against reality
      ↓
preserve what works
      ↓
next objective
```

Results matter more than engagement.

A current objective matters more than an interesting branch.

Evidence matters more than a plausible explanation.

If something can be cheaply verified, verify it.

If the AI becomes uncertain about the state of the project, show it the state rather than asking it to reconstruct reality from a long conversation.

A screenshot, terminal output, file, project tree or Git status can be more useful than another paragraph of explanation.

And when a worthwhile idea appears that does not serve the current objective, note it rather than following it.

Do not let an interesting problem replace the current problem.

This document is, admittedly, evidence that sometimes the rabbit hole is worth following.

## Showing the AI the project

As the project grew, another problem appeared.

Conversation is not a reliable project architecture.

A session becomes long. Files change. Earlier assumptions become stale. A new AI may enter without any of the accumulated conversation. Explaining everything manually would make the collaboration increasingly expensive.

So we started giving the AI better representations of reality.

First a project tree.

Then the AI could identify which files actually mattered.

Then a curated ZIP containing the important source, representative content, conventions and documentation.

The aim was not to archive everything. It was to establish enough accurate shared state that an AI could jump into the project without requiring the human to reconstruct months of context.

This suggested another form of portability.

It is useful if a project can move between editors, machines and publishing systems because it is made from ordinary files.

Perhaps it is also useful if the project can move between AI collaborators because it contains enough information to explain itself.

Human-readable and AI-readable may turn out to have a lot in common.

Clear structure helps both.

Examples help both.

Predictable conventions help both.

Plain text helps both.

Explicit uncertainty helps both.

This started to feel less like preparing a ZIP for ChatGPT and more like another design requirement for open software.

## Then the documentation ate its own tail

We began documenting the CMS.

Then we documented how the human and AI were working together.

Then how to give the AI accurate context.

Then how someone else might establish the development environment: editor, JavaScript, Git, Astro and AI, connected and actually working.

Then it became apparent that before teaching somebody Astro with AI, it might be useful to teach them how to get in control of the AI itself.

The portfolio was now being used to document the process that produced the portfolio.

The documentation projects were real content inside the CMS, so writing them tested the CMS.

Problems encountered while documenting the CMS suggested changes to the CMS.

The collaboration method was being documented through the collaboration method.

The project was beginning to package an explanation of itself for another AI that could then help modify the project.

At approximately this point, Descartes appeared.

## Descartes

The name has some mythology attached to it, but it does not need a finished mythology yet.

There is an obvious resonance with doubt, method, decomposition and establishing what can actually be known before proceeding. That happens to rhyme with the working method we arrived at: establish reality, reduce the problem, make a move, verify it, then build on what has been established.

There is also the recursion.

The portfolio contains the process that produces the portfolio.

The documentation is produced using the collaboration it documents.

The system can contain an explanation of itself that helps another intelligence work on the system.

A joke version is:

> **I build, therefore I document.**

A more literal version is:

> **The portfolio contains the process that produces the portfolio.**

But neither quite captures why the recursion matters.

The purpose is not to make a clever self-referential object.

The purpose is to leave a path.

## Writing the path while walking it

There is another possibility in having AI inside the process.

The same AI helping to make the environment can also write about what is happening while it happens.

That does not make the AI the author.

AI may write every word of these pages. I have no particular problem with that.

Writing and authorship are not the same thing.

The trajectory comes from the work: what I am trying to achieve, what I notice, what I reject, what I choose to pursue, where I stop the AI, where I redirect it, what I judge to have worked and which discoveries are worth keeping.

AI can turn that trajectory into sentences.

That is useful because documenting a process retrospectively tends to clean it up too much. The awkward discoveries disappear. The sequence becomes more rational than it really was. The moment when one practical problem unexpectedly exposes a much larger idea gets rewritten as if it had been the plan all along.

Writing alongside the work can preserve some of that texture.

But it would be a mistake to give the documentation too much authority.

If AI were expected to continuously decide what mattered, accurately interpret every decision, distinguish every meaningful failure from noise and maintain a reliable historical account, the documentation would become another high-maintenance system requiring supervision.

That would defeat much of the point.

So these pages can be something looser.

A smudged fingerprint of the process.

AI-written, human-authored, incomplete and not fully reliable.

Typos can disappear. Repetition can be compressed. Conversational debris can be removed. The journey can be made readable.

But the result does not need to pretend to be a transcript, an audit log or an objective history.

It is a trace left by making the thing.

That limitation can simply be admitted.

## The artifact, the method and the story

Something interesting is separating out.

There is the artifact: the thing being made.

There is the method: the useful practices discovered while making it.

And there is the story: the messy route by which those practices and the artifact emerged.

AI can participate in all three, but they should not be confused.

The artifact has to work.

The method should be useful enough to repeat.

The story only needs to remain recognizably connected to what happened.

The method can feed back into the artifact. If repeated failures show that the AI keeps losing track of the current implementation, the solution might become part of the collaboration instructions: establish reality from evidence before modifying it.

The documentation therefore does not merely describe the work. Occasionally it changes how the work is done.

But this should remain lightweight.

The purpose is to make the work easier, not to create a bureaucracy around observing ourselves working.

## Passing on the entrance

This is where the various rabbit holes reconnect with the hidden brief.

Astro gave me an entrance.

AI gave me enough leverage to move further inside.

Building the portfolio gave me a reason to understand more.

Now I am trying to preserve some of the conditions that made that possible and engineer them into a better entrance for the next person.

Ideally someone arrives with something they want to make rather than a list of technologies they have been told to learn.

They get a working environment.

They make one small change.

They see it happen.

They make another.

AI helps where the path normally breaks: installation, unfamiliar syntax, errors, dependencies, verification and the distance between an intention and the machinery needed to express it.

Then knowledge can arrive progressively because it has a purpose.

A little Markdown because they are writing.

A little Git because they want to preserve something that works.

A little Astro because they want to change how something is presented.

A little JavaScript because they have an idea the existing abstraction cannot express.

Perhaps eventually they outgrow the abstraction entirely.

That would not be a failure.

An enabling abstraction should not need to imprison the person it enabled.

## Where this leaves us

What started as:

> build my portfolio

has become something more like:

```text
make the thing
      ↓
discover a better way to make it
      ↓
turn that discovery into an abstraction
      ↓
document enough of the path to make it repeatable
      ↓
make the project legible to people and AI
      ↓
give someone else a better entrance
      ↓
let them make their thing
```

There are still more questions than answers.

Is Descartes the portfolio CMS, the experiment around it, the method, or simply the name of this particular rabbit hole?

Can one environment genuinely support portfolios, books, stories and other forms without becoming a bloated general-purpose system?

How much should be convention and how much should remain open?

Can an AI context package become a normal part of a project without becoming another thing the human has to maintain?

Can documentation remain useful while openly admitting that its AI-written account is only a smudged fingerprint?

Can the system help a beginner start without hiding so much that they can never understand or escape it?

And can someone who was enabled by one generation of abstractions leave behind a better abstraction for the next person?

There is no need to answer those yet.

The portfolio is still the useful constraint.

The daughters are still the hidden brief.

And Descartes, for now, is the record of what happened when building a website unexpectedly became an investigation into how we leave the entrance open behind us.
