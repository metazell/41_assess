import React from "react";
import { createRoot } from "react-dom/client";
import Madlib from "./components/Madlib";

// Find the root element in the HTML
const rootElement = document.getElementById("root");

// Create a root using createRoot
const root = createRoot(rootElement);

// Render your React component
root.render(<Madlib />);
