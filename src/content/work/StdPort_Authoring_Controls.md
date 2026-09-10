---
title: "StdPort Authoring Controls"
slug: "stdport-authoring-controls"
category: "Instructions"
year: 2026
description: "One-page reference showing where StdPort's author-facing settings live and how to use project images, galleries, inline media, text layout and homepage controls."
publishDate: 2026-09-10

tags:
  - Instructions
  - StdPort
  - Authoring

img: ""
img_alt: "StdPort authoring controls reference"
cardImage: ""
heroImage: ""

tileImage: ""
tileFilter: "#a8a8a8"
tileL1: "StdPort"
tileL2: "Authoring controls"

gallery: {}
---

# StdPort authoring controls

Most day-to-day project authoring happens in:

`src/content/work/PROJECT-FOLDER/project-name.md`

Keep that Markdown file beside its project images and videos.

## 1. Project frontmatter — top of each project `.md`

Required:

```yaml
title: "Project title"
description: "Short project description"
publishDate: 2026-09-10
```

Common optional fields:

```yaml
slug: "project-url"
category: "Editorial Design"
year: 2026

tags:
  - Editorial
  - Typography

img_alt: "Useful description of the main project image"

tileImage: "A1T.png"
tileFilter: "#a78670"
tileL1: "Homepage line one"
tileL2: "Homepage line two"

gallery:
  A: "Outcomes"
  B: "Development"
```

Other supported image fields are `img`, `cardImage`, and `heroImage`.

**Hero shortcut:** put `PHero.png`, `PHero.jpg`, or `PHero.jpeg` in the same project folder. `PHero` takes priority over `heroImage`. Homepage cards also prefer `PHero`; after that they fall back through `cardImage`, `img`, then the stock image.

**Homepage tile:** `tileImage` names a file in the same project folder. If omitted or missing, the normal project/card image is used. `tileL1` falls back to the project title; `tileL2` falls back to category.

## 2. Gallery files — same project folder

Gallery images are discovered from their filenames:

```text
A1.png
A1T.png   optional tile crop for A1
A2.png
A3.png

B1.jpg
B2.jpg
```

The letter is the gallery group; the number sets order. `T` means an optional tile version.

Use frontmatter only for information filenames cannot provide:

```yaml
gallery:
  A:
    title: "Outcomes"
    tiles:
      1:
        line1: "Caption line one"
        line2: "Caption line two"
  B: "Process"
```

Tile metadata uses **display position after sorting**, not necessarily the filename number.

## 3. Gallery markers — directly in project Markdown

```md
[gallery:A]                  standard gallery
[gallery:A,B]                combined gallery
[gallery:A /tile]            tile gallery + authoring QA
[gallery:A /tile /p]         tile gallery; suppress QA warnings
[gallery:A /row]             row gallery; defaults to 3 per row
[gallery:A /row:3,2,3,2,1]   explicit row pattern
```

`/p` suppresses tile QA warnings only; it does not hide the gallery.

## 4. Single images and videos — directly in Markdown

Files must sit beside the project `.md`.

```md
[image: A3.png]
[image: A3.png /w:80]
[image: A3.png /w:50 /L]
[image: A3.png /w:50 /C]
[image: A3.png /w:50 /R]

[video: V1.mp4]
[video: V1.mp4 /w:80 /C]
```

`/w:` is a percentage of the **current rendered text-frame width**. Alignment is `/L`, `/C`, or `/R`; default is left.

## 5. One-off text layout — directly in Markdown

A `[text:...]` marker changes only the **next paragraph, list, or blockquote**, then the project returns to its normal text settings.

```md
[text:50 /anchor:right /align:left]

This paragraph is 50% wide, right anchored, with left-aligned text.
```

Other examples:

```md
[text:70 /anchor:center /align:justify]

[text:60]
```

Available values:

```text
Width:   100 90 80 70 60 50
Anchor:  left center right
Align:   left center right justify
```

Any omitted value inherits the project-wide setting.

## 6. Whole-project text layout — `[...slug].astro`

Location:

`src/pages/work/[...slug].astro`

Near the top is **PROJECT TEXT FORMATTING**. There are three separate setting groups:

- `projectTextAnchor` — where the whole text block sits: left, centre, or right.
- `projectTextWidth` — how wide the text block is, as a percentage of the available content width.
- `projectTextAlign` — how the text is aligned **inside** that block: left, centre, right, or justify.

For each group, **uncomment exactly one setting and leave the other choices commented out**. For example:

```ts
type ProjectTextAnchor = 'left' | 'center' | 'right';
type ProjectTextAlign = 'left' | 'center' | 'right' | 'justify';
type ProjectTextWidth = 100 | 90 | 80 | 70 | 60 | 50;

let projectTextAnchor: ProjectTextAnchor | undefined;

// projectTextAnchor = 'left';
projectTextAnchor = 'center';
// projectTextAnchor = 'right';

let projectTextWidth: ProjectTextWidth | undefined;

// projectTextWidth = 100;
// projectTextWidth = 90;
projectTextWidth = 80;
// projectTextWidth = 70;
// projectTextWidth = 60;
// projectTextWidth = 50;

let projectTextAlign: ProjectTextAlign | undefined;

// projectTextAlign = 'left';
// projectTextAlign = 'center';
// projectTextAlign = 'right';
projectTextAlign = 'justify';
```

The example above means: **centre the text block, make it 80% wide, and justify the text inside it**.

If every option in one group stays commented out, that setting is left unlocked and its on-page setup pills remain visible. Uncommenting one option locks that setting and hides that pill group.

Use these three project-wide controls for the normal body treatment of every project. Use `[text:...]` only for local exceptions between galleries or other content.

## 7. Homepage layout — `index.astro`

Location:

`src/pages/index.astro`

Near the top is **HOMEPAGE LAYOUT**:

```ts
homepageLayout = 'card:2';
homepageLayout = 'card:3';

homepageLayout = 'tile:2 /c';
homepageLayout = 'tile:3 /c';
homepageLayout = 'tile:4 /c';

homepageLayout = 'tile:2 /m';
homepageLayout = 'tile:3 /m';
homepageLayout = 'tile:4 /m';
```

Use only one. `/c` is colour tile tint; `/m` is mono tile tint. Leave all choices commented to show the homepage setup pills.

---

### Where to look when something needs changing

| What | Where |
|---|---|
| Project title, description, tags, tile copy | project `.md` frontmatter |
| Hero image | `PHero.*` beside project `.md`, or `heroImage` frontmatter |
| Homepage card image fallback | `PHero` → `cardImage` → `img` |
| Homepage tile image/tint/text | project `.md` frontmatter |
| Gallery membership/order | image filenames such as `A1`, `A2`, `B1` |
| Gallery titles/tile captions | project `.md` `gallery:` frontmatter |
| Gallery placement/layout | `[gallery:...]` in project Markdown |
| Single image/video placement | `[image:...]` / `[video:...]` in Markdown |
| One-off text treatment | `[text:...]` in Markdown |
| Default project text layout | `src/pages/work/[...slug].astro` |
| Homepage cards/tiles layout | `src/pages/index.astro` |
| Frontmatter schema | `src/content.config.ts` |
| Gallery/media marker implementation | `src/components/gallery/ProjectExplorer.astro` |
| Gallery asset discovery | `src/components/gallery/gallery.ts` |
