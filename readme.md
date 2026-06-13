# crllect.dev

My personal site - [crllect.dev](https://crllect.dev). Built with **Astro**,
**Tailwind CSS v4**, and **Preact islands** (with **Framer Motion** for the
scroll reveals). Deployed to GitHub Pages.

## Develop

```bash
bun install
bun run dev        # http://localhost:4321
```

```bash
bun run build      # static output to dist/
bun run preview    # preview the production build
```

## Structure

```txt
src/
  data/site.ts        # all content — edit projects, skills, links here
  layouts/Base.astro  # head/SEO, theme, fonts, background, nav + footer
  components/          # Nav, Footer, ProjectCard, islands (Reveal, ThemeToggle…)
  pages/               # index, projects, contact, 404
  styles/global.css    # design tokens (light/dark) + shared utilities
public/                # CNAME, favicon, .well-known — copied as-is to dist/
```

To update content (projects, skills, recognition, links), edit
[`src/data/site.ts`](src/data/site.ts) — every page reads from it.

## Deploy

Pushing to `main` triggers
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds
with Bun and publishes `dist/` to GitHub Pages.
