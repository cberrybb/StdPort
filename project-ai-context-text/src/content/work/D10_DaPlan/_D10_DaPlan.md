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

DaPlan is a memento: a practical way of keeping enough track of where the project has been, what survived testing, and what is worth doing next. It is not the plan the project was expected to follow.

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
| Done | 16 | Gallery | Added authored row composition | `/row`, `/row:n` and explicit row sequences give the author control over how images are grouped |
| Done | 17 | Gallery | Developed justified no-crop row geometry | Images retain their natural proportions, share row height and use row grouping itself as a compositional control |
| Done | 18 | Descartes | Began documenting the project inside the project | Inception, methodology, workflow, awareness and planning material became ordinary CMS content rather than separate external documentation |
| Done | 19 | Descartes | Recognised the project as more than the portfolio itself | The work began to describe a broader experiment in human-AI collaboration, authoring, evidence and process |
| Done | 20 | AI context | Developed a project-awareness process | A new AI can be instructed to establish project reality from evidence rather than relying on conversational memory or confident inference |
| Done | 21 | AI context | Developed a compact context-packaging approach | Code, project structure, documentation and current-state evidence can be packaged without uploading the entire project indiscriminately |
| Done | 22 | AI context | Demonstrated compact project context | A small awareness package can retain the important text, Markdown and implementation context without carrying the whole repository |
| Done | 23 | Workflow | Established evidence-first collaboration | Small changes are tested against browser, terminal, files or screenshots rather than treated as successful because the code looks plausible |
| Done | 24 | Workflow | Established known-good Git checkpoints | Working states can be committed before the next experiment, reducing the cost of trying changes |
| Done | 25 | Gallery | Verified row composition against real image mixtures | Row counts and explicit sequences work as compositional controls across portrait and landscape material without requiring cropping |
| Done | 26 | Gallery | Added restrained row-image expansion | Row images can open over a screened page at up to 80% viewport width and 90% viewport height while preserving aspect ratio |
| Done | 27 | Project page | Tested the layout against genuine portfolio material | Real portfolio projects now exercise the shared project width, text, hero and gallery system rather than relying only on development fixtures |
| Done | 28 | Project page | Constrained portrait heroes without cropping | Portrait heroes are capped relative to the introduction and aligned with the copy while landscape and square behaviour remains unaffected |
| Done | 29 | Homepage | Established separate homepage tile-image semantics | `tileImage` allows an authored square crop from the same project folder while retaining fallback behaviour when it is absent |
| Done | 30 | Homepage | Added Cards and Tiles authoring modes | The homepage can be assessed as conventional cards or as a denser square-tile composition without changing project content |
| Done | 31 | Homepage | Added temporary author layout controls | Tile columns can be tested at 2, 3 or 4 columns and the controls can be hidden when the chosen published configuration is settled |
| Done | 32 | Homepage | Added authored tile colour | `tileFilter` is an ordinary hex value with a grey default, keeping colour choice in project frontmatter and compatible with the editor's colour picker |
| Done | 33 | Homepage | Developed doubled-filter tile behaviour | The normal tile uses a transparent colour over the image and the same colour again in the lower text band; hover reveals the true image above while retaining the band |
| Done | 34 | Homepage | Added Mono and Colour author controls | The tile system can be viewed in authored colour or forced to a common grey as a structural comparison |
| Done | 35 | Homepage | Added image-aware text contrast correction | The lower part of the actual image is sampled and combined with the filter state so text can switch between `#111` and `#ccc` when readability requires it, including on hover |
| Done | 36 | Navigation | Added contextual section navigation | Long content pages gain previous/next heading controls only when useful, while `Top` appears after scrolling rather than occupying the interface permanently |
| Done | 37 | Navigation | Aligned section jumps with reading position | Heading navigation lands content around a quarter of the viewport down, matching the threshold used to determine the current section |
| Done | 38 | Permanent content | Brought About and Contact into the content system | Permanent pages are ordinary Markdown content while retaining the persistent Home, About and Contact navigation |
| Done | 39 | Markdown | Added progressive code windows | Fenced code remains ordinary Markdown but gains collapsed previews, line counts, copy and expansion controls in the rendered site |
| Done | 40 | Content | Put real portfolio writing through the CMS | Editorial, information, motion graphics, hypergraphics and UX material now coexist with the Descartes documentation and original project material |
| Done | 41 | Workflow | Established complete-file replacement as the normal edit loop | Exact current files are exchanged, inspected and returned as complete replacements where that is safer than manual fragment editing |
| Done | 42 | Workflow | Established project anchors as a reorientation mechanism | Tree, context package, Git checkpoints, documentation and evidence provide recoverable orientation without attempting to preserve every conversation |
| Done | 43 | AI context | Refined the awareness ZIP around descriptive material | The current package deliberately prioritises Markdown, narrative and documentation while carrying enough source code and configuration to reconnect description to implementation |
| Done | 44 | AI context | Made awareness-package generation reproducible | A PowerShell staging process selects the relevant narrative and source files and creates `gpt-context-current.zip` without carrying build output, dependencies or the image library |
| **Next** | 45 | Documentation | Reconcile documentation with verified reality | DaPlan, authoring guidance, README, AI instructions and examples should describe the system that actually survived testing |
| Todo | 46 | Documentation | Preserve the awareness-package recipe in the project | The successful tree/context-generation commands should exist as a durable project instruction rather than only in conversation |
| Todo | 47 | Documentation | Reconcile D9, P6, P9 and README | Remove stale names, old packaging assumptions and starter-template language while preserving each document's distinct purpose |
| Todo | 48 | Architecture | Refactor the homepage implementation after the checkpoint | `index.astro` has accumulated enough tile, control and contrast behaviour that extracting coherent responsibilities should improve maintainability without changing behaviour |
| Todo | 49 | AI context | Test the current package with a genuinely fresh AI | A fresh AI can reconstruct sufficient project awareness without access to the conversation that produced the project |
| Todo | 50 | Beginner path | Write and verify the environment setup path | A beginner can establish the editor, Node, Git, Astro and Descartes with useful checks at likely failure points |
| Todo | 51 | Beginner path | Define the first successful exercise | A new user can run the site, make one small content change and see the result in the browser |
| Todo | 52 | Beginner path | Test onboarding with someone who did not build the system | Real observation reveals where the instructions, terminology or abstractions still create unnecessary difficulty |
| Todo | 53 | Authoring | Verify the minimum project-folder convention with a new user | A project can be created primarily from Markdown, images and predictable filenames without requiring understanding of the implementation |
| Todo | 54 | Authoring | Reduce unnecessary frontmatter | Information that can safely be inferred does not have to be manually maintained |
| Todo | 55 | Authoring | Consolidate gallery and hero conventions for authors | Standard, combined, tile, publish, row and hero behaviour can be explained simply without exposing implementation complexity |
| Todo | 56 | Workflow | Verify the image-ordering workflow with ordinary file tools | Reordering through filenames and Finder/Explorer operations is practical enough that no unnecessary CMS ordering interface is required |
| Todo | 57 | AI | Keep verification, uncertainty and rabbit-hole avoidance explicit | AI should propose cheap checks, expose what it cannot verify and avoid allowing interesting side problems to replace the current objective |
| Todo | 58 | Documentation | Keep P0 Inception as the origin story | Important changes in purpose can be added when useful without converting Inception into a current-state technical specification |
| Todo | 59 | Documentation | Continue using the CMS for Descartes documentation | Documentation remains real authored content and therefore continues testing the system it describes |
| Later | 60 | Openness | Test portability outside the current CMS | Projects remain useful as ordinary Markdown, images and folders even without the current implementation |
| Later | 61 | Generalisation | Test the approach on another kind of authored artifact | A real story, book, site or other use case provides evidence that generalisation is worthwhile |
| Later | 62 | Descartes | Decide what “Descartes” ultimately names | The distinction between CMS, project, experiment, methodology and broader environment is resolved when doing so becomes useful |

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
```
