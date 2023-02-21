import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Blog from "../src/components/pages/Blog/index";
import Home from "./components/pages/Home/home";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import "./index.css";

import global_es from "./Translations/es/global.json";
import global_en from "./Translations/en/global.json";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/blog",
    element: <Home />,
  },
  {
    path: "/blogs",
    element: <Blog />,
    children: [
      {
        path: "/blogs/:id",
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>
);
