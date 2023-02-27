import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { store } from "./app/store";
import { Provider } from "react-redux";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
