import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { unregister } from "./serviceWorker";
import { configureStore } from "./store";
import "../src/styles/global/index.scss";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.min.css';

// Unregister the service worker from create-react-app
unregister();

// Always called on resolve of handler.
const defaultRender = () => {
  const store = configureStore();
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById("root")
  );
};

defaultRender();
