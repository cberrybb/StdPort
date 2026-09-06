---
title: "StdPort Recent Updates"
slug: "stdport-recent-updates"
category: "StdPort"
description: "Recent StdPort authoring features, responsive gallery and media fixes, cross-platform workflow findings, and observations from testing the portfolio with two student users."
publishDate: 2026-09-06
tags:
  - StdPort
  - Documentation
  - User Testing
  - Portfolio System
tileL1: "StdPort"
tileL2: "Recent updates and user testing"
gallery: {}
---

# StdPort — Recent Features, Fixes and Test Update

This note records the work added after the existing project documentation began to fall behind the implementation.

It is intended as a practical record of what now works, how an author uses it, what was fixed, and what the first real-user test changes in the project assessment.

## 1. Single images inside project text

A specific image from the same project folder can now be placed directly in the Markdown narrative.

```md
[image: A3.png]
```

The marker must be on its own paragraph.

Width can be set as a percentage of the rendered text frame:

```md
[image: A3.png /w:100]
[image: A3.png /w:60]
[image: A3.png /w:50]
```

`/w:100` means the current width of normal project text, not the full browser width.

The width remains responsive. If the text frame becomes narrower, the image becomes narrower with it rather than retaining an old fixed pixel width.

### Image alignment

Images default to left alignment.

```md
[image: A3.png /w:60 /L]
[image: A3.png /w:60 /C]
[image: A3.png /w:60 /R]
```

- `/L` = left
- `/C` = centre
- `/R` = right

The alignment switch is case-insensitive, so `/c` and `/r` also work.

This provides a lightweight way to compose an individual image without turning it into a gallery or adding layout fields to frontmatter.

---

## 2. Video inside project text

Local video now follows the same authoring model as a single image.

```md
[video: V1.mp4]
```

Width and alignment use the same switches:

```md
[video: V1.mp4 /w:100 /L]
[video: V1.mp4 /w:60 /C]
[video: V1.mp4 /w:50 /R]
```

Supported local video types are:

- `.mp4`
- `.webm`
- `.mov`
- `.m4v`

Videos render with normal browser controls, inline playback and metadata preloading.

Like images, video width is measured against the current rendered text width and recalculates when the layout changes.

This means image and video use one consistent authoring grammar.

---

## 3. Responsive media-width fix

The first implementation of `/w:` measured the text frame and converted the result to a pixel width.

That was correct at the moment of measurement but could become wrong after the browser width changed. The old pixel width could then hold the project layout open.

This affected more than the media itself: a wide image or video could prevent the gallery from reaching narrower responsive states.

The fix was to make media width dynamic.

The system now recalculates the requested percentage whenever the content/text frame changes size.

Therefore:

```md
[image: A3.png /w:50]
```

and:

```md
[video: V1.mp4 /w:50]
```

continue to mean 50% of the *current* text width as the page expands and contracts.

Media containers are also constrained so their intrinsic dimensions cannot force the project grid wider than its available space.

---

## 4. Row galleries now collapse progressively

Row galleries support both a simple responsive maximum and authored row sequences.

```md
[gallery:A /row]
```

defaults to three images per row.

```md
[gallery:A /row:4]
```

treats four as the maximum. As the available gallery width becomes smaller, the whole gallery can step:

```text
4 → 3 → 2 → 1
```

The important correction was that this is a **global responsive maximum for the gallery**, not a decision made independently for each row from the aspect ratios of its images.

That prevents a narrow gallery from producing an arbitrary mixture such as one two-image row followed by several three-image rows simply because the images have different shapes.

Explicit patterns are still supported:

```md
[gallery:A /row:4,3]
[gallery:A /row:3,2,3,2,1]
```

Each requested row count is capped by the current responsive maximum.

Images retain their natural aspect ratios and are justified into rows without cropping.

---

## 5. Gallery pills can now be omitted

Gallery keys and gallery labels are different things.

The key is still required because it connects the Markdown marker to the files belonging to that gallery.

For example:

```yaml
gallery:
  A: "Process"
```

creates gallery `A` with a visible pill labelled `Process`.

A gallery can now deliberately have no visible pill:

```yaml
gallery:
  A: ""
```

The gallery still exists and can still be placed normally:

```md
[gallery:A]
[gallery:A /row:4]
[gallery:A /tile]
```

but the empty tab/pill is not drawn.

### Empty-label bug and fix

The first pill-removal change exposed a dependency in `ProjectExplorer`.

The gallery panel's active state had been derived from the first tab button. Removing the button therefore also caused the gallery panel to disappear.

That dependency has been removed.

