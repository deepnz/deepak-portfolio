# CLAUDE.md
Guidelines for using Anthropic Claude Code in the **deepak-portfolio** repo.

## 1  Project Quick Facts
- **Stack:** Java 17 · Spring Boot 3.x · React + Vite · PostgreSQL · AWS Amplify
- **Purpose:** Personal website for Deepak Nalla—geeky Java engineer & space/movie/game buff.

## 2  Prompt‑Writing Rules
1. **Always reference file paths** (`/backend/src/main/java/...`) so Claude can ground answers.
2. **Be explicit about tech versions** (e.g., “target Java 17”).
3. End each prompt with the directive **“Output only the code diff.”** for surgical patches.

## 3  Code‑Style Conventions
### Java
- Follow the Google Java Style Guide (2‑space indent, 100‑column max).  
- Use `@Slf4j` for logging; avoid `System.out`.

### JavaScript / TypeScript
- Follow Airbnb JavaScript Style; lint with ESLint `airbnb-base`.
- Auto‑format with Prettier (`printWidth: 100`, trailing commas, proseWrap = "never").

### Markdown & Docs
- Format docs with Prettier’s Markdown mode.
- One H1 per file; use sentence‑case headings.

## 4  Directory Layout
