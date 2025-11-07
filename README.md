# Buildathon 1.0 2025

Modern, animated single-page site built with HTML, Tailwind CSS (CDN), and vanilla JavaScript. 

## Features

- Single-page layout with smooth scroll navigation
- Sections: Hero (countdown), About, Themes, Schedule, Prizes, FAQ, Registration (Google Form), Footer
- Tailwind utility styling: gradients, rounded cards, shadows, hover animations
- Simple scroll reveal animations (IntersectionObserver)
- Responsive navbar with hamburger menu on mobile

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



