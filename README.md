# PokeFeur Deploy Bundle

This folder is the static deploy output for the PokeFeur trainer viewer.

## Current bundle metrics

- Generated on: 2026-04-18 22:32:11 +02:00
- Total size: 1.55 GB
- Total files: 51186
- Largest file: luminescent_platinum_bd_fr.js (36.33 MB)
- Largest direct file count in one directory: 3579 in ./assets/trainer-portraits/sprites/source

## Included hosting helpers

- netlify.toml: Netlify publish config
- _headers: cache and security headers for Netlify and Cloudflare-compatible static hosting
- .nojekyll: disables Jekyll processing if this folder is pushed to GitHub Pages

## Best hosting choice right now

Netlify is the only one of the three targets that fits the current bundle without first splitting assets.

## Platform status

### Netlify

Ready now.

Why it fits:

- The current bundle does not exceed Netlify's documented per-directory limit of 54,000 files.
- The highest direct file count in this bundle is 3579, which is safely below that limit.

Official reference:

- https://docs.netlify.com/deploy/deploy-overview/

### GitHub Pages

Not viable with the current full bundle.

Why:

- GitHub documents a recommended 1 GB source repository limit.
- GitHub documents a 1 GB published site limit.
- This bundle is currently 1.55 GB.

Official reference:

- https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits

### Cloudflare Pages

Not viable with the current full bundle on the documented Free plan limits.

Why:

- Cloudflare Pages Free supports up to 20,000 files per site.
- Cloudflare Pages limits a single static asset to 25 MiB.
- This bundle contains 51186 files and the largest file is 36.33 MB.

Official reference:

- https://developers.cloudflare.com/pages/platform/limits/

## Recommended deploy flow

### Netlify via GitHub

1. Create a new GitHub repository for this folder.
2. Copy the full contents of this folder into that repository root.
3. Push the repository to GitHub.
4. In Netlify, import the repository.
5. Keep the publish directory as .
6. Leave the build command empty.

### Netlify via CLI

From inside this folder:

~~~powershell
npm install -g netlify-cli
netlify login
netlify deploy --dir . --prod
~~~

## If you still want GitHub Pages or Cloudflare later

You will need a lighter hosting architecture first, for example:

- move heavy sprite libraries and large vanilla datasets to object storage / CDN
- keep only the HTML, JS, CSS, and small bootstrap manifests on the static host
- load heavy assets from a separate domain

For Cloudflare, the natural next step would be a Pages + R2 split.
For GitHub Pages, the practical route would be GitHub Pages for the shell and a separate CDN for heavy assets.