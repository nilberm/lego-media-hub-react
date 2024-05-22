import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ControlMenuProvider } from "./context/toggleMenuContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ControlMenuProvider>
      <RouterProvider router={router} />
    </ControlMenuProvider>
  </React.StrictMode>
);
