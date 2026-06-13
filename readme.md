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

## Deploy

Pushing to `main` triggers
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds
with Bun and publishes `dist/` to GitHub Pages.
