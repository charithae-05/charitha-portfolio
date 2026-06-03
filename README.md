# Charitha E — Portfolio

> Personal portfolio site for **Charitha E**, Front-End Developer based in Bengaluru.

A minimalist, performance-focused portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS** — featuring serif display type, a pale-yellow accent, scroll-reveal animations, an animated skills marquee, and an FAQ accordion.

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![React](https://img.shields.io/badge/React-18-149ECA?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?logo=tailwindcss&logoColor=white)

## ✨ Features

- **App Router + TypeScript** — modern Next.js 14 architecture, fully typed.
- **Single source of content** — all copy, projects, experience and FAQ live in one file ([`src/data/content.ts`](src/data/content.ts)).
- **Scroll-reveal animations** — `IntersectionObserver`-based fade-ins.
- **Animated skills marquee** — auto-scrolling tech-stack row.
- **Responsive & mobile-first** — looks right across every breakpoint.
- **FAQ accordion** and a yellow contact call-to-action.

## 🚀 Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Scripts

| Command         | What it does                       |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start the dev server (hot reload)  |
| `npm run build` | Production build                   |
| `npm run start` | Run the production build locally   |
| `npm run lint`  | Lint with Next's ESLint config     |

## ✏️ Editing content

All text, projects, skills, experience, education, certifications and FAQ live in **one file**:

```
src/data/content.ts
```

Edit that file and the whole site updates. A few placeholders to fill in:

- `profile.email` — currently `charitha@example.com`
- `profile.linkedin` — currently `#`

## 🗂️ Project structure

```
src/
├── app/
│   ├── layout.tsx          # Fonts (Inter + Playfair Display), <head> metadata
│   ├── page.tsx            # Page composition — imports every section
│   └── globals.css         # Tailwind layers + scroll-reveal styles
├── components/
│   ├── Nav.tsx             # Sticky nav + mobile menu (client)
│   ├── Hero.tsx            # Name, tagline, bio, yellow stat band
│   ├── SkillsMarquee.tsx   # Auto-scrolling skills row
│   ├── Belief.tsx          # Large serif statement
│   ├── FeaturedWork.tsx    # Maps over projects
│   ├── ProjectCard.tsx     # Themed project card with browser mockup
│   ├── WhyMe.tsx           # Three value cards
│   ├── Experience.tsx      # Work-history timeline
│   ├── EducationCerts.tsx  # Education, languages, certifications
│   ├── Faq.tsx             # Accordion (client)
│   ├── Cta.tsx             # Yellow contact call-to-action
│   ├── Footer.tsx          # Footer with links
│   └── Reveal.tsx          # IntersectionObserver fade-in wrapper (client)
└── data/
    └── content.ts          # ← all editable content
```

## ☁️ Deploying

The easiest path is **[Vercel](https://vercel.com)** (made by the Next.js team):

1. Push this repo to GitHub (done ✅).
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js and deploys on every push to `main`.

It also runs on Netlify, AWS Amplify, or any Node host. For a fully static export, add `output: "export"` to `next.config.mjs`.

## 🖼️ Adding real project images

Drop image files into `public/` (e.g. `public/miles.png`) and swap the mockup blocks in [`ProjectCard.tsx`](src/components/ProjectCard.tsx) for a Next.js `<Image>` if you'd prefer real screenshots over the styled placeholders.

---

Built by [Charitha E](https://github.com/charithae-05).
