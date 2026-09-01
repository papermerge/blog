# Papermerge News

Announcements and product updates for Papermerge, built with
[Astro](https://astro.build/) and published to GitHub Pages at
<https://www.papermerge.blog>.

## Develop

Requires Node 22+ and Yarn (via Corepack).

```sh
corepack enable
yarn install
yarn dev        # http://localhost:4321
```

## Build

```sh
yarn build      # output in dist/
yarn preview    # serve the production build locally
```

## Writing a post

Add a Markdown file to `src/content/news/`. The file name becomes the URL slug
(`src/content/news/my-post.md` → `/news/my-post/`).

```markdown
---
title: "Post title"
description: "One-sentence summary, used in listings and RSS."
pubDate: 2026-09-01
tags:
  - announcement
draft: false
---

Post body in Markdown.
```

- `updatedDate` (optional) shows an "updated" date on the post.
- `draft: true` keeps a post out of the build, listings and RSS.
- `heroImage` (optional) points at an image in `src/` and is optimized at build time.
- Prefix a file with `_` to have the loader ignore it entirely.

## Deployment

Pushing to `main` runs `.github/workflows/publish.yml`, which builds the site
and deploys it to GitHub Pages (Pages **Source** must be set to
**GitHub Actions** in the repository settings). The custom domain
`www.papermerge.blog` is configured via `public/CNAME`.
