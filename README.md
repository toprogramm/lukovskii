# LUKOVSKii - Personal Portfolio

Personal portfolio website for Ivan Lukovskii, Front End Developer.

**Live:** [lukovskii.com](https://www.lukovskii.com)

## Tech Stack

- React 18 + TypeScript
- Vite (build tool)
- SCSS (styling)
- react-i18next (internationalization)

## Getting Started

**Prerequisites:** Node.js 16+

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
  i18n/               # Internationalization
    i18n.ts            # i18next configuration
    en.json            # English translations
    ru.json            # Russian translations
  modules/
    Header/            # Site header with language toggle and share button
    Navigation/        # Anchor-based smooth scroll navigation
    LanguageToggle/    # EN/RU language switch button
    Button/            # Reusable button component
    Avatar/            # Profile photo
    ContentBox/        # Layout wrapper with orientation variants
    Contacts/          # Contact info and social links
    Credits/           # Attribution section
    Footer/            # Site footer
    Scroll/            # Smooth scroll utilities
    ScrollUp/          # Scroll-to-top button
    boxes/
      PhotoPage/       # Hero/intro section
      Skills/          # Skills tag cloud
      AboutMe/         # About section
      Experience/      # Experience section wrapper
      Jobs/            # Job history list
  App.tsx              # Root component
  main.tsx             # Entry point
public/
  robots.txt           # Search engine crawling rules
  sitemap.xml          # Sitemap for SEO
index.html             # HTML template with SEO meta tags
```

## Internationalization (i18n)

The site supports English (`/`) and Russian (`/ru`) via URL-based routing for SEO.

- Translation files: `src/i18n/en.json` and `src/i18n/ru.json`
- Configuration: `src/i18n/i18n.ts`
- Components use the `useTranslation()` hook from react-i18next
- Language toggle button is in the Header (top-left)

## Hosting

This is a Single Page Application (SPA). The server must redirect all routes to `index.html` for client-side routing to work.

### Apache / Shared Hosting (cPanel, Mirahost, etc.)

Upload contents of `dist/` folder to your `www/` or `public_html/` directory. **Important:** Include the hidden `.htaccess` file.

The `.htaccess` file contains:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L]
</IfModule>
```

If `/ru` returns 404:
1. Make sure `.htaccess` was uploaded (enable "show hidden files" in FTP client)
2. Check if `mod_rewrite` is enabled (contact hosting support)

### Nginx

Add to your server block:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```
