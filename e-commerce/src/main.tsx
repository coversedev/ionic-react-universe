import i18n from "./i18n"; /* ! Should imported at the top of the file */
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { StorageContextProvider } from "@providers";
import { I18nextProvider } from "react-i18next";

import "./global.scss";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <StorageContextProvider>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </StorageContextProvider>
  </React.StrictMode>
);
