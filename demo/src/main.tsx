import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.js";
import "calmo-ui/tokens.css";
import "calmo-ui/styles.css";
import "./demo.css";

const cloudflareAnalyticsToken = import.meta.env.VITE_CF_WEB_ANALYTICS_TOKEN;

if (import.meta.env.PROD && cloudflareAnalyticsToken && !document.querySelector('script[data-calmo-cf-analytics="true"]')) {
  const script = document.createElement("script");
  script.defer = true;
  script.src = "https://static.cloudflareinsights.com/beacon.min.js";
  script.setAttribute("data-cf-beacon", JSON.stringify({ token: cloudflareAnalyticsToken }));
  script.setAttribute("data-calmo-cf-analytics", "true");
  document.head.appendChild(script);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <App />
      <Analytics />
    </>
  </React.StrictMode>,
);
