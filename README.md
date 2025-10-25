# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

---
# Demo (React + Vite)

Repository: https://github.com/Sanmalapavan/react-app

## Quick start (PowerShell)
Open a PowerShell terminal and run:
```powershell
# go to project folder
Set-Location 'C:\Users\S.PAWAN\Downloads\OneDrive\Desktop\Demo'

# install dependencies
npm install

# run dev server with HMR
npm run dev

# build for production
npm run build

# preview production build
npm run preview

# lint the project
npm run lint
```

## What this project contains
- React 19 + Vite starter (entry: `src/main.jsx`, main component: `src/App.jsx`)
- Pages: `src/Pages/Home.jsx`, `src/Pages/Login.jsx`, `src/Pages/Registrations.jsx`
- Components: `src/Components/Navbar.jsx`, `src/Components/RecipeCard.jsx`
- Uses Material UI (MUI) + Emotion for UI and styling.

## Notes / Known quirks
- `package.json` pins Vite via `overrides` to `npm:rolldown-vite@7.1.12` — be cautious when upgrading Vite/plugins.
- Data fetch: `Home.jsx` fetches recipes from `https://dummyjson.com/recipes`.
- The app currently has no client-side routing (App renders `Home` directly).

## Small fixes applied
- Added loading/error handling and safe mapping keys in `src/Pages/Home.jsx`.
- Fixed `TextField` prop typo `varient` → `variant` in `Login.jsx` and `Registrations.jsx`.
- Renamed confusing state setters (e.g., `isLoading` → `setLoading`).
- Guarded `post.instructions` and added keys inside `src/Components/RecipeCard.jsx`.
- Added `.gitignore` to prevent committing node_modules and editor files.

## How to contribute
1. Fork & clone the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Make changes, then:
```powershell
git add .
git commit -m "Short message"
git push -u origin feature/your-feature
```
4. Open a Pull Request on GitHub.

---
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
