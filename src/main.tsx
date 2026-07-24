import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/variables.css";
import "./styles/globals.css";
import App from "./App.tsx";

const savedTheme = localStorage.getItem("theme");

const theme =
  savedTheme === "light" || savedTheme === "dark"
    ? savedTheme
    : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

document.documentElement.setAttribute("data-theme", theme);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);