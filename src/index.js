import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { LevelProvider } from "./context/levelContext";
import { LivesProvider } from "./context/livesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LevelProvider>
      <LivesProvider>
        <RouterProvider router={router}></RouterProvider>
      </LivesProvider>
    </LevelProvider>
  </React.StrictMode>,
);
