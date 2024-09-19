import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppContextProvider from "./context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* CONTEXT PROVIDER = provides the values to the child components */}
    {/* See TopDoctors component for the consumer */}
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>
);
