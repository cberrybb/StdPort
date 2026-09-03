---
title: "D10: DaPlan"
description: |
  A chronological working record of what Descartes has achieved, what is being
  tested now, and what remains worth pursuing.
publishDate: "2026-09-01 00:00:00"
tags:
  - Descartes
  - Plan
  - Tasks
  - Progress
tileFilter: "#4dd9e0"
tileL1: "D10 The Plan"
tileL2: "An idea of how we got here - not what we planned to do"
---

# DaPlan

A chronological working record of the project.

The table keeps completed work alongside current and future work so that progress is not erased as the project develops.

`Done` means there is enough evidence to treat something as known-good.  
`Next` is the current area of attention.  
`Todo` is real work we expect to address.  
`Later` is deliberately not a current problem.

| Status | Stage | Area | Task / achievement | Evidence / result |
|---|---:|---|---|---|
| Done | 01 | Foundation | Started with an Astro portfolio template | The template provided a functioning website and technical starting point rather than a finished architecture |
| Done | 02 | Foundation | Chopped up the portfolio template | Removed and reshaped the template assumptions so the site could become our own system rather than a customised template |
| Done | 03 | AI collaboration | Used AI to develop the new structure | AI made it practical to alter the Astro implementation while the human could concentrate on what the portfolio should become |
| Done | 04 | Content | Created an automatic content environment | Ordinary project content could drive the site rather than requiring each project or page to be manually constructed in website code |
| Done | 05 | Content | Established project folders as the working unit | Markdown, images and predictable filenames could live together as an understandable project |
| Done | 06 | Authoring | Reduced the need to work directly in Astro | Increasing amounts of portfolio authoring could happen through files, folders, Markdown and conventions instead of web-development code |
| Done | 07 | Gallery | Pushed the automatic content model toward galleries | Images became structured project content rather than individually placed website assets |
| Done | 08 | Gallery | Established filename-driven gallery discovery and ordering | Predictably named images could be discovered, grouped and ordered automatically |
| Done | 09 | Gallery | Added `[gallery:A]` composition syntax | A small instruction in Markdown could place automatically discovered visual material within the authored narrative |
| Done | 10 | Gallery | Added combined galleries | `[gallery:A,B]` allowed existing image groups to be composed together |
| Done | 11 | Gallery | Added tile presentation | `/tile` introduced an alternative presentation while retaining the same underlying content convention |
| Done | 12 | Gallery | Added authoring feedback and publish behaviour | Missing tile material could be exposed during authoring and `/p` could suppress that QA for publication |
| Done | 13 | Architecture | Split the growing gallery system into dedicated components | Standard, tile and row behaviour gained clearer implementation boundaries rather than remaining in one monolithic component |
| Done | 14 | Project page | Developed automatic project hero behaviour | `PHero` became the automatic project hero, with local `heroImage` fallback and no forced stock hero |
| Done | 15 | Project page | Reworked the project-page layout around one consistent width | Hero, text and galleries gained a common spatial framework instead of accumulating nested width rules |
| Done | 16 | Gallery | Pushed galleries toward authored row composition | `/row`, `/row:n` and explicit row sequences gave the author control over how images are grouped |
| Done | 17 | Gallery | Developed justified no-crop row geometry | Images retain their natural proportions, share row height and use row grouping itself as a compositional control |
| Done | 18 | Descartes | Began documenting the project inside the project | Inception, methodology, workflow, awareness and planning material became ordinary CMS content rather than separate external documentation |
| Done | 19 | Descartes | Recognised the project as more than the portfolio itself | The work began to describe a broader experiment in human-AI collaboration, authoring, evidence and process |
| Done | 20 | AI context | Developed a project-awareness process | A new AI can be instructed to establish project reality from evidence rather than relying on conversational memory or confident inference |
| Done | 21 | AI context | Developed a compact context-packaging approach | Code, project structure, documentation and current-state evidence can be packaged without uploading the entire project indiscriminately |
| Done | 22 | AI context | Demonstrated an efficient context dump | A current project snapshot was captured in a roughly 112 KB package while retaining the important text and Markdown context |
| Done | 23 | Workflow | Established evidence-first collaboration | Small changes are tested against browser, terminal, files or screenshots rather than treated as successful because the code looks plausible |
| Done | 24 | Workflow | Established known-good Git checkpoints | Working states can be committed before the next experiment, reducing the cost of trying changes |
| **Next** | 25 | Gallery | Verify row composition as an authoring control | Test `/row:1`, `/row:2`, `/row:3`, `/row:4`, explicit sequences, landscapes, portraits, mixed ratios, incomplete rows and responsive widths; confirm that row grouping provides useful control over height without cropping |
| Todo | 26 | Gallery | Regression-test standard and tile galleries | Standard, combined, tile and publish behaviour remains known-good after the gallery split and row work |
| Todo | 27 | Gallery | Verify the image-ordering workflow | Reordering through filenames and ordinary Finder/Explorer operations is practical enough that no unnecessary CMS ordering interface is required |
| Todo | 28 | Project page | Test the current layout against genuine portfolio projects | The shared width, hero, text and gallery system works convincingly beyond the current development fixture |
| Todo | 29 | Project page | Make final spacing and responsive adjustments | Any remaining hero size, gallery gaps, typography or responsive changes are driven by real projects and observed problems |
| Todo | 30 | Images | Define homepage/project-card image semantics | Project cards have a clear and simple image convention distinct from the project-page hero convention |
| Todo | 31 | Authoring | Verify the minimum project-folder convention | A new project can be created primarily from Markdown, images and predictable filenames |
| Todo | 32 | Authoring | Reduce unnecessary frontmatter | Information that can safely be inferred does not have to be manually maintained |
| Todo | 33 | Authoring | Consolidate the complete gallery authoring convention | Standard, combined, tile, publish and row syntax can be explained simply from an author's point of view |
| Todo | 34 | Authoring | Consolidate the project hero convention | `PHero`, local `heroImage` fallback and no-hero behaviour are understandable without exposing implementation complexity |
| Todo | 35 | Beginner path | Write and verify the environment setup path | A beginner can establish the editor, Node, Git, Astro and Descartes with useful checks at likely failure points |
| Todo | 36 | Beginner path | Define the first successful exercise | A new user can run the site, make one small content change and see the result in the browser |
| Todo | 37 | Beginner path | Test onboarding with someone who did not build the system | Real observation reveals where the instructions, terminology or abstractions still create unnecessary difficulty |
| Todo | 38 | AI | Reconcile AI starting instructions with the verified workflow | Instructions reflect the working evidence-first process without becoming long, controlling or high-maintenance |
| Todo | 39 | AI | Keep verification and failure-point behaviour explicit | AI proposes cheap checks and asks for evidence rather than assuming that its implementation worked |
| Todo | 40 | AI | Keep rabbit-hole avoidance explicit | Interesting side problems are recorded rather than expanded unless they block the current objective |
| Todo | 41 | AI context | Verify and document the canonical context ZIP process | A compact package reliably carries enough architecture, narrative, conventions and current state for competent collaboration |
| Todo | 42 | AI context | Test the context package with a genuinely fresh AI | A fresh AI can reconstruct sufficient project awareness without access to the conversation that produced the project |
| Todo | 43 | AI context | Make context generation reproducible | One simple process can regenerate useful project context whenever awareness needs to be reconstructed |
| Todo | 44 | Documentation | Reconcile documentation with verified reality | DaPlan, authoring guidance, README, AI instructions and examples describe the system that actually survived testing |
| Todo | 45 | Documentation | Keep P0 Inception as the evolving origin story | Important changes in purpose and mythology can be recorded without turning Inception into a technical specification |
| Todo | 46 | Documentation | Keep AI-written documentation openly interpretive | AI can write and organise documentation without claiming authorship or perfect historical reliability |
| Todo | 47 | Documentation | Continue using the CMS for Descartes documentation | Documentation remains real authored content and therefore continues testing the system it describes |
| Later | 48 | Openness | Test portability outside the current CMS | Projects remain useful as ordinary Markdown, images and folders even without the current implementation |
| Later | 49 | Generalisation | Test the approach on another kind of authored artifact | A real story, book, site or other use case provides evidence that generalisation is worthwhile |
| Later | 50 | Descartes | Decide what “Descartes” ultimately names | The distinction between CMS, project, experiment, methodology and broader environment is resolved when doing so becomes useful |

## Working rule

For each current task:

```text
small objective
→ define success
→ identify likely failure points
→ make the smallest useful change
→ test against reality
→ fix or commit
→ update DaPlan