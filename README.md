# Charitha E — Portfolio

Personal portfolio site for **Charitha E**, Front-End Developer (Bengaluru). Built with **Next.js (App Router) + TypeScript + Tailwind CSS**. Minimalist design with serif display type, a pale-yellow accent, scroll-reveal animations, an animated skills marquee, and an FAQ accordion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Scripts

| Command         | What it does                          |
| --------------- | ------------------------------------- |
| `npm run dev`   | Start the dev server (hot reload)     |
| `npm run build` | Production build                      |
| `npm run start` | Run the production build locally      |
| `npm run lint`  | Lint with Next's ESLint config        |

## Editing your content

All text, projects, skills, experience, education, certifications and FAQ live in **one file**:

```
src/data/content.ts
```

Edit that file and the whole site updates. A few placeholders to fill in there:

- `profile.email` — currently `charitha@example.com`
- `profile.linkedin` and `profile.github` — currently `#`

(`profile.phone` is already set.)

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Fonts (Inter + Playfair Display), <head> metadata
│   ├── page.tsx          # Page composition — imports every section
│   └── globals.css       # Tailwind layers + scroll-reveal styles
├── components/
│   ├── Nav.tsx           # Sticky nav + mobile menu (client)
│   ├── Hero.tsx          # Name, tagline, bio, yellow stat band
│   ├── SkillsMarquee.tsx # Auto-scrolling skills row
│   ├── Belief.tsx        # Large serif statement
│   ├── FeaturedWork.tsx  # Maps over projects
│   ├── ProjectCard.tsx   # Themed project card with browser mockup
│   ├── WhyMe.tsx         # Three value cards
│   ├── Experience.tsx    # Work-history timeline
│   ├── EducationCerts.tsx# Education, languages, certifications
│   ├── Faq.tsx           # Accordion (client)
│   ├── Cta.tsx           # Yellow contact call-to-action
│   ├── Footer.tsx        # Footer with links
│   └── Reveal.tsx        # IntersectionObserver fade-in wrapper (client)
└── data/
    └── content.ts        # ← all editable content
```

## Deploying

The easiest path is **Vercel** (made by the Next.js team): push this folder to a GitHub repo, import it at vercel.com, and it deploys automatically. It also works on Netlify, AWS Amplify, or any Node host. For a fully static export you can add `output: "export"` to `next.config.mjs`.

## Adding real project images

Drop image files into `public/` (e.g. `public/miles.png`) and swap the mockup blocks in `ProjectCard.tsx` for a Next.js `<Image>` if you'd prefer real screenshots over the styled placeholders.
