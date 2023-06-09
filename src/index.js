import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContextProvider } from "./store/auth";
import { DateContextProvider } from "./store/date";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthContextProvider>
    <DateContextProvider>
      <App />
    </DateContextProvider>
  </AuthContextProvider>
);
