import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { Button } from "@/components/button";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Button variant={"link"}>Add Item</Button>
  </React.StrictMode>
);
