---
title: "D10: DaPlan"
description: |
  The current Descartes task list: achievable work still ahead, kept small,
  testable and ordered without turning future possibilities into current work.
publishDate: "2026-09-01 00:00:00"
tags:
  - Descartes
  - Plan
  - Tasks
  - Progress
---

# DaPlan

A working list of things we are still aiming for.

This is not a speculative roadmap. Add tasks when they become real enough to pursue. Keep rabbit holes elsewhere until they earn a place here.

| Status | Area | Task | Done when |
|---|---|---|---|
| Next | Gallery | Develop `/row` gallery layout | A real project can arrange images into convincing rows, including mixed portrait and landscape images |
| Todo | Gallery | Decide `/row` syntax | A simple default and optional row sequence such as `/row:3,1,2` has been tested and feels worth keeping |
| Todo | Gallery | Test row ordering workflow | Reordering through filenames/Finder/Explorer is practical enough that no unnecessary CMS interface is required |
| Todo | Gallery | Keep testing standard + tile galleries against real work | Current gallery conventions survive use across several genuine portfolio projects without accumulating special cases |
| Todo | Authoring | Test the minimum project-folder convention | A new project can be made primarily from `project.md`, images and predictable filenames |
| Todo | Authoring | Reduce unnecessary frontmatter | Anything that can be safely inferred no longer has to be entered manually |
| Todo | Beginner path | Write the environment setup page | A beginner can establish editor, Node, Git, Astro and Descartes with a verification at each failure point |
| Todo | Beginner path | Define the first successful exercise | A new user can run the site, make one small content change and see it appear in the browser |
| Todo | Beginner path | Test onboarding on someone who did not build the system | We can observe where the instructions or abstractions actually fail rather than guessing |
| Todo | AI | Refine the AI starting instructions from real use | The prompt captures the useful operating rules without becoming long, controlling or high-maintenance |
| Todo | AI | Keep failure-point and verification behaviour explicit | AI regularly proposes cheap checks instead of assuming its own solution worked |
| Todo | AI | Keep rabbit-hole avoidance explicit | Interesting side problems are noted rather than expanded unless they block the current objective |
| Todo | AI context | Define the canonical context ZIP | A fresh AI can understand the important project architecture, conventions and current example without conversational history |
| Todo | AI context | Make the context ZIP reproducible | A simple command can regenerate the tree and curated AI package when manual packaging becomes annoying enough to automate |
| Todo | Documentation | Keep P0 Inception as the evolving origin story | Important changes in the purpose and mythology can be added without turning it into a formal specification |
| Todo | Documentation | Keep the AI documentation openly interpretive | It is clear that AI may write the prose without claiming authorship or full historical reliability |
| Todo | Documentation | Use the CMS itself for Descartes documentation | Documentation pages continue acting as real content and therefore test the system they describe |
| Later | Openness | Check portability outside Descartes | Projects remain useful as ordinary Markdown, images and folders even without the CMS |
| Later | Generalization | Test whether the model naturally supports something other than a portfolio | A real story, book or other site provides a reason to generalize rather than doing it speculatively |
| Later | Product | Decide what “Descartes” actually names | The distinction between CMS, experiment, methodology and broader environment becomes useful enough that it needs resolving |

## Working rule

For each task:

```text
small objective
→ define success
→ identify likely failure points
→ make the smallest useful change
→ test against reality
→ fix or commit
→ update DaPlan
```

If something interesting appears but does not help the current task, record it elsewhere.

Do not let DaPlan become the rabbit hole.
