import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// react-redux
import { Provider } from "react-redux";
import store from "./store";

// bootstrap and css
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.render(
  <Provider
    store={store}
    children={
      <React.StrictMode>
        <App />
      </React.StrictMode>
    }
  />,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
