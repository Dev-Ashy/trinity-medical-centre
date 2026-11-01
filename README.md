# Trinity Medical Centre

A clinical website for Trinity Medical Centre, built with [TanStack Start](https://tanstack.com/start), [Vite](https://vitejs.dev), [React 19](https://react.dev), [TypeScript](https://www.typescriptlang.org), and [Tailwind CSS v4](https://tailwindcss.com).

## Tech stack

- TanStack Start + TanStack Router
- Vite
- React 19 + TypeScript
- Tailwind CSS v4
- Motion (animations)
- Lucide React

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` or the port shown in the terminal.

## Available scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run Vitest tests |

## Project structure

```
src/
  components/     # Reusable UI and site components
  data/           # Site content, images, and configuration
  lib/            # Utilities, stores, and helpers
  routes/         # File-based routes (TanStack Router)
  styles.css      # Global styles and design tokens
public/
  images/         # Static images and logos
```

## Design

- **Fonts:** [Lora](https://fonts.google.com/specimen/Lora) (headings) and [Source Sans 3](https://fonts.google.com/specimen/Source+Sans+3) (body)
- **Palette:** Deep aubergine ink (`#15111f`), navy-purple (`#2C1B4D`), crimson (`#b3163a`), gold (`#c9a227`), paper/mist neutrals
- **Motion:** Subtle, accessible animations with `prefers-reduced-motion` support

## Admin portal

The admin portal is available at `/admin/login`. In development, the default password is `admin123`. Admin data is stored in `localStorage` only.

## Deployment

The site is deployed on [Vercel](https://vercel.com). Pushing to `main` triggers an automatic deployment.

- **Live site:** [https://trinity-medical-centre.vercel.app](https://trinity-medical-centre.vercel.app)
- **Repository:** [https://github.com/Dev-Ashy/trinity-medical-centre](https://github.com/Dev-Ashy/trinity-medical-centre)

## Notes

- Facility photos in the gallery are authentic images of the centre.
- Some pages use illustrative content where clinic details are still to be confirmed (e.g., address/hours).
- Lovable integration artifacts remain in the repo per project configuration.
