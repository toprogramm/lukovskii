# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

- `npm run dev` - Start Vite dev server with HMR
- `npm run build` - TypeScript check (`tsc`) then Vite production build
- `npm run preview` - Preview production build locally

There are no tests or linting configured in this project.

## Architecture

This is a **personal portfolio website** for Ivan Lukovskii, built with React 18, TypeScript, Vite, SCSS, and react-i18next.

### Key Patterns

**Component structure:** All components live in `src/modules/`, each in its own directory with a co-located `.tsx` and `.scss` file. Content-specific page sections are further nested under `src/modules/boxes/`.

**URL-based language routing:** Uses `react-router-dom` for language routes: `/` for English, `/ru` for Russian. This enables SEO indexing of both language versions. Within-page navigation uses anchor-based smooth scrolling via utility functions in `src/modules/Scroll/Scroll.tsx` (`ScrollCenter()`, `ScrollTop()`). Target element IDs: `header`, `AboutMe`, `Experience`, `Contacts`.

**No state management:** All data is static. Job history, skills, and about me content are stored in translation JSON files (`src/i18n/en.json`, `src/i18n/ru.json`). Contact data is in `ContactsData.tsx`. No Redux, Context, or other state library.

**Internationalization (i18n):** Uses `react-i18next` with `i18next-browser-languagedetector`. Configured in `src/i18n/i18n.ts`, initialized in `src/main.tsx`. All user-facing strings are in `src/i18n/en.json` (English) and `src/i18n/ru.json` (Russian). Components use the `useTranslation()` hook and `t()` function. The `<Trans>` component is used for HTML content (AboutMe). Language is determined by URL path (`/` = English, `/ru` = Russian) and synced with i18n in `App.tsx`.

**Language Toggle:** `src/modules/LanguageToggle/LanguageToggle.tsx` provides a dropdown in the Header that switches between EN and RU. Uses `useNavigate()` to route between `/` and `/ru` while preserving hash anchors.

**Styling:** SCSS is the primary styling approach. Global styles are split across `reset.css`, `main.css`, `index.css`, and `App.css`. The `main.css` file defines color utility classes (`.whiteText`, `.greenText`, etc.) and typography. Primary brand color is `#005025` (green).

**Semantic HTML:** Components use semantic elements: `<header>` (Header), `<nav>` (Navigation), `<section>` (PhotoPage, AboutMe, Experience), `<footer>` (Footer).

**SEO:** Multi-language SEO is implemented via:
- `src/modules/SEO/SEO.tsx` - Dynamic meta tags using `react-helmet-async` for per-language title, description, canonical URL, `hreflang` alternates, and Open Graph locale
- `index.html` - Static hreflang links as fallback for crawlers that don't execute JS, plus JSON-LD structured data (`@type: Person`)
- `public/sitemap.xml` - Lists both `/` and `/ru` URLs with `xhtml:link` hreflang annotations
- `public/robots.txt` - Search engine directives
- Translation keys `meta.title` and `meta.description` in `en.json`/`ru.json`

### Component Tree

```
BrowserRouter + HelmetProvider (main.tsx)
  App
    Routes (/ and /ru)
      MainContent
        SEO           - dynamic meta tags via react-helmet-async
        Header        - title + language toggle + copy-URL-to-clipboard share button
          LanguageToggle  - EN/RU dropdown, navigates between routes
        Navigation    - anchor buttons for smooth scroll
        PhotoPage     - hero/intro section with CTA
        ContactBox    - flex wrapper
          Skills      - skill tag buttons
          Contacts    - social links, phone, email (data in ContactsData.tsx)
        AboutMe       - about section
        Experience    - wraps Jobs component (job history list)
        Credits       - attribution
        ScrollUp      - scroll-to-top button (uses direct DOM event listeners)
        Footer        - copyright
```

### Entry Point

`src/main.tsx` renders `<App />` into `#root` with React StrictMode, wrapped in `HelmetProvider` and `BrowserRouter`. i18n is initialized via `import './i18n/i18n'` before the App import. Global CSS resets and typography are imported here.

### Dependencies

**Runtime:** react, react-dom, react-router-dom, react-helmet-async, react-i18next, i18next, i18next-browser-languagedetector

**Dev:** typescript, vite, @vitejs/plugin-react, sass, @types/react, @types/react-dom, @types/node

## Hosting & Deployment

This is a Single Page Application (SPA) with client-side routing. The server must redirect all routes to `index.html` so React Router can handle them. Without this, direct navigation to `/ru` will return 404.

### Build

```bash
npm run build
```

Upload contents of `dist/` folder to your web root.

### Hosting Configuration

**Apache / Shared Hosting (cPanel, Mirahost, etc.):**
The `public/.htaccess` file is included in the build. Make sure to upload it (it's hidden). Requires `mod_rewrite` enabled.

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L]
</IfModule>
```

**Nginx:**
Add to your server block:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

### Troubleshooting

If `/ru` returns 404:
1. Verify `.htaccess` was uploaded (hidden file)
2. Check if `mod_rewrite` is enabled (contact hosting support)
3. Ensure `AllowOverride All` is set for your directory
