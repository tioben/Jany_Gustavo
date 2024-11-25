// Libraries
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Pages
import Home from "./pages/Home/Home.jsx";

// Components
import Cancel from "./components/Buttons/Cancel.jsx";
import Play from "./components/Buttons/Play.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
    <Cancel />
    <Play />
  </StrictMode>
);
