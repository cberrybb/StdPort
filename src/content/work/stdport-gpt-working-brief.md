---
title: "StdPort GPT Working Brief"
slug: "stdport-gpt-working-brief"
category: "StdPort"
description: "Compact operating context for GPT-assisted work on StdPort."
publishDate: 2026-09-06
tags:
  - StdPort
  - GPT
  - Workflow
tileL1: "StdPort"
tileL2: "GPT working brief"
gallery: {}
---

# StdPort — GPT Working Brief

## Environment

- Project: StdPort.
- Editor: VS Code.
- Use the VS Code integrated terminal.
- Do not introduce another shell or environment unless actual terminal output requires it.
- If a command fails, use the exact terminal output to diagnose it before changing approach.
- Do not burden the normal path with Mac/Windows questions when the environment can be inferred from output if a failure occurs.

## Source of truth

- The current local project is authoritative.
- GitHub `main` is the shared version after a confirmed push.
- A newly supplied current-source snapshot supersedes earlier ZIPs and source files.
- Do not mix files from different snapshots.
- Ignore old archives unless they are explicitly needed for history.
- Before changing coupled components, inspect their current versions.

## User level

- Primary authors are graphic-design students, not developers.
- Keep the successful path short.
- Do not explain technical exceptions before they occur.
- On failure, diagnose from the actual output and give one fix at a time.
- Explain what a diagnostic step is testing when that is useful.

## Authoring model

Markdown is the student-facing interface.

Assets live with their project.

Gallery frontmatter is a record:

```yaml
gallery:
  A: "Process"
```

An empty label keeps the gallery but removes its pill:

```yaml
gallery:
  A: ""
```

Single media can be placed in the narrative:

```md
[image: A3.png /w:50 /C]
[video: V1.mp4 /w:50 /C]
```

Alignment switches:

```text
/L = left
/C = centre
/R = right
```

`/w:` is relative to the current rendered text-frame width and remains responsive.

Row galleries include:

```md
[gallery:A /row]
[gallery:A /row:4]
[gallery:A /row:4,3]
```

## Design principle

Do not add author-facing complexity unless real use requires it.

Prefer extending the small Markdown grammar over adding interfaces, configuration or implementation concepts that students must learn.

Polish and minor fixes can have significant value when they remove friction encountered during real authoring.

## GPT support rule

**Known context beats generic defaults.**

Do not replace an established environment, command style, source version or project convention with a generic recommendation.

Do not introduce Bash, alternative shells or parallel Mac/Windows instructions when VS Code and its terminal are already established.

If the existing path fails, use the evidence in the failure to determine the relevant environment-specific response.

## Testing evidence

- StdPort has been tested with both daughters as intended student users.
- Both progressed into real authoring in approximately 30 minutes.
- They did more than follow instructions: their use generated new requirements.
- Those requirements included single narrative images, image sizing, centred/right alignment and video.
- Their use also helped expose gallery presentation and responsive-layout issues.
- This is initial participatory user evidence, not independent validation.

## Working discipline

- Prefer the smallest change that solves the observed problem.
- Do not regress working behaviour while fixing another feature.
- Treat interacting gallery/media components as coupled until current source proves otherwise.
- Separate genuine StdPort problems from support mistakes, stale-source confusion or tooling mistakes.
- Do not count assistant-generated environment mistakes against StdPort usability.
- Keep historical detail in project documentation rather than carrying all of it as active troubleshooting context.
