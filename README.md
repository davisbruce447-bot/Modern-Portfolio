# Modern Minimalist Portfolio

A high-performance, beautifully animated personal portfolio built with React 19, Tailwind CSS 4, and Motion.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80)

## ✨ Features

- **Fluid Animations**: Staggered reveals and smooth transitions using `motion/react`.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop screens.
- **Modern Tech Stack**: Built with the latest versions of React, Vite, and Tailwind CSS.
- **Micro-Interactions**: Hover effects, lift-on-scroll, and interactive skill categories.
- **Performance Focused**: Zero external environment variable dependencies and optimized asset loading.
- **Glassmorphism UI**: Clean, dark-themed aesthetic with subtle overlays and emerald accents.

## 🚀 Tech Stack

- **Frontend**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/) (formerly Framer Motion)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/davisbruce447-bot/Modern-Portfolio.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```text
├── src/
│   ├── components/    # Reusable UI components
│   ├── App.tsx        # Main application logic and layout
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles and Tailwind configuration
├── public/            # Static assets
├── vite.config.ts     # Vite configuration
└── package.json       # Project dependencies and scripts
```

## 🎨 Customization

### Updating Projects
Modify the `PROJECTS` constant in `src/App.tsx` to add your own work:
```tsx
const PROJECTS = [
  {
    title: "Your Project Name",
    category: "Web Development",
    description: "Brief description of what you built.",
    tags: ["React", "Tailwind"],
    link: "#"
  },
  // ...
];
```

### Changing Accent Color
The portfolio uses `emerald-500` as the primary accent. You can search and replace `emerald` with any other Tailwind color (e.g., `violet`, `blue`, `rose`) to change the theme instantly.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
