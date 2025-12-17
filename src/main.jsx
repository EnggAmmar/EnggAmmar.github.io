import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx"; // Make sure App.jsx exists in src
import "./index.css";         // Optional: create index.css if needed

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
