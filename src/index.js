import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import ReactDOM from "react-dom";
import { createStore, compose } from "redux";
import persistState from "redux-localstorage";
import { Provider } from "react-redux";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import { initial } from "./data/initial";
import { reducer } from "./data/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initial, composeEnhancers(persistState()));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
