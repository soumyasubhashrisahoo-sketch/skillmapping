# 🗺️ SkillMap

> **Chart your course in the real world.**

SkillMap is a retro-styled, interactive web application that helps users discover, track, and complete real-world skills through a structured learning roadmap. It turns skill-building into a gamified journey — with levels, tasks, and progress tracking — making learning feel rewarding and organized.

---

## 🚀 Live Demo

Deployed on **Vercel** → *(add your live URL here)*

---

## ✨ Features

- 🗺️ **Skill Roadmap** — Visual map showing skills and how they connect
- 📊 **Progress Tracking** — Progress bars for every skill and level
- 🎯 **Level System** — Each skill broken into beginner → advanced stages
- ✅ **Task Checklist** — Check off individual tasks within each level
- 🏠 **Dashboard** — Bird's-eye view of all ongoing skills and achievements
- 🔐 **Authentication** — Login/Signup modal flow for personalized tracking
- 🎮 **Retro UI** — Pixel-art aesthetic with noise overlays and retro windows

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI Framework |
| Vite 5 | Build Tool & Dev Server |
| Lucide React | Icons |
| Vanilla CSS | Styling |
| Vercel | Deployment |

---

## 📁 Project Structure

```
skillmap/
├── index.html
├── package.json
├── vercel.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   ├── AuthModal.jsx
    │   ├── AuthPromptModal.jsx
    │   ├── RetroWindow.jsx
    │   ├── RetroButton.jsx
    │   ├── NoiseOverlay.jsx
    │   ├── ProgressBar.jsx
    │   ├── LevelSection.jsx
    │   ├── SkillRoadmap.jsx
    │   └── TaskItem.jsx
    ├── views/
    │   ├── HomeView.jsx
    │   ├── DashboardView.jsx
    │   ├── MapView.jsx
    │   └── SkillDetailView.jsx
    ├── data/
    │   └── skillsData.js
    └── utils/
        └── links.js
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js v18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/skillmap.git

# Navigate into the project
cd skillmap

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |

---

## 🌐 Deploying to Vercel

1. Push the project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel will auto-detect the settings from `vercel.json`
4. Click **Deploy**

> **Note:** The `vercel.json` is configured to use `node node_modules/vite/bin/vite.js build` as the build command to avoid binary permission issues on Vercel's Linux environment.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙌 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to change.

---

*Built with ❤️ using React + Vite*
