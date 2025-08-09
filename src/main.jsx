console.log("[main.jsx] Entry point loaded");
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("[main.jsx] ERROR: #root element not found in index.html");
} else {
  console.log("[main.jsx] #root element found, rendering App...");
  createRoot(rootElement).render(<App />);
  console.log("[main.jsx] App rendered");
}

const root = document.getElementById("root");
createRoot(root).render(<App />);