If a gallery deliberately has no tab button, the first matching gallery panel itself becomes the active panel.

The final rule is therefore:

```yaml
gallery:
  A: ""
```

means:

```text
gallery exists
+ gallery renders
+ pill is hidden
```

It does **not** mean that gallery `A` has been removed.

The YAML must remain an object. This is invalid:

```yaml
gallery: A
```

because the content schema expects a gallery record rather than a string.

---

## 6. Existing gallery composition syntax

The current project supports these forms:

```md
[gallery:A]
[gallery:A,B]

[gallery:A /tile]
[gallery:A,B /tile]
[gallery:A /tile /p]

[gallery:A /row]
[gallery:A /row:4]
[gallery:A /row:4,3]
[gallery:A /row:3,2,3,2,1]
```

`/p` applies to tile-gallery authoring QA. It suppresses the missing tile/copy warnings for publication; it does not hide the gallery.

Gallery presentation remains separate from gallery discovery: the same underlying image groups can be presented as standard, tile or row galleries.

---

## 7. Text and heading colour correction

Project-page body copy now has an explicit readable colour rather than inheriting the very pale global heading treatment.

Current project-page values are:

```css
.project-content {
  color: #727272;
}

.project-content p,
.project-content li,
.project-content blockquote {
  color: #727272;
}

.project-content h1,
.project-content h2,
.project-content h3,
.project-content h4 {
  color: #120841;
}
```

The important fix was including Markdown `h1` in the project-content heading override.

Previously, an `# H1` written inside a project could inherit the global pale heading colour while `h2`, `h3` and `h4` were being treated separately.

The project title at the top of the page remains separately styled.

---

## 8. Text width versus project width

Project pages deliberately have two useful widths.

The project/gallery frame can use the full available project width, while long-form text is constrained for readability.

Normal paragraphs, lists and blockquotes currently use a maximum width of `58rem`.

Galleries can use the full project-content width.

The image/video `/w:` feature uses the *rendered paragraph width* as its reference, which allows an author to say:

```md
[image: A3.png /w:100]
```

and get an image exactly as wide as the readable text frame rather than the much wider gallery frame.

This distinction is now part of the authoring model rather than an accidental CSS detail.

---

## 9. Current image/video authoring cheat sheet

```md
# single image, text width, left
[image: A3.png /w:100]

# half text width, centred
[image: A3.png /w:50 /C]

# 60% text width, right
[image: A3.png /w:60 /R]

# video, text width
[video: V1.mp4 /w:100]

# half-width centred video
[video: V1.mp4 /w:50 /C]
```

The media file sits in the same project folder as the Markdown project.

---

## 10. Current gallery/frontmatter cheat sheet

A labelled gallery:

```yaml
gallery:
  A: "Final work"
```

An unlabelled gallery with no pill:

```yaml
gallery:
  A: ""
```

Multiple galleries:

```yaml
gallery:
  A: "Final work"
  B: "Process"
  C: "Experiments"
```

Then place them in the narrative:

```md
[gallery:A]
[gallery:B /tile]
[gallery:A,B /row:4]
```

---

# 11. Real-user onboarding test

The grading document previously identified beginner/student validation as one of the project's largest evidence gaps.

At that point the assessment said, in effect:

> The next major experiment should not be another feature. It should be another person.

That experiment has now begun.

StdPort was tested with both daughters. Both were onboard with the system in approximately **30 minutes**.

Importantly, they did not only follow an existing authoring recipe. Their use of the portfolio generated new requirements. Requests for **single images inside the narrative, controllable image width, centred/right-aligned images, and embedded video** came out of the daughters actually trying to compose their own project pages.

Those requests directly drove the addition and refinement of syntax such as:

```md
[image: A3.png /w:50 /C]
[image: A3.png /w:60 /R]
[video: V1.mp4 /w:50 /C]
```

They also exercised the gallery presentation closely enough to expose issues around responsive row collapse and unwanted empty gallery pills.

This makes the test stronger than a simple demonstration in which users were shown a finished feature set. The users got far enough, quickly enough, to encounter the limits of the existing authoring language and ask for layout capabilities that were then incorporated into StdPort.

In that sense, the daughters were not merely test subjects: their first use became a short participatory design cycle:

```text
use portfolio
→ encounter a composition need
→ request a simpler authoring control
→ implement it in the Markdown grammar
→ test it in a real project
→ expose the next issue
```

This is significant because it changes the status of the educational proposition from **untested with its intended users** to **initially demonstrated and iterated with two real users**.

It does not prove universal beginner usability. Two related participants are a small sample, and the test was not an independent controlled usability study.

