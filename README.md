# Juan Herrera

Personal website at https://juanherrera.dev, built with Astro and TypeScript. Output is static HTML and CSS; no client JavaScript is needed.

## Development

Use Node 24 LTS, then run `npm ci` and `npm run dev`. Run `npm run build` for TypeScript/Astro checks and production output, and `npm run preview` to inspect the build.

- `src/pages/index.astro`: page structure and biography
- `src/data/content.ts`: typed writing and project links
- `src/styles/global.css`: responsive design
- `public/CNAME`: custom domain

## Deployment

The GitHub Actions workflow builds and deploys `dist/` on pushes to `main`. In repository Settings → Pages, set the build source to **GitHub Actions** before the first deployment. Retain the custom domain `juanherrera.dev` and existing DNS records.

The original root `index.html` and `style.css` are retained for the current branch-based deployment during migration. Astro uses `src/`; after the first successful Actions deployment, these legacy files can be removed.
