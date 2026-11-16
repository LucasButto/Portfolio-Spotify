import React from "react";
import ReactDOM from "react-dom/client";

import { Analytics } from "@vercel/analytics/react";

import App from "./App";
import "./styles/global.scss";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container #root was not found");
}

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
);
