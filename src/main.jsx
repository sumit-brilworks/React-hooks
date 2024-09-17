import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import App2 from "./App2.jsx";
import UseReducerExample from "./components/UseReducerExample.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UseReducerExample />
  </StrictMode>
);
