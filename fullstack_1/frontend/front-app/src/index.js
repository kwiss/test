import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/app/App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import rootReducer from "./reducers/root";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
