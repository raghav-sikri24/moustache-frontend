import React from "react";
import ReactDOM from "react-dom/client";
import CustomProvider from "./CustomProvider";
import "./main.css";
import reportWebVitals from "./reportWebVitals";
import Router from "./Router/RouteProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <CustomProvider>
      <Router />
    </CustomProvider>
  </React.StrictMode>,
);

reportWebVitals();
