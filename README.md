<div align="center">

# 🛰️ Hi, I'm Wukddang

### Product Engineer · Frontend × Backend × Infra × AI

*Building reliable products end-to-end — from satellite data pipelines to multi-platform consumer apps.*

[![Resume](https://img.shields.io/badge/Resume-wukdddang.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://wukdddang.vercel.app)
[![Email](https://img.shields.io/badge/Email-dnr8874@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:dnr8874@gmail.com)
[![Wakatime](https://wakatime.com/badge/user/9b8b1e3c-c3ef-4910-b98f-96cd8c45d763.svg)](https://wakatime.com/@9b8b1e3c-c3ef-4910-b98f-96cd8c45d763)

</div>

---

## 🌏 Open to Remote Opportunities

| | |
|---|---|
| 📍 **Based in** | Suwon, South Korea (KST / UTC+9) |
| 🗓️ **Available from** | January 2027 |
| 💼 **Looking for** | Full-time **remote** Product Engineer / Full-stack roles |
| 🌐 **Region preference** | Asia preferred — open to **any timezone** |
| ✈️ **Onsite** | Open to short-term onsite & business travel |
| 💬 **Languages** | Korean (native) · English (B2, fluent in everyday business conversation) |

---

## 👋 About Me

I'm a Product Engineer with a background in **Geospatial Information Engineering** and **Civil Engineering**, currently working at a satellite-manufacturing company. I enjoy owning the full lifecycle of a product — from screen planning, use-case extraction, and DDD-based backend modeling, to implementation, E2E testing, and deployment.

My happiest engineering days are when I can compress what would normally take a 6-person team (PM · designer · frontend · backend · infra · QA) into a single coherent flow — without dropping quality. That's the lens I bring to every project.

- 🛰️ Domain expertise in **satellite imagery, GIS, geodesy, and SAR signal processing** (Sentinel / Umbra / Kompsat, DInSAR / PSInSAR / SBAS via SNAP)
- 🧩 Comfortable across the stack: React/Next.js on the frontend, NestJS/PostgreSQL on the backend, Terraform/AWS for infra
- 🧪 Strong believer in **full-cycle testing** — Playwright E2E + IaC-driven integration tests as a project safety net
- 📱 Ship **PWA-based multi-platform apps** (desktop + mobile) from a single codebase
- 🤖 Currently exploring AI/LLM integration to make products more usable and accessible

---

## 🏢 Experience

### **Lumir Inc.** — Satellite Manufacturer (Web Development) · *Nov 2023 – Present*

**Backend Developer & Product Engineer** · Nov 2025 – Present
**Frontend Developer** · Nov 2023 – Nov 2025

End-to-end ownership across multiple satellite-domain products: screen planning → use case extraction → DDD backend design → implementation → E2E testing → deployment.

#### Selected Projects

🛰️ **Satellite Analysis Platform**
A platform that ingests imagery and metadata from multiple satellite providers (**Sentinel, Umbra, Kompsat**, etc.), normalizes them into a queryable DB, and lets users **draw an AOI (Area of Interest)** to search, request, and review analyzed products.
*Bridges my Master's research in geospatial information directly into a production product — including 2D satellite imagery visualization tied to Sentinel pipelines.*

📡 **SDPE — SAR Data Processing Element**
Backend pipeline service that takes raw SAR signals from **Lumir's own SAR satellites** and produces final products. Built the orchestration backend plus a **N8N-style pipeline editor** on the frontend so operators can compose and manage processing flows visually. Owned spec, design, and implementation across both layers.

🛰️ **SAR Data Analysis (Domain Expertise)**
Hands-on with Linux **SNAP**-based interferometric SAR processing — **DInSAR, PSInSAR, SBAS**. Currently being integrated into the Satellite Analysis Platform.

📚 **Internal Backoffice / CMS**
Built a content management system covering company announcements, training materials, and an internal wiki — backend service ownership.

---

## 🎓 Education

| Degree | Field | Institution | Period |
|---|---|---|---|
| **M.S.** | Geospatial Information Engineering | Sungkyunkwan University | 2021 – 2023 |
| **B.S.** | Civil Engineering | Sungkyunkwan University | 2016 – 2021 |

**Research focus:** Geodesy · Surveying · Satellite Imagery · GIS

---

## 🚀 Featured Personal Project

### 🏠 [inven.homes](https://inven.homes) — Home Inventory Manager

> A multi-platform (desktop + mobile PWA) household inventory app — track expiration dates, get smart restocking suggestions, and share inventory across multiple households with role-based permissions.
> Designed, built, and operated **solo** — replacing what would normally take a full PM/Design/FE/BE/Infra/QA team.

<div align="center">

<!-- TODO: replace these placeholders with real screenshots / demo clips -->
<table>
<tr>
<td align="center" width="33%">
<i>(Desktop screenshot)</i><br/>
<sub>📷 Coming soon</sub>
</td>
<td align="center" width="33%">
<i>(Mobile screenshot)</i><br/>
<sub>📱 Coming soon</sub>
</td>
<td align="center" width="33%">
<i>(Demo clip)</i><br/>
<sub>🎬 Coming soon</sub>
</td>
</tr>
</table>

</div>

**Highlights**

- 🏘️ **Multi-household & role-based sharing** — invite users with granular permissions per household (home, office, vehicle, …)
- 📦 **Hierarchical space model** — Room → Furniture → Storage Slot for precise location tracking
- ⏰ **Expiration & lot tracking** — per-lot expiry, automatic warning notifications based on remaining shelf-life
- 🛒 **Smart shopping suggestions** — combines low-stock + near-expiry signals
- 🤖 **AI roadmap (in progress)** — LLM chatbot for product usability, voice input, and Tesseract-based image recognition
- ⚙️ **Full-cycle delivery** — DDD-driven use case design dramatically simplified the dev process and saved time

**Stack**

| Layer | Technology |
|---|---|
| Frontend | Next.js 16 (App Router), React 19, Tailwind CSS 4, SWR, framer-motion, @xyflow/react |
| Backend | NestJS 11, TypeORM, PostgreSQL 17, JWT + Refresh Token, AWS S3 (presigned), FCM |
| Testing | Jest (unit/integration), **Playwright E2E** — 43 scenarios (26 desktop + 17 mobile) |
| Infra | **AWS via Terraform (IaC)**, Prometheus + Loki + Grafana, Nginx, Cloudflare Tunnel |
| Build | pnpm workspace + Turborepo |
| Deployment | Frontend: Vercel · Backend: Docker Compose + Cloudflare Tunnel on a self-hosted Linux server |
| CI/CD | GitHub Actions (lint, auto-deploy backend, full-cycle E2E) |

**Engineering practices I'm proud of here**

- ✅ Frontend E2E coverage with Playwright as a stability net for solo development
- ✅ **Terraform-driven IaC integrated into both backend and E2E tests** — full-cycle testing where infra, API, and UI are all verified together
- ✅ PWA from day one — same codebase ships to desktop and mobile
- ✅ Use-case-first development — fewer meetings, fewer hand-offs, fewer bugs

> 🚧 **Sibling project (in planning):** A shared household ledger app — collaborative budgeting with the same multi-user/role-based foundation.

---

## 🛠️ Tech Stack

### Languages & Core
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Python](https://img.shields.io/badge/-Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

### Frontend
![Next.js](https://img.shields.io/badge/-Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/-shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![SWR](https://img.shields.io/badge/-SWR-000000?style=for-the-badge&logo=vercel&logoColor=white)
![PWA](https://img.shields.io/badge/-PWA-5A0FC8?style=for-the-badge&logo=pwa&logoColor=white)
![Turborepo](https://img.shields.io/badge/-Turborepo-EF4444?style=for-the-badge&logo=turborepo&logoColor=white)

### Backend
![NestJS](https://img.shields.io/badge/-NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![TypeORM](https://img.shields.io/badge/-TypeORM-FE0902?style=for-the-badge&logo=typeorm&logoColor=white)
![Prisma](https://img.shields.io/badge/-Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

### Infra & DevOps
![AWS](https://img.shields.io/badge/-AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Terraform](https://img.shields.io/badge/-Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white)
![Docker](https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/-Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
![Cloudflare](https://img.shields.io/badge/-Cloudflare-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/-GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Prometheus](https://img.shields.io/badge/-Prometheus-E6522C?style=for-the-badge&logo=prometheus&logoColor=white)
![Grafana](https://img.shields.io/badge/-Grafana-F46800?style=for-the-badge&logo=grafana&logoColor=white)

### Testing & Quality
![Playwright](https://img.shields.io/badge/-Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)
![Jest](https://img.shields.io/badge/-Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)

### Geospatial & Data
![GIS](https://img.shields.io/badge/-GIS-5CB85C?style=for-the-badge&logo=qgis&logoColor=white)
![SNAP](https://img.shields.io/badge/-ESA%20SNAP-003247?style=for-the-badge&logo=linux&logoColor=white)
![Numpy](https://img.shields.io/badge/-NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white)
![Pandas](https://img.shields.io/badge/-Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)
![TensorFlow](https://img.shields.io/badge/-TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)

### Currently Exploring
![LLM](https://img.shields.io/badge/-LLM%20%2F%20RAG-412991?style=for-the-badge&logo=openai&logoColor=white)
![LangChain](https://img.shields.io/badge/-LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white)

---

<div align="center">

### 📬 Let's Talk

If you're hiring for a **remote Product Engineer** who can ship across the stack — frontend, backend, infra, testing, and AI integration — and especially if you work in **geospatial, satellite, or hardware-adjacent domains**, I'd love to chat.

[![Email](https://img.shields.io/badge/Reach%20me-dnr8874@gmail.com-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:dnr8874@gmail.com)

</div>
