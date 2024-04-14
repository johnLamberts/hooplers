import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { RouterProvider } from "react-router-dom";
import router from "@/routes/routes";
import SetupComponents from "./components/setup-components";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SetupComponents>
      <RouterProvider router={router} />
    </SetupComponents>
  </React.StrictMode>
);
