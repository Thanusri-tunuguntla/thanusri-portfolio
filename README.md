# Thanusri Tunuguntla — AI Engineer Portfolio

A premium, recruiter-ready personal portfolio website built for **Thanusri Tunuguntla**, an aspiring AI Engineer and B.Tech Computer Science student specializing in Artificial Intelligence at Vignan's Institute of Information Technology (Class of 2028).

---

## 🌟 Highlights & Technical Stack

- **Core Framework**: React 18 + Vite + TypeScript (Strict Type Safety)
- **Styling**: Vanilla CSS Design System with custom tokens, responsive media queries, dark navy & charcoal aesthetics, glassmorphism surfaces, and electric blue accents (`#3b82f6`, `#60a5fa`, `#06b6d4`, `#8b5cf6`).
- **Interactive Visuals**: HTML5 Canvas neural network particle constellation that responds smoothly to user cursor proximity and respects `@media (prefers-reduced-motion)`.
- **Icons**: Clean, modern Lucide icons combined with pixel-perfect custom SVG brand marks (GitHub, LinkedIn, YouTube).
- **Interactive Modals**:
  - **Project Architecture Modal**: In-depth problem statement, system architecture, technical contributions, key features, and ethical disclaimers.
  - **Resume Viewer Modal**: High-definition embedded PDF viewer (`Thanusri_Tunuguntla_Resume.pdf`) with one-click download and open-in-tab actions.
- **Accessibility & SEO**: WCAG-compliant contrast ratios, semantic HTML5, visible focus indicators, Open Graph metadata, and responsive layouts across desktop, tablet, and mobile.

---

## 📑 Website Structure & Verified Content

The website is structured in the exact professional hierarchy requested:

1. **Navigation**: Personal `TT` monogram logo with live availability indicator ("Open to AI/ML Opportunities"), section navigation with scroll-spy, "View Resume" button, and an accessible mobile drawer.
2. **Hero Section**: High-impact split layout with name, professional headline, supporting bio, CTA buttons ("Explore My Projects", "View Resume", "Contact Me"), factual highlight chips, and an AI Inference Pipeline architectural visual card.
3. **About Me**: Narrative explaining passion for intelligent systems, practical software development, NLP, predictive analytics, and algorithmic problem solving. Features the core philosophy quote: *"I believe good technology is not just about sophisticated algorithms. It is about building solutions that are useful, understandable, and reliable."*
4. **Featured Projects** (Interactive Filter Tabs & Architecture Modals):
   - **NutriRefer AI**: AI-Powered Nutrition and Wellness Platform (React, Vite, Material UI, Recharts, Gemini 2.5 Flash API, Local Storage). Verified Community Service Project report & Grama Sachivalayam completion certificate.
   - **NIRIKSHAN AI**: MPLADS Project Monitoring & Risk Intelligence (Smart India Hackathon SIH26102, FastAPI, React, Isolation Forest, TF-IDF n-grams, PostgreSQL/GIS data handling). Includes verified SIH YouTube demonstration link (`https://youtu.be/1rsu6_t2NHs?si=jRlDdSJ_NdWJVMW5`).
   - **AI Language Translator**: Multilingual translation and speech synthesis platform (Python, Streamlit, Deep Translator, gTTS). CodeAlpha AI Internship project.
   - **Spam SMS Detection**: NLP classification pipeline using TF-IDF vectorization and Logistic Regression.
   - **Movie Genre Classification**: NLP multi-class synopsis classifier using TF-IDF and Logistic Regression.
   - **Customer Churn Prediction**: Predictive analytics retention modeling utilizing supervised classification.
   - **AI Disease Prediction Chatbot**: Symptom-analysis educational healthcare prototype.
   - **CraftHub — AI Artisan Workplace**: AI-assisted e-commerce marketplace for local handcraft artisans with automated copywriting and pricing recommendations.
5. **Skills & Technical Stack**: Grouped into Programming Languages, AI & Machine Learning, Frameworks & Libraries (Scikit-learn, Pandas, NumPy), Data & Databases, and Computer Science Foundations.
6. **Experience & Practical Work**: Interactive timeline detailing roles at CodeAlpha (AI Intern), Smart India Hackathon (SIH Contributor), InAmigos Foundation (AI Web Development Intern), CodSoft (ML Tasks), and Vignan's Institute / Grama Sachivalayam (Community Service Project Contributor).
7. **Certifications**: Filterable gallery of verified credentials including Cognitive Class / IBM Prompt Engineering (Cert ID: `cd0a24ecc1584428b06531d8ef347df6`), Anthropic certifications (AI Fluency, Claude Platform 101, Claude Code in Action, Model Context Protocol, Bedrock, Vertex AI), Deloitte Cyber Simulation, Tata GenAI Data Analytics Simulation, Cisco Networking Academy C & HTML Essentials, and SoloLearn Python (Cert ID: `CC-TWISFMOM`).
8. **Coding & Developer Profiles**: Verified links to GitHub (`Thanusri-tunuguntla`), LeetCode (`ThanusriTunuguntla`), CodeChef (`thanusri09`), and LinkedIn.
9. **Education**: Vignan's Institute of Information Technology (Autonomous), Visakhapatnam (B.Tech CSE Artificial Intelligence, 2024–2028) and Narayana Junior College (MPC, 2022–2024).
10. **Contact & Internship Opportunities**: Direct email copy button with toast feedback, direct `mailto:` link, and validated message form.
11. **Footer**: Dynamic copyright year, quick social links, and smooth back-to-top interaction.

---

## 💻 Running Locally on Windows

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation & Execution
```powershell
# Navigate into the project folder
cd C:\Users\thanu\.gemini\antigravity-ide\scratch\thanusri-portfolio

# Install dependencies (if needed)
npm.cmd install

# Start the local development server with Hot Module Replacement
npm.cmd run dev

# Or build the production bundle and preview it
npm.cmd run build
npm.cmd run preview -- --port 4173
```

Open your browser and navigate to:
```
http://localhost:4173
```

---

## 🚀 Deployment Instructions

### Option 1: Vercel (Recommended — 1-Click Deployment)
1. Push your repository to GitHub (`https://github.com/Thanusri-tunuguntla/thanusri-portfolio`).
2. Log into [Vercel](https://vercel.com/) with your GitHub account.
3. Click **Add New Project** and import `thanusri-portfolio`.
4. Vercel automatically detects Vite:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**. Your portfolio will be live with free global CDN and HTTPS!

### Option 2: GitHub Pages
1. In `vite.config.ts`, add the base repository path:
   ```ts
   export default defineConfig({
     base: '/thanusri-portfolio/',
     plugins: [react()],
   });
   ```
2. Build the project:
   ```powershell
   npm.cmd run build
   ```
3. Use `gh-pages` or configure GitHub Actions to deploy the `dist` folder to GitHub Pages.

---

## 🔒 Verification & Candidate Checklist

- [x] Verified resume copied to `public/assets/Thanusri_Tunuguntla_Resume.pdf`.
- [x] Verified Smart India Hackathon video demonstration link added for NIRIKSHAN AI.
- [x] Verified IBM Cognitive Class certificate validation URL and certificate ID included.
- [x] Verified Anthropic and Forage job simulation credentials documented.
- [x] Direct profile links to GitHub, LeetCode, CodeChef, and LinkedIn verified.
- [x] Contact email configured to `thanusritunuguntla@gmail.com`.
- [ ] *(Optional)* Add custom domain (e.g. `thanusritunuguntla.com` or `thanusri.dev`) in Vercel settings.
