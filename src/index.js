import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthContext, { AuthContextProvider } from "./store/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
