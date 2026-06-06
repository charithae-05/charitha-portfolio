// ---------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// Edit anything here and it updates across the whole site.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Charitha E",
  role: "Front-End Developer",
  location: "Bengaluru",
  phone: "+91 81974 50054",
  phoneHref: "tel:+918197450054",
  email: "charithae05@gmail.com",
  linkedin: "https://linkedin.com/in/charitha-e",
  github: "#", // TODO: add your GitHub URL once your profile has projects
  tagline: "FRONT-END DEVELOPER — BENGALURU",
  bio: "From responsive layouts to fast, SEO-optimized production sites, I build web interfaces with React and Next.js that solve real business problems. Let's build something that performs.",
  stats: [
    { value: "2", label: "Years building front-ends" },
    { value: "6+", label: "Live products & sites" },
    { value: "100", label: "PSI/Lighthouse-driven mindset" },
  ],
};

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export type Skill = { label: string; highlight?: boolean };

export const skills: Skill[] = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JavaScript", highlight: true },
  { label: "TypeScript" },
  { label: "React.js", highlight: true },
  { label: "Next.js", highlight: true },
  { label: "Tailwind CSS" },
  { label: "Bootstrap" },
  { label: "UI/UX Design" },
  { label: "Mobile-first" },
  { label: "Performance Tuning", highlight: true },
  { label: "SEO", highlight: true },
  { label: "AWS S3 & CloudFront" },
  { label: "Strapi CMS" },
  { label: "Git & GitHub" },
  { label: "Figma" },
  { label: "Debugging" },
  { label: "Jira / Agile" },
];

export const belief =
  "Great front-end isn't just about looking good — it's about speed, accessibility, and interfaces that feel effortless. Every build starts with the user and ends with clean, performant code.";

export type ProjectTheme = "dark" | "forest" | "sand" | "yellow";

// A short functionality demo shown on the back of a flip card.
export type Clip = {
  src: string; // MP4 path in /public (universal fallback, e.g. "/clips/mojo-search.mp4")
  webm?: string; // optional WebM path — smaller, used first where supported
  label: string; // tiny caption under the clip
  poster?: string; // optional still frame shown before play
};

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  theme: ProjectTheme;
  link?: string; // optional live URL — shows a "View live" link on the card
  image?: string; // optional screenshot path in /public (e.g. "/mojocampus.png")
  video?: string; // optional looping clip in /public — plays on hover (single-media cards)
  clips?: Clip[]; // optional set of demos — turns the card into a flip card
  mock: { title: string; sub: string; chips: string[] }; // fallback when no image/clips
};

export const projects: Project[] = [
  {
    title: "Mojo Campus",
    blurb:
      "Solely built and shipped the Mojo Campus site and its campus-specific microsites — including the BTM, Christ University, Christ Bannerghatta, St. Joseph's and MCC pages — as responsive, SEO-optimized layouts in Next.js.",
    tags: ["Next.js", "React", "Tailwind", "SEO", "Responsive"],
    theme: "dark",
    link: "https://www.mojocampus.com/",
    image: "/mojocampus.png",
    clips: [
      { src: "/clips/mojo-search.mp4", webm: "/clips/mojo-search.webm", label: "Banner search — find colleges & areas" },
      { src: "/clips/mojo-alumni.mp4", webm: "/clips/mojo-alumni.webm", label: "Words from the campus — alumni cards" },
      { src: "/clips/mojo-life.mp4", webm: "/clips/mojo-life.webm", label: "Life at MOJO — scroll experience" },
      { src: "/clips/explore-maps.mp4", webm: "/clips/explore-maps.webm", label: "Explore — search + interactive map" },
    ],
    mock: {
      title: "Mojo Campus",
      sub: "Main site plus 5 college microsites, built end-to-end.",
      chips: ["Next.js", "Microsites", "SEO", "Responsive"],
    },
  },
  {
    title: "Miles Web Suite",
    blurb:
      "Developed and maintained mileseducation.com and milestalenthub.com using Next.js, React and Tailwind CSS — with dynamic content via Strapi and deployments on AWS S3 & CloudFront.",
    tags: ["Next.js", "React", "Tailwind", "Strapi", "AWS", "SEO / PSI"],
    theme: "yellow",
    link: "https://www.mileseducation.com/",
    mock: {
      title: "Miles Education",
      sub: "Marketing & learning platforms built and maintained in Next.js.",
      chips: ["Next.js", "Strapi CMS", "AWS S3 + CloudFront", "SEO"],
    },
  },
  {
    title: "Health Care System",
    blurb:
      "Led front-end development for a healthcare management system — designing dynamic interfaces and helping optimize the database architecture for scalability.",
    tags: ["React", "UI/UX", "Database design"],
    theme: "forest",
    mock: {
      title: "Care Portal",
      sub: "Dynamic dashboards for healthcare management & patient care.",
      chips: ["React", "Dynamic UI", "Scalable DB"],
    },
  },
  {
    title: "Subject Evaluation System",
    blurb:
      "Built the front-end interface for a subject evaluation platform, collaborating with the team to integrate it seamlessly with an MS SQL back-end.",
    tags: ["Front-end", "MS SQL", "Collaboration"],
    theme: "sand",
    mock: {
      title: "Eval System",
      sub: "Front-end for an efficient subject evaluation workflow.",
      chips: ["Front-end", "MS SQL", "Team integration"],
    },
  },
  {
    title: "Chess Master",
    blurb:
      "Designed key user-interface components for the Chess Master application, improving the experience and integrating components cleanly into the app framework.",
    tags: ["UI design", "Components", "UX"],
    theme: "yellow",
    mock: {
      title: "Chess Master",
      sub: "Key UI components designed for a smoother chess experience.",
      chips: ["UI Components", "UX", "Integration"],
    },
  },
];

