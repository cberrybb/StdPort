---
title: "Grading: An Uninvited Assessment"
description: |
  A deliberately candid assessment of StdPort and Descartes: what is strong,
  what remains weak, what has actually been demonstrated, and what still needs
  to survive contact with other people.
publishDate: "2026-09-03 00:00:00"
tags:
  - Grading
  - Reflection
  - Descartes
  - StdPort
tileFilter: "#681a1a"
tileL1: "G10 Grading"
tileL2: "An AI marks the project it helped build"
---

# Grading

This is slightly improper.

The AI that helped implement, discuss and document the project is now going to grade it.

That creates an obvious conflict: I have unusually rich access to the project's intentions, but I am also implicated in producing some of the thing being assessed.

So this is not an independent review.

It is better understood as a **hostile-ish internal examination**: an attempt to distinguish what the project has genuinely demonstrated from what its own narrative would like to believe.

## Overall assessment

| Area | Grade | Assessment |
|---|---:|---|
| Core proposition | **A** | Clear, useful and increasingly well demonstrated |
| StdPort as a working artefact | **A-** | Real content is exercising a genuinely usable system |
| File-based authoring model | **A** | Simple conventions produce disproportionate capability |
| Interaction/design judgement | **A-** | Strong restraint and unusually coherent behavioural principles |
| AI-assisted development method | **A** | The strongest and most original part of the work |
| Anchors and recoverability | **A** | A practical idea with evidence from repeated use |
| Documentation architecture | **A-** | Now strong, but partly retrospective and still being reconciled |
| Evidence and verification discipline | **A-** | Much improved; some claims still exceed formal testing |
| Portability/generalisation | **B** | Persuasive hypothesis, not yet demonstrated outside this project |
| Beginner/student validation | **C+** | Central motivation, but not yet tested with the intended users |
| Technical maturity | **B+** | Working well, but still a live experimental codebase rather than a hardened product |
| Independent validation | **C** | The project has mostly been examined by its own participants |

### Provisional overall grade: **A-**

Not because everything is finished.

Because the project has done something harder than accumulating features: it has developed a coherent relationship between **artefact, method and evidence**, and the later ideas can be traced to problems encountered while making the actual thing.

Its weakest areas are precisely where the project has not yet left its own laboratory.

---

# 1. StdPort

## What is strong

StdPort's strongest decision is also its least spectacular:

> A project is a folder containing Markdown and assets.

That keeps the source material comprehensible outside the application.

The filesystem does real work. Filenames carry grouping and order. Markdown carries composition. Existing creative tools remain useful. Astro supplies rendering rather than becoming the conceptual centre of the author's workflow.

This is good systems design because capability has been added without demanding equivalent growth in interface.

The project repeatedly asks whether a new abstraction earns its existence.

That discipline is visible in the result.

### Particularly successful decisions

| Decision | Why it works |
|---|---|
| Filename-based image grouping | Reuses information already present rather than duplicating it as CMS data |
| Markdown gallery syntax | Gives authors composition without exposing implementation machinery |
| Ordinary project folders | Keeps work portable and inspectable |
| Explicit fields only for genuine authored choices | Separates inference from authorship |
| Real content as test material | Exposes assumptions earlier than synthetic examples |
| Cards/Tiles and density controls | Lets the design be interrogated before prematurely fixing it |
| Contextual navigation | Adds behaviour only when the page creates a need for it |
| Code-window enhancement | Adds site behaviour while leaving fenced Markdown portable |
| Image-aware contrast correction | Protects readability without replacing the author's colour judgement |

There is a consistent principle underneath these features:

> **Deep and scan — but don't get in the way.**

That is stronger than a style guide because it can govern both interface and implementation decisions.

## What is weak

StdPort is still partly dependent on knowledge that its maker currently possesses implicitly.

The conventions are becoming documented, but there is a difference between a convention being understandable after explanation and being discoverable by a new author.

For example, filenames such as:

```text
A1.png
A1T.png
PHero.png
```

are wonderfully cheap once understood.

They are opaque before they are understood.

That is not necessarily a defect. Every system has a grammar. But StdPort has not yet demonstrated that its grammar can be learned cheaply by its intended beginner.

There is also a risk that the project's admirable resistance to interfaces becomes dogmatic.

Sometimes an interface genuinely is the cheapest representation of a decision.

The rule should remain:

