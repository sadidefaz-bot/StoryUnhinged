# Project Blueprint: The Daily Unhinged (Phase 1 — Frontend Prototype)

> **Instructions for Google AI Studio:** Build **Phase 1 (Frontend Prototype)** only. Do **not** set up Firebase, Firestore, authentication, backend APIs, or live RSS fetching yet. Keep all article data in a local mock file accessed through a clean service layer so a real database and Gemini backend can be swapped in during Phase 2 without rewriting the UI.

---

## 1. Concept & Brand Identity
- **Publication Name:** `The Daily Unhinged` *(editable)*
- **Tagline:** *"All the News That's Barely Plausible"*
- **Premise:** A satirical news publication styled like a prestigious, deadpan print broadsheet newspaper (inspired by *The New York Times*, *The Economist*, and *The Onion*). The comedy comes from the contrast between ultra-serious, authoritative journalism design and absurd, unhinged stories.
- **Mandatory Compliance Notice:** Every page must visibly state **"100% SATIRE & AI-GENERATED"** in both the masthead sub-banner and the site footer.

---

## 2. Design System & Broadsheet Aesthetic
- **Color Palette:**
  - **Background (Newsprint):** `#FAF9F6`
  - **Surface / Callout Boxes:** `#F2EFE9`
  - **Primary Ink:** `#1A1A1A`
  - **Secondary / Muted Ink:** `#555555`
  - **Hairline Dividers:** `#D6D2C4`
  - **Editorial Accent (Breaking / Labels):** `#8B1E1E` (classic deep crimson)
- **Typography:**
  - **Masthead & Headlines:** High-contrast editorial serif (`Playfair Display`, `Libre Baskerville`, or `Georgia`).
  - **Body Copy:** Classic readable serif (`Merriweather`, `Source Serif 4`, or `Georgia`) with generous line-height (`1.7`).
  - **Metadata, Timestamps, Labels & Navigation:** Crisp uppercase sans-serif (`Inter` or system sans) with wide letter-spacing.
- **Layout Rules:**
  - Sharp corners (`border-radius: 0px`)—no soft SaaS cards or drop shadows.
  - Use thin `1px` solid horizontal and vertical hairline borders to separate columns and sections like an authentic print paper.
  - Use double horizontal rules (`border-top: 3px double #1A1A1A`) beneath the masthead.
  - Apply a subtle high-contrast grayscale or desaturated editorial treatment (`filter: grayscale(85%) contrast(105%)`) to article photos, restoring full color slightly on hover.

---

## 3. Pages & Core Features

### A. Masthead & Header
- Top utility strip: Current date (formatted like `Wednesday, November 25, 2026`), edition number (`Vol. CXIV, No. 42`), fake price (`$4.50 or 3 Mild Conspiracy Theories`), and a prominent badge reading **`100% SATIRE & AI-GENERATED`**.
- Centered giant serif masthead title: **THE DAILY UNHINGED** (clicking returns to the Front Page).
- Horizontal category navigation bar with active underline states:
  - `All` | `World` | `Tech` | `Economy` | `Science` | `Opinion`
- Optional subtle "Market Panic Ticker" strip right below the nav bar with 4–5 absurd static metrics (e.g., `HUMAN ATTENTION SPAN ▼ 41.2%`, `UNREAD NEWSLETTERS ▲ 890%`, `MEETINGS THAT COULD BE EMAILS ▲ 12.4%`).

### B. Front Page View (Home)
- **Asymmetric Broadsheet Grid (Desktop: 12 columns; Mobile: stacked single column):**
  - **Main Editorial Area (9 columns):**
    - **Lead Hero Story:** Large bold headline, italic subhead, wide editorial photo with a deadpan italicized caption, author byline & absurd title, publication timestamp, and a 2–3 sentence opening excerpt.
    - **Secondary Story Grid:** Below a horizontal divider, a 3-column grid separated by vertical hairline borders displaying the remaining stories with thumbnails, category kickers, headlines, and short excerpts.
  - **Right Sidebar — "Breaking Wires" (3 columns):**
    - A narrow vertical column styled like an AP wire feed displaying 6–8 short, punchy satirical one-liners with relative timestamps (e.g., `14m ago`, `1h ago`).