export const whyMe = [
  {
    icon: "⚡",
    title: "Performance-first",
    body: "I obsess over speed — Lighthouse audits, PSI scores and front-end optimization so your site loads fast and ranks well.",
  },
  {
    icon: "🧩",
    title: "Pixel-perfect",
    body: "I translate Figma into responsive, mobile-first interfaces that match the design exactly, across every screen size.",
  },
  {
    icon: "🤝",
    title: "Collaborative",
    body: "I work closely with designers and back-end teams using Git, Jira and agile sprints to ship reliably and keep everyone aligned.",
  },
];

export type ExperienceItem = {
  when: string;
  title: string;
  org: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    when: "Sep 2024 — Present",
    title: "Associate Front-End Developer",
    org: "Miles Education Pvt Ltd · Bengaluru",
    points: [
      "Build and maintain multiple websites with Next.js, React, JavaScript, HTML, CSS and Tailwind CSS.",
      "Deploy to AWS S3 & CloudFront for consistent availability, and manage version control and UAT via GitHub.",
      "Run SEO optimizations (metadata, schema, Ahrefs fixes), PSI audits and Lighthouse assessments; manage dynamic content in Strapi.",
      "Track work in Jira & Zoho Sprints and analyze user behavior with Clarity to inform design enhancements.",
    ],
  },
  {
    when: "Jul 2024 — Aug 2024",
    title: "Front-End Developer Intern",
    org: "Miles Education Pvt Ltd · Bengaluru",
    points: [
      "Mastered React, Next.js, JavaScript, HTML, CSS and Tailwind during an intensive learning phase.",
      "Applied Figma and GitHub in real project workflows — earning a promotion to Associate.",
    ],
  },
];

// Condensed to a single line for the portfolio.
export const education =
  "MCA — Manipal Institute of Technology (MIT), Bengaluru  ·  BCA — Presidency College, Bengaluru";

export const certifications = [
  "The Ultimate React Course 2024: React, Redux & More — building real-world applications.",
];

export const faq = [
  {
    q: "What technologies do you work with?",
    a: "My core stack is React, Next.js, JavaScript/TypeScript, HTML, CSS, Tailwind and Bootstrap. I deploy on AWS (S3 & CloudFront), manage content in Strapi, and handle SEO, performance and version control with Git.",
  },
  {
    q: "Can you turn a Figma design into a working site?",
    a: "Absolutely — pixel-perfect, responsive implementation from Figma is a big part of my day-to-day. I build mobile-first and test across breakpoints so it looks right everywhere.",
  },
  {
    q: "Do you handle SEO and performance?",
    a: "Yes. I implement metadata and schema, fix crawl/Ahrefs issues, and use Lighthouse and PageSpeed Insights audits to keep sites fast and search-friendly.",
  },
  {
    q: "How do you collaborate with teams?",
    a: "I work in agile sprints using Jira and Zoho Sprints, manage code through GitHub pull requests and UAT, and partner closely with designers and back-end developers.",
  },
  {
    q: "Are you open to new opportunities?",
    a: "Yes — I'm always open to interesting front-end roles and freelance projects. The quickest way to reach me is the contact section below.",
  },
];
