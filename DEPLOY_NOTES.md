# Shike landing deploy package - JPG version

This folder is the deploy-ready static site for `alericzhu/shike-landing`.

This version uses the original JPG visual assets, not the SVG fallback assets.

## Deployment

Copy everything in this `dist-jpg` folder to the repository root and commit to `main`.

Suggested commands:

```bash
cp -R dist-jpg/* /path/to/shike-landing/
cd /path/to/shike-landing
git add .
git commit -m "Prepare Shike landing site for launch"
git push origin main
```

If Cloudflare Pages is connected to the GitHub repository, pushing `main` should trigger deployment automatically.

## Notes

- Static site only.
- No database.
- No login.
- Client-side routes are handled by `app.js`.
- `_redirects` and `404.html` are included for static hosting fallback.