- **Category Filtering:**
  - Clicking any category tab filters the visible articles immediately.
  - If a category has only 1–2 articles, promote the first matching article into the featured spot cleanly without leaving awkward empty grid gaps.

### C. Article Reader View
- Clicking any headline, image, or "Read Full Dispatch" link opens a dedicated single-column editorial reading view (centered, max-width ~`720px`) with a crisp **"← Back to Front Page"** button at the top.
- **Origin Box ("The Sober Reality"):** A subtle shaded box near the top of the article labeled *"Inspired by the painfully boring real-world headline:"* displaying the `originalSoberHeadline` so readers immediately get the joke.
- Full metadata: Category kicker, giant headline, italic subhead, author byline with satirical job title, timestamp, and estimated read time.
- Full-width editorial image with deadpan caption.
- Full article body rendered with a classic editorial **drop cap** on the first paragraph.
- **"More From This Edition"** strip at the bottom linking to 2–3 other mock articles.

### D. Footer
- Traditional multi-column broadsheet footer containing section links, fake masthead credits (e.g., *Chief Hallucination Officer*), and a clear legal disclaimer stating: *"The Daily Unhinged is a fictional, AI-generated satire publication. All stories, quotes, and named individuals are invented for comedic purposes."*

---

## 4. Clean Data Architecture (Backend-Ready)

Keep data fetching decoupled from UI components so Phase 2 (Firestore + Gemini) is a drop-in replacement:

1. **`src/types/article.ts`** — Define strict TypeScript interfaces:
   ```ts
   export type Category = 'World' | 'Tech' | 'Economy' | 'Science' | 'Opinion';

   export interface Article {
     id: string;
     slug: string;
     category: Category;
     isLead?: boolean;
     satireHeadline: string;
     subhead: string;
     originalSoberHeadline: string;
     authorName: string;
     authorTitle: string;
     publishedAt: string; // ISO date string
     readTimeMinutes: number;
     imageUrl: string;
     imageCaption: string;
     excerpt: string;
     bodyParagraphs: string[];
   }

   export interface WireItem {
     id: string;
     timestamp: string;
     headline: string;
   }
   ```
2. **`src/data/mockArticles.ts`** — Store 6 complete, hilarious, deadpan mock articles (covering all 5 categories) plus 7 `WireItem` entries.
3. **`src/services/articleService.ts`** — Export simple async functions (`getArticles()`, `getArticleBySlug(slug)`, `getBreakingWires()`) that currently resolve from `mockArticles.ts`. All React components must fetch data through `articleService.ts` rather than importing mock arrays directly.

---

## 5. Editorial Voice Rules (For Writing Mock Content)
When generating the 6 placeholder articles and Breaking Wires:
- **Commit to deadpan journalism:** Report absurd premises in completely serious, dry AP/NYT journalistic prose with fake expert quotes and overly specific made-up statistics.
- **No AI comedy clichés:** Avoid exclamation marks, slang, emojis, and banned phrases like *"delve," "chaos ensues," "buckle up," "wild ride,"* or rhetorical questions.
- **No real private individuals:** Punch at institutions, corporate culture, tech trends, and bureaucracy—use clearly fictional names for quoted people.
- **Images:** Use reliable placeholder photography (`https://picsum.photos/seed/{unique-slug}/1200/700`) so images never fail to load.

---

## 6. Future Phases (Context Only — Do NOT Build Yet)
Do not generate code for these yet; they are listed only to keep the frontend architecture compatible:
- **Phase 2:** Replace `articleService.ts` mock reads with Firebase Firestore.
- **Phase 3:** Add a private `/admin` route (Firebase Auth) to paste a sober headline and trigger a backend Gemini API call that outputs JSON matching the `Article` interface and generates a matching thumbnail.
- **Phase 4:** Add automated RSS feed ingestion and an Approve/Reject draft queue.