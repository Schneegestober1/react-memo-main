import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ModeProvider } from "./context/modeContext";
import { LivesProvider } from "./context/addLivesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModeProvider>
      <LivesProvider>
        <RouterProvider router={router}></RouterProvider>
      </LivesProvider>
    </ModeProvider>
  </React.StrictMode>,
);