But it is materially different evidence from the creator simply being able to operate the system.

The result supports the core proposition that an author can begin with a useful portfolio, understand the small file/Markdown grammar quickly, and start changing real work without first learning the implementation machinery.

---

# 12. Grading update

The original `G10_Grading.md` gave:

| Area | Previous grade |
|---|---:|
| Beginner/student validation | C+ |
| Independent validation | C |
| Provisional overall grade | A- |

The first two-user onboarding test justifies revising the interpretation.

### Beginner/student validation: **C+ → B+**

The central claim is no longer wholly hypothetical.

Two intended users have now been brought into the system successfully in roughly 30 minutes.

It should not yet receive an A because the evidence is still small-scale and close to the project.

### Independent validation: **C remains C**

The daughters' test is genuine external use, but it is not independent validation in the stronger sense used by the grading document.

The participants are close to the project creator and the onboarding was not an independent assessment.

This category should therefore remain conservative until the system is tested by people outside the immediate project context.

### StdPort as a working artefact: **A- remains A-**

The new image/video grammar, responsive fixes, gallery behaviour and real-user test strengthen the evidence that StdPort is usable rather than merely demonstrable.

However, the recent fixes also show that it remains a live experimental codebase. The A- description is still appropriate.

### File-based authoring model: **A remains A**

The recent additions strengthen this result.

Single images, videos, responsive layout choices and optional gallery labels have all been added through small textual conventions without introducing a CMS or substantial author-facing interface.

### Provisional overall grade: **A- remains A-**

The important change is not grade inflation.

It is that one of the largest previously identified evidence gaps now has its first concrete result.

The project should record the onboarding test as evidence and repeat it with people outside the family/project context before claiming broad beginner validation.

---

# 13. What this round of work demonstrated

Several apparently small fixes exposed useful design principles.

### One grammar is better than parallel grammars

Image and video now share:

```text
filename + width + alignment
```

rather than inventing separate controls for each medium.

### Responsive behaviour must be defined relative to the author's intention

`/w:50` means half the text frame, not a pixel measurement captured when the page first loads.

Likewise `/row:4` means a responsive maximum of four, not four images regardless of available space.

### Removing interface must not remove meaning

An empty gallery label means "do not show a pill."

It does not mean "delete the gallery."

This is an important example of separating the content model from its interface representation.

### Real users expose different problems from synthetic testing

The project has now moved beyond testing only whether the code works.

The next useful evidence is whether authors can understand the conventions, recover from mistakes, and continue working without the original maker beside them.

That is now a testable part of StdPort rather than only a stated ambition.


---

# 14. Setup, terminal and cross-platform friction

The recent user test also exposed an important qualification to the idea that StdPort is "simple."

The Markdown authoring model is intentionally small and understandable, but the environment around it is not always plain or obvious to a beginner.

## Terminal and command-line friction

Running the portfolio still requires some understanding of a terminal.

Typical commands include:

```bash
npm install
npm run dev
git status
git add .
git commit -m "..."
git push
```

For an experienced developer these are routine. For a new design student they introduce concepts that are separate from the actual portfolio-authoring task:

- knowing which folder the terminal is currently in
- understanding that `npm run dev` keeps the terminal occupied while the server is running
- knowing the difference between saving a file and seeing the browser update
- recognising whether a failure comes from Markdown, Astro, npm, Git or the terminal itself
- understanding when a command has completed and when a process is still running
- reading error output without assuming the entire project has been damaged

This is real onboarding cost and should not be hidden by describing the system simply as "edit Markdown."

The content model can be simple while the development environment remains technical.

## `node_modules` and reinstalling dependencies

During cleanup, `node_modules` was removed.

That folder is generated and can safely be recreated, but after removal:

```bash
npm run dev
```

cannot launch the local Astro installation until dependencies are restored with:

```bash
npm install
```

This is a useful documentation lesson.

"Safe to delete" is not the same as "has no immediate consequence."

For a beginner, documentation should state both:

1. whether a file/folder can be regenerated; and
2. what command is required before normal work can continue.

## Windows and macOS are not identical experiences

The project has now been exercised across Windows and macOS, and the experience was not completely interchangeable.

On Windows, PowerShell introduces its own syntax and path behaviour.

A concrete example was the Astro route filename:

```text
[...slug].astro
```

Square brackets have special meaning in PowerShell wildcard handling. A ZIP command using `-Path` could therefore silently fail to include that file even though the command appeared reasonable.

For literal paths containing square brackets, PowerShell may require:

```powershell
-LiteralPath
```

This is not an Astro problem, but it affects the reliability of project maintenance and hand-off.

