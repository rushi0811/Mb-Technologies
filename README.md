# MB Technologies — Corporate Website

Next.js (App Router) + React + CSS Modules. No UI libraries; icons from `lucide-react`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production build
```

Requires Node.js 18.18 or newer.

## Where things live

| What | Where |
| --- | --- |
| Colours | `styles/theme/colors.css` |
| Fonts, sizes, weights, h1–h6 | `styles/theme/typography.css` |
| Spacing scale, container, radii, shadows | `styles/theme/spacing.css` |
| Reset + element defaults | `styles/globals.css` |
| Global component styles | `styles/css/*.module.css` |
| Page styles | `styles/pages/*.module.css` |
| Shared Button / Card / Section styles | `styles/common/*.module.css` |
| Editable content (courses, jobs, testimonials…) | `data/*.js` |

Change a variable in `styles/theme/` and the whole site follows. Module files use only theme variables;
the only literal values are media-query breakpoints (600 / 900 / 1100px), because CSS variables
cannot be used inside `@media` conditions.

## Before launch

- Replace Unsplash placeholder photos in `data/images.js` with your own photography.
- Replace partner names in `data/site.js` with real logos you have permission to use.
- Connect `components/ApplicationForm.jsx` → `handleSubmit` to your backend or form service.
- Have the Privacy Policy and Terms pages reviewed.
