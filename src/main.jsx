import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import React from "react";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path="/" index={true} element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