> A new interface must earn its existence.

It should not quietly become:

> Interfaces are suspect.

The former is a design principle. The latter would become an aesthetic prejudice.

---

# 2. The educational proposition

The educational premise is compelling:

> Give someone something worth making, then let the desire to change it pull them into the technology.

This reverses a common teaching sequence.

Instead of:

```text
learn technology
→ complete exercises
→ eventually make something personally meaningful
```

StdPort proposes:

```text
receive something already useful
→ put your own work into it
→ encounter a limitation or desire
→ learn the technology needed to change it
```

That is a credible and attractive proposition.

It also fits the architecture: complexity exists, but is not compulsory at the beginning.

## The problem

The educational claim is still mostly a **design hypothesis**.

The project has not yet shown what happens when a genuine beginner encounters:

- the folder structure;
- Markdown frontmatter;
- image naming;
- gallery syntax;
- the terminal;
- Git;
- an AI collaborator;
- a broken build;
- an ambiguous AI answer.

The creator being able to operate the system efficiently does not prove that a beginner can.

### Grade: **C+ for evidence, A- for proposition**

This is probably the single largest gap between the strength of the idea and the strength of the evidence.

The next major experiment should not be another feature.

It should be another person.

---

# 3. AI collaboration

Here the project becomes considerably more interesting.

It began with AI as a way to lower the technical threshold for changing a portfolio.

But sustained use exposed a different problem:

**How does an AI know where it is?**

The answer that emerged was not a better master prompt.

It was a set of recoverable external reference points.

## Anchors

The project now uses things such as:

```text
source files
Git commits
gpt-tree.txt
documentation
status.diff
screenshots
terminal evidence
running behaviour
```

as different forms of evidence and orientation.

The important insight is:

> **Backups preserve state. Anchors preserve orientation.**

That is a useful distinction.

A backup can restore files without restoring why they matter.

A transcript can preserve discussion without establishing which conclusions survived testing.

An anchor is useful because it allows a collaborator to reconstruct enough trustworthy orientation to act.

This has practical consequences.

Instead of trying to preserve the entire conversation:

```text
remember everything
→ carry enormous context
→ hope current reality is represented correctly
```

the project increasingly works as:

```text
objective
→ orient from anchors
→ inspect exact evidence
→ make bounded change
→ observe
→ verify
→ leave useful anchors
→ continue
```

That is not merely a documentation strategy.

It is an operational architecture for collaboration with a fallible model.

### Grade: **A**

This is the strongest conceptual result of the project so far.

---

# 4. Trust and Kontrolle

The project avoids the unproductive question:

> Can AI be trusted?

That question is too coarse.

A more useful question is:

> Under what conditions can a particular AI action become sufficiently observable, bounded and recoverable for a human to rely on it?

The answer is procedural.

```text
current evidence
→ bounded action
→ observable result
→ verification
→ correction if necessary
→ known-good checkpoint
```

Trust becomes something produced by the structure of the interaction rather than something granted to the model as a personality trait.

The project's use of **Kontrolle** is therefore important.

Not control in the sense that the human must manually perform every operation.

Control in the sense that consequential claims can be inspected, tested and recovered from.

> **Where verification is cheap, verify. Where it is expensive, expose uncertainty.**

That is a strong working rule because it does not pretend uncertainty can be eliminated.

It makes uncertainty visible enough to govern action.

## Weakness

The idea is currently stronger as a practical design principle than as a formal theory of trust.

Terms such as *trust*, *control*, *verification*, *evidence*, *authority* and *recoverability* could easily expand into a much larger conceptual literature.

The project does not need to pretend it has solved that literature.

Its strength is that it arrived at a useful operational formulation through practice.

It should protect that modesty.

### Grade: **A-**

Excellent practical concept. Do not inflate it into a universal theory before the evidence earns that move.

---

# 5. Human judgement

One of the project's subtler discoveries appeared in what could have remained a trivial colour problem.

The homepage needed readable text over images and authored colour overlays.

A purely technical framing might reduce this to:

```text
measure contrast
→ choose black or white
```

But that was not actually the design problem.

The desired behaviour included:

- preserve the author's colour;
- preserve the image;
- maintain the distinction between rest and hover;
- intervene only when readability becomes threatened;
- avoid over-correcting;
- let questionable design decisions remain perceptible.

The human did not need to provide the final algorithm.

