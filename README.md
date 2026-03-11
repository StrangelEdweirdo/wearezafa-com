# ZÁFA Site

Minimal static band site for:

- `/`
- `/fuku/`

## Local Preview

From this folder:

```bash
python3 -m http.server 8000
```

Then open:

- `http://localhost:8000/`
- `http://localhost:8000/fuku/`

## Contact Form

The contact form is prepared for Formspree.

1. Create a form in Formspree.
2. Copy the endpoint in the form `https://formspree.io/f/xxxxxxx`.
3. Replace `YOUR_FORM_ID` in `index.html` with the real ID.

The form is set up to:

- keep HTML form fallback behavior if JavaScript is unavailable
- submit with JavaScript when available
- show sending/success/error status text

## GitHub Setup

Initialize locally if needed:

```bash
git init -b main
git add .
git commit -m "Initial site"
```

After you create an empty GitHub repo:

```bash
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```

## Cloudflare Pages Setup

Create a new Pages project and connect the GitHub repository.

Use these settings:

- Framework preset: `None`
- Root directory: `/`
- Build command: leave blank if allowed; if the UI requires a command, use `exit 0`
- Build output directory: `/`

Because this is a plain static site, there is no build step.

## Files

- `index.html`: homepage and contact form
- `fuku/index.html`: excerpt page
- `styles.css`: shared styles and logo glow effect
- `script.js`: audio behavior and Formspree-enhanced form submit
