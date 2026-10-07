# Akshay Mhatre’s Portfolio

A static portfolio for Akshay Mhatre, built with Astro and deployed on
Cloudflare Workers. The site uses Astro’s font pipeline for Inter, Partytown
for Google Analytics, the sitemap integration for search-engine discovery, and
Playwright for browser-level verification.

## Live site

[akshay3001.com](https://akshay3001.com/)

![Akshay Portfolio](./public/portfolio-screenshot.png)

## Requirements

- Node.js 24
- npm 11

With nvm installed, run `nvm use` to select the version declared in `.nvmrc`.

## Development

Install the locked dependency tree:

```sh
npm ci
```

Start the development server at `http://localhost:4321`:

```sh
npm run dev
```

Create the static production output in `dist`:

```sh
npm run build
```

Preview an existing production build:

```sh
npm run preview
```

## Verification

The pull-request workflow runs the type check and the build:

```sh
npm run check
npm run build
```

Playwright runs only on your machine, because the visual baseline depends on
the local font rendering. Run the build and the Chromium checks:

```sh
npm test
```

`npm test` builds the site, starts a production preview on
`http://127.0.0.1:4322`, and runs the Playwright suite.

To run Playwright against an existing build:

```sh
npm run test:e2e
```

To intentionally update visual snapshots after reviewing a design change:

```sh
npm run test:e2e:update
```

## Deployment

Cloudflare Workers Builds deploys the site from the Git repository. A push to
`master` builds and deploys production. Other branches get a preview URL.
The Worker has no script. It serves the static files in `dist` as configured in
`wrangler.jsonc`.

To serve the production build on the Workers runtime locally:

```sh
npm run build
npx wrangler dev
```

## Project structure

- `src/pages/index.astro` contains the static portfolio page and metadata.
- `src/tests` contains semantic, metadata, accessibility, asset, and visual
  browser tests.
- `public` contains files copied directly to the production build, including
  the `_headers` cache rules for Cloudflare.
- `wrangler.jsonc` configures the Cloudflare Worker that serves `dist`.
- `astro.config.mjs` configures the canonical site URL, Inter fonts, sitemap,
  and Partytown.
