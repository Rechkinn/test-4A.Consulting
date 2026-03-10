import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/global-styles/normalize.css";
import "../src/global-styles/fonts.css";
import "../src/global-styles/index.css";
import App from "./components/app/app";
import { BrowserRouter } from "react-router";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./services/reducers";
import { Provider } from "react-redux";

export const store = configureStore({
  reducer: rootReducer,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/test-4A.Consulting">
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
