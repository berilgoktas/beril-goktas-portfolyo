import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import portrait from "../ben.png";
import App from "./App";
import "./styles.css";

const icon = document.querySelector<HTMLLinkElement>("link[rel='icon']");
if (icon) icon.href = portrait;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
