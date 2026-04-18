# 🌐 startpage

A custom Chrome new tab page — built with plain HTML & CSS, no frameworks, no build step. It renders as a phone-sized UI with a dark theme, animated atom logo, search bar, app shortcuts, social links, and a discover feed. Hosted free on GitHub Pages and loaded via a Chrome extension.

---

## Features

- Phone mockup layout (393×851px) centered on the page
- Dark theme with CSS custom properties for easy recolouring
- Animated atom logo
- Google search bar with image search button
- App shortcuts grid with icons and labels
- Social media quick-links
- Discover feed section
- Fully responsive — switches to full-width on small screens

---

## Live demo

> **[lassiipk.github.io/startpage](https://lassiipk.github.io/saim_crome)**
>
> *(Update this link after renaming the repo)*

---

## How to set it as your Chrome new tab

### Step 1 — Enable GitHub Pages

1. Open your repo on GitHub
2. Go to **Settings → Pages** (in the left sidebar under "Code and automation")
3. Under **Build and deployment**, set:
   - Source → `Deploy from a branch`
   - Branch → `main`
   - Folder → `/ (root)`
4. Click **Save**
5. Wait ~60 seconds, then refresh the page — your live URL appears at the top:
   ```
   https://your-username.github.io/saim_crome
   ```

### Step 2 — Install the Chrome extension

1. Open the Chrome Web Store and install **[Custom New Tab URL](https://chrome.google.com/webstore/detail/custom-new-tab-url/mmjkeabkpicgpoocpbcaaklggjokgpnm)**
2. Click the extension icon in Chrome's toolbar
3. Paste your GitHub Pages URL into the field
4. Open a new tab — your page loads instead of Chrome's default

> That's it. Every time you push changes to `main`, GitHub Pages rebuilds automatically and your new tab updates within seconds.

---

## How to customise it

The entire page lives in `index.html`. No build tools, no dependencies to install. Just edit the file and push.

**To change the app shortcuts** — find the `#apps-container` section and edit the `<a>` tags. Each one has an icon (`<i>`), a name, and a URL.

**To change the colour scheme** — edit the CSS variables at the top of the `<style>` block:
```css
:root {
  --body-color: 48 48 58;       /* page background */
  --font-color: 255 255 255;    /* text */
  --theme-background: 20 20 20; /* phone shell */
}
```

**To change the search engine** — find the `<form>` or search button handler in the JS and swap the URL.

---

## File structure

```
startpage/
└── index.html   ← everything lives here
```

---

## Stack

- HTML5 + CSS3 — no frameworks
- Vanilla JavaScript
- Google Fonts (Pacifico, Noto Sans)
- Hosted on GitHub Pages (free)
- Loaded in Chrome via the Custom New Tab URL extension

---

## Renaming the repo

If you rename this repo (e.g. from `saim_crome` to `startpage`), GitHub automatically redirects the old URL. Your GitHub Pages URL will update to match the new name — just update the link in the Chrome extension settings and you're done. All commit history stays intact.

---

Made with ♡ by **Saim** · Feel free to fork and make it yours.
