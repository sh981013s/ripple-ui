import React from "react";
import ReactDOM from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.js";
import "calmo-ui/tokens.css";
import "calmo-ui/styles.css";
import "./demo.css";

const CALMO_CF_ANALYTICS_TOKEN = "1c6d98bd90ee4a61a6f90dc364e4ddc5";

if (
  import.meta.env.PROD &&
  window.location.hostname === "calmo.booung.org" &&
  !document.querySelector('script[data-calmo-cf-analytics="true"]')
) {
  const script = document.createElement("script");
  script.defer = true;
  script.src = "https://static.cloudflareinsights.com/beacon.min.js";
  script.setAttribute("data-cf-beacon", JSON.stringify({ token: CALMO_CF_ANALYTICS_TOKEN }));
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
