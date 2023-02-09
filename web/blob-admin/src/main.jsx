import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterView } from "oh-router-react";
import { router } from "./router/index.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterView router={router} />
);
