import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import React from "react";
import router from "./routes/router.jsx";

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router}/>
);
