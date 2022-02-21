import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Provider as AlertProvider } from "react-alert";

import { Alert, alertOptions } from "common/alert";

import App from "./App";
import { store } from "./store";
import reportWebVitals from "./reportWebVitals";

import "./scss/styles.scss";

ReactDOM.render(
  <Provider store={store}>
    <AlertProvider template={Alert} {...alertOptions}>
      <App />
    </AlertProvider>
  </Provider>,
  document.getElementById("app")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
