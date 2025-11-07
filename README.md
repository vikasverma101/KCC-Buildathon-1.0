# Buildathon 2025 – Static Marketing Site

Modern, animated single-page site built with HTML, Tailwind CSS (CDN), and vanilla JavaScript. No backend required.

## Features

- Single-page layout with smooth scroll navigation
- Sections: Hero (countdown), About, Themes, Schedule, Prizes, Judges, Sponsors, FAQ, Registration (Google Form), Footer
- Tailwind utility styling: gradients, rounded cards, shadows, hover animations
- Simple scroll reveal animations (IntersectionObserver)
- Responsive navbar with hamburger menu on mobile
- Countdown timer to 2025-12-15T09:00:00

## Getting Started

1. Open `index.html` in your browser.
2. To edit text/images, modify the corresponding section in `index.html`.
3. To change event settings, adjust `script.js` variables:

```js
const EVENT_NAME = 'Buildathon 2025';
const EVENT_DATETIME_ISO = '2025-12-15T09:00:00';
```

4. Update the Google Form embed URL in `index.html` (Registration section):

```html
<iframe src="https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true"></iframe>
```

5. Colors and subtle animations are controlled via Tailwind classes in `index.html` and small helpers in `style.css`.

## File Structure

- `index.html` – Page markup and sections
- `style.css` – Smooth scroll, gradient animation, responsive iframe helper
- `script.js` – Navbar toggle, countdown timer, scroll reveal
- `README.md` – This guide

## Customize Quickly

- Change the title/logo text in the navbar (`Buildathon 2025`).
- Update section content (tracks, schedule, prizes, judges, sponsors).
- Replace placeholder images/logos with your own.
- Update social links in the footer.

## Deploy

You can deploy instantly to any static host.

### Vercel

1. Go to `https://vercel.com/new` and select this folder.
2. Framework preset: "Other" (no build step).
3. Deploy. Vercel will host `index.html` at the root.

### Netlify

1. Go to `https://app.netlify.com/start` and choose your repo/folder.
2. Build command: none. Publish directory: root (`/`).
3. Deploy site.

### GitHub Pages (optional)

1. Push to a GitHub repo.
2. Settings → Pages → Deploy from branch → `/` root.

## Notes

- Tailwind is included via CDN for simplicity; no build tooling required.
- For best performance, replace remote images with optimized local assets where possible.


