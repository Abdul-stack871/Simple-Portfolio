# Abdul Rahuman — Personal Developer Portfolio

> **Production-Ready Personal Developer Portfolio** built with **React 19**, **TypeScript**, **Vite 8**, and **Tailwind CSS**. Designed in a minimal dark theme with matte black aesthetics, warm orange highlights, and subtle purple accents.

---

## ✦ Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Key Sections](#-key-sections)
- [Project Setup](#-project-setup)
- [Environment Configuration](#-environment-configuration)
- [Production Deployment](#-production-deployment)
  - [Deploy to Vercel (Recommended)](#1-deploy-to-vercel-recommended)
  - [Deploy to Netlify](#2-deploy-to-netlify)
- [Maintenance & Updates](#-maintenance--updates)
  - [Updating Your Resume](#updating-your-resume)
  - [Adding / Editing Projects](#adding--editing-projects)
  - [Connecting a Custom Domain](#connecting-a-custom-domain)
- [License & Author](#-license--author)

---

## ✦ Overview

This portfolio website showcases the software engineering projects, hackathon achievements, certifications, and technical journey of **Abdul Rahuman** (Final Year B.Tech in Artificial Intelligence & Data Science at Dr. NGP Institute of Technology).

- **Visual Direction:** Minimal Dark Developer Portfolio
- **Color Palette:** Matte Black (`#0D0D0F`), Dark Charcoal Cards (`#151518`), Warm Orange Accent (`#FF7547`), Subtle Purple Accent (`#9B72F2`)
- **Typography:** Plus Jakarta Sans & Inter
- **Performance:** Optimized build bundle (~120KB gzip total), lazy asset loading, zero layout shifts

---

## ✦ Tech Stack

- **Frontend Core:** React 19, TypeScript, Vite 8
- **Styling:** Tailwind CSS v4, Custom CSS theme variables
- **Motion & UI:** Framer Motion, Lucide React
- **Code Quality:** Oxlint, Strict TypeScript type-checking
- **Deployment:** Vercel / Netlify with automated CI/CD and SPA fallback routing

---

## ✦ Key Sections

1. **Header & Navigation:** Sticky glassmorphism header, brand monogram `AR`, active section scroll-spy indicator, mobile drawer menu, and *Let's Talk* CTA.
2. **Hero:** High-resolution 3D developer avatar with gradient halo ring, academic status badge, orange highlighted typography, direct resume download, and social link row.
3. **Tech Stack (01):** Responsive grid of approved technologies (Java, JavaScript, HTML, CSS, React, Tailwind CSS, Bootstrap, Node.js, Express.js, Spring Boot, MongoDB, Git, GitHub, VS Code) with authentic brand logos and category filters.
4. **Featured Projects (02):** 3 real-world projects:
   - **Cognivis:** Multimodal document intelligence & RAG knowledge assistant.
   - **StayMate AI:** Student accommodation and roommate matching platform (React + Spring Boot + MySQL).
   - **NarratoVision:** Generative AI storytelling engine with synchronized visual synthesis.
   - *Interactive deep-dive modal for each project with architecture, contributions, and GitHub links.*
5. **Experience & Journey (03):** Vertical timeline covering internship at Aalan Tech Soft (ATS), VIHANSA 2K26 hackathon, TECHNOVA '26, ICRIT '26 paper presentation, and workshops.
6. **Certifications & Achievements (04):** Compact cards displaying NPTEL Elite scores (HCI 86%, HCI Implementation 61%, Privacy & Security 57%) and ISEA Cyber Security completion, plus hackathon & research highlights.
7. **Education (05):** Verified cards for Dr. NGP Institute of Technology and Sengunthar Higher Secondary School with institutional emblems.
8. **Currently Exploring (06):** Five focus areas: Full Stack Development, GenAI & LLMs, RAG & Agents, Modern Web Technologies, and Blockchain.
9. **Contact & Direct Messaging (07):** Quick social pills + validated contact form with honeypot spam protection, rate limiting, and email dispatch support (Web3Forms / custom endpoint / transparent mailto fallback).
10. **Footer (08/09):** Option 2 Modern Orange & Purple footer with sitemaps, copyright, and smooth Back to Top button.

---

## ✦ Project Setup

### Prerequisites

- Node.js `v20+` or `v24+`
- npm `v10+`

### Installation

```bash
# Clone the repository
git clone https://github.com/Abdul-stack871/Simple-Portfolio.git
cd Simple-Portfolio

# Install dependencies
npm install

# Start local development server
npm run dev
```

The site will be live at `http://localhost:5173/`.

### Building for Production

```bash
npm run build
```

This generates an optimized, minified production build inside the `dist/` folder.

---

## ✦ Environment Configuration

Create a `.env` file in the project root if you want automatic contact form email delivery without backend infrastructure:

```env
# Free Web3Forms Access Key (https://web3forms.com)
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here

# Alternatively, your custom backend POST endpoint:
# VITE_CONTACT_ENDPOINT=https://api.yourdomain.com/contact
```

*Note: If neither variable is configured, the contact form automatically uses the built-in mailto fallback addressed to `abdulrahumanrock15@gmail.com` with the prefilled user data.*

---

## ✦ Production Deployment

### 1. Deploy to Vercel (Recommended)

1. Push your latest code to your GitHub repository:
   ```bash
   git add .
   git commit -m "Production release: Abdul Rahuman Developer Portfolio"
   git push origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with your GitHub account (`Abdul-stack871`).
3. Click **Add New...** &rarr; **Project**.
4. Select your portfolio repository.
5. Vercel automatically detects **Vite** and sets:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. *(Optional)* Add `VITE_WEB3FORMS_ACCESS_KEY` under **Environment Variables**.
7. Click **Deploy**. Your site will be live on a secure HTTPS URL (e.g., `https://abdulrahuman.vercel.app`).

### 2. Deploy to Netlify

1. Log in to [netlify.com](https://netlify.com) with GitHub.
2. Click **Add new site** &rarr; **Import an existing project**.
3. Select your repository.
4. Netlify will use the included [`netlify.toml`](file:///d:/ABDUL%20RAHMAN/Projects/New%20Portfolio/netlify.toml) automatically:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy**.

---

## ✦ Maintenance & Updates

### Updating Your Resume
Replace the file at `public/resume.pdf` with your latest CV. When committed and pushed, the website will instantly download the updated PDF.

### Adding / Editing Projects
Open [`src/components/Projects.tsx`](file:///d:/ABDUL%20RAHMAN/Projects/New%20Portfolio/src/components/Projects.tsx) and update the `projects` array with your new project title, screenshots, tech badges, and GitHub link.

### Connecting a Custom Domain
On Vercel or Netlify:
1. Go to **Project Settings** &rarr; **Domains**.
2. Enter your custom domain (e.g., `abdulrahuman.dev`).
3. Add the provided CNAME / A records in your domain registrar (GoDaddy, Namecheap, Cloudflare).
4. SSL certificates are provisioned automatically.

---

## ✦ Author

**Abdul Rahuman**
- Email: [abdulrahumanrock15@gmail.com](mailto:abdulrahumanrock15@gmail.com)
- GitHub: [Abdul-stack871](https://github.com/Abdul-stack871)
- LinkedIn: [abdul-rahuman281](https://www.linkedin.com/in/abdul-rahuman281/)
- LeetCode: [AbdulStack](https://leetcode.com/u/AbdulStack/)