The human provided the disciplinary judgement from which an acceptable algorithm could be derived.

This suggests a useful division of labour:

| Human | Machine |
|---|---|
| establishes purpose | explores implementation |
| supplies disciplinary judgement | calculates and transforms |
| decides what matters | searches possible solutions |
| evaluates consequences | executes repeatable operations |
| determines acceptable compromise | implements bounded rules |
| decides whether evidence is sufficient | exposes observable results |

This is more useful than either extreme:

```text
AI does everything
```

or:

```text
AI is merely a typewriter
```

Neither describes what actually happened.

### Grade: **A**

This is one of the project's strongest observations because it arose from ordinary implementation rather than abstract speculation.

---

# 6. Repeatable connected development

The phrase **repeatable connected development** names something the project was already doing.

A development cycle is not valuable merely because it can be repeated.

Its result needs to improve the conditions under which the next cycle begins.

```text
cycle 1
  ↓
evidence + judgement + useful anchors
  ↓
cycle 2
  ↓
better evidence + refined judgement + better anchors
  ↓
cycle 3
```

This sounds obvious after being stated.

In AI-assisted work it is not.

A chat interaction can generate large amounts of apparently productive activity while leaving almost no durable improvement in the next interaction's ability to understand the project.

StdPort/Descartes increasingly avoids that failure.

The project stores useful learning in the project rather than depending on continuity of the conversation.

### Grade: **A-**

The concept is strong.

The evidence is currently one sustained project.

The obvious challenge is whether the same structure remains useful when applied to another kind of artefact, another human, another AI, or a substantially longer time horizon.

---

# 7. Descartes

Descartes is the project's most ambitious layer.

Its strongest formulation is not that the project somehow thinks for itself.

It is that continuity should not depend entirely on continuity of participants.

```text
Human A + AI A
      ↓
    PROJECT
      ↓
persistent artefacts
reasoning worth preserving
evidence
conventions
open questions
      ↓
Human B + AI B
      ↓
orient → question → verify → continue
```

The project becomes the durable middle.

That is a meaningful idea.

It also explains why documentation is not merely retrospective.

> Documentation isn't the record left behind when the work is finished. It's part of how the work becomes continuable.

## The decisive test has not happened yet

Descartes currently has strong **internal evidence** but weak **substitution evidence**.

The project has demonstrated that anchors help the present collaboration reorient quickly.

It has not yet adequately demonstrated:

```text
different AI
+
possibly different human
+
existing project anchors
=
successful continuation
```

That experiment matters enormously.

If a fresh participant can recover the project, correctly distinguish current evidence from stale narrative, identify an unresolved task, make a bounded change and leave the project in a better documented state, Descartes gains serious empirical support.

If they cannot, the failure will be equally valuable.

It will reveal which anchors were only meaningful to their creators.

### Grade: **B+ demonstrated / A potential**

The idea is ahead of its evidence.

That is acceptable provided the documentation keeps saying so.

---

# 8. Documentation

The documentation has recently become substantially better aligned with the actual project.

Its architecture is increasingly clear:

| Document | Role |
|---|---|
| P0 Inception | Why this began |
| P6 Working with GPT | How AI collaboration is approached |
| P7 Project | What StdPort is becoming |
| P8 Methodology | Principles governing design and development |
| P9 Workflow | Concrete operating procedure |
| D9 Project Awareness | How a new AI establishes orientation |
| D10 DaPlan | Memento of trajectory, accomplishments and next work |
| G10 Grading | Deliberate self-criticism and evidence gap |

This is good separation.

The danger is duplication.

Anchors, trust, verification and recoverability are important enough that they naturally appear in several documents. If every document becomes a complete explanation of Descartes, the documentation will become harder rather than easier to orient from.

Each document should retain a distinct job.

### Grade: **A-**

The architecture is now good enough that the next improvement is probably **less repetition**, not more writing.

---

# 9. Evidence discipline

The working process has developed a useful habit:

```text
claim
→ evidence
→ decision
```

rather than:

```text
plausible explanation
→ more implementation
→ more plausible explanation
```

Screenshots and terminal output have repeatedly corrected interpretations.

Exact current files are preferred over reconstructed snippets.

Complete replacement files reduce manual merge ambiguity.

Known-good Git states separate durable checkpoints from current working changes.

These are small procedural decisions with large cumulative effects.

## Remaining weakness

