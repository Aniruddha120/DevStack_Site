# Live Site Link

https://devstack-site.onrender.com/

# DevStack_Site
React Questions & Answers
1. What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It is a syntax extension for React that allows us to write HTML like code directly inside JavaScript. It makes writing and understanding React UI much easier, as it visually represents the structure of the component. Under the hood, React compiles JSX into regular JavaScript objects.
2. What is the difference between props and state?
Props: Used to pass data from a parent component to a child component. Props are read-only and cannot be changed by the receiving component.
State: Local data stored and managed entirely within a component. State is changeble, and whenever the state changes, the component automatically rerenders.
3. What does the useState hook do, and where did you use it in this project?
The useState hook allows us to add and manage local state variables in functional components.

In this project, I used it in App.tsx for:
technologies: To store the fetched list of technologies.
stack: To track the technologies the user has added to their stack.
loading: To show a loading indicator while data is being fetched.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook is used to handle side effects in a component, such as data fetching, subscriptions, or manually changing the DOM. I used it to load the JSON data so that the data fetching process runs only once (after the component initially renders on the screen) without blocking the UI rendering.

5. Why does every item in a .map() list need a unique key prop?
React uses the key prop to identify which specific items in a list have changed, been added, or been removed. Providing a unique identifier (like an id) helps React's "Virtual DOM" efficiently update only the modified items instead of re-rendering the entire list.

6. What is conditional rendering? Give an example from this project.
Conditional rendering means showing different UI elements based on a specific condition (like an if-else or ternary operator).

Example in this project: I used conditional rendering in the Sidebar. If the stack is empty (stack.length === 0), it shows "Your stack is empty". Otherwise, it renders the list of selected technologies. Also, the "Add to Stack" button text and state change based on whether the item is already added.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Parent to Child: We pass data from parent to child using props (e.g., passing the tech object to TechCard).
Child to Parent: A child communicates with its parent by using callback functions. The parent passes a function (like handleAddToStack) as a prop to the child. When an action occurs (like a button click), the child calls that function, effectively sending data or triggering a state change back in the parent component.

# Dev Stack Project

A web app where developers browse a curated list of technologies and build their own development stack. The technology list is loaded from a JSON file, and you can add or remove technologies from your stack with instant toast feedback.

## 🔗 Live Site



## 📖 Description

Dev Stack Builder shows a responsive grid of development technologies (such as: frontend, backend, database, language, styling, DevOps, tools). Each card shows the technology icon, badge, name, description, category, difficulty and rating. A "Your Stack" sidebar keeps track of your selected technologies, prevents duplicates, and lets you remove items one by one or all at once.

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
