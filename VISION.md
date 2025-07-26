# VISION.md
> **Mission:** Craft a playful yet professional portfolio that showcases Deepak Nalla’s expertise in Java 17, Spring Boot microservices, AI/ML experiments, and database engineering—while celebrating his passion for movies and video games.

## 1  Persona
- **Role:** Senior Software Engineer (7+ years) focused on scalable Java services and AI POCs.  
- **Interests:** Modern films and TV, photography, travel, space/astronomy, retro & indie games, CS topics (algorithms, databases, AI).

## 2  Core Experience
| Section | User Story | Tech / Feature |
|---------|------------|----------------|
| **Home** | “I immediately see Deepak’s vibe.” | Typing‑banner cycling through keywords; Three.js Easter‑egg console. |
| **Now Playing** | “What movies & games is he into?” | Grid fed by TMDB & RAWG APIs (live key). |
| **Projects** | “Show me code that matters.” | Cards sourced from GitHub; Claude adds commit summaries. |
| **Blog** | “Read short essays on AI & DB internals.” | Markdown engine with code highlighting & RSS. |
| **Playground** | “Test an AI demo built by him.” | Serverless LangChain chat over résumé DB. |

## 3  Design Principles
1. **Accessible by default** — All pages conform to WCAG 2.2 AA.  
2. **Dark‑theme IDE aesthetic** — Syntax‑highlighted code background, monospace headings.  
3. **Mobile‑first & performant** — < 100 ms Time‑to‑Interactive on 4G.  

## 4  Tech Stack
- **Backend:** Spring Boot 3 (Java 17), REST & GraphQL, PostgreSQL primary.
- **Frontend:** React + Vite, TypeScript, Tailwind CSS.
- **Infra:** AWS Amplify (CI/CD, hosting), S3 asset bucket, Route 53 custom domain.
- **APIs:** TMDB, RAWG, optional OpenAI/Bedrock for AI toys.
- **Tooling:** ESLint, Prettier, JUnit 5, Cypress, GitHub Actions security scan.

## 5  Roadmap
1. **MVP (4 weeks)** – ship core pages, APIs, basic theming.
2. **Polish (2 weeks)** – add accessibility audits, animations, Easter eggs.
3. **Iterate (ongoing)** – weekly Claude‑assisted dependency bumps and blog posts.

## 6  Success Metrics
- Recruiter time‑on‑page > 90 sec.
- Lighthouse score ≥ 95 performance, 100 accessibility.
- Blog publishing cadence: 2 posts/month.
