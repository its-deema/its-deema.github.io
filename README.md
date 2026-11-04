# Deema Alnasser — portfolio

A static, Mac-desktop-style portfolio in English and Arabic. No build step.

```
index.html               page structure
assets/css/style.css     all styles (colors are tokens at the top)
assets/js/content.js     ALL text, in English (en) and Arabic (ar) — edit this to update the site
assets/js/main.js        dock, windows, theme and language logic
assets/fonts/            Thmanyah Sans + Serif Display (Arabic)
```

Run locally: open `index.html`, or run `npx serve .` in this folder.

Deploy: works as-is on GitHub Pages, Netlify or Vercel (upload the folder).

Fonts: Thmanyah files are local copies from Deema's download. Confirm the Thmanyah
license allows use on a public website before deploying; otherwise delete the
`@font-face` lines at the top of `style.css` and the site falls back to IBM Plex Sans Arabic.
