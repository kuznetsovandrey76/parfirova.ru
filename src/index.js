import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { UserContextProvider } from "./context/userContext";
import App from "./App";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </BrowserRouter>
);
