import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import App from "./components/App";
import reducers from "./reducers";

//Developement only axios helpers!
import axios from "axios";
window.axios = axios;

const store = createStore(reducers, {}, applyMiddleware());

const root = createRoot(document.querySelector("#root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
