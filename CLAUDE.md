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

**No routing:** The site is a single page. Navigation uses anchor-based smooth scrolling via utility functions in `src/modules/Scroll/Scroll.tsx` (`ScrollCenter()`, `ScrollTop()`). Target element IDs: `header`, `AboutMe`, `Experience`, `Contacts`.

**No state management:** All data is static. Job history, skills, and about me content are stored in translation JSON files (`src/i18n/en.json`, `src/i18n/ru.json`). Contact data is in `ContactsData.tsx`. No Redux, Context, or other state library.

**Internationalization (i18n):** Uses `react-i18next` with `i18next-browser-languagedetector`. Configured in `src/i18n/i18n.ts`, initialized in `src/main.tsx`. All user-facing strings are in `src/i18n/en.json` (English) and `src/i18n/ru.json` (Russian). Components use the `useTranslation()` hook and `t()` function. The `<Trans>` component is used for HTML content (AboutMe). Language is auto-detected from the browser and persisted in localStorage.

**Language Toggle:** `src/modules/LanguageToggle/LanguageToggle.tsx` provides a button in the Header that switches between EN and RU. Shows the opposite language label (e.g., "RU" when in English).

**Styling:** SCSS is the primary styling approach. Global styles are split across `reset.css`, `main.css`, `index.css`, and `App.css`. The `main.css` file defines color utility classes (`.whiteText`, `.greenText`, etc.) and typography. Primary brand color is `#005025` (green).

**Semantic HTML:** Components use semantic elements: `<header>` (Header), `<nav>` (Navigation), `<section>` (PhotoPage, AboutMe, Experience), `<footer>` (Footer).

**SEO:** `index.html` includes meta description, Open Graph tags, Twitter Card tags, canonical URL, and JSON-LD structured data (`@type: Person`). `public/robots.txt` and `public/sitemap.xml` are provided for search engines.

### Component Tree

```
App
  Header          - title + language toggle + copy-URL-to-clipboard share button
    LanguageToggle  - EN/RU switch button
  Navigation      - anchor buttons for smooth scroll
  PhotoPage       - hero/intro section with CTA
  ContactBox      - flex wrapper
    Skills        - skill tag buttons
    Contacts      - social links, phone, email (data in ContactsData.tsx)
  AboutMe         - about section
  Experience      - wraps Jobs component (job history list)
  Credits         - attribution
  ScrollUp        - scroll-to-top button (uses direct DOM event listeners)
  Footer          - copyright
```

### Entry Point

`src/main.tsx` renders `<App />` into `#root` with React StrictMode. i18n is initialized via `import './i18n/i18n'` before the App import. Global CSS resets and typography are imported here.

### Dependencies

**Runtime:** react, react-dom, react-i18next, i18next, i18next-browser-languagedetector

**Dev:** typescript, vite, @vitejs/plugin-react, sass, @types/react, @types/react-dom, @types/node
