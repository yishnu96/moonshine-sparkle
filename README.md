# 🌙 Moon Studios

Moon Studios is a modern website for **Moon Studios Salon**, designed to showcase services, style, and brand identity with a smooth, elegant interface.

The project is built with **React + TypeScript** using **Vite** for fast development and **TailwindCSS + shadcn/ui** for a clean, component-based design system.
Deployed on **Vercel** at 👉 [**MoonStudiosSalon.in**](https://MoonStudiosSalon.in)

---

## 🚀 Tech Stack

**Frontend**

* [React 18](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vite](https://vitejs.dev/)
* [Tailwind CSS](https://tailwindcss.com/)
* [shadcn/ui](https://ui.shadcn.com/)
* [Radix UI](https://www.radix-ui.com/)
* [Lucide Icons](https://lucide.dev/)

**State & Data**

* [React Hook Form](https://react-hook-form.com/)
* [Zod](https://zod.dev/) (validation)
* [TanStack React Query](https://tanstack.com/query/latest)

**UI Enhancements**

* [Embla Carousel](https://www.embla-carousel.com/)
* [Recharts](https://recharts.org/)
* [Sonner](https://sonner.emilkowal.ski/) for toasts
* [Next Themes](https://github.com/pacocoursey/next-themes) for dark mode
* [Date-fns](https://date-fns.org/) for date utilities

---

## 🛠️ Getting Started

### Prerequisites

Make sure you have **Node.js (>=18)** and **npm** installed.

### Installation

```bash
# Clone the repo
git clone https://github.com/<your-username>/moon-studios.git

# Move into the project directory
cd moon-studios

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Starts the app in development mode using **Vite**.
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Builds an optimized production bundle.

### Preview Production Build

```bash
npm run preview
```

Launches a local preview of the production build.

---

## 🧩 Project Structure

```
moon-studios/
├── src/
│   ├── components/       # UI and layout components
│   ├── pages/            # Page-level components (if using react-router)
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utilities and helper functions
│   ├── styles/           # Global styles and Tailwind config
│   ├── assets/           # Static images, icons, etc.
│   └── main.tsx          # App entry point
├── public/               # Static assets served directly
├── index.html
├── package.json
└── vite.config.ts
```

---

## ✨ Features

* Smooth, responsive UI built with shadcn/ui components
* Theme switching (light/dark)
* Form validation with Zod + React Hook Form
* Data fetching with React Query
* Interactive carousels and animations
* Deployed with Vercel for instant global performance

---

## 🌐 Deployment

The project is deployed on **Vercel**:
**Live Site:** [https://MoonStudiosSalon.in](https://MoonStudiosSalon.in)

To deploy updates:

```bash
npm run build
# Push to main branch — Vercel handles deployment automatically
```

---

## 🧪 Linting

```bash
npm run lint
```

Linting is powered by **ESLint** with **TypeScript** and **React Hooks** rules enabled.

---

## 📄 License

This project is proprietary and maintained by Moon Studios.
All rights reserved © 2025.
