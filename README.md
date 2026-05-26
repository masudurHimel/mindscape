# Mindscape Academic Point

Marketing site for **Mindscape Academic Point** — expert tutoring for Class 9–12, SSC, HSC, and Medical/Engineering admission in Dhaka, Bangladesh. Founded 2019.

🔗 **Live:** [https://mindscape-arena.vercel.app](https://mindscape-arena.vercel.app)

## Tech Stack

- [Next.js 14](https://nextjs.org) (App Router)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- TypeScript

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Scripts

| Command         | Description                       |
| --------------- | --------------------------------- |
| `npm run dev`   | Start the local dev server        |
| `npm run build` | Build the production bundle       |
| `npm run start` | Run the production build locally  |
| `npm run lint`  | Run ESLint                        |

## Project Structure

```
src/
├── app/          # Next.js App Router pages, layouts, icons
├── components/   # Reusable UI components (layout, sections, etc.)
└── data/         # Static content (tutors, courses, results)
```

## Deployment

The site is deployed on [Vercel](https://vercel.com). Pushes to `master` are deployed automatically via the GitHub Actions workflow in `.github/workflows/`.
