import React from "react";
import ReactDOM from "react-dom/client";

import { Analytics } from "@vercel/analytics/react";

import App from "./App";
import { beforeSend, handleNotrackParam } from "./analyticsOptOut";
import "./styles/global.scss";

handleNotrackParam();

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root container #root was not found");
}

ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <App />
    <Analytics beforeSend={beforeSend} />
  </React.StrictMode>,
);
