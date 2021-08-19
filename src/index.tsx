import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { Theme } from "./assets/theme/theme";
import { store } from "./core/redux/store";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Theme />
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
