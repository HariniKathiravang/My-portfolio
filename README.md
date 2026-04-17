# Portfolio (Hygraph + Next.js)

This project is a personal portfolio built with Next.js and Hygraph CMS.

It includes:

- Dynamic homepage sections (Hero, About Preview, Featured Projects, Skills)
- Dedicated pages for About, Projects, Certifications, and Contact
- Hygraph-powered content editing
- Profile photo support from CMS
- Ready-to-deploy setup for Vercel

---

## 1) Before You Start (Beginner Checklist)

Install these tools first:

1. **Node.js LTS** (v20+) from <https://nodejs.org>
2. **Git** from <https://git-scm.com/downloads>
3. **VS Code/Cursor**
4. A **GitHub account**
5. A **Vercel account**
6. A **Hygraph account** at <https://hygraph.com>

Verify install:

```bash
node -v
npm -v
git --version
```

---

## 2) Clone and Run Locally

If you already have this project folder, skip clone and run install.

```bash
git clone <your-repo-url>
cd my-new-portfolio
npm install
```

---

## 3) Create a Hygraph Project

1. Go to <https://hygraph.com> and log in.
2. Click **New Project**.
3. Name it (for example: `portfolio-cms`).
4. Choose your region.
5. Open the new project.

You will use:

- **Content API Endpoint**
- **Permanent Auth Token**

---

## 4) Create Your Content Models in Hygraph

Create these models with exact field names so the app works without additional mapping.

### A) Model: `Profile`

Fields:

- `name` (Single line text, required)
- `role` (Single line text, required)
- `shortIntro` (Multi line text, required)
- `bio` (Multi line text, required)
- `profilePhoto` (Asset, optional)
- `socialLinks` (Component list, optional)

Create component `SocialLink`:

- `label` (Single line text, required)
- `url` (Single line text or URL, required)

### B) Model: `Project`

Fields:

- `title` (Single line text, required)
- `slug` (Slug, required, unique)
- `description` (Multi line text, required)
- `techStack` (List of strings, required)
- `image` (Asset, optional but recommended)
- `githubUrl` (URL, optional)
- `liveUrl` (URL, optional)
- `featured` (Boolean, default false)

### C) Model: `Certification`

Fields:

- `title` (Single line text, required)
- `issuer` (Single line text, required)
- `issueDate` (Date, required)
- `credentialUrl` (URL, optional)

### D) Model: `Skill`

Fields:

- `name` (Single line text, required)
- `category` (Single line text, optional)

### E) Model: `Experience`

Fields:

- `company` (Single line text, required)
- `role` (Single line text, required)
- `startDate` (Date, required)
- `endDate` (Date, optional)
- `current` (Boolean, default false)
- `description` (Multi line text, required)

### F) Model: `Education`

Fields:

- `institution` (Single line text, required)
- `degree` (Single line text, required)
- `field` (Single line text, optional)
- `startDate` (Date, required)
- `endDate` (Date, optional)
- `description` (Multi line text, optional)

---

## 5) Add Content in Hygraph

1. Create at least one `Profile` entry.
2. Upload your photo to `profilePhoto`.
3. Add your social links.
4. Add projects, skills, certifications, experience, and education.
5. **Publish** every entry.
6. **Publish uploaded assets** too.

If content is not published, your site may show empty sections.

---

## 6) Configure API Access in Hygraph

1. Open **Project Settings → API Access**.
2. Create a **Permanent Auth Token** with read access.
3. Copy:
   - Content API endpoint
   - Token

---

## 7) Configure Environment Variables

Copy `.env.example` to `.env.local` and fill values:

```bash
cp .env.example .env.local
```

Required values:

- `HYGRAPH_ENDPOINT`
- `HYGRAPH_TOKEN`
- `NEXT_PUBLIC_SITE_URL`

Optional (for contact form email):

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

---

## 8) Start Development Server

```bash
npm run dev
```

Open: <http://localhost:3000>

Pages:

- `/`
- `/about`
- `/projects`
- `/certifications`
- `/contact`

---

## 9) Build and Verify Before Deployment

```bash
npm run lint
npm run build
```

Only deploy after both commands pass.

---

## 10) Deploy to Vercel (Complete Beginner Flow)

1. Push your code to GitHub.
2. Go to <https://vercel.com/new>.
3. Import your repository.
4. In project setup, add all environment variables from `.env.local`.
5. Click **Deploy**.
6. Wait for build success.
7. Open your production URL.

After deployment:

- Update `NEXT_PUBLIC_SITE_URL` to your real Vercel domain/custom domain.
- Redeploy once.

---

## 11) How to Update Portfolio Content Later

1. Open Hygraph.
2. Edit your entries (Profile, Projects, etc.).
3. Publish changes.
4. Refresh your website.

To change your profile picture:

1. Open `Profile` entry.
2. Update `profilePhoto` asset.
3. Publish.
4. Refresh homepage.

---

## 12) Troubleshooting

If data is missing:

- Confirm `HYGRAPH_ENDPOINT` and `HYGRAPH_TOKEN` are correct.
- Confirm content entries are published.
- Confirm assets are published.
- Restart local server after changing `.env.local`.
- Confirm model field names match this README exactly.

If contact form fails:

- Validate `RESEND_API_KEY` and email env vars.
- Check domain/email sender rules in Resend dashboard.

---

## 13) Project Structure (Important Files)

- `lib/hygraph/client.ts` - GraphQL client
- `lib/hygraph/queries.ts` - CMS queries
- `lib/hygraph/types.ts` - TypeScript types
- `lib/hygraph/env.ts` - env checks
- `components/sections/hero.tsx` - hero + profile photo card
- `app/page.tsx` - homepage data wiring
- `app/about/page.tsx` - profile/experience/education data
- `app/projects/page.tsx` - all projects
- `app/certifications/page.tsx` - certifications

---

## 14) Quick Start Commands

```bash
npm install
npm run dev
npm run lint
npm run build
```
