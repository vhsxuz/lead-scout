<p align="center">
  <img src="public/md_assets/banner.png" alt="LeadScout Banner" width="600" />
</p>

# 🚀 Lead-Scout

**Lead-Scout** is a modern web frontend built with Next.js and TypeScript. It interfaces with the SaaSquatch backend to help users explore, filter, and prioritize high-potential business leads. The application offers a fast, responsive UI with scalable architecture for future enhancements.

🔗 **Live App**: [https://lead-scout-lac.vercel.app](https://lead-scout-lac.vercel.app)

---

## 🧩 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS with PostCSS
- **Build Tooling**: Vercel deployment
- **State Management**: React Context (or optionally Redux/Server Components)
- **API Integration**: RESTful POST to SaaSquatch `/score-leads`

---

## 📁 Project Structure
```
LEAD-SCOUT/
├── app/ # App routes & layout (Next.js App Router)
├── public/ # Static assets
├── types/ # TypeScript interfaces/types
├── .gitignore
├── LICENSE
├── next.config.ts # Next.js configuration
├── postcss.config.mjs # Tailwind/PostCSS config
├── package.json
├── Procfile # For deployment (if needed outside Vercel)
├── README.md
├── tsconfig.json # TypeScript compiler options
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

2. Run locally
```
npm run dev
```
Navigate to http://localhost:3000 to view the app.


## 🌐 Deployment
This project is deployed via Vercel and automatically builds from the main branch.
- Production URL: https://lead-scout-lac.vercel.app
- Configure environment variables in Vercel if connecting to an external API


## 📡 API Integration
The frontend connects to the SaaSquatch ML backend to fetch hot lead predictions:

POST /score-leads

Example payload:
```
{
  "industry": "Technology",
  "location": "California",
  "page": 1,
  "page_size": 5
}
```

## 🛠️ Customization
- Update default industries or regions via the UI components in app/
- Add new filters, sorting options, or visualizations by extending the frontend logic

## 📄 License
MIT License — free to use, modify, and distribute.