import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import.meta.glob("./assets/styles/*.css", { eager: true });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
