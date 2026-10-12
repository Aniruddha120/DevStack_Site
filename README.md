# Dev Stack Builder

A web app where developers browse a curated list of technologies and build their own development stack. The technology list is loaded from a JSON file, and you can add or remove technologies from your stack with instant toast feedback.

## 🔗 Live Site

> Add your deployed link here (e.g. Vercel / Netlify).

## 📖 Description

Dev Stack Builder shows a responsive grid of development technologies (frontend, backend, database, language, styling, DevOps, tools). Each card shows the technology icon, badge, name, description, category, difficulty and rating. A "Your Stack" sidebar keeps track of your selected technologies, prevents duplicates, and lets you remove items one by one or all at once.

## 🛠️ Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- React Icons
- React Toastify
- JSON (`public/data.json`)

## ✨ Features

- Browse development technologies
- Build a personalized technology stack
- Add and remove technologies dynamically (with duplicate prevention and toast notifications)
- Responsive layout (mobile / tablet / desktop)
- Loading and error states while fetching data

## 🚀 Getting Started

```bash
cd dev-stack
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## ❓ React Questions

**1. What is JSX, and why is it used in React?**

JSX is a syntax extension that lets you write HTML-like markup inside JavaScript. React uses it because it keeps the UI structure and the logic that produces it in one place, and it compiles down to `React.createElement` (or the automatic JSX runtime) calls.

**2. What is the difference between props and state?**

Props are read-only data passed from a parent component to a child. State is data owned by a component that can change over time through a setter, and changing it triggers a re-render.

**3. What does the `useState` hook do, and where did you use it in this project?**

`useState` adds local state to a function component and returns the current value plus a setter. In this project I used it for `technologies`, `loading`, `error` and `stack` in `App.tsx`, and for the mobile menu open/close state in `Navbar.tsx`.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

`useEffect` runs side effects after render. Fetching data is a side effect, so I used `useEffect` with an empty dependency array to fetch `data.json` once when the app mounts and store the result in state.

**5. Why does every item in a `.map()` list need a unique `key` prop?**

The `key` tells React which rendered item corresponds to which data item, so React can efficiently add, remove or re-order items. Without a stable key React may re-render the wrong elements. I used each technology's unique `id`.

**6. What is conditional rendering? Give one example from this project.**

Conditional rendering shows different UI based on a condition. Here I render a loading spinner while `loading` is `true`, an error message when `error` is set, otherwise the technology list — and the sidebar shows "Your stack is empty." when `stack.length === 0`.

**7. How do you pass data from a parent to a child, and how does a child send something back to the parent?**

The parent passes data and callback functions down as props. The child calls those callbacks to send information back up. `App` holds the `stack` state and passes `handleAddToStack`, `handleRemoveFromStack` and `handleRemoveAll` down to `TechCard` and `Sidebar`.

## 📁 Project Structure

```
dev-stack/src
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── MainLayout.tsx
│   ├── TechList.tsx
│   ├── TechCard.tsx
│   ├── Sidebar.tsx
│   └── Footer.tsx
├── App.tsx
├── main.tsx
├── index.css
└── types.ts
dev-stack/public/data.json
```