On macOS, the terminal/shell conventions differ again. Commands should therefore be documented either as genuinely cross-platform commands or explicitly labelled:

```text
Windows / PowerShell
macOS / Terminal
```

rather than assuming one command recipe is universal.

## Development-server/browser refresh behaviour

The test also exposed a distinction between:

```text
save → automatic browser update
```

and:

```text
save → manually refresh browser → update appears
```

If a saved change appears after a manual refresh, Astro is rebuilding the project, but browser hot-module replacement/live refresh may not be behaving as expected.

If a saved change still does not appear after refresh, that points to a different class of problem, such as:

- the wrong project folder being served
- the wrong file being edited
- the development server not rebuilding
- a syntax/content error preventing the new state from loading

These cases look similar to a beginner but have different causes.

The documentation should therefore avoid a vague instruction such as "if it does not update, restart it" and instead give a small diagnostic sequence.

---

# 15. Git and GitHub are another layer of complexity

Git and GitHub worked, but the workflow was not friction-free enough to treat version control as invisible infrastructure.

The important distinction for a beginner is:

```text
save file
≠
commit
≠
push to GitHub
```

A useful minimal sequence is:

```bash
git add .
git commit -m "Describe the change"
git push
```

To verify that the local project and GitHub agree:

```bash
git status
git log -1 --oneline
```

A result such as:

```text
Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
```

combined with the same commit shown for `HEAD` and `origin/main` is strong confirmation that the latest committed local version has reached GitHub.

This verification step proved more dependable than assuming a push had worked or trying to infer the current repository state indirectly.

## Refreshing project context from GitHub was not seamless

Using GitHub as the mechanism for bringing an external assistant or collaborator fully up to date was less smooth than expected.

Several issues appeared:

- the newest repository state was not always immediately or reliably discoverable through external/indexed views
- a successful local push did not automatically mean that every external tool had instant access to the newest files
- checking individual files risked missing interactions between related components
- temporary ZIPs sometimes represented different moments in the codebase
- PowerShell's handling of `[...slug].astro` caused at least one source archive to omit a relevant file
- fixes made from an older subset of files could accidentally regress newer behaviour elsewhere

The practical solution was to create an explicit **current-source snapshot** from the local working project and treat that snapshot as authoritative.

For example, a lightweight archive containing the text-based project source and documentation is more dependable for review than repeatedly reconstructing the current state from scattered earlier uploads.

This also led to a useful working rule:

> Before changing interacting features, establish one authoritative current version of all affected files.

That matters particularly for the gallery system, where `ProjectExplorer.astro`, `gallery.ts`, `RowGallery.astro`, `StandardGallery.astro` and `TileGallery.astro` can depend on one another.

---

# 16. Documentation implications

The recent work suggests that StdPort needs documentation at two distinct levels.

## Level 1 — authoring

This should be short and aimed at the student.

It should explain only what is needed to create and edit work:

```text
edit Markdown
add images/video
use galleries
set widths/alignment
save
view the result
```

The author should not need to understand Astro internals to do normal portfolio work.

## Level 2 — setup and recovery

This should cover the technical environment:

```text
install Node/npm
clone or obtain the project
npm install
npm run dev
Git commit/push
Windows versus macOS terminal differences
what generated folders can be deleted
how to recover dependencies
how to diagnose browser refresh problems
how to verify GitHub is current
```

Separating these two levels is important.

If all of the technical recovery material is mixed into the basic authoring instructions, the portfolio will appear harder to use than it actually is.

If it is omitted entirely, the project will appear easier than it actually is.

---

# 17. Effect on the grading interpretation

The two-user onboarding result remains positive, but the terminal, platform and GitHub friction makes the result more nuanced.

The evidence currently supports:

> Two intended users were able to get onboard with StdPort in approximately 30 minutes and progressed beyond basic editing to request new composition controls, including centred/sized single images and video. Their use directly informed additions to the authoring language.

It does **not** yet support:

> A beginner can independently install, configure, troubleshoot, version and maintain StdPort in 30 minutes.

Those are different claims.

The current **B+ for beginner/student validation** remains reasonable because real users have now successfully engaged with the system.

However, the test also identifies the next validation target: repeat onboarding with less intervention and record where help is required.

Useful measures for the next test would be:

- time until the first successful content edit
- time until the first image/gallery/video change
- number of terminal interventions required
- number of errors the user resolves without help
- whether the user can stop and restart the project independently
- whether the user can commit and push independently
- whether the user can move between Windows/macOS instructions without ambiguity

This would distinguish **content-authoring usability** from **developer-environment usability** and make the grading evidence substantially stronger.
