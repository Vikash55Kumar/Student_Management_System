import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NextUIProvider } from "@nextui-org/react";
import './index.css'
import "@nextui-org/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <NextUIProvider>
      <App />
  </NextUIProvider>
  // </React.StrictMode>
);