# Global South Solidarities (GSS)

**The Archive of the Future / A(na)rchive**

An open-access decolonial digital humanities archive project by **Dr. Bibhushana Poudyal** at Washington State University (WSU), in collaboration with CDSC and AOI.

---

## About

Global South Solidarities centers voices, histories, and resistances from the Global South. Through interactive pedagogy, AI-assisted research, 3D artifact preservation, augmented reality reenactments, and multimedia storytelling, GSS reimagines what an archive can be.

**Phase 1** (current): Static HTML site — lightweight, fast, accessible.
**Phase 2** (upcoming): AI models, 3D artifact viewer, AR reenactments, multimedia streaming, data visualizations — Python backend on Render.

---

## Folder Structure

```
gss-website/
├── index.html                          ← Landing page
├── README.md                           ← This file
├── _redirects                          ← Netlify/Vercel clean URL routing
├── pages/                              ← All site pages
│   ├── interactive-pedagogy.html
│   ├── archive.html
│   ├── collaborations.html
│   ├── multimedia-storytelling.html
│   ├── gss-ai.html
│   ├── 3d-artifacts.html
│   ├── ar-reenactments.html
│   ├── visualizations.html
│   ├── open-access-platform.html
│   ├── syllabi.html
│   ├── student-researchers.html
│   ├── timeline.html
│   ├── status.html
│   └── contact.html
├── assets/                             ← Media and documents
│   ├── images/
│   ├── videos/
│   ├── documents/
│   └── 3d-models/
├── components/                         ← Shared HTML components
│   ├── nav.html                        ← Navigation bar
│   └── footer.html                     ← Site footer
└── api/                                ← API endpoints (Phase 2)
```

---

## Tech Stack

| Layer      | Technology                  | Notes                                  |
|------------|-----------------------------|----------------------------------------|
| Frontend   | HTML, CSS, JavaScript       | Static pages, no framework             |
| Fonts      | Google Fonts                | Bebas Neue, Libre Baskerville, Cormorant Garamond, Special Elite, VT323, IM Fell English |
| Hosting    | Vercel / Netlify            | Static deployment with `_redirects`    |
| Domain     | Reclaim Hosting (DNS)       | Custom domain via DNS records          |
| Phase 2    | Python (FastAPI/Flask)      | AI backend deployed on Render          |

---

## Design System

| Token        | Value      | Usage                     |
|--------------|------------|---------------------------|
| `--obsidian` | `#0a0806`  | Background                |
| `--parchment`| `#f0e6c8`  | Primary text              |
| `--blood`    | `#c0190f`  | Accent, CTAs, active nav  |
| `--gold`     | `#b8860b`  | Labels, links, highlights |

---

## How to Add a New Page

1. **Create the HTML file** in `/pages/`:
   - Copy any existing page (e.g., `pages/archive.html`) as a template
   - Update the `<title>` tag
   - Update the `<h1 class="page-title">` heading
   - Update the `<p class="page-desc">` description
   - Add an `active` class to the correct nav link for that page

2. **Add navigation links**:
   - Edit `components/nav.html` — add a new `<a class="gss-nav-link">` entry
   - Add the same link to the inline nav in every existing page

3. **Add a redirect** (optional):
   - Add a line to `_redirects` for a clean URL

4. **Add to the landing page** (optional):
   - Add an explore card in `index.html` under the explore grid

---

## How to Update an Existing Page

1. Open the page file in `/pages/`
2. Edit the content inside the `<section class="page-content">` area
3. The nav and footer are inline in each page, so they work without JavaScript
4. To update nav/footer globally, edit `components/nav.html` and `components/footer.html`, then update the inline copies in each page

---

## Local Development

No build step required. Open `index.html` in a browser, or use a local server:

```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve .
```

Then visit `http://localhost:8000`.

---

## Deployment

This site is deployed as a static site. Push to `main` and your hosting platform (Vercel/Netlify) will auto-deploy.

---

## License

Open Access. Content and code are shared freely in the spirit of the project's mission.

---

**RESIST / ARCHIVE / LIBERATE / REMEMBER**
