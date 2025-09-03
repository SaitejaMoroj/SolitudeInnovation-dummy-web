

React 18 – Modern React with concurrent rendering

Vite – Fast build tool and development server

Redux Toolkit – Simplified state management

TailwindCSS – Utility-first CSS framework

React Router v6 – Declarative routing

Recharts & D3.js – Data visualization support

React Hook Form – Efficient form handling

Framer Motion – Smooth UI animations

Jest & React Testing Library – Testing setup

📋 Prerequisites

Node.js (v14 or higher)

npm or yarn

🛠️ Installation

Install dependencies:

npm install
# or
yarn install


Start the development server:

npm run dev
# or
yarn dev

📁 Project Structure
react_app/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable components
│   ├── pages/          # Page components
│   ├── styles/         # Global styles & Tailwind config
│   ├── App.jsx         # Main app component
│   ├── Routes.jsx      # App routes
│   └── index.jsx       # Entry point
├── .env                # Environment variables
├── index.html          # HTML template
├── package.json        # Dependencies & scripts
├── tailwind.config.js  # Tailwind configuration
└── vite.config.js      # Vite configuration

🧩 Adding Routes

Update Routes.jsx to add new routes:

import { useRoutes } from "react-router-dom";
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
  ]);
  return element;
};

export default ProjectRoutes;

🎨 Styling

Tailwind CSS utilities

Forms, Typography, and Aspect Ratio plugins

Responsive breakpoints

Animation utilities

📦 Deployment

Build the app for production:

npm run build
