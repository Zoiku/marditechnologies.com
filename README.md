# marditechnologies.com

The Mardi Technologies website: React 19, TypeScript, React Router and Vite, pre-rendered to static HTML.

## Run it

```
npm install
npm run dev       # local development at http://localhost:5173
npm run build     # type-check, build and pre-render into dist/
npm run preview   # serve the built site at http://localhost:4173
```

## Enquiry emails

Both the Contact form and the Start a project modal send through EmailJS. Copy `.env.example` to `.env` and fill in the three keys from your EmailJS account, then rebuild. Without them the forms show an error with the email address instead.

The template receives: `from_name`, `from_email`, `company`, `service`, `description`, `timeline`, `budget` and `preferred_contact`.

## Deploy

Upload the contents of `dist/`. Pages are flat files (`about.html`, `services.html`, `contact.html`) served at clean addresses (`/about`):

- Netlify and Cloudflare Pages: works as is, `_redirects` handles the old `/support` and `/blog` links.
- Vercel: `vercel.json` handles clean URLs and redirects.
- Apache or cPanel: `.htaccess` handles clean URLs, redirects and the 404 page.

## Where things live

- `src/styles/tokens.css`: colours, type scale, spacing and motion. Change the look here.
- `src/data/content.ts`: services, ERPNext modules, commitments, process, FAQs and contact details.
- `src/data/meta.ts`: page titles and descriptions.
- `src/components/icons.tsx` and `illustrations.tsx`: the icon set, hero diagram, ERPNext drawing and service scenes.
- `src/components/project-modal.tsx`: the four-step Start a project modal.