Verification is still opportunistic rather than systematic.

There is no broad automated test suite establishing invariants such as:

- every project builds;
- every gallery marker resolves;
- every referenced tile image exists or falls back correctly;
- every project route renders;
- frontmatter conforms;
- duplicate content files are detected;
- documentation anchors are current;
- awareness packaging completes and passes integrity checks.

Not all of these require automation.

But as the project grows, some cheap automated verification could strengthen **Kontrolle** without turning the project into a QA exercise.

### Grade: **A- for practice, B for automation**

---

# 10. The most important weaknesses

If I were trying to break the project's argument rather than help it, I would attack these points.

### 1. The intended beginner has not yet validated the beginner experience

This is the largest weakness.

### 2. Descartes has not yet survived genuine participant substitution

Reorientation within one long collaboration is evidence, but it is not the strongest test of the thesis.

### 3. The methodology may be overfitted to software development

Anchors, bounded change and verification appear broadly useful, but that portability has not been demonstrated.

### 4. Documentation can become self-referential

A project about documenting the project can begin generating documentation because documentation itself feels like progress.

The antidote is already present:

> Does this remove more complexity than it introduces?

Apply that ruthlessly to documents too.

### 5. The system has conventions but not yet proven onboarding

Elegant conventions are not automatically obvious conventions.

### 6. The project risks conceptual inflation

Words such as **Descartes**, **Kontrolle**, **anchors**, **repeatable connected development** and **engineered trust** are memorable.

That is useful.

But terminology should continue earning its place through explanatory power and evidence.

The project is strongest when a concept names something that was already observed.

It will weaken if implementation starts being arranged merely to illustrate the terminology.

---

# 11. What I would not change

Several things should resist improvement for improvement's sake.

I would not turn StdPort into a conventional CMS administration interface.

I would not replace ordinary files with a database merely because databases are conventional.

I would not make every inferred behaviour configurable.

I would not make every author control into a visitor control.

I would not rewrite P0 to make it sound as though the later methodology was known from the beginning.

I would not attempt to preserve every AI conversation.

I would not formalise Descartes into a large framework yet.

I would not add abstraction merely to make the code look architecturally mature.

And I would not remove the slightly improvised character through which several of the best ideas were actually discovered.

---

# 12. What would raise the grade

The next gains are empirical rather than rhetorical.

| Experiment | What it would test |
|---|---|
| Give StdPort to a genuine beginner | Whether low-threshold authorship is real |
| Ask them to add a project without live rescue | Discoverability of conventions |
| Let them deliberately change the design with AI | Whether complexity becomes available at the right moment |
| Give the project to a fresh AI with only the intended awareness anchors | Descartes restore capability |
| Ask that AI to identify current state vs stale evidence | Quality of the anchor architecture |
| Have a different human continue one bounded task | Human substitutability |
| Apply the method to a non-portfolio artefact | Generality of repeatable connected development |
| Leave the project untouched for a substantial period, then restore orientation | Temporal recoverability |
| Add a small set of cheap automated checks | Whether Kontrolle can increase without process bloat |

None requires a new grand theory.

They require exposing the existing theory to conditions capable of disproving it.

---

# Final judgement

StdPort began as a practical attempt to make a portfolio easier to own and modify.

That part works well enough to have become almost the less interesting result.

The more significant development is that the act of building it exposed a problem in AI-assisted work: **capability is abundant, but orientation and justified trust are fragile**.

The response was not to demand perfect memory or perfect AI.

It was to reorganise the work around recoverable evidence:

```text
anchors
→ orientation
→ bounded action
→ observation
→ verification
→ useful persistence
→ next cycle
```

That is credible because it was not invented first and demonstrated afterwards. It emerged while repeatedly trying to continue actual work.

The project should nevertheless resist congratulating itself too early.

Its most important claims now need outsiders.

A beginner should test StdPort.

A fresh AI should test the anchors.

Another human should test continuity.

Another kind of project should test the methodology.

If those tests fail, the failures will probably produce the next useful version of the idea.

If they succeed, the grade can go up.

## **Current grade: A-**

**Strongest quality:** the project converts lessons from actual development into structures that improve subsequent development.

**Largest weakness:** too much of the evidence still comes from the same human–AI collaboration that generated the claims.

**Most valuable next move:** stop explaining the experiment for a moment and let somebody else enter it.
