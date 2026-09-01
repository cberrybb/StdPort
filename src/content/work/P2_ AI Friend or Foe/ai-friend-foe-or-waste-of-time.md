---
title: "AI: Friend, Foe or Waste of Time?"
description: |
  A practical way to get in control of AI collaboration: establish small
  objectives, protect your attention, verify reality and optimize for results.
publishDate: "2026-09-01 00:00:00"
tags:
  - AI
  - Workflow
  - Methodology
  - Collaboration
---

# AI: Friend, Foe or Waste of Time?

AI can make something possible that you would not otherwise attempt.

It can also confidently send you down a rabbit hole, solve the wrong problem, create five new problems, or spend twenty minutes explaining branches you will never take.

The difference is not just the model or the prompt.

It is how the collaboration is structured.

The aim is simple:

> **Get useful, verified progress for the least unnecessary human attention.**

## Get in control of the relationship

Do not optimize the AI for engagement.

Optimize it for results.

A useful AI does not need to keep the conversation going, continually suggest more work, or tell you everything it knows. It needs to help move the current objective into a better, verified state.

A rough measure of efficiency is:

```text
useful verified progress
────────────────────────
human attention + effort
```

The objective is not to generate the most code, the longest answer or the largest number of ideas.

The objective is to make useful things happen.

## Start with one small objective

Do not begin with:

> Build me a website.

Begin with something that has a clear finish:

> Get the Astro development server running.

Then:

> Change one heading and confirm that it appears in the browser.

Then:

> Add one project.

Small objectives reduce uncertainty. They also make failures easier to locate.

The basic loop is:

```text
SMALL OBJECTIVE
      ↓
DEFINE SUCCESS
      ↓
IDENTIFY LIKELY FAILURE POINTS
      ↓
MAKE THE SMALLEST USEFUL CHANGE
      ↓
VERIFY AGAINST REALITY
      ↓
works? ── yes → preserve progress → next objective
  │
  no
  ↓
GIVE THE AI THE EVIDENCE
      ↓
DIAGNOSE AND TRY AGAIN
```

## Verification is part of the work

A plausible answer is not a working result.

Code that looks correct is not a working result.

An AI saying something should work is not a working result.

Run it.

Look at it.

Test it.

Give the AI access to the evidence that matters: terminal output, screenshots, files, errors, project trees and Git status.

For example:

```text
Node installed?
→ node --version

Git working?
→ git --version

Dependencies installed?
→ npm install

Astro running?
→ npm run dev

Editing loop working?
→ change one heading and confirm it in the browser

Project state understood?
→ git status
```

Each check turns an assumption into something known.

## Show reality instead of describing it

Long explanations of project state are expensive for the human and unreliable for the AI.

When possible, show the thing itself.

Give the AI:

- the relevant file rather than describing its contents;
- the terminal error rather than paraphrasing it;
- a screenshot rather than explaining what looks wrong;
- a project tree rather than describing the folder structure;
- a curated project snapshot when the conversation no longer contains enough reliable context.

A useful rule is:

> **When explaining the state of the project becomes harder than showing it, show it.**

## Protect the current objective

AI makes exploration extremely cheap.

That is useful, but dangerous.

Every problem can expose another refactor, abstraction, tool, edge case, feature or architectural improvement. They may all be good ideas and still be the wrong work to do now.

Use a simple filter:

```text
Does it help the current objective?

necessary       → do it
blocking        → solve it
useful later    → note it
merely interesting → ignore it
```

A rabbit hole does not have to be irrelevant. It can be completely relevant and technically worthwhile.

It is a rabbit hole because it replaces the current objective.

> **Do not let an interesting problem replace the current problem.**

## Do not explore branches before you need them

AI can easily produce detailed plans for possibilities that may never happen.

That information still costs attention.

If option B or C materially affects the decision being made now, mention it.

Otherwise, leave it alone.

Prefer:

> This solves the current problem. There is one limitation worth recording for later.

over:

> Here are six alternative architectures, four future migration paths and twelve improvements you might consider.

The human should not have to continually extract the useful next action from a cloud of hypothetical work.

## Ask the AI where things can fail

Generation is only part of the value of AI.

Use it to find uncertainty.

Ask:

- What assumptions are we making?
- What is most likely to fail?
- What is the cheapest way to test this?
- What evidence should I return if it fails?
- Can we make a smaller change first?

This turns AI into a collaborator in verification, not merely a generator of answers.

## Preserve known-good states

When something works, recognize that fact before adding more complexity.

Test it.

Commit it.

Then continue.

A known-good checkpoint gives both human and AI somewhere reliable to return to.

This is particularly important when AI can make changes faster than a human can mentally model all of them.

Speed without checkpoints can create uncertainty faster than it creates value.

## A practical starter prompt

This does not need elaborate prompt engineering.

A useful starting instruction can be short:

```text
Work with me one small objective at a time.

Optimize for useful results, not engagement.

Prefer the smallest change that can achieve the current objective.

Protect the current objective. Do not pursue interesting side problems,
future branches or improvements unless they are necessary or blocking.
Note worthwhile ideas briefly for later.

Establish the current state from evidence rather than guessing.
Prefer files, screenshots, terminal output and other direct evidence.

Before acting, consider the likely failure points and give me a cheap
way to verify success.

Do not assume something worked because the answer or code looks correct.
I will test it and return evidence.

When context becomes uncertain, ask me to show you reality rather than
reconstructing it from a long conversation.

Keep explanations proportional to the decision I need to make now.
```

Adapt it.

The point is not to discover magic words that make AI intelligent.

The point is to establish the rules of the collaboration.

## Friend, foe or waste of time?

AI becomes a friend when it expands what you can practically attempt.

It becomes a foe when plausible output outruns verification and control.

It becomes a waste of time when the interaction consumes more attention than the progress it creates.

The answer is not to trust it more or distrust it more.

Build a better loop.

```text
objective → action → evidence → verification → progress
```

Then repeat.

The first skill in working with AI is not asking it to do more.

It is learning how to keep both of you working on the right thing.
