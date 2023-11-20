import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StoreProvider } from "./store";
import RouteProvider from "./context/RouteProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreProvider>
      <RouteProvider>
        <App />
      </RouteProvider>
    </StoreProvider>
  </React.StrictMode>
);
