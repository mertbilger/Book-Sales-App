import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootswatch/dist/lux/bootstrap.min.css";
import { KitapContextProvider } from "./contexts/KitapContext.jsx";
import { AuthContextProvider } from "./contexts/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <KitapContextProvider>
        <App />
      </KitapContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
